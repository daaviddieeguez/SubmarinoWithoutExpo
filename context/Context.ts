import { create } from "zustand";

interface State {
    size: number;
    incSize: () => void;
    decSize: () => void;
}

export const useSize = create<State>()((set) => ({
    size: 2, 
    incSize: () => set((state) => ({size: state.size + 1})),
    decSize: () => set((state) => ({size: state.size - 1}))
}))