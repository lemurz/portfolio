import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Research from './components/Research'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  return <div className="site-shell"><header className="site-header"><Hero /><Navbar /></header><main><About /><Research /><Projects /><Education /><Contact /></main><footer><p>© 2026 Mashrur Faiyaz. Built with React.</p></footer></div>
}
