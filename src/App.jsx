import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Comps/Login';
import Main from './Comps/Main';
import Notes from './Comps/Notes';
import Register from './Comps/Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/main' element={<Main/>}></Route>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/notes' element={<Notes/>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
