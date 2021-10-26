import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  list: [],
  isEdit: false,
  isShowDrawer: false,
  currentIndex: null,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addNew: (state, actions) => {
      const { index, type } = actions.payload;

      const newElement = {
        id: uuidv4(),
        type,
      };

      if (index === null) {
        state.list = [newElement, ...state.list];
        state.isShowDrawer = false;
        return;
      }
      if (index === state.list.length - 1) {
        state.list = [...state.list, newElement];
        state.isShowDrawer = false;
        return;
      }
      state.list = [...state.list.slice(0, index + 1), newElement, ...state.list.slice(index + 1)];
      state.isShowDrawer = false;
    },
    deleteElement: (state, action) => {
      const { index } = action.payload;

      state.list = [...state.list.slice(0, index), ...state.list.slice(index + 1)];
    },
    copyElement: (state, action) => {
      const { index } = action.payload;

      const newElement = {
        ...state.list[index],
        id: uuidv4(),
      };

      state.list = [...state.list.slice(0, index + 1), newElement ,...state.list.slice(index + 1)];
    },
    moveUp: (state, action) => {
      const { index } = action.payload;
      if(index === 0) {
        return;
      };
      state.list = [...state.list.slice(0, index - 1), state.list[index], state.list[index - 1], ...state.list.slice(index + 1)];
    },
    moveDown: (state, action) => {
      const { index } = action.payload;
      if(index === state.list.length - 1) {
        return;
      };

      state.list = [...state.list.slice(0, index), state.list[index + 1], state.list[index], ...state.list.slice(index + 2)];
    },
    changeValue: (state, action) => {
      const { index, value } = action.payload;
      state.list = state.list.map((el, itemIndex) => {
        if(index === itemIndex) {
          return { ...el, value };
        }
        return el;
      });
    },
    changeDrawer: (state, action) => {
      state.currentIndex = action.payload ?? null;
      state.isShowDrawer = !state.isShowDrawer;
    },
    changeView: (state) => {
      state.isEdit = !state.isEdit;
    }
  },
});

export const { addNew, deleteElement, copyElement, moveUp, moveDown, changeValue, changeDrawer, changeView } = dataSlice.actions;

export default dataSlice.reducer;