import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { useRestaurantStore } from "@/store/useRestaurantStore";

export type FilterOptionsState = {
  id: string;
  label: string;
};
// agar applied filter k andr ye item exixt krta hia toh iska mtlb checked hai
const filterOptions: FilterOptionsState[] = [
  { id: "Salad", label: "Salad" },
  { id: "Sandwich", label: "Sandwich" },
  { id: "Rolls", label: "Rolls" },
  { id: "momos", label: "Momos" },
];

const FilterPage = () => {
  const { setAppliedFilter, resetAppliedFilter, appliedFilter } =
    useRestaurantStore();

  const appliedFilterHandler = (value: string) => {
    setAppliedFilter(value);
  };

  console.log(appliedFilter);
  return (
    <div className="md:w-32">
      <div className="flex items-center justify-between">
        <h1 className="font-medium text-lg">Filter By Cusine </h1>
        <Button
          onClick={resetAppliedFilter}
          variant={"link"}
          className={`${
            appliedFilter.length > 0 ? "bg-red-500" : "bg-black text-white"
          }`}
        >
          Reset
        </Button>
      </div>
      {filterOptions.map((option) => (
        <div key={option.id} className="flex items-center space-x-2 my-5">
          <Checkbox
            id={option.id}
            // checked={appliedFilter.includes(option.label)}
            onClick={() => appliedFilterHandler(option.label)}
          />
          {/* imp  */}
          <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {option.label}
          </Label>
        </div>
      ))}
    </div>
  );
};

export default FilterPage;
