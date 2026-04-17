const express = require('express');
const router = express.Router();

const {
     createNote,
     createBulkNotes,
     getAllNotes,
     
} = require('../controllers/note.controller');


// CRUD routes
router.post('/', createNote);
router.post('/bulk', createBulkNotes);
router.get('/', getAllNotes);

module.exports = router;