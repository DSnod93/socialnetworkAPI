const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    addReaction,
    updateThought,
    deleteThought,
    removeReaction
} = require('../../controllers/thought-controller')

// GET to get all thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)

// GET to get a single thought by its _id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

// GET thought reactions for specific id
router
    .route('/:thoughtId/reactions')
    .post(addReaction)

    // GET specific reaction for the thought
router
    .route('/:thoughtId/:reactionId')
    .delete(removeReaction)

module.exports = router;