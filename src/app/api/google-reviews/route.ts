import { NextResponse } from "next/server";
import { fetchGoogleBusinessReviews, googleBusinessConfigured } from "@/lib/google-business-reviews";

export const dynamic = "force-dynamic";

// Temporary in-memory cache only; never write authenticated Google content to disk.
let cached: { expires: number; value: Awaited<ReturnType<typeof fetchGoogleBusinessReviews>> } | undefined;
let pending: ReturnType<typeof fetchGoogleBusinessReviews> | undefined;
let retryAfter = 0;

export async function GET() {
  const headers = { "Cache-Control": "private, no-store" };
  if (!googleBusinessConfigured()) return NextResponse.json({ available: false }, { headers });
  if (cached && cached.expires > Date.now()) return NextResponse.json(cached.value, { headers });
  cached = undefined;
  if (Date.now() < retryAfter) return NextResponse.json({ available: false }, { status: 503, headers });
  try {
    pending ??= fetchGoogleBusinessReviews().then(value => {
      cached = { value, expires: Date.now() + 60 * 60 * 1000 };
      return value;
    }).finally(() => { pending = undefined; });
    return NextResponse.json(await pending, { headers });
  } catch {
    retryAfter = Date.now() + 60_000;
    console.error("Google Business reviews unavailable. Check API access, location and OAuth credentials.");
    return NextResponse.json({ available: false }, { status: 503, headers });
  }
}
