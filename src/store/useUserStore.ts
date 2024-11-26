import create from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useUserStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isCheckingAuth: true,
      loading: false,

      // Example signUp method (async)
      signUp: async (userData) => {
        set({ loading: true });
        try {
          // Simulate API call or actual logic
          const user = "";
          set({ user, isAuthenticated: true, loading: false });
        } catch (error) {
          console.error("Error signing up:", error);
          set({ loading: false });
        }
      },
    }),
    {
      name: "user", // Name of the persisted store
      storage: createJSONStorage(() => localStorage), // Use localStorage
    }
  )
);
