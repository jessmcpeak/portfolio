/*
  ProjectCard.jsx — Work Listing Card
  =====================================
  A reusable card that shows a project thumbnail, title, description,
  and a "Read More" link. Used on both the Work index page and the Home page.

  KEY REACT CONCEPT — PROPS:
  Props ("properties") are how a parent component passes data to a child.
  They work like function parameters. When you write:
    <ProjectCard title="My Project" description="Some text" href="/work/foo" />
  React calls ProjectCard({ title, description, href }).

  PROPS THIS COMPONENT ACCEPTS:
    title       (string)  — project title displayed as an h2
    description (string)  — short description paragraph
    href        (string)  — URL the "Read More" link points to
    imgSrc      (string, optional) — image URL; if omitted, grey placeholder shows
    imgAlt      (string, optional) — alt text for accessibility
    reversed    (boolean, optional) — if true, text is on the left, image on the right
*/

import { Link } from 'react-router-dom'

function ProjectCard({ title, description, href, imgSrc, imgAlt = '', reversed = false }) {
  /*
    Template literal to build the class name.
    When reversed is true:  className = "project-card project-card--reversed"
    When reversed is false: className = "project-card "
    (The trailing space is harmless — browsers ignore it.)
  */
  const cardClass = `project-card ${reversed ? 'project-card--reversed' : ''}`

  return (
    <article className={cardClass}>
      {/*
        If imgSrc is provided, render a real <img>.
        If not, the <div> with the grey placeholder background shows instead.
        The `alt` attribute is important for screen readers — describe
        what's in the image, not "image of..." or "photo of...".
      */}
      {imgSrc
        ? <img src={imgSrc} alt={imgAlt} className="project-card__img" />
        : <div className="project-card__img" aria-hidden="true" />
      }

      {/* Text content area */}
      <div className="project-card__content">
        <h2>{title}</h2>
        <p>{description}</p>

        {/*
          <Link> for internal navigation (stays in the React app).
          `btn btn--cta` applies the pill-button style in a larger size.
        */}
        <Link to={href} className="btn btn--cta" style={{ alignSelf: 'flex-start' }}>
          Read More &rarr;
        </Link>
      </div>
    </article>
  )
}

export default ProjectCard
