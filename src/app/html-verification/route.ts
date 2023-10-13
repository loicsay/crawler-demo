export const GET = (_req: Request) => {
  const html = `<!DOCTYPE html>
<html>
  <head>
    <meta name="algolia-site-verification" content="${process.env.ALGOLIA_CRAWLER_DOMAIN_VERIFICATION_TOKEN}" />
    <title>Algolia Verification</title>
  </head>
  <body></body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
};
