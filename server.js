const express = require("express");
const path = require("path");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended : true}));

/////acceder al archivo estatico
const carpetaStatic = path.join(__dirname, "public");
console.log("__dirname: ??? ",__dirname,'carpetaStatic: ',carpetaStatic)
app.use(express.static(carpetaStatic));///node coge esta carpeta para usar START SERVER

app.listen(5000, function (){
    console.log("Server running");
});
 