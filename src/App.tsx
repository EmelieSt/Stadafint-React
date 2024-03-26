import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/main/Navbar/Navbar';
import Main from './Components/main/Main';
import SignInSide from './Components/SignInSide';
import Main2 from './Components/main2/Main2';
import FooterMain from './Components/main/Footer/FooterMain';
import 'firebase/auth';

function App() {
  return (
     <>
     
      <BrowserRouter>
      <Navbar />
          <Routes>
         <Route path="" index element={<Main />} />
          <Route path="/loggain" element={<SignInSide />} />
          <Route path="/main2" element={<Main2 />} />
          </Routes>
      <FooterMain />
      </BrowserRouter>

   </>
  );
}

export default App;
