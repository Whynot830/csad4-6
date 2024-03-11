import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Dialogs from './pages/Dialogs'
import Auth from './pages/Auth'
import Header from './components/Header'
import AuthContextProvider, { AuthContext } from './AuthContext'
import axios from 'axios'
import Profile from './pages/Profile'
import Callback from './components/Callback'

import { useContext } from 'react'

const Protected = ({ children }) => {
  const { loggedIn } = useContext(AuthContext)
  console.log(loggedIn);
  if (loggedIn === true) return children
  if (loggedIn === false) return <Navigate to={'/auth'}/>
  return <></>
}


function App() {
  axios.defaults.withCredentials = true

  return (
    <AuthContextProvider>
      <div className="flex flex-col items-center h-full">
        <BrowserRouter>
          <Header />
          <div className="flex p-6 overflow-auto w-full h-full">
            <Routes>
              <Route path='/auth' element={<Auth />}></Route>
              <Route exact path='/' element={<Protected><Home /></Protected>} />
              <Route path='/auth/callback' element={<Callback />} />
              <Route path='/dialogs' element={<Protected><Dialogs /></Protected>} />
              <Route path='/profile' element={<Protected><Profile /></Protected>} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </AuthContextProvider>
  )
}

export default App
