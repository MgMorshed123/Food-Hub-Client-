import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <form className="md:p-8 w-full max-w-md md:border  border-gray-200 rounded-lg mx-4">
        <div className="mb-4">
          <h1>Food Hub</h1>
        </div>

        <div className="mb-4">
          <div className="relative">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter Your Email "
              className="pl-10 focus-visible:ring-1"
            />
            <Mail className="absolute inset-y-8 left-2  text-gray-500 pointer-events-none" />
          </div>
        </div>
        <div>
          <Label>Password</Label>
          <Input
            type="Password"
            placeholder="Enter Your Password "
            className="pl-10 focus-visible:ring-1"
          />
          <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none" />
        </div>
      </form>
    </div>
  );
};

export default Login;
