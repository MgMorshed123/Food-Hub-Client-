import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Profile = () => {
  return (
    <form className="max-w-7xl mx-auto my-5">
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="relative md:w-28 md:h-28">
            <AvatarImage></AvatarImage>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </form>
  );
};

export default Profile;
