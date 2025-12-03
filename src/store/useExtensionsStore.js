import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import extensionsData from '../../data.json';

const prepareExtensions = () =>
  extensionsData.map((ext) => ({
    ...ext,
    isRemoved: false,
  }));

export const useExtensionsStore = create(
  persist(
    (set, get) => ({
      theme: 'dark',
      filter: 'all',
      extensions: prepareExtensions(),
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'dark' ? 'light' : 'dark',
        })),
      setFilter: (filter) => set({ filter }),
      toggleExtensionActive: (name) =>
        set((state) => ({
          extensions: state.extensions.map((ext) =>
            ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
          ),
        })),
      removeExtension: (name) =>
        set((state) => ({
          extensions: state.extensions.map((ext) =>
            ext.name === name ? { ...ext, isRemoved: true } : ext
          ),
        })),
      resetExtensions: () => set({ extensions: prepareExtensions() }),
    }),
    {
      name: 'extensions-manager-store',
      partialize: (state) => ({
        theme: state.theme,
        filter: state.filter,
        extensions: state.extensions,
      }),
      onRehydrateStorage: () => (state) => {
        // Ensure we always have extensions data even if storage is empty/corrupt
        if (!state || !Array.isArray(state.extensions) || state.extensions.length === 0) {
          state.extensions = prepareExtensions();
        }
      },
    }
  )
);

export default useExtensionsStore;


