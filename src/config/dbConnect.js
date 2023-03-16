import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alura:ghp3f64le@aluranodeexpressapi.t6yhh6w.mongodb.net/alura-node-express-api");

let db = mongoose.connection;

export default db;
