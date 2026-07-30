/*
  Home.jsx — Landing Page
  ========================
  The home page is distinct from all other pages: it shows the site name
  as a huge display element instead of the standard compact header.

  This page does NOT use the shared <Layout> component. Instead it handles
  its own header (the big name + nav) so it can control the hero typography.

  STRUCTURE:
    <div.page-wrapper>
      <header.home-header>   ← big name + nav (home-specific)
        <Link.home-header__name>Jess L McPeak</Link>
        <Nav />
      </header>
      <main>
        <section>            ← featured project card
          <ProjectCard />
        </section>
      </main>
    </div>
*/

import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import ProjectCard from '../components/ProjectCard.jsx'

function Home() {
  return (
    <div className="page-wrapper">

      {/* Home-specific header: name is huge (scales with viewport via clamp) */}
      <header className="home-header">
        <Link to="/" className="home-header__name">
          Jess L McPeak
        </Link>
        <Nav />
      </header>

      <main>
        {/*
          The home page features the SBCFSC project as the lead/featured work.
          As more projects are added, this card could become a carousel or
          a "latest work" highlight. For now, it's one focused entry point.
        */}
        <div className="work-grid">
          <ProjectCard
            title="Wildfire safety education design for the Santa Barbara County Fire Safe Council"
            description="Designing across the council's wildfire-preparedness board game, its education materials, and its 2025 Impact Report."
            href="/work/sbcfsc"
          />
        </div>
      </main>

      <footer />
    </div>
  )
}

export default Home
