import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  currentPage: 1,
  sort: { name: "Популярности", sortProperty: "rating" },
};


const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload;// сам action это обьект в котором есть payload(который будет хранить индекс выбранной категории)
            // и type: filters/setCategoryId(где filters - это name: 'filters',). Потому в состояние state.categoryId передаем только индекс action.payload
            
        },
        setFilter(state, action) {
            state.sort = action.payload;
            
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
            
        },
        setSort(state, action) {
            state.categoryId = Number(action.payload.categoryId);
            state.currentPage = Number(action.payload.currentPage);
            state.sort = action.payload.sort;


        }
    }
});

export const {setCategoryId, setFilter, setCurrentPage, setSort} = filterSlice.actions;

export default filterSlice.reducer;