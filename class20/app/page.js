// app/page.js
import Link from "next/link";

import Header from "@/components/Header";

export default async function HomePage() {
  // Fetching news data from a fake API endpoint
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const newsList = await response.json();

  return (
    <div className="container mx-auto p-4">
      <Header />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsList.slice(0, 100).map((news) => (
          <li key={news.id} className="border p-4 rounded">
            <h2 className="text-2xl font-semibold">{news.title}</h2>
            <p className="text-gray-600">{news.id}</p>
            <Link className="text-blue-500" href={`/news/${news.id}`}>
              Read more
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
