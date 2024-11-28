import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useRestaurantStore = create()(
  persist(
    (set) => ({}),

    { name: "restaurant", storage: createJSONStorage(() => localStorage) }
  )
);
