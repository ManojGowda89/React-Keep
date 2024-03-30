import { useState, useEffect } from 'react';
import DisplayNotes from './DisplayNotes';
import CreateNotes from './CreateNotes';
export default function Notes() {
  const [inputtext, setInputText] = useState("");
  const [notes, setNotes] = useState([]);

  // Function to save a new note
  const handleSaveNote = () => {
    const newNote = {
      id: Date.now(),
      text: inputtext
    };
    setNotes([...notes, newNote]);
    setInputText("");
  };

  // Function to delete a note
  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  // Function to update text of a note
  const handleSaveEdit = (id, newText) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, text: newText };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  // Effect to load notes from local storage on component mount
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  // Effect to save notes to local storage whenever notes change
  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      {notes.map((note) => (
        <DisplayNotes
          key={note.id}
          id={note.id}
          text={note.text}
          onDelete={handleDeleteNote}
          onSave={(newText) => handleSaveEdit(note.id, newText)}
        />
      ))}
      <CreateNotes
        inputtext={inputtext}
        getinputtext={setInputText}
        handelsavenotes={handleSaveNote}
      />
    </>
  );
}
