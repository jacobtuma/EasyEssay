import Topic from "../models/Topics";
import express from "express";

const router = express.Router();

function findSpecificDistributor(req, res){
    Topic.findById('58c1e6d4cf2951873d497e5d').then(data => {
        res.json(data);
    });
}

function findSpecificTopic(req, res){
    Topic.findById(req.params.id).then(data => {
        res.json(data);
    });
}

function findCategory(req, res){
    Topic.find({Category: req.params.category}).then(data => {
        res.json(data);
    });
}

function listTopics(req, res){
    Topic.list().then(data => {
        res.json(data);
    });
}

router.route("/").get(listTopics);
router.route("/topic/:id").get(findSpecificTopic);
router.route("/category/:category").get(findCategory);

export default router;