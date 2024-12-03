import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Loader2, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { set } from "zod";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const API_END_POINT = "http://localhost:4000/api/v1/user/forgot-password";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        API_END_POINT,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(false);
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error("Error submitting form:", error); // Log or handle the error
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 md:p-8 w-full max-w-md rounded-lg mx-4"
      >
        <div className="text-center">
          <h1 className="font-extrabold text-2xl mb-2">Forgot Password</h1>
          <p className="text-sm text-gray-600">
            Enter your email address to reset your password
          </p>
        </div>
        <div className="relative w-full">
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="pl-10"
          />
          <Mail className="absolute inset-y-2 left-2 text-gray-600 pointer-events-none" />
        </div>
        {loading ? (
          <Button disabled className="bg-orange hover:bg-hoverOrange">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
          </Button>
        ) : (
          <Button className="bg-orange hover:bg-hoverOrange">
            Send Reset Link
          </Button>
        )}
        <span className="text-center">
          Back to{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default ForgotPassword;
