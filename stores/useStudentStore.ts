import { create } from 'zustand';

const useStudentStore = create((set) => ({
  menuName: 'none',
  setMenuName: (menuName: string) => set({ menuName }),
}));

export default useStudentStore;