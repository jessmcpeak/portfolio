/*
  Hackathons.jsx — Hackathons Case Study
  ========================================
  Designing with developers & winning at hackathons.
*/

import Layout from '../../components/Layout.jsx'

function CaseSection({ heading, children, showImg = false }) {
  return (
    <section className="case-section">
      <h3 className="case-section__heading">{heading}</h3>
      <div className="case-section__body">
        {children}
        {showImg && <div className="case-section__img" aria-hidden="true" />}
      </div>
    </section>
  )
}

function Hackathons() {
  return (
    <Layout>
      <div className="case-study-hero" aria-hidden="true" />

      <div className="case-study-intro">
        <div className="case-study-intro__img" aria-hidden="true" />
        <div className="case-study-intro__meta">
          <h2>Designing with developers &amp; winning at hackathons</h2>
          <p>
            All four happened at UC Davis, and each was the same basic challenge: make
            something real out of a raw idea in 24 to 36 hours, usually with people
            I&rsquo;d just met.
          </p>
          <p>
            My part was never the code. I worked out what we were making and who it was
            for. From there I designed the interface and put together the pitch. Three of
            the four teams won something: Best AI Hack and Best Use of Neurelo at
            SFHacks 2024, Best Local Hack at SacHacks V, and Best TreeDavis Hack at
            HackDavis 2023.
          </p>
        </div>
      </div>

      <CaseSection heading="My roles: concept, UI/UX, and presentation" showImg>
        <p>
          In practice that meant figuring out the problem and the audience early, then
          creating wireframes and prototypes in Figma. At the end I wrote and delivered
          the demo. The developers built the product; my job was to give them a clear,
          buildable design to work from and to make sure we could explain it well when
          time ran out.
        </p>
        {/*
          JSX note: <ul> inside JSX works exactly like HTML.
          Each <li> gets a `key` for React's reconciliation, but since this
          list is static (it never changes), the text itself is a fine key.
        */}
        <p>On every team I owned three things:</p>
        <ul>
          <li><strong>Concept development</strong> — shaping the &ldquo;how might we,&rdquo; defining who the product was for, and deciding what was worth making in the time we had.</li>
          <li><strong>UI/UX design</strong> — wireframes, visual systems, and interactive prototypes in Figma, designed to be both usable and convincing on a deadline.</li>
          <li><strong>Documentation &amp; presentation</strong> — the write-ups, slides, and demos that communicated the work and, in a hackathon, won the room.</li>
        </ul>
      </CaseSection>

      <CaseSection heading="Spotlight: Storycraft" showImg>
        <p>
          <strong>SFHacks 2024 &middot; Winner, Best AI Hack &middot; Winner, Best Use of Neurelo (Company Track)</strong>
        </p>
        <p>
          Storycraft is an AI-powered, choose-your-own-adventure storybook for children,
          with parents as collaborators. A child invents a hero, drops them into a world,
          and steers the story scene by scene, with the narrative and artwork generating
          as they go.
        </p>
        <p>
          My contribution was the concept and the experience design. We started on paper,
          sketching functionality and narrative flow, then moved into Figma, where I
          designed the layouts and the visual language. The design is deliberately
          typography-led, drawing on the way word and image interact in children&rsquo;s
          books and the evocative symbolism of tarot, so the content of each story stays
          the focus while text and image play together without fighting for legibility.
        </p>
        <p>
          This was also where I got my clearest lesson in designing for feasibility. How
          important an element is to a design has nothing to do with how hard it is to
          build, and much of my time went into talking with the developers about what was
          realistic and reshaping the design to fit an AI-integrated build none of us had
          attempted before. The result was a working prototype that won both its
          categories.
        </p>
      </CaseSection>

      <CaseSection heading="Three more, in brief" showImg>
        <h4>HackerMatch &mdash; SacHacks V &middot; Winner, Best Local Hack</h4>
        <p>
          A social platform that helps hackathon participants find teammates with
          complementary skills, turning the chaotic scramble for a team into something
          intentional. I developed the concept, designed the UI/UX for profiles,
          discovery, and team formation, and produced the presentation. Built by the team
          in Next.js, TypeScript, and Firebase.
        </p>

        <h4>TreeDatalize &mdash; HackDavis 2023 &middot; Winner, Best TreeDavis Hack</h4>
        <p>
          An educational tool that turns dense urban-forestry data for the City of Davis
          into two clear interactive visualizations: the economic case for planting trees
          and the link between a tree&rsquo;s size and the electricity it saves through
          shade. I shaped the concept with our contact at TreeDavis and designed how the
          data became legible and persuasive; the team built it in Python with Dash and
          Plotly. Made with a group of strangers in 24 hours.
        </p>

        <h4>WattNow &mdash; HackDavis 2025</h4>
        <p>
          An online platform that turns the problem of e-waste into an opportunity for
          digital equity, guiding people to dispose of old electronics responsibly and
          pass usable devices to neighbors who need them. I worked on the concept and
          UI/UX and produced the presentation materials. This one didn&rsquo;t place, and
          the honest story is about the team: we started too broad, made the hard call to
          split and narrow our focus, and still delivered a functional prototype &mdash;
          a lesson in communication and compromise as much as in design.
        </p>
      </CaseSection>

      <CaseSection heading="What this demonstrates">
        <ul>
          <li><strong>Concept-to-pitch ownership:</strong> I can take an ambiguous idea and make it coherent, usable, and convincing, fast.</li>
          <li><strong>UX under real constraints:</strong> a 24-to-36-hour build forces clear priorities and constant trade-offs, and I&rsquo;m comfortable making them.</li>
          <li><strong>Working with developers:</strong> I design with feasibility in mind and adapt to it, which is why these teams could actually deliver.</li>
          <li><strong>Communication and storytelling:</strong> the documentation and presentation are mine, and in a hackathon they&rsquo;re often the difference between a good idea and a winning one.</li>
        </ul>
      </CaseSection>

      <CaseSection heading="What it taught me">
        <p>
          Designing on a 36-hour clock got me comfortable making fast calls and letting
          go of the parts we couldn&rsquo;t build in time. What I took most from working
          next to developers is how much it helps to hand them something they can actually
          build, and to be the one who can explain it. Winning three of the four felt
          good. The part that stuck with me is that I can walk into an unsolved problem
          with the clock already running and find my footing.
        </p>
      </CaseSection>

    </Layout>
  )
}

export default Hackathons
