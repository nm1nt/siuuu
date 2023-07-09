import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
export const useFirebaseStore = create(
  persist(
    (set) => ({
      // state cua minh  === useState [stateName, setStateName] = useState(initialState)
      // dung useState : const [dataStore, setDataStore] = useState([])

      dataStore: [],
      isLoading: false,

      // viet ham cap nhat state sau khi lay duoc data tu firebase
      setIsLoading: (status) => set({ isLoading: status }), // ham nay nhan status tu firebase roi cap nhat lai state isLoading voi status moi nhan ve
      setDataStore: (data) => set({ dataStore: data }), // ham nay nhan data tu firebase roi cap nhat lai state dataStore voi data moi nhan ve
      // ham cap nhat gia tri state === setStateName
    }),
    {
      name: "fireStoreData", // unique name
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);


// sau nay khi import de cac component khac su dung thi can import ten === ten export
