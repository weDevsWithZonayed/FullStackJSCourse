// app/news/[id]/page.js
import { notFound } from "next/navigation";
import CommentSection from "../../../components/CommentSection";
import Header from "@/components/Header";

// app/news/[id]/page.js
export async function generateStaticParams() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const newsList = await response.json();

  return newsList.slice(0, 100).map((news) => ({ id: news.id.toString() }));
}

export default async function NewsPage({ params }) {
  const { id } = params;

  // Fetch the individual news data from the API
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const newsItem = await response.json();

  // If the news item doesn't exist, return a 404
  if (!newsItem || !newsItem.id) return notFound();

  return (
    <div className="container mx-auto p-4">
      <Header />
      <h1 className="text-4xl font-bold mb-4">{newsItem.title}</h1>
      <p className="text-gray-600 mb-4">ID: {newsItem.id}</p>
      <p className="mb-8">{newsItem.body}</p>
      <CommentSection newsId={id} />
    </div>
  );
}
