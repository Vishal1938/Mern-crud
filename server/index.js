const express=require("express");
require("./database/db");
//const dotenv=require("dotenv");

//const Connection=require("./database/db");

const app = express()
const port = 5000

//dotenv.config();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

Connection(username,password);*/

