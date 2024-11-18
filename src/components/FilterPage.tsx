import React from "react";
import { Button } from "./ui/button";

export type FilterOptionsState = {
  id: string;
  label: string;
};
// agar applied filter k andr ye item exixt krta hia toh iska mtlb checked hai
const filterOptions: FilterOptionsState[] = [
  { id: "burger", label: "Burger" },
  { id: "thali", label: "Thali" },
  { id: "biryani", label: "Biryani" },
  { id: "momos", label: "Momos" },
];

const FilterPage = () => {
  return (
    <div className="md:w-32">
      <div className="flex items-center justify-between">
        <h1 className="font-medium text-lg">Filter By Cusine </h1>
        <Button variant={"link"}>Reset</Button>
      </div>
    </div>
  );
};

export default FilterPage;
