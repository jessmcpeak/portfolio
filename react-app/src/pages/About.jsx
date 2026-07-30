/*
  About.jsx — About Page
  ========================
  Two-column layout: photo on the left, "Hello there," heading + bio on the right.
  Uses the shared <Layout> component for the standard header and footer.
*/

import Layout from '../components/Layout.jsx'

function About() {
  return (
    <Layout>
      {/*
        .about-layout is a CSS Grid with two columns (defined in index.css).
        On mobile it collapses to a single column.
      */}
      <div className="about-layout">

        {/*
          The photo placeholder. When you have a real headshot, replace
          the <div> with:
            <img src="/images/headshot.jpg" alt="Jess McPeak" className="about-photo" />
        */}
        <div className="about-photo" aria-hidden="true" />

        {/* Text content */}
        <div className="about-text">
          {/* h2 inherits the periwinkle Fraunces style from index.css */}
          <h2>Hello there,</h2>

          <p>
            I&rsquo;m Jess, a graphic and UI/UX designer who also writes the
            front-end code to bring my work to life. I hold a BA in Design from
            UC Davis, where I earned the Citation for Outstanding Performance,
            and I currently design for the Santa Barbara County Fire Safe Council
            on contract: brand-aligned print and digital materials, community
            maps, and their impact report.
          </p>

          <p>
            My background runs from brand identity and editorial layout to
            interactive prototyping and front-end development, with a handful of
            hackathon wins along the way. I&rsquo;m happiest doing
            human-centered work: designs that are accessible, clear, and built to
            actually help, and I&rsquo;m looking for a full-time role where I can
            do exactly that.
          </p>
        </div>

      </div>
    </Layout>
  )
}

export default About
