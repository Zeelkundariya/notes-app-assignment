const express = require('express');
const router = express.Router();

const {
     createNote,
     createBulkNotes,
     getAllNotes,
     getNotesById,
     replaceNote,
     updateSpecificFields,
     deleteNote,
     deleteBulkNotes
     
} = require('../controllers/note.controller');


// CRUD routes
router.post('/', createNote);
router.post('/bulk', createBulkNotes);
router.get('/', getAllNotes);
router.get('/:id', getNotesById);
router.put('/:id', replaceNote);
router.patch('/:id', updateSpecificFields);
router.delete('/bulk', deleteBulkNotes);
router.delete('/:id', deleteNote);

module.exports = router;