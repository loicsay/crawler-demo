const fs = require("fs");
require("dotenv").config({ path: ".env.local" });

function main() {
  fs.writeFileSync(
    "src/app/robots.txt",
    `# Algolia-Crawler-Verif: ${process.env.ALGOLIA_CRAWLER_DOMAIN_VERIFICATION_TOKEN}

User-agent: *
Allow: /
Sitemap: https://crawler-demo.vercel.app/sitemap.xml`
  );
}

main();
