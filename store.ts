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
  mode: "dark" | "light";
  toggleMode: (theme: "dark" | "light") => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: "dark",
      toggleMode: (theme) => set((state) => ({ mode: theme })),
    }),
    { name: "theme-store" }
  )
);

type UserSession = {
  id: string | null;
  name: string | null;
  username: string | null;
  bio: string | null;
  phone_number: string | null;
  email: string | null;
  avatar: string | null;
  createdAt: string | null;
  isLogin: boolean;
  setId: (val: string) => void;
  setName: (val: string) => void;
  setUsername: (val: string) => void;
  setBio: (val: string) => void;
  setPhone: (val: string) => void;
  setEmail: (val: string) => void;
  setAvatar: (val: string) => void;
  setCreated: (val: string) => void;
  toggleLogin: (val: boolean) => void;
  clear: () => void;
};

export const useUserSession = create<UserSession>()(
  persist(
    (set) => ({
      id: null,
      name: null,
      username: null,
      bio: null,
      phone_number: null,
      email: null,
      avatar: null,
      createdAt: null,
      isLogin: false,
      setId: (val) => set((state) => ({ id: val })),
      setName: (val) => set((state) => ({ name: val })),
      setUsername: (val) => set((state) => ({ username: val })),
      setBio: (val) => set((state) => ({ bio: val })),
      setPhone: (val) => set((state) => ({ phone_number: val })),
      setEmail: (val) => set((state) => ({ email: val })),
      setAvatar: (val) => set((state) => ({ avatar: val })),
      setCreated: (val) => set((state) => ({ createdAt: val })),
      toggleLogin: (val) => set((state) => ({ isLogin: val })),
      clear: () =>
        set((state) => ({
          name: null,
          username: null,
          bio: null,
          phone_number: null,
          email: null,
          id: null,
          avatar: null,
          createdAt: null,
          isLogin: false,
        })),
    }),
    { name: "user-session" }
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

type MessageType = {
  message: string | null;
  setMessage: (val: string) => void;
  clear: () => void;
};

export const handleMessage = create<MessageType>()(
  persist(
    (set) => ({
      message: null,
      setMessage: (val) => set((state) => ({ message: val })),
      clear: () => set((state) => ({ message: null })),
    }),
    { name: "handle-message" }
  )
);
