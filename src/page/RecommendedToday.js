import BeforeCard from "../components/ExampleRecommendedToday/beforeCard";
import AfterCard from "../components/ExampleRecommendedToday/afterCard";

const RecommendedToday = () => (
  <div className="flex flex-col 2sm:flex-row">
    <BeforeCard />
    <AfterCard />
  </div>
);

export default RecommendedToday;
