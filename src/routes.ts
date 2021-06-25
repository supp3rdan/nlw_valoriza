import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlerares/ensureAdmin";
import { CreaetComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlerares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController =  new AuthenticateUserController();
const createcomplimentController =  new CreaetComplimentController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", createcomplimentController.handle);

export { router };
