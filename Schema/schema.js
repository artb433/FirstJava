import mongoose from 'mongoose';

import {Schema, model} from mongoose;

const todoSchema = Schema({
  todoTitle:{
     type:String, 
     required:true
  },

  category:{
      type:String,
      required:true

  },
})

const todoModel = model('todo',todoSchema);

export default todoModel;
export {todoModel as todoModel};