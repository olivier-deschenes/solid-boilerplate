import {
  QueryClient,
  QueryClientProvider,
  createQuery,
} from "@tanstack/solid-query";
import { Switch, Match, For } from "solid-js";

const queryClient = new QueryClient();

function Example() {
  const query = createQuery(
    () => ["todos"],
    () => {
      return fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
        res.json()
      );
    }
  );

  return <div>{JSON.stringify(query?.data)}</div>;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}
