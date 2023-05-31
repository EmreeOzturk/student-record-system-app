import { create } from 'zustand';

const useStudentStore = create((set) => ({
  menuName: 'Personal Information',
  setMenuName: (menuName: string) => set({ menuName }),
}));

export default useStudentStore;