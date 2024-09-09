import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Admin from './pages/admin/Admin'
import Teacher from './pages/teacher/Teacher'

function App() {

  return (
    <>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/admin/*' element={<Admin/>}/>
        <Route path = '/teacher/*' element={<Teacher/>}/>
      </Routes>
    </>
  )
}

export default App
