import  { useState } from 'react';
import { Card, CardContent, CardActions, Button, TextField } from "@mui/material"; // Import Typography, TextField, and other Material-UI components

// eslint-disable-next-line react/prop-types
export default function DisplayNotes({ id, text, onSave, onDelete }) {
  const [editedText, setEditedText] = useState(text); // State to hold edited text



  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <Card className="note" variant="outlined">
    <CardContent>
   <center> <h6>Auto save</h6></center>
        <TextField
          fullWidth
          multiline
          value={editedText}
          onChange={(e) => {
            setEditedText(e.target.value)
            onSave(id, e.target.value);
          
          
          }} // Update editedText state on text change
        />
      </CardContent>
      <CardActions>
      
        <Button className="delete" variant="outlined" size="small" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
