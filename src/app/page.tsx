import Link from "next/link";

export default function Home() {
  return (
    <main>
      <ul>
        <li>
          <Link href="/robots.txt">robots.txt</Link>
        </li>
        <li>
          <Link href="/html-verification">HTML verification page</Link>
        </li>
        <li>
          <Link href="/meta-verification">Meta tag verification page</Link>
        </li>
      </ul>
    </main>
  );
}
