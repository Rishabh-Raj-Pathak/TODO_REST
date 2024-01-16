const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./database");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const paresdPayload = createTodo.safeParse(createPayload);

  if (!paresdPayload.success) {
    return res.status(411).json({
      msg: "you sent wrong inputs",
    });
    // return;
  }
  //put in mongoDB
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo Created",
    created : "haa bhai ban gya todo",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});

  res.json({
    todos,
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  console.log("completed route is working");

  if (!parsedPayload.success) {
    return res.status(411).json({
      msg: "wrong id",
    });
  }

  //update in mongoDb
  await todo.findByIdAndUpdate(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );
  res.json({
    msg: "todo marked as completed",
  });
});

// app.delete('/delete='+{id}, async(req,res)=>{
  app.delete("/deleteTodo/:id", async (req, res) => {
    try {
      const Todo = await todo.findByIdAndDelete(req.params.id);
  
      if (!Todo) {
        res.status(404).json({
          message: "Todo not found",
        });
      } else {
        res.status(200).json({
          message: "Todo Deleted",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  });
  
  

app.listen(3001);
