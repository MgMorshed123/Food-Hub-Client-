import create from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import axios from "axios";
import { LoginInputState, SignupInputState } from "@/schema/userSchema"; // Ensure this path is correct
import { toast } from "sonner"; // Assuming "sonner" is used for notifications

const API_END_POINT = "http://localhost:4000/api/v1/user";

axios.defaults.withCredentials = true;

export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isCheckingAuth: true,
      loading: false,

      // Sign Up method
      signUp: async (input: SignupInputState) => {
        set({ loading: true });
        try {
          // API call for signup
          const response = await axios.post(`${API_END_POINT}/signup`, input, {
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (response.data.success) {
            console.log(response.data);
            toast.success(response.data.message);

            set({
              user: response.data.user,
              isAuthenticated: true,
              loading: false,
            });
          }
        } catch (error) {
          console.error("Error signing up:", error);
          set({ loading: false });
          toast.error("Error signing up");
        }
      },

      login: async (input: LoginInputState) => {
        try {
          set({ loading: true });
          const response = await axios.post(`${API_END_POINT}/login`, input, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (response.data.success) {
            toast.success(response.data.message);
            set({
              loading: false,
              user: response.data.user,
              isAuthenticated: true,
            });
          }
        } catch (error: any) {
          toast.error(error.response.data.message);
          set({ loading: false });
        }
      },
    }),
    {
      name: "user", // Name for persisted storage
      storage: createJSONStorage(() => localStorage), // Use localStorage for persistence
    }
  )
);
