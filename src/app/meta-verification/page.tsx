import { Metadata } from "next";

export const metadata: Metadata = {
  other: {
    "algolia-site-verification":
      process.env.ALGOLIA_CRAWLER_DOMAIN_VERIFICATION_TOKEN || "",
  },
};

export default function MetaVerificationPage() {
  return (
    <>
      <h1>Meta tag verification</h1>
      <h2>This page is used by the Algolia Crawler to verify the domain</h2>
    </>
  );
}
