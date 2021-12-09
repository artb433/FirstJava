import express from 'express';
import todoModel from './Schema/schema.js';
const app = express();
const PORT =3000;

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
    .where({category}).equals(category);
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
app.post('/todo',(req,res)=>{
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
const deletedTodo = await todoModel
})


app.listen((PORT),()=>{
    console.log(`You app is listening to port ${PORT}`);
});

