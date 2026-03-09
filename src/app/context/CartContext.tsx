"use client";

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  type ReactNode,
} from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type CartItem = {
  id: number;
  slug: string;
  name: string;
  price: number;
  quantity: number;
  size?: string;
  image?: string;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
};

type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: { id: number; size?: string } }
  | {
      type: "UPDATE_QUANTITY";
      payload: { id: number; size?: string; quantity: number };
    }
  | { type: "CLEAR" }
  | { type: "TOGGLE" }
  | { type: "CLOSE" }
  | { type: "HYDRATE"; payload: CartItem[] };

type CartContextValue = CartState & {
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number, size?: string) => void;
  updateQuantity: (id: number, size: string | undefined, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  closeCart: () => void;
  cartCount: number;
  cartTotal: number;
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const STORAGE_KEY = "cgc-cart";

function persist(items: CartItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    /* storage full / SSR — ignore */
  }
}

function matchItem(
  item: CartItem,
  id: number,
  size?: string
): boolean {
  return item.id === id && item.size === size;
}

/* ------------------------------------------------------------------ */
/*  Reducer                                                            */
/* ------------------------------------------------------------------ */

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find((i) =>
        matchItem(i, action.payload.id, action.payload.size)
      );
      let next: CartItem[];
      if (existing) {
        next = state.items.map((i) =>
          matchItem(i, action.payload.id, action.payload.size)
            ? { ...i, quantity: i.quantity + action.payload.quantity }
            : i
        );
      } else {
        next = [...state.items, action.payload];
      }
      persist(next);
      return { ...state, items: next, isOpen: true };
    }

    case "REMOVE_ITEM": {
      const next = state.items.filter(
        (i) => !matchItem(i, action.payload.id, action.payload.size)
      );
      persist(next);
      return { ...state, items: next };
    }

    case "UPDATE_QUANTITY": {
      const next =
        action.payload.quantity <= 0
          ? state.items.filter(
              (i) =>
                !matchItem(i, action.payload.id, action.payload.size)
            )
          : state.items.map((i) =>
              matchItem(i, action.payload.id, action.payload.size)
                ? { ...i, quantity: action.payload.quantity }
                : i
            );
      persist(next);
      return { ...state, items: next };
    }

    case "CLEAR":
      persist([]);
      return { ...state, items: [] };

    case "TOGGLE":
      return { ...state, isOpen: !state.isOpen };

    case "CLOSE":
      return { ...state, isOpen: false };

    case "HYDRATE":
      return { ...state, items: action.payload };

    default:
      return state;
  }
}

/* ------------------------------------------------------------------ */
/*  Context + Provider                                                 */
/* ------------------------------------------------------------------ */

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
  });

  /* Hydrate from localStorage on mount */
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          dispatch({ type: "HYDRATE", payload: parsed });
        }
      }
    } catch {
      /* ignore */
    }
  }, []);

  const cartCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const cartTotal = state.items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  const value: CartContextValue = {
    ...state,
    addToCart: (item) => dispatch({ type: "ADD_ITEM", payload: item }),
    removeFromCart: (id, size) =>
      dispatch({ type: "REMOVE_ITEM", payload: { id, size } }),
    updateQuantity: (id, size, quantity) =>
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, size, quantity } }),
    clearCart: () => dispatch({ type: "CLEAR" }),
    toggleCart: () => dispatch({ type: "TOGGLE" }),
    closeCart: () => dispatch({ type: "CLOSE" }),
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
