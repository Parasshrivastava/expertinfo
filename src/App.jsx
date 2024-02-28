0
import './App.css'
import AdminHomePage from './pages/adminpages/AdminHomePage'
import AdminLoginPages from './pages/adminpages/AdminLoginPages'
import LandingPages from './pages/userpages/LandingPages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminExpreg from './pages/adminpages/AdminExpreg'
import AdminExpdisplay from './pages/adminpages/AdminExpdisplay'
import AdminExpcatreg from './pages/adminpages/AdminExpcatreg'
import AdminExpcatdisplay from './pages/adminpages/AdminExpcatdisplay'


function App() {
  
  
  return (
    <>

        <Router>
          <Routes>
            <Route path='/' element={<LandingPages />} />
            <Route path='/admin' element={<AdminLoginPages />} />
            <Route path='/admin/adminhome' element={<AdminHomePage />} />
            <Route path='/admin/expreg' element={<AdminExpreg />} />
            <Route path='/admin/expdisplay' element={<AdminExpdisplay/>} />
            <Route path='/admin/expcatreg' element={<AdminExpcatreg/>} />
            <Route path='/admin/expcatdisplay' element={<AdminExpcatdisplay/>} />



            /admin/expdisplay




            


          </Routes>
        </Router>


      

    </>
  )
}

export default App
