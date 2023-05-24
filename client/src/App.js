import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home, Login, Signup} from './Components/Pages';

function App () {
    return (
        <BrowserRouter>
        <Routes>
          <Route path='home' element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    );
};

export default App;