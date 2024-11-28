import Loading from "@/components/Loading";
import axios from "axios";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { toast } from "sonner";

const API_END_POINT = "http://localhost:4000/api/v1/restaurant";

axios.defaults.withCredentials = true;
export const useRestaurantStore = create()(
  persist(
    (set) => ({
      loading: false,
      creatRestaurant: async (formData: FormData) => {
        try {
          set({ loading: true });
          const response = await axios.post(`${API_END_POINT}/`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
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
      getRestaurant: async () => {
        try {
          set({ loading: true });
          const response = await axios.get(`${API_END_POINT}/`);
          if (response.data.success) {
            set({ loading: false, restaurant: response.data.restaurant });
          }
        } catch (error: any) {
          if (error.response.status === 404) {
            set({ restaurant: null });
          }
          set({ loading: false });
        }
      },
    }),

    { name: "restaurant", storage: createJSONStorage(() => localStorage) }
  )
);
