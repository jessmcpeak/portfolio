/*
  Sbcfsc.jsx — SBCFSC Case Study Page
  ======================================
  Wildfire safety education design for the Santa Barbara County Fire Safe Council.

  LAYOUT PATTERN used on all case study pages:
    1. Full-width hero image
    2. Intro: thumbnail (left) + h2 title + metadata (right)
    3. Content sections: h3 heading (left column) + body text (right column)
       — This is the editorial "label + content" two-column grid.

  KEY REACT CONCEPT — REUSING A LOCAL HELPER COMPONENT:
  CaseSection is defined at the bottom of this file. It's a small
  component used only here, so it lives in the same file rather than
  getting its own file in /components. This keeps related code together
  and avoids over-engineering for a one-time-use piece.
*/

import Layout from '../../components/Layout.jsx'

/*
  CaseSection — a helper component for the editorial two-column sections.
  Props:
    heading (string) — the h3 label on the left
    children        — the body content on the right (can be any JSX)
    showImg (bool)  — if true, renders a grey placeholder image below the body
*/
function CaseSection({ heading, children, showImg = false }) {
  return (
    <section className="case-section">
      <h3 className="case-section__heading">{heading}</h3>
      <div className="case-section__body">
        {children}
        {/* Conditionally render the image placeholder */}
        {showImg && <div className="case-section__img" aria-hidden="true" />}
      </div>
    </section>
  )
}

function Sbcfsc() {
  return (
    <Layout>
      {/* 1. Full-width hero image placeholder */}
      <div className="case-study-hero" aria-hidden="true" />

      {/* 2. Intro block: thumbnail + title + metadata */}
      <div className="case-study-intro">
        <div className="case-study-intro__img" aria-hidden="true" />
        <div className="case-study-intro__meta">
          <h2>Wildfire safety education design for the Santa Barbara County Fire Safe Council</h2>
          <p><strong>Case Study</strong> &middot; Jess L McPeak &middot; Contract Graphic Designer, since Sept 2025</p>
        </div>
      </div>

      {/* 3. Content sections */}

      <CaseSection heading="Overview">
        <p>
          The Santa Barbara County Fire Safe Council (SBCFSC) is the county branch of
          the California Fire Safe Council, and one of the three largest in the state.
          Its mission is to promote wildfire safety through education and action, and it
          serves the whole county, including 67 Firewise communities and many rural,
          low-income, and bilingual ones.
        </p>
        <p>
          I joined the council as a contract graphic designer in September 2025. My work
          has covered four main things: visual assets for a wildfire-preparedness board
          game, a set of branded templates for the council&rsquo;s education materials,
          the finished course materials built from those templates, and a redesign of the
          2025 Impact Report. Most of it came down to one problem: holding a single
          visual identity across formats as different as a printed game board and a
          classroom slide deck.
        </p>
      </CaseSection>

      <CaseSection heading="The wildfire serious game and its community maps" showImg>
        <p>
          The game is a tabletop game that teaches wildfire evacuation through play.
          Players evacuate across a real map of their own town while one player spreads
          fire using spinners for wind, location, day, and time. Chance Cards add
          realistic complications &mdash; downed power lines, heavy smoke, abandoned
          cars, spotty cell service &mdash; and reward the habits that actually help
          in an evacuation: knowing your neighbors, keeping a Go Bag, having driven
          your route before.
        </p>
        <p>
          The game started in Tom Maiorana&rsquo;s research group at UC Davis. My early
          contributions were to the instructions and production methods. By the time it
          reached SBCFSC the design was settled; my job there was the visual side: the
          printed pieces, and a version of the board for each community the council serves.
        </p>
        <p>
          The community boards are the bulk of that work. Each board is a real map of one
          town drawn in Adobe Illustrator. I styled the actual streets and landmarks in
          the council&rsquo;s colors, then laid a numbered play grid over the top, with a
          compass, custom landmark markers, and spot-card holders. The real geography is
          the point: people practice leaving on the roads they actually drive. I made
          boards for ten towns and set up the map as a repeatable system I could adapt
          town by town.
        </p>
        <p>
          The spinners use a warm amber-to-ember gradient so the fire controls look
          different at a glance from the green used everywhere else. The Chance Cards are
          built as a template the council can reuse and extend without needing a designer
          in the loop.
        </p>
      </CaseSection>

      <CaseSection heading="Extending the brand into an education toolkit" showImg>
        <p>
          The council also asked me to redesign and unify its public education materials.
          I took its existing brand &mdash; the logo, forest-green and amber colors,
          display type &mdash; and built it into a reusable system: Montserrat SemiBold
          for headings, Source Sans 3 for body text, a defined grid, and color-coded
          roles by audience. The California Fire Safe Council style guide had
          inconsistencies I resolved into one coherent set of rules staff could follow.
        </p>
        <p>
          The deliverable was a suite of slide-deck and print-document templates,
          color-coded by audience: generic/internal, home hardening, landscaping and
          firescaping, realtors, and teachers and students. The council&rsquo;s education
          program manager described the result as a strong suite of resources.
        </p>
      </CaseSection>

      <CaseSection heading="Materials for the fire-resilience certificate courses">
        <p>
          I then used the templates to produce the finished materials for two of the
          council&rsquo;s fire-resilience certificate courses. The landscaping and
          firescaping course, run in partnership with the Santa Barbara Botanic Garden for
          landscape designers and architects, got a slide deck and a companion booklet.
          The home hardening course got a slide deck, workbooks, and a trifold brochure.
          Both used the audience styling from the template system.
        </p>
      </CaseSection>

      <CaseSection heading="2025 Impact Report" showImg>
        <p>
          The 2025 Impact Report is the council&rsquo;s yearly summary of its programs,
          finances, partners, and community stories. It started as an 18-page Canva file
          and I rebuilt it from scratch in Adobe InDesign for print.
        </p>
        <p>
          The cover pairs the large <em>IMPACT REPORT 2025</em> lockup with a
          duotone-green photo of the Santa Barbara foothills. Inside, section pages run
          full-bleed deep green, with amber headings and a two-column layout. The same
          system carries through the council&rsquo;s three program areas and the full
          report. After Juliet Costell and Executive Director Anne-Marie Parkinson
          approved the first draft, I worked through a revision round covering brand
          colors, icons, corrected financial figures, QR codes, and page trims.
        </p>
      </CaseSection>

      <CaseSection heading="Reflection">
        <p>
          Across these projects I moved between fairly different kinds of design: drawing
          maps, building template systems, and laying out a print report. The common
          thread was making wildfire-safety information clear for a wide mix of people.
        </p>
        <p>
          The part I care about most is how much of it was built to be handed off. The
          maps follow a system I can repeat for the next town, the card deck and templates
          are things the council can keep using without me, and the Impact Report is built
          properly for print. I like design that keeps working after the final files go out.
        </p>
      </CaseSection>

    </Layout>
  )
}

export default Sbcfsc
