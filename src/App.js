import {Routes, Route, Link} from 'react-router-dom'
import { AboutPage } from './pages/AboutPage'
import { BlogPage } from './pages/BlogPage'
import { NotFound } from './pages/NotFound'
import './App.css'
import HomePage from './pages/HomePage'
function App() {
  return (
    <>
    <div className='header'>
      <header>
        <h1 className='cover'>Cover</h1>
        <Link to="/">Home</Link>
        <Link to="/about">Blog</Link>
        <Link to="/blog">About</Link>
      </header>
    </div>
<Routes>
  <Route path='/' element={<HomePage />} />
  <Route path='/about' element={<AboutPage />} />
  <Route path='/blog' element={<BlogPage />} />
  <Route path='*' element={<NotFound />} />
</Routes>
    </>
  );
}

export default App;