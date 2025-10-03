import {createSlice} from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todos",
    initialState:[
        {id:1, text:"state1", complete:false},
        {id:2, text:"state2", complete:true}
    ],
    reducers:{
        addtodo: (state, action) =>{
            state.push({
                id: Date.now(),
                text: action.payload,
                complete: false
            })
        },
        updatetodo:(state, action)=>{
            const todo = state.find((t)=> t.id === action.payload);
            if(todo){
                todo.complete = !todo.complete;
            }
        },
        deletetodo:(state, action) => {
            return state.filter((t)=> t.id !== action.payload)
        }
    }
});


export const {addtodo, updatetodo, deletetodo} = todoSlice.actions;
export default todoSlice.reducer;