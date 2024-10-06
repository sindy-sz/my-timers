import AvTimerIcon from '@mui/icons-material/AvTimer';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import StopCircle from '@mui/icons-material/StopCircle';
import TextField from '@mui/material/TextField'; 
import Typography from '@mui/material/Typography';
import { useRef, useState } from 'react'

function App() {
  const [duration, setDuration] = useState<string>("");
  const [remainingTime, setRemainingTime] = useState<number>(0);
  const intRef = useRef<number | null>(null);

  function StartTimer() {
    //Assign field to variable that will be getting decremented
    setRemainingTime(+duration);
    
    //Create a ref for the Interval funtion so it can be cleared later
    intRef.current = setInterval(DecrementTime, 1000);
  }

  function DecrementTime() {
    setRemainingTime(DecrementHelper);
  }

  function DecrementHelper(oldRemainingTime: number) : number {
    let newRemainingTime = oldRemainingTime! - 1;

    if(newRemainingTime === 0){
      clearInterval(intRef.current!);
    }

    return newRemainingTime;
  }

  function ClearRemainingTime() {
    clearInterval(intRef.current!);
    setRemainingTime(0);
  }

  /*MultiInputTimeRangeField
  look at mui time fields and time pickers for setting timer value and masks for displaying remaining time
  */

  return (
    <Stack spacing={2}>

      <Typography variant="h3">My Timers</Typography>

      <TextField label="Timer Duration (seconds)" 
                type="number" 
                value={duration}
                onChange={evt => setDuration(evt.target.value)}
      />
      
      <Button variant="contained" 
              endIcon={<AvTimerIcon />}
              disabled={duration === "" || remainingTime !== 0}
              onClick={StartTimer}
              >
        Start Timer
      </Button>

      <Button variant="contained" 
              endIcon={<StopCircle/>}
              onClick={ClearRemainingTime}
              >
        Cancel Timer
      </Button>

      <Typography variant="h3">
        { remainingTime }
      </Typography>

    </Stack>
  )
}

export default App
