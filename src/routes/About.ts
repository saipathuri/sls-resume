import express from "express";
import About from "../model/About";
import AboutRepo from "../repo/AboutRepo";
import logger from "../config/Logger";

const aboutRouter = express.Router();
const aboutRepo = new AboutRepo();

aboutRouter.get('/', async (req, res) => {
  const aboutSection: About = await aboutRepo.getAboutSection()
  return res.status(200).json(aboutSection);
})

aboutRouter.put('/', async (req, res) => {
  const aboutSection = req.body as About;
  const didUpdate = await aboutRepo.updateAboutSection(aboutSection);
  logger.debug("didUpdate = ", didUpdate);
  if (didUpdate) { 
    return res.status(200).send();
  } else {
    return res.status(500).send();
  } 
})

export default aboutRouter;
