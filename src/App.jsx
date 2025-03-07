import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router,Route,Routes,Link, useNavigate } from 'react-router-dom';
import { VerificationCinPg, VerificationImPg } from './views/verification';
import { InscriptionFormMethod } from './views/inscription-form';

function App() {

  
  return <>
            <Router>
                <Routes>
                    <Route path='/' element={<VerificationImPg/>} />
                    <Route path='/verification-cin.html' element={<VerificationCinPg/>} />
                    <Route path='/form-inscription.html' element={<InscriptionFormMethod/>} />
                </Routes>
            </Router>
        </>;
}


export default App