
import { Container, Typography } from '@mui/material'; // Import Container and Typography from Material UI
import Notes from "./components/Notes";

export default function App() {
  return (
    <Container maxWidth="md"> {/* Use Container component for layout */}
      <Typography variant="h4" align="center" gutterBottom> {/* Use Typography for headings */}
        Notes
      </Typography>
      <Notes/>
    </Container>
  );
}
