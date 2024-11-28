import { STORAGE } from '@/config';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  username: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  setAuthenticated: (isAuthenticated: boolean) => void;
  setUser: (user: User) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      setAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
      setUser: (user) => set({ user }),
    }),
    {
      name: STORAGE.AUTH,
    }
  )
);

export const setAuthenticated = (isAuthenticated: boolean) => {
  useAuthStore.getState().setAuthenticated(isAuthenticated);
};

export const setUser = (user: User) => {
  useAuthStore.getState().setUser(user);
}