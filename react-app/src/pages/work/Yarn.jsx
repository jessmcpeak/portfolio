/*
  Yarn.jsx — YARN Case Study
  ============================
  YARN: a multimodal storytelling experience for elderly people.
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

function Yarn() {
  return (
    <Layout>
      <div className="case-study-hero" aria-hidden="true" />

      <div className="case-study-intro">
        <div className="case-study-intro__img" aria-hidden="true" />
        <div className="case-study-intro__meta">
          <h2>YARN: a multimodal storytelling experience for elderly people</h2>
          <p>
            YARN helps elderly people document and share their life stories with the
            people they love, in whatever way feels most comfortable to them. It pairs a
            physical deck of prompt cards with a companion mobile app, so someone can
            answer a question by writing, drawing, recording their voice, or talking it
            through with family.
          </p>
          <p>
            The name comes from the phrase &ldquo;spinning a yarn.&rdquo; That
            storytelling idea also shaped the visual language, which borrows the textures
            and warm colors of knitting.
          </p>
        </div>
      </div>

      <CaseSection heading="The barriers older adults face" showImg>
        <p>
          Older adults who want to pass their stories down tend to hit several barriers
          at once. Shaky hands, low vision, and hearing loss can make some tasks slow or
          tiring. Many haven&rsquo;t had much experience with digital tools. And the
          right approach varies a lot from one person to the next, so an interaction that
          works well for one user can stop another cold.
        </p>
        <p>
          Under all of it is a straightforward need: accessible, meaningful ways to stay
          close to family. I wanted to build something that met people where they were
          rather than asking them to adapt to the tool.
        </p>
      </CaseSection>

      <CaseSection heading="Research through empathy tools">
        <p>
          I began with secondary research on designing for elderly users, including
          IDEO&rsquo;s work on senior health design. To get closer to the physical
          experience, I used IDEO&rsquo;s empathy tools to simulate what these users
          deal with, restricting my own vision, dexterity, and hearing to feel where
          ordinary interactions fall apart.
        </p>
        <p>
          A few things became clear quickly. People felt lost without good onboarding.
          Different disabilities got in the way of different activities, so drawing and
          writing weren&rsquo;t equally doable for everyone. Low vision called for high
          contrast and type that&rsquo;s easy to read. Shaky hands and arthritis limited
          both how well and how long someone could write or draw. And purely verbal tasks
          were frustrating for anyone with hearing loss. The pattern underneath all of it
          was that there&rsquo;s no single accessible interaction for this group.
          Accessibility had to mean giving people options.
        </p>
      </CaseSection>

      <CaseSection heading='From "life transitions" to a choice-based concept' showImg>
        <p>
          The project started much broader, built around the idea of &ldquo;life
          transitions.&rdquo; Through rounds of discussion with classmates and
          instructors it kept narrowing, first toward giving elderly people a sense of
          purpose through storytelling, and finally landing on accessible story-sharing
          between elderly users and their families.
        </p>
        <p>
          The decision that mattered most came straight out of the research. I dropped
          the idea of prescriptive prompts &mdash; where a card tells you exactly what to
          do (&ldquo;draw this,&rdquo; &ldquo;write about this&rdquo;) &mdash; in favor
          of an open system where you can answer any prompt however suits you best. That
          one change is what lets the experience work across a wide range of abilities
          instead of a narrow slice.
        </p>
      </CaseSection>

      <CaseSection heading="A card deck and a companion app" showImg>
        <p>
          YARN is one system in two halves, built so the familiar physical pieces carry
          the experience and the app supports them quietly.
        </p>
        <p>
          The physical half is a deck of prompt cards, each printed with a
          life-experience question and its own QR code. The deck comes with template
          sheets for written and drawn answers, plus simple setup instructions for the
          app.
        </p>
        <p>
          The app handles the rest. Scanning a card&rsquo;s QR code opens that prompt,
          and the app can read it aloud for anyone who&rsquo;d rather listen than read.
          The flow is short: pick a card, scan it, optionally hear it read out, then
          choose how to answer. You can write or draw on a template sheet and scan it
          back in, record a spoken answer in the app, or send a digital invitation for a
          loved one to talk the prompt through with you. Whatever you make is saved to a
          shared collection that you and your family can return to later.
        </p>
        <p>
          Accessibility was built into these decisions from the start. I checked contrast
          with contrast checkers, scaled up the type and interface elements, kept the UI
          simple to cut down on mistakes, and supported anything visual with audio. The
          four ways to answer are an accessibility feature in themselves, since they let
          people route around whatever happens to be hardest for them.
        </p>
        <p>
          The visual identity comes from the yarn metaphor: bright, warm colors, a
          knit-inspired display typeface, and high contrast throughout, with clean layouts
          and larger-than-usual sizing to keep everything easy to take in.
        </p>
      </CaseSection>

      <CaseSection heading="Narrowing scope and designing for flexibility">
        <p>
          The hardest part was narrowing the concept. Getting from something as open as
          &ldquo;life transitions&rdquo; down to one focused product took discipline, and
          I had to decide whether to design for elderly users or for their family members,
          a question that only settled on the older adults after some back and forth and
          outside input.
        </p>
        <p>
          The other challenge was balancing accessibility needs against an experience
          that still felt like one coherent thing. The choice-based response system
          solved both problems at once: rather than bolting on separate accommodations or
          forcing one type of interaction, I let every prompt be answered through whatever
          method worked best for each person.
        </p>
      </CaseSection>

      <CaseSection heading="Deliverables, feedback, and next steps">
        <p>
          The final deliverables were PDF mockups of the print materials (cards,
          templates, and instructions), a Figma prototype of the key app screens and
          interactions, and a five-minute presentation walking through the whole
          experience. To be straight about scope: this is a design prototype. The card QR
          codes link to Figma flows, not a working technical build.
        </p>
        <p>
          The feedback I got pointed at the right places to go deeper: a more detailed
          onboarding experience, a fuller system for storing and accessing the stories,
          and more thought about how family members actually browse what&rsquo;s been
          collected. If I kept going with YARN, my priorities would be a full onboarding
          flow, a dedicated interface for family members, organization and search for the
          story collections, a technical implementation plan, and usability testing with
          actual elderly participants.
        </p>
      </CaseSection>

      <CaseSection heading="What the project taught me">
        <p>
          YARN reminded me that most of the work in design happens before anything looks
          finished. Research, ideation, and narrowing the concept were where the project
          lived; the deliverables were just where that thinking became something you could
          see. The clearest lesson was about inclusive design: it works best when
          accessibility is part of the concept from the very beginning, and when
          it&rsquo;s treated as more than a single feature. Using the empathy tools
          changed how I understood the problem, and it&rsquo;s an approach I&rsquo;ll
          come back to whenever I&rsquo;m designing for people whose experience is
          different from mine.
        </p>
      </CaseSection>

    </Layout>
  )
}

export default Yarn
