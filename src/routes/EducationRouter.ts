import express from "express";
import EducationRepo from "../repo/EducationRepo";
import EducationItem from "../model/EducationItem";

const educationRouter = express.Router();
const educationRepo = new EducationRepo();

educationRouter.get('/', async (req, res) => {
    const educationItems: EducationItem[] = await educationRepo.getEducationSection();
    return res.status(200).json(educationItems);
})

educationRouter.post('/', async (req, res) => {

})

educationRouter.put('/{id}', async (req, res) => {

})

export default educationRouter;
