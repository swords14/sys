import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Usei Routes em vez de Switch
import Login from './Login';
import PasswordRecovery from './PasswordRecovery';
import CreateAccount from './CreateAccount';

function App() {
  return (
    <Router>
      <Routes> {/* Substitui Switch por Routes por que o don nao usa mais Switch */}
        <Route exact path="/" element={<Login />} /> {/* Use element em vez de component */}
        <Route path="/password-recovery" element={<PasswordRecovery />} /> {/* Usando element */}
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
