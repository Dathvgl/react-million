import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Envs } from "~/types/env";
import App from "./App.tsx";
import "./index.css";

export const envs: Envs = JSON.parse(JSON.stringify(import.meta.env));

const queryClient = new QueryClient();
queryClient.setDefaultOptions({
  queries: {
    staleTime: 1 * 60 * 1000,
    cacheTime: 2 * 60 * 1000,
    retry: 3,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    structuralSharing: false,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
  </QueryClientProvider>
);
