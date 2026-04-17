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


//Q-2
const createBulkNotes = async(req,res) =>{
    try{
        const {notes} = req.body;
        const bulkNotes = notes.map(note => new Note(note));
        await Note.insertMany(bulkNotes);
        res.status(201).json({success: true, message: `${notes.length} notes created successfully`, data: bulkNotes });
    }
    catch(err){
        res.status(500).json({success: false, message: 'Error creating notes', data: err });
    }
}

//Q-3
const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json({success: true, message: 'Notes fetched successfully', data: notes });
    } 
    catch (err) {
        res.status(500).json({success: false, message: 'Error retrieving notes', data: err });
    }
};


//Q-4
const getNotesById = async(req,res) =>{
    try{
        const {id} = req.params;
        const note = await Note.findById(id);
        res.status(200).json({success: true, message: 'Note fetched successfully', data: note });
    }
    catch(err){
        res.status(500).json({success: false, message: 'Error retrieving note', data: err });
    }
}

module.exports = { createNote, createBulkNotes, getAllNotes, getNotesById };
