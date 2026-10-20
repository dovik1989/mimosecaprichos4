const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const http = require("http");

async function main() {
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const userDataDir = path.join(process.env.TEMP || "C:\\Temp", "chrome_cdp_profile_" + Date.now());
  const port = 9222;

  const chromeProc = spawn(chromePath, [
    "--headless=new",
    "--disable-gpu",
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    "about:blank"
  ], { stdio: "ignore" });

  // Wait for Chrome to start
  await new Promise(r => setTimeout(r, 2000));

  function getJson(url) {
    return new Promise((resolve, reject) => {
      http.get(url, (res) => {
        let data = "";
        res.on("data", chunk => data += chunk);
        res.on("end", () => {
          try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
        });
      }).on("error", reject);
    });
  }

  try {
    const list = await getJson(`http://127.0.0.1:${port}/json/list`);
    const page = list.find(t => t.type === "page") || list[0];
    if (!page || !page.webSocketDebuggerUrl) {
      throw new Error("No page target found");
    }

    const ws = new WebSocket(page.webSocketDebuggerUrl);

    await new Promise((resolve, reject) => {
      ws.onopen = resolve;
      ws.onerror = reject;
    });

    let id = 1;
    function send(method, params = {}) {
      return new Promise((resolve, reject) => {
        const msgId = id++;
        const handler = (event) => {
          const msg = JSON.parse(event.data);
          if (msg.id === msgId) {
            ws.removeEventListener("message", handler);
            if (msg.error) reject(msg.error);
            else resolve(msg.result);
          }
        };
        ws.addEventListener("message", handler);
        ws.send(JSON.stringify({ id: msgId, method, params }));
      });
    }

    await send("Page.enable");
    await send("Emulation.setDeviceMetricsOverride", {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });

    await send("Page.navigate", { url: "http://localhost:3000" });
    await new Promise(r => setTimeout(r, 2500));

    // Scroll page down and up to trigger all lazy-loaded images and animations
    await send("Runtime.evaluate", {
      expression: `
        window.scrollTo(0, document.body.scrollHeight);
      `
    });
    await new Promise(r => setTimeout(r, 1500));

    await send("Runtime.evaluate", {
      expression: `
        window.scrollTo(0, 0);
      `
    });
    await new Promise(r => setTimeout(r, 1500));

    // Capture Hero viewport (top 390x844)
    const resultHero = await send("Page.captureScreenshot", { format: "png" });
    const outputPathHero = path.join(__dirname, "..", "hero_mobile_verification.png");
    fs.writeFileSync(outputPathHero, Buffer.from(resultHero.data, "base64"));
    console.log("Hero screenshot saved to:", outputPathHero);

    // Capture Full Page Mobile
    const resultFull = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: true });
    const outputPathFull = path.join(__dirname, "..", "full_page_mobile.png");
    fs.writeFileSync(outputPathFull, Buffer.from(resultFull.data, "base64"));
    console.log("Full page screenshot saved to:", outputPathFull);

    // Also verify Desktop (1280px)
    await send("Emulation.setDeviceMetricsOverride", {
      width: 1280,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false
    });
    await new Promise(r => setTimeout(r, 1000));
    const resultDesktop = await send("Page.captureScreenshot", { format: "png" });
    const outputPathDesktop = path.join(__dirname, "..", "desktop_verification.png");
    fs.writeFileSync(outputPathDesktop, Buffer.from(resultDesktop.data, "base64"));
    console.log("Desktop screenshot saved to:", outputPathDesktop);

    ws.close();
  } catch (err) {
    console.error("Error during screenshot:", err);
  } finally {
    chromeProc.kill();
    try { fs.rmSync(userDataDir, { recursive: true, force: true }); } catch (_) {}
  }
}

main();

