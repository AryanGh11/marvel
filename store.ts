import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AddCartType } from "./types/AddCartType";

type CartState = {
  isOpen: boolean;
  cart: AddCartType[];
  toggleCart: () => void;
  clearCart: () => void;
  addProduct: (item: AddCartType) => void;
  removedProduct: (item: AddCartType) => void;
  paymentIntent: string;
  onCheckout: string;
  setPaymentIntent: (val: string) => void;
  setCheckout: (val: string) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      isOpen: false,
      paymentIntent: "",
      onCheckout: "cart",
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      clearCart: () => set((state) => ({ cart: [] })),
      addProduct: (item) =>
        set((state) => {
          const existingItem = state.cart.find(
            (cartItem) => cartItem.id === item.id
          );
          if (existingItem) {
            const updatedCart = state.cart.map((cartItem) => {
              if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity! + 1 };
              }
              return cartItem;
            });
            return { cart: updatedCart };
          } else {
            return { cart: [...state.cart, { ...item, quantity: 1 }] };
          }
        }),
      removedProduct: (item) =>
        set((state) => {
          //check if the item exist and remove quantity -1
          const existingItem = state.cart.find(
            (cartItem) => cartItem.id === item.id
          );
          if (existingItem && existingItem.quantity! > 1) {
            const updatedCart = state.cart.map((cartItem) => {
              if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity! - 1 };
              }
              return cartItem;
            });
            return { cart: updatedCart };
          } else {
            //remove item from cart
            const filteredCart = state.cart.filter(
              (cartItem) => cartItem.id !== item.id
            );
            return { cart: filteredCart };
          }
        }),
      setPaymentIntent: (val) => set((state) => ({ paymentIntent: val })),
      setCheckout: (val) => set((state) => ({ onCheckout: val })),
    }),
    { name: "cart-store" }
  )
);

type ThemeState = {
  mode: "marvel" | "black";
  toggleMode: (theme: "marvel" | "black") => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: "marvel",
      toggleMode: (theme) => set((state) => ({ mode: theme })),
    }),
    { name: "theme-store" }
  )
);

type UserSession = {
  id: string | null;
  name: string | null;
  email: string | null;
  password: string | null;
  image: string | null;
  isLogin: boolean;
  setId: (val: string) => void;
  setName: (val: string) => void;
  setEmail: (val: string) => void;
  setImage: (val: string) => void;
  setPassword: (val: string) => void;
  toggleLogin: (val: string) => void;
};

export const useUserSession = create<UserSession>()(
  persist(
    (set) => ({
      id: null,
      name: null,
      email: null,
      image: null,
      password: null,
      isLogin: false,
      setId: (val) => set((state) => ({ id: val })),
      setName: (val) => set((state) => ({ name: val })),
      setEmail: (val) => set((state) => ({ email: val })),
      setImage: (val) => set((state) => ({ image: val })),
      setPassword: (val) => set((state) => ({ password: val })),
      toggleLogin: (val) => set((state) => ({ isLogin: !state.isLogin })),
    }),
    { name: "user-session" }
  )
);

type BackgroundImages = {
  data: [] | null;
  setData: (val: []) => void;
};

export const useBackgroundImages = create<BackgroundImages>()(
  persist(
    (set) => ({
      data: null,
      setData: (val) => set((state) => ({ data: val })),
    }),
    { name: "background-images" }
  )
);

type ErrorType = {
  message: string | null;
  setMessage: (val: string) => void;
  clear: () => void;
};

export const handleError = create<ErrorType>()(
  persist(
    (set) => ({
      message: null,
      setMessage: (val) => set((state) => ({ message: val })),
      clear: () => set((state) => ({ message: null })),
    }),
    { name: "handle-error" }
  )
);
