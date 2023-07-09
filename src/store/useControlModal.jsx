import { create } from "zustand";

export const useControlModal = create((set) => ({
  // state

  modalVisible: false,
  selectedItem : {},

  // function control state

  setModalVisible: (value) => set({ modalVisible: value }),
  setSelectedItem: (value) => set({ selectedItem: value }),
}));
