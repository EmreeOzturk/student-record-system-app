import { create } from 'zustand';

const useLoginStore = create((set) => ({
  isLogin: false,
  setIsLogin: (isLogin: boolean) => set({ isLogin }),
}));

export default useLoginStore;
