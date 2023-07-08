import express from "express";
import { directToUrl, getShortUrl } from "../controllers/link.js";

const router = express.Router();

router.route("/shorten").get(getShortUrl);

router.route("/:url").get(directToUrl);

export default router;
