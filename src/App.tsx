import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Home from "./components/home";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <ThemeProvider defaultTheme="system" storageKey="rss-reader-theme">
      <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
    </ThemeProvider>
  );
}

export default App;
