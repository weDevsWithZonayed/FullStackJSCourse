// components/CommentSection.js
"use client"; // Mark this as a client-side component

import useComments from "../hooks/useComments";

export default function CommentSection({ newsId }) {
  const { comments, loading, error } = useComments(newsId);

  if (loading) return <p>Loading comments...</p>;
  if (error) return <p>Error loading comments: {error}</p>;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} className="border-b py-2">
              <p className="font-semibold">{comment.name}</p>
              <p className="text-gray-600">{comment.email}</p>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments found.</p>
      )}
    </div>
  );
}
