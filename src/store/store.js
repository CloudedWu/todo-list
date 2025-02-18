import { configureStore } from '@reduxjs/toolkit';

//一般都以组件名xxxReducer方式命名，而不叫xxxSlice，因为这里import的是导出的counterSlice.reducer
import todolistReducer from "../features/todolistSlice.js";


// configureStore创建一个redux数据
const store = configureStore({
    reducer: {
        todolist: todolistReducer,//这里给定的名字最好与counterSlice中的name相同
    },
});

export default store