import { create } from "zustand"

const modalType = ["cookies"]

const useModal = create((set) => ({
    type: null,
    data: {},
    isOpen: false,
    onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
    onClose: () => set({ type: null, isOpen: false })
}))

export { useModal, modalType }