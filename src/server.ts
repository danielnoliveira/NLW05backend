import express from 'express';

const app = express();

// GET = buscar
// POST = criação
// PUT = alteração
// DELETE = deletar
// PATCH = alterar uma informação especifica

app.get('/',(req,res) => {
  return res.json({msg: 'Ola NLW 05'});
});

app.post('/users',(req,res)=>{
  return res.json({msg:'Usuario salvo com sucesso!!!'});
});


const PORT = 3333;
app.listen(PORT, () => console.log(`Server run on port ${PORT}`));