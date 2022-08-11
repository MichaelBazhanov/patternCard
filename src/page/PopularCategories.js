import BeforeCard from "../components/ExamplePopularCategories/beforeCard";
import AfterCard from "../components/ExamplePopularCategories/afterCard";

const PopularCategories = () => (
  <div className="grid grid-cols-2 grid-flow-row gap-4">
    <BeforeCard />
    <AfterCard />
  </div>
);

export default PopularCategories;
