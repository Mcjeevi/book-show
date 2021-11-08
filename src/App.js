import { useState } from 'react';
import './App.css';
import BookTickets from './components/BookTickets';

function App() {
  const [step, setStep] = useState();
  const handleStepChange = (val) => {
    setStep(val)
  }
  return (
    <div className="App">
      <div className="clearfix mt-5">
        <ul className="progressBar">
          <li className={(
            step === 1 ? 'active' : '')
          }>Pick your show</li>
          <li className={(
            step === 2 ? 'active' : '')
          }>Select seats</li>
          <li className={(
            step === 3 ? 'active' : '')
          }>Tickets</li>
        </ul>
      </div>

      <div className="clearfix mt-2">
        <BookTickets handleStepChange={handleStepChange} />
      </div>
    </div>
  );
}

export default App;
