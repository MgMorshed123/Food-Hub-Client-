import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between h-14">
        <Link to="/">
          <h1 className="font-bold md:font-extrabold text-2xl ">FoodHub</h1>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/home">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/order/status"> Order</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
