import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {firebase, googleAuthProvider} from '../firebase/firebase-Config';
import { LoginScreen } from '../components/auth/LoginScreen';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { login } from '../actions/auth';
import { startLoadingNotes } from '../actions/notes';




export const AppRouter = () => {
  const dispatch = useDispatch();
  const [ checking, setChecking ] = useState(true);// chequea para mostrar el loading
  const [ isLoggedIn,setIsLoggedIn ] =useState(false);
  useEffect(() => {
  
    firebase.auth().onAuthStateChanged(async(user) =>{
      
      if(user?.uid){
        dispatch(login(user.uid,user.displayName));
        setIsLoggedIn(true);
        //const notes = await loadNotes(user.uid);
        dispatch(startLoadingNotes(user.uid));

      }else{
        setIsLoggedIn(false);
      }
      setChecking(false);

    });
  }, [dispatch, setChecking, setIsLoggedIn]); // se puede dejar con dispatch o [] es lo mismo 
  
  if(checking){
    return(
      <h1> Espere por favor......!!!

      </h1>)
  }
  return (
    <BrowserRouter>
      <div>
        <Routes>
        <Route path="/" element={<JournalScreen />}/>
          <Route path="/*" element={<LoginScreen />}/>
          
          <Route path="/auth/*" element={<AuthRouter />} />
      </Routes>

      </div>
        
    </BrowserRouter>

    
  )
}
