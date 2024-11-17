import { useParams } from "react-router-dom";
import FilterPage from "./FilterPage";

const SearchPage = () => {
  const params = useParams();

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex flex-col d:flex-row justify-between gap-10">
        <FilterPage></FilterPage>
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default SearchPage;
