import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/rooms.js";
import { verifyAdmin } from "../utils/verifyToken.js"
const router = express.Router();

//Create
router.post("/:hotelid",verifyAdmin,createRoom);

//Update
router.put("/:id",verifyAdmin,updateRoom);


//Delete
router.delete("/:id/:hotelid",verifyAdmin,deleteRoom);

//Get
router.get("/:id",getRoom);


//GetAll
router.get("/", getRooms);

export default router