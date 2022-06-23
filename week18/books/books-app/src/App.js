import {Routes, Route, BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Books from './components/Books';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Books />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
