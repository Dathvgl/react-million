import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import CustomLazy from "~/utils/CustomLazy";

const HomePage = CustomLazy(() => import("~/routes/home/Home"));
const MangaPage = CustomLazy(() => import("~/routes/manga/Manga"));
const MangaPuppeteerPage = CustomLazy(() => import("~/routes/manga/Puppeteer"));
const ErrorPage = CustomLazy(() => import("~/routes/Error"));

export default function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="manga">
            <Route path=":id" element={<MangaPage />} />
            <Route path="puppeteer" element={<MangaPuppeteerPage />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}
