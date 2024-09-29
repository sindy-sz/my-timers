import AvTimerIcon from '@mui/icons-material/AvTimer';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField'; 
import Button from '@mui/material/Button'
import { useState } from 'react'
import Typography from '@mui/material/Typography';

function App() {
  const [duration, setDuration] = useState<number | null>(null);
  const [remainingTime, setRemainingTime] = useState<number | null>(duration);

  return (
    <Stack spacing={2}>

      <Typography variant="h3">My Timers</Typography>

      <TextField label="Timer Duration (seconds)" 
                type="number" 
                value={duration??""}
                onChange={evt => setDuration(+evt.target.value)}
      />
      
      <Button variant="contained" 
              endIcon={<AvTimerIcon />}
              onClick={() => {
                setRemainingTime(duration);
                setInterval(() => {
                  setRemainingTime((previous) => {
                    let next = previous! - .5;
                    return next;
                  });
                }, 500)}
              }
              >
        Start Timer
      </Button>

      <Typography variant="h3">
        { remainingTime }
      </Typography>

    </Stack>
  )
}

export default App
