import { Card } from "./ui/card";
import HeroImage from "../assets/hero_pizza.png";
const AvailableMenu = () => {
  return (
    <div className="md:p-4">
      <h1 className="text-xl md:text-2xl font-extrabold mb-6">
        Available Menu
      </h1>
      <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
        <Card className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
          <img src={HeroImage} alt="" />
        </Card>
      </div>
    </div>
  );
};

export default AvailableMenu;
