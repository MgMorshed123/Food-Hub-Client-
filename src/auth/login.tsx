import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <form className="md:p-8 w-full max-w-md md:border  border-gray-200 rounded-lg mx-4">
        <div className="mb-4">
          <h1>Food Hub</h1>
        </div>
        <div>
          <Label>Email</Label>
          <Input type="email" placeholder="Enter Your Email " />
          <Label>Password</Label>
          <Input type="Password" placeholder="Enter Your Password " />
        </div>
      </form>
    </div>
  );
};

export default Login;
