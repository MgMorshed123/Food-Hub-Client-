import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Loader2, LockKeyhole, Mail, SeparatorVertical } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

type LoginInputState = {
  email: string;
  password: string;
};

const Login = () => {
  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState<LoginInputState>({
    email: "",
    password: "",
  });

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
        <div className="relative">
          <Label>Password</Label>
          <Input
            type="Password"
            placeholder="Enter Your Password "
            className="pl-10 focus-visible:ring-1"
          />
          <LockKeyhole className="absolute inset-y-8 left-2 text-gray-500 pointer-events-none" />
        </div>

        <div className="mb-10">
          {loading ? (
            <Button disabled className="w-full bg-orange hover:bg-hoverOrange">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full bg-orange hover:bg-hoverOrange"
            >
              Login
            </Button>
          )}
          <div className="mt-4">
            <Link
              to="/forgot-password"
              className="hover:text-blue-500 hover:underline"
            >
              Forgot Password
            </Link>
          </div>
        </div>
        <Separator></Separator>
        <p className="mt-2">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
