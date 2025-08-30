import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "React Basics" },
  { id: 2, title: "Advanced Routing" },
  { id: 3, title: "React Query Guide" },
];

export default function Blog() {
  return (
    <div>
      <h1>📝 Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
