import dotenv from 'dotenv';
import express from 'express';
import todoModel from './Schema/schema.js';
import cors from 'cors';
import mongoose from 'mongoose';
const app = express();

dotenv.config();

//middlewares
app.use(cors());
app.use(express.json());


const PORT =  process.env.PORT || 3000 ;
const db = process.env.DB_URL;

mongoose.connect(db,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(()=>console.log('Connected to DB'))
.catch(err => console.log(err));

app.get('/',(req,res)=>{
  res.send('Welcome to the Homepage of Art.B Technologies')  
   })
app.get('/todos',async(req,res)=>{
  const allTodos = await todoModel.find({});
  if(allTodos){
   return res.status(200).json({
       message: 'Todos fetched successfully',
       data: allTodos
   })
  }else{
    return res.status(500).json({
        message:'Oops!, unable to fetch todos'
    })
  }
})
app.get('/todos/:category',async(req,res)=>{
    const{category}=req.params;
    const allCategoryTodos = await todoModel.find({})
    .where("category").equals(category);
    if(allCategoryTodos){
        return res.status(200).json({
            message:`${category} todos fetched successfully`,
            data:allCategoryTodos
        })
       }else{
        return res.status(500).json({
            message:`Oops you have entered a wrong ${category}`
        })   
    }
})
//creating a new todo
app.post('/todo',async(req,res)=>{
    const {todoTitle,category} =req.body;
    const newTodo = await todoModel.create(
        {
            todoTitle: todoTitle,
            category:category
    });
    if(newTodo){
        res.status(200).json({
            message:'Todo created successfully',
            data:newTodo
        })
    }else{
        res.status(500).json({
            message:'failed to todo'
        })
    }
})

app.delete('/todo/:id',async(req,res)=>{
const{id}=req.params;
const deletedTodo = await todoModel.findByIdAndDelete(id);
if(deletedTodo){
    res.status(200).json({
        message:'Todo deleted successfully'
    })
}else{
    res.status(500).json({
        message:'Error deleting Todo'
    })
}
})


app.listen((PORT),()=>{
    console.log(`You app is listening to port ${PORT}`);
});

