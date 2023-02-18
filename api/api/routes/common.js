import express from "express";

import { submitEvent, getEvent, getToken, getAllEvents, getAllTokens, getTreeProof, postEvent, postToken } from "../controllers/admin";

const router = express.Router();

router.post("/:id", validateObjectId, submitEvent);

router.get("/:address", validateAddress, getEvent);

router.get("/events", getAllEvents);

router.get("/:address/:token_id", validateAddress, validateTokenId, getToken);

router.get("/:adress", getAllTokens);

router.get("/:event/:signature", validateEvent, validateSignature, getTreeProof);

router.post("/:address/:event/:text", validateAddress, validateEvent, validateText, postEvent);

router.post("/:event/:token_id/:name", validateEvent, validateTokenId, validateName, postToken);

export default router;
