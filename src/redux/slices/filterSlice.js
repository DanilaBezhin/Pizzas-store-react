import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: '0',
  sort: 'rating&order=desc',
  activePagePaginate: '1',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortType(state, action) {
      state.sort = action.payload;
    },
    setActivePagePaginate(state, action) {
      state.activePagePaginate = action.payload;
    },
    setActivePagePaginatePlus(state) {
      state.activePagePaginate = String(Number(state.activePagePaginate) + 1);
    },
    setActivePagePaginateMinus(state) {
      state.activePagePaginate = String(state.activePagePaginate - 1);
    },
  },
});

export const {
  setCategoryId,
  setSortType,
  setActivePagePaginate,
  setActivePagePaginatePlus,
  setActivePagePaginateMinus,
} = filterSlice.actions;

export default filterSlice.reducer;
