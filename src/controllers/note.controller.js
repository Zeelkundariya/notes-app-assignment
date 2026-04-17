const Note = require('../models/note.model');

//Q-1
const createNote = async (req, res) => {
    try {
        const { title, content, category, isPinned } = req.body;
        const note = new Note({ title, content, category, isPinned });
        await note.save();
        res.status(201).json({success: true, message: 'Note created successfully', data: note });
    } catch (err) {
        res.status(500).json({success: false, message: 'Error creating note', data: err });
    }
};

module.exports = { createNote };
