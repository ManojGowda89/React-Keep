import { TextField, Button } from "@mui/material"; // Import Material-UI components

// eslint-disable-next-line react/prop-types
export default function CreateNotes({ inputtext, getinputtext, handelsavenotes  }) {
    let valleft;
    // eslint-disable-next-line react/prop-types
    valleft = 100 - inputtext.length;
    return (
      <div className="create-notes">
        <TextField
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          placeholder="Create a note..."
          onChange={(e) => getinputtext(e.target.value)}
          value={inputtext}
          inputProps={{ maxLength: 100 }}
        />
        <div className="footer">
          <span>Left {valleft}</span>
          <Button onClick={handelsavenotes } variant="contained" color="primary">
            Save
          </Button>
        </div>
      </div>
    );
}
