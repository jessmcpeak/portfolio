/*
  Work.jsx — Work Index Page
  ============================
  Lists all portfolio projects as alternating image-left / image-right cards.

  KEY REACT CONCEPT — DATA-DRIVEN RENDERING:
  Instead of writing five separate <ProjectCard> tags by hand, we define
  a `projects` array and use .map() to render a card for each item.
  This makes it trivial to add, remove, or reorder projects later.

  The `reversed` prop on every other card (index % 2 !== 0) creates the
  alternating layout: odd cards have the image on the right instead of left.
*/

import Layout from '../components/Layout.jsx'
import ProjectCard from '../components/ProjectCard.jsx'

// Project data lives here. To add a new project, add an object to this array.
const projects = [
  {
    id: 'sbcfsc',
    title: 'Wildfire safety education design for the Santa Barbara County Fire Safe Council',
    description: "Designing across the council's wildfire-preparedness board game, its education materials, and its 2025 Impact Report.",
    href: '/work/sbcfsc',
  },
  {
    id: 'ucd',
    title: 'Prototyping Resilience: serious games for wildfire preparedness at UC Davis',
    description: 'Games that get whole communities to rehearse a wildfire evacuation while the stakes are still low, from a UC Davis design research project I helped facilitate.',
    href: '/work/ucd',
  },
  {
    id: 'dcp',
    title: 'Brand identity and concert design for the Davis Chamber Players',
    description: 'Ongoing freelance for a chamber-music nonprofit: from a bass-clef logo to the posters, programs, and ads for each concert season since 2023.',
    href: '/work/dcp',
  },
  {
    id: 'hackathons',
    title: 'Designing with developers & winning at hackathons',
    description: 'On four hackathon teams I led the concept, UX, and pitch while developers built the product — three of the four won awards.',
    href: '/work/hackathons',
  },
  {
    id: 'yarn',
    title: 'YARN: multimodal storytelling experience for elderly people',
    description: 'A physical card deck and companion app that help older adults share their life stories with family, in whatever way feels most comfortable to them.',
    href: '/work/yarn',
  },
]

function Work() {
  return (
    <Layout>
      <div className="work-grid">
        {/*
          .map((project, index) => ...) gives us both the project object
          and its position (0, 1, 2, ...).

          index % 2 !== 0  → true for index 1, 3 (second card, fourth card, ...)
          Those cards get reversed=true so the image moves to the right.
        */}
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}           // unique key React needs for list items
            title={project.title}
            description={project.description}
            href={project.href}
            reversed={index % 2 !== 0} // alternates: false, true, false, true, false
          />
        ))}
      </div>
    </Layout>
  )
}

export default Work
