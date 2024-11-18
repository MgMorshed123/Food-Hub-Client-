import { useParams } from "react-router-dom";
import FilterPage from "./FilterPage";
import { Input } from "./ui/input";
import { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { X } from "lucide-react";
import { Card } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import HeroImage from "../assets/hero_pizza.png";

const SearchPage = () => {
  const params = useParams();
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <FilterPage></FilterPage>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Input
              type="text"
              placeholder="Serach by restaurant"
              value={searchQuery}
            />
            <Button className="bg-orange hover:bg-hoverOrange">Search</Button>
          </div>

          <div>
            <div className="flex flex-col md:flex-row  md:items-center md:gap-2 my-3">
              <h1>(2) Result Founds</h1>

              <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                {["1", " 2", "3"].map((selected: string, idx: number) => (
                  <div
                    className="relative inline-flex items-center max-w-full"
                    key={idx}
                  >
                    <Badge className="text-[#019254]" variant="outline">
                      {selected}
                    </Badge>
                    <X
                      onClick={() => ""}
                      size={16}
                      className="absolute text-[#D19254] right-1 hover:cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* restaurnat card  */}
            <div className="grid md:grid-cols-3 gap-4">
              {/* shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 */}
              <Card className="bg-white dark:bg-gray-800  shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative ">
                  <AspectRatio ratio={16 / 6}>
                    <img
                      src={HeroImage}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </AspectRatio>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
