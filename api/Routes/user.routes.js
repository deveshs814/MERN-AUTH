import express from "express";
import { test } from "../Controllers/user.controllers";

const Router = express.Router();

Router.get("/", test);

export default Router;
