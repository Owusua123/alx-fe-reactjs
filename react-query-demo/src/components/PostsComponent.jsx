import { useQuery, useQueryClient } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
};

export default function PostsComponent() {
  const queryClient = useQueryClient();

  const {
    data: posts,
    isLoading,
    isError,
    error,
    isFetching,
    refetch
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    // keep this component-level option to show "background refetch" indicator
    refetchOnMount: false, // rely on cache first if it's fresh
  });

  if (isLoading) return <p>Loading posts…</p>;
  if (isError) return <p style={{ color: "crimson" }}>Error: {error.message}</p>;

  return (
    <div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <button onClick={() => refetch()}>Refetch now</button>

        <button
          onClick={() => {
            // Example of manual cache invalidation
            // Forces the next render to refetch (useful after mutations)
            queryClient.invalidateQueries({ queryKey: ["posts"] });
          }}
        >
          Invalidate Cache
        </button>

        {isFetching ? <span> (fetching…)</span> : null}
      </div>

      <ul style={{ marginTop: 16 }}>
        {posts.slice(0, 10).map((p) => (
          <li key={p.id}>
            <strong>#{p.id}</strong> {p.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
