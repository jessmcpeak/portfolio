/*
  App.jsx — Root Component & Router
  ==================================
  This is the top of the component tree. Its job is to define ROUTES —
  the mapping between URL paths and which page component to render.

  React Router v6 uses <Routes> and <Route> instead of page reloads.
  When the user clicks a link, the URL changes but the browser does NOT
  fetch a new HTML file. React swaps out just the page component.

  Component tree:
    App
    └── Routes
        ├── / → Home
        ├── /work → Work
        ├── /work/sbcfsc → Sbcfsc
        ├── /work/ucd → Ucd
        ├── /work/dcp → Dcp
        ├── /work/hackathons → Hackathons
        ├── /work/yarn → Yarn
        ├── /about → About
        ├── /resume-cv → ResumeCv
        └── /contact → Contact
*/

import { Routes, Route } from 'react-router-dom'

// Page components — each is a separate file in src/pages/
import Home       from './pages/Home.jsx'
import Work       from './pages/Work.jsx'
import About      from './pages/About.jsx'
import Contact    from './pages/Contact.jsx'
import ResumeCv   from './pages/ResumeCv.jsx'

// Case study sub-pages live in src/pages/work/
import Sbcfsc     from './pages/work/Sbcfsc.jsx'
import Ucd        from './pages/work/Ucd.jsx'
import Dcp        from './pages/work/Dcp.jsx'
import Hackathons from './pages/work/Hackathons.jsx'
import Yarn       from './pages/work/Yarn.jsx'

function App() {
  /*
    <Routes> looks at the current URL and renders the first <Route>
    whose `path` matches. The `element` prop is the component to show.

    "path" strings:
      "/"          → matches exactly http://localhost:5173/
      "/work"      → matches http://localhost:5173/work
      "/work/dcp"  → matches http://localhost:5173/work/dcp
  */
  return (
    <Routes>
      <Route path="/"              element={<Home />}       />
      <Route path="/work"          element={<Work />}       />
      <Route path="/work/sbcfsc"   element={<Sbcfsc />}    />
      <Route path="/work/ucd"      element={<Ucd />}       />
      <Route path="/work/dcp"      element={<Dcp />}       />
      <Route path="/work/hackathons" element={<Hackathons />} />
      <Route path="/work/yarn"     element={<Yarn />}      />
      <Route path="/about"         element={<About />}     />
      <Route path="/resume-cv"     element={<ResumeCv />}  />
      <Route path="/contact"       element={<Contact />}   />
    </Routes>
  )
}

export default App
