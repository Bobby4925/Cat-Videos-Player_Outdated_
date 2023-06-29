import express from 'express'
import cors from 'cors'
const app = express();
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
app.use(cors());
app.use(express.json());


app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/getvideos",async (req,res) =>{
  const length = await prisma.cat_Videos.count();
  const num = Math.floor(Math.random() * length); 
  console.log("Thing" + num)
  const video = await prisma.cat_Videos.findMany({
    where:{
      id:num + 1, 
    },
    select:{
      url: true
    }
  }
  ); 
  res.send(video);
  console.log(video)
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});

/*
select:{
        url:true
  }
  */