import { Routes, Route } from 'react-router-dom';
import Notfoundpage from '../pages/Notfoundpage';
import Homepage from '../pages/Homepage';
import Chatpage from '../pages/Chatpage';
import Layout from './Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='*' element={<Notfoundpage />} />
          <Route path='chat' element={<Chatpage />} />
        </Route>
      </Routes>

    </>)
}

export default App;
