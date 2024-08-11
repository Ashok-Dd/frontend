import logo from './logo.svg';
import './App.css';
import { UseStateFunction } from './events/event';
import { SignUp } from './components/signup/signup';
import { ChangePassword } from './components/change password/changepassword';
import { SignIN } from './components/signin/signin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StudentsData } from './components/studentsdata/students';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<SignIN/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/changepassword' element={<ChangePassword/>}/>
       
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
