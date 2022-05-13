import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<JournalScreen />}/>
          <Route path="/*" element={<LoginScreen />} /> 
          <Route path="/auth/*" element={<AuthRouter />} />
         
        </Routes>

      </div>
        
    </BrowserRouter>

    
  )
}
