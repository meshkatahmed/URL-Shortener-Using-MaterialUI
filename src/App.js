import './App.css';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';

const hello = ['ami','tumi','se'];
function App() {
  return (
    <div className="App">
      <Button variant="contained">Text</Button>
      <Button>Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Autocomplete disablePortal id="combo-box-demo" options={hello} sx={{ width: 300 }} renderInput={(params) => <TextField {...params} label="Movie" />} />
    </div>
  );
}

export default App;