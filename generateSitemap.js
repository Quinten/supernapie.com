const fs = require('fs');

const {GamesAPI, BlogAPI} = require('./src/api');
const sitemapOut = './pub/sitemap.xml';

let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://supernapie.com</loc>
    </url>
    <url>
        <loc>https://supernapie.com/contact</loc>
    </url>
    <url>
        <loc>https://supernapie.com/games</loc>
    </url>
`;

GamesAPI.games.forEach(function (game) {
    sitemapXml += `    <url>
        <loc>https://supernapie.com/games/${game.url}</loc>
    </url>
`;
});

sitemapXml +=`    <url>
        <loc>https://supernapie.com/blog</loc>
    </url>
`;

BlogAPI.posts.forEach(function (blog) {
    sitemapXml += `    <url>
        <loc>https://supernapie.com/blog/${blog.url}</loc>
    </url>
`;
});

sitemapXml +=`</urlset>`;

fs.writeFileSync(sitemapOut, sitemapXml);

console.log('Generated sitemap!');
