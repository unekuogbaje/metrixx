import { Routes, Route } from 'react-router-dom';
import Dashboard from './routes/dashboard/dashboard';
import Conversations from './routes/conversations/conversations';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard/>}>
          
        </Route>
        <Route path='conversations' element={<Conversations/>} />
      </Routes>
    </div>
  );
}

export default App;
