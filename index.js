const express = require("express");

//import express from "express";

const app = new express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 5001 ;
app.listen(PORT);
