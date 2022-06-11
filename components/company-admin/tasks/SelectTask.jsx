import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectTask() {
  const [task, setTask] = React.useState('');

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">All Tasks</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={task}
          label="All Tasks"
          onChange={handleChange}
        >
          <MenuItem value={"task 1"}>Task 1</MenuItem>
          <MenuItem value={"task 2"}>Task 2</MenuItem>
          <MenuItem value={"task 3"}>Task 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
