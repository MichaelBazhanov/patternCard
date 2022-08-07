import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import InternetSalesHits from "./page/InternetSalesHits";
import Default from "./page/Default";
import PopularCategories from "./page/PopularCategories";
import RecommendedToday from "./page/RecommendedToday";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Default />} />
          <Route path="internet-sales-hits" element={<InternetSalesHits />} />
          <Route path="popular-categories" element={<PopularCategories />} />
          <Route path="recommended-today" element={<RecommendedToday />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
