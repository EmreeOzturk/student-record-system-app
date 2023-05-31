import { create } from 'zustand';

const useInstructorMenuStore = create((set) => ({
  menuName: 'Personal Information',
  setMenuName: (menuName: string) => set({ menuName }),
}));

export default useInstructorMenuStore;
