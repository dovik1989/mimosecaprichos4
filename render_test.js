const sharp = require('sharp');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { FaWhatsapp } = require('react-icons/fa6');

const svgMarkup = ReactDOMServer.renderToStaticMarkup(
  React.createElement(FaWhatsapp, { size: 120, color: '#ffffff' })
);
const fullSvg = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#FF4D8D"/><g transform="translate(40, 40)">${svgMarkup}</g></svg>`;

sharp(Buffer.from(fullSvg))
  .png()
  .toFile('C:/Users/Ludovik/.gemini/antigravity/brain/8befc7ee-1d88-4fb2-8775-0077f7a0a15f/test_icon.png')
  .then(() => {
    console.log('Rendered test_icon.png successfully');
  });
