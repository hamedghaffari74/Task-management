import { createSlice, configureStore } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    listTask: [],
  },
  reducers: {
    addTask: (state, { payload }) => {
      const { title, done } = payload;
      state.listTask = [...state.listTask, { title, done ,id:Math.floor(Math.random() * 1000), }];
    },
    deleteTask: (state, { payload }) => {
      console.log(payload);
      state.listTask = state.listTask.filter(
        (task) => task.id !== payload.id
      );
    },
    setDone: (state, { payload }) => {
    const { task , checked } = payload;

    state.listTask.map((item) =>  item.id === task.id ? (item.done = checked) : ""
    );
    },
  },
});

export const { addTask, deleteTask,setDone } = taskSlice.actions;
export default taskSlice.reducer;
