import Link from "next/link";

export default function Header({}) {
  return (
    <div className="mb-4">
      <h1 className="text-4xl font-bold mb-4 py-16">
        <Link href="/">Newspaper Site</Link>
      </h1>
      <nav className="flex gap-4 border-t border-b">
        <Link className="p-4" href="/">
          Home
        </Link>
        <Link className="p-4" href="/politivs">
          Politics
        </Link>
        <Link className="p-4" href="/weather">
          Weather
        </Link>
        <Link className="p-4" href="/sports">
          Sports
        </Link>
        <Link className="p-4" href="/international">
          International
        </Link>
        <Link className="p-4" href="/educational">
          Educational
        </Link>
        <Link className="p-4" href="/other">
          Other
        </Link>
      </nav>
    </div>
  );
}
