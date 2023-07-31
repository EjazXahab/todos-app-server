import express from 'express';
import cors from 'cors';

const app = express();
const port =process.env.PORT || 3000;


let todo = [];
app.use(express.json());
app.use(cors());


app.post('/todo', (req, res) => {
 todo.push(req.body.text);
   res.send({
    meaasge: "your todo is saved",
    data: todo
   })
})
app.get('/todos', (req, res) => {
  console.log("here is todos list");
  // console.log('responsive from sir imzammam'+ req.ip)
  res.send({
   meaasge: "your todos is saved",
   data: todos
  })
})
app.post('/water', (req, res) => {
  console.log("some one is offring water");
  // console.log('responsive from sir imzammam'+ req.ip)
  res.send('I have recive water')
})
app.get('/pizza', (req, res) => {
  console.log("some one asking for pizza");
  // console.log('responsive from sir imzammam'+ req.ip)
  res.send('here is your pizza')
})
app.get('/burger', (req, res) => {
  console.log("some one asking for burger");
  // console.log('responsive from sir imzammam'+ req.ip)
  res.send('here is your burger')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})