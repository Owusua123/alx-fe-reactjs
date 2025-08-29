import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      
      staleTime: 60 * 1000,       
      cacheTime: 5 * 60 * 1000,   
      refetchOnWindowFocus: false 
    }
  }
});

export default function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: 16 }}>
        <h1>React Query Demo</h1>
        <p>
          Toggle the component to see cache behavior. When you show it again within
          <strong> 60s</strong>, data should come from cache instantly.
        </p>

        <button onClick={() => setShowPosts((v) => !v)}>
          {showPosts ? "Hide" : "Show"} PostsComponent
        </button>

        <hr style={{ margin: "16px 0" }} />

        {showPosts && <PostsComponent />}

        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
  );
}

