import './App.css';
import {useState} from 'react';
import TimeSlots from './components/timeSlots';
import Bikes from './components/bikes';
import range from './helpers/range';

function App() {

  const [schedule, setSchedule] = useState({})
  const [bikes, setBikes] = useState(range(7))

  const updateSchedule = (slot) => {
    if(schedule[slot]){
      const _bikes = [...bikes]
      const _schedule = {...schedule}
      _bikes.push(schedule[slot])
      delete _schedule[slot]
      setBikes(_bikes)
      setSchedule(_schedule)
    }
    if(bikes.length && !schedule[slot]){
      const _bikes = [...bikes];
      const _schedule = {...schedule}
      _schedule[slot] = _bikes.pop();
      setBikes(_bikes)
      setSchedule(_schedule)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <TimeSlots schedule={schedule} onSlotClick={updateSchedule} bikes={bikes}/>
        <Bikes bikes={bikes}/>
      </header>
    </div>
  );
}

export default App;
