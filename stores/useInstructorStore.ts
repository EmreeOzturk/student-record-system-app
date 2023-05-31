import { create } from 'zustand';

const useInstructorMenuStore = create((set) => ({
  menuName: 'none',
  setMenuName: (menuName: string) => set({ menuName }),
}));

export default useInstructorMenuStore;
