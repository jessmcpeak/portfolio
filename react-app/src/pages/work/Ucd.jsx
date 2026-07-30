/*
  Ucd.jsx — Prototyping Resilience Case Study
  =============================================
  Serious games for wildfire preparedness at UC Davis Department of Design.
*/

import Layout from '../../components/Layout.jsx'
import { Link } from 'react-router-dom'

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

function Ucd() {
  return (
    <Layout>
      <div className="case-study-hero" aria-hidden="true" />

      <div className="case-study-intro">
        <div className="case-study-intro__img" aria-hidden="true" />
        <div className="case-study-intro__meta">
          <h2>Prototyping Resilience</h2>
          <p>Serious games for wildfire preparedness &middot; UC Davis Department of Design</p>
          <p><strong>Role:</strong> Undergraduate Research Assistant (Jun 2024 – Sep 2025) &rarr; Staff Research Associate (Feb 2026 – Sept 2026)</p>
          <p><strong>Project lead:</strong> Associate Professor Tom Maiorana</p>
          <p><strong>What I did:</strong> Community event facilitation &middot; design initiative &middot; visual communication &middot; serious-game development</p>
          <p><strong>Tools:</strong> Adobe Creative Suite &middot; Google Workspace</p>
        </div>
      </div>

      <CaseSection heading="Using games to help communities rehearse evacuation">
        <p>
          Prototyping Resilience is a UC Davis design research project built on a
          straightforward idea: a game can get a community to rehearse a wildfire
          evacuation before a real one forces the decision. Players work through the
          choices of an emergency while the stakes are still low. I spent about a year
          on the project across two roles, running game sessions with communities and
          doing the organizing and communication work that supported them. It worked well
          enough that the concept later grew into applied client work I went on to own
          with the Santa Barbara County FireSafe Council.
        </p>
      </CaseSection>

      <CaseSection heading="Why a game: serious games as low-fidelity prototypes" showImg>
        <p>
          Wildfire preparedness is hard to make stick. The information is out there, but
          it&rsquo;s abstract, and the moment people most need an evacuation plan is the
          moment they can least think clearly. Prototyping Resilience tries something
          different: it treats serious games (games made for learning rather than
          entertainment) as low-fidelity prototypes of a real experience. Played at a
          table, a game can carry enough of the pressure and trade-offs of an evacuation
          to feel real while staying safe enough for people to experiment and even fail.
          Play through it once and you&rsquo;ve already started planning.
        </p>
        <p>
          Part of the work was figuring out which kind of game does that best, so the
          project built more than one format, from a town-specific board game to an
          active &ldquo;evacuation cornhole&rdquo; game.
        </p>
      </CaseSection>

      <CaseSection heading="My role across two phases">
        <p>
          I joined as an Undergraduate Research Assistant in June 2024 and came back
          later as a Staff Research Associate. In the first role I did the hands-on work
          of developing and running the games in the field. In the second I focused more
          on developing the project further and communicating it to a wider audience.
        </p>

        <h4>Running the Tomales and Watsonville community events</h4>
        <p>
          The game only works when it&rsquo;s in front of real people, and facilitating
          a session takes some skill: keeping a heavy subject approachable while getting
          through the rules quickly, so people spend their time playing instead of
          listening to instructions. I helped run two community events. In Tomales,
          residents played the town-specific board game as themselves, moving across a
          map of their own community while local fire personnel controlled the fire. In
          Watsonville, the format was an &ldquo;evacuation cornhole&rdquo; game &mdash;
          a more physical way to get people thinking about the same decisions.
        </p>

        <h4>Reorganizing the files and pitching a Google Doodle</h4>
        <p>
          Outside the events, I looked for ways to make the project run more smoothly. I
          rebuilt the team&rsquo;s working files in Google Drive so everything was easier
          to find and use. I also led a Google Doodle proposal, which I took from the
          first concept to a finished pitch that we submitted.
        </p>

        <h4>Translating the research for a public audience</h4>
        <p>
          As a Staff Research Associate, I worked on public-facing materials that
          summarized and introduced the project. The point was to take research-stage
          work and make it clear to a general audience.
        </p>
      </CaseSection>

      <CaseSection heading="From research to commissioned work: the FireSafe Council" showImg>
        <p>
          The best sign that the idea had value is what happened next: it turned into
          paid work. The Santa Barbara County FireSafe Council hired me to adapt the
          concept into community-specific game materials for their wildfire-preparedness
          programming, which I handled directly as their designer. The university was
          where the idea got tested. The work for the FireSafe Council is where I turned
          it into finished materials.
        </p>
        {/*
          <Link> (internal navigation) vs <a> (external link):
          Use <Link to="..."> for routes within the React app.
          Use <a href="..."> for external URLs or non-React pages.
        */}
        <Link to="/work/sbcfsc" className="case-xref">
          Read the SBCFSC case study &rarr;
        </Link>
      </CaseSection>

      <CaseSection heading="What I took from the project">
        <p>
          Working on Prototyping Resilience pushed me past the edges of studio design.
          Facilitating a room full of strangers and explaining research to people who
          don&rsquo;t speak design aren&rsquo;t things you practice at a desk. The
          project also made me more self-directed, since a lot of the useful work was
          work I had to find and do on my own. More than anything, it reminded me what
          I want my design to do: take something abstract or overwhelming and make it
          approachable enough that people actually engage with it.
        </p>
      </CaseSection>

    </Layout>
  )
}

export default Ucd
