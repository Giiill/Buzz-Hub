import { Notfoundpage } from '../pages/Notfoundpage';
import Homepage from '../pages/Homepage';
import Chatpage from '../pages/Chatpage';
import { Routes, Route } from 'react-router-dom'; 


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/not' element={<Notfoundpage />} />
        <Route path='/chat' element={<Chatpage />} />
      </Routes>
    </div>)
}

export default App;
