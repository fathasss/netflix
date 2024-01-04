import { create } from 'zustand';

export interface ModalSearchProps {
    isOpened: boolean;
    openModal: () => void;
    closeModale: () => void;
}

const useSearchModal = create<ModalSearchProps>((set) => ({
    isOpened: false,
    openModal: () => set({ isOpened: true }),
    closeModale: () => set({ isOpened: false }),
}));

export default useSearchModal;