import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes, useLocation } from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Categories from './components/Categories'
import About from './components/About'
import Profile from './components/Profile'
import Contact from './components/Contact'
import AddBlog from './components/AddBlog'
import MyBlog from './components/MyBlogs'
import Signup from './components/Signup'
import EditBlog from './components/EditBlog'
import MyBlogs from './components/MyBlogs'
import CreateBlog from './components/CreateBlog';
import AdminLayout from './components/AdminLayout'
import AdminDashboard from './components/AdminDashboard'
import AdminMessages from './components/AdminMessages'






function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();
  const hideNavbar = location.pathname==='/' ||
  location.pathname==='/s';

  return (
    <>
      {!hideNavbar && <NavBar />}
      <div style={{ margintop: '80px' }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/s" element={<Signup/>} />
          <Route path="/h" element={<Home />} />
          <Route path="/add-blog" element={<AddBlog />} />
          <Route path="/c" element={<Categories />} />
          <Route path="/a" element={<About />} />
          <Route path="/con" element={<Contact />} />
          <Route path="/p" element={<Profile />} />
          <Route path="/my-blogs" element={<MyBlogs/>} />
          <Route path="/edit-blog/:id" element={<EditBlog />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/admin" element={<AdminLayout />}/>
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/messages" element={<AdminMessages />} />
        </Routes>
      </div>

    </>
  )
}

export default App;