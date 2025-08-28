// redux/favouriteSlice.js
import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    items: [],
  },
  reducers: {
    toggleFavourite: (state, action) => {
      const item = action.payload;
      const exists = state.items.find(i => i.id === item.id);
      if (exists) {
        state.items = state.items.filter(i => i.id !== item.id);
      } else {
        state.items.push(item);
      }
    },
    clearFavourites: (state) => {
      state.items = [];   // ✅ sab empty ho jaayega
    },
  },
});

export const { toggleFavourite, clearFavourites } = favouriteSlice.actions;
export default favouriteSlice.reducer;
