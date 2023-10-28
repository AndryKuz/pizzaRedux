import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: { name: "Популярности", sortProperty: "rating" },
};


const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload;// сам action это обьект в котором есть payload(который будет хранить индекс выбранной категории)
            // и type: filters/setCategoryId(где filters - это name: 'filters',). Потому в состояние state.categoryId передаем только индекс action.payload
            
        }
    }
});

export const {setCategoryId} = filterSlice.actions;

export default filterSlice.reducer;