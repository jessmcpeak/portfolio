/*
  Dcp.jsx — Davis Chamber Players Case Study
  ============================================
  Brand identity and concert design for the Davis Chamber Players.
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

function Dcp() {
  return (
    <Layout>
      <div className="case-study-hero" aria-hidden="true" />

      <div className="case-study-intro">
        <div className="case-study-intro__img" aria-hidden="true" />
        <div className="case-study-intro__meta">
          <h2>Brand identity &amp; concert design for the Davis Chamber Players</h2>
          <p><strong>Case Study</strong> &middot; Jess L McPeak &middot; Graphic Designer, Freelance (January 2023 &ndash; present)</p>
        </div>
      </div>

      <CaseSection heading="The client and the engagement">
        <p>
          The Davis Chamber Players (DCP) is a 501(c)(3) nonprofit and chamber-music
          concert series in Davis, California, founded and directed by cellist Chris Z.
          Each season brings together local student, amateur, and professional classical
          musicians from the Davis and Sacramento areas for free community concerts.
        </p>
        <p>
          I&rsquo;ve been DCP&rsquo;s freelance graphic designer since 2023. What began
          as a brand-identity redesign has become an ongoing role designing materials for
          each concert season: posters, programs, newspaper ads, one-page programs, and
          flyers. The Fall 2026 concert is next.
        </p>
        <p>
          The throughline is a single flexible identity: one that can look classical for
          a Schubert program or boldly typographic for a season of modern repertoire and
          still read as the same group.
        </p>
      </CaseSection>

      <CaseSection heading="Brand identity: a bass-clef monogram" showImg>
        <p>
          DCP came to me with an existing but dated identity. The redesign needed a mark
          that worked on a concert program, held up in a single ink color, and stayed
          legible everywhere from a printed booklet to a small social avatar. I worked
          through it in three stages in Adobe Illustrator.
        </p>
        <p>
          First I focused on the wordmark alone, drawing dozens of treatments of
          &ldquo;Davis Chamber Players&rdquo;: serif against sans, uppercase against
          lowercase, different weights, different stacking options. That settled the
          voice as a high-contrast classical serif in a compact three-line lockup.
        </p>
        <p>
          Next I brought in musical forms (treble and bass clefs and a circular
          containing shape) and tested how the wordmark might sit with them. I drew the
          clef as an original vector instead of using a found glyph, so the finished
          mark would be fully ownable and clean in print.
        </p>
        <p>
          From there I refined the winning direction: a circle with a bass clef whose
          curl forms the right edge of the roundel. I tightened the proportions, made a
          reversed (knockout) version alongside the positive one, and drew uppercase and
          lowercase variants so the identity could change register from one season to
          the next.
        </p>
        <p>
          The final mark is a compact roundel: the wordmark stacked inside a circle that
          reads as a clock face, an instrument body, or a clef. It holds up at small
          sizes and works in a single color.
        </p>
      </CaseSection>

      <CaseSection heading="A season-by-season concert system" showImg>
        <p>
          The recurring work was promoting each concert. For a season I designed a
          coordinated set: a portrait poster, a landscape newspaper ad for The California
          Aggie, a full concert-program booklet, a one-page program, and flyers, all
          built from one concept and adapted to each format.
        </p>
        <p>
          Rather than reuse a single template, I gave each concert a concept drawn from
          its own repertoire. The Fall 2025 program was headlined by Schubert&rsquo;s
          &ldquo;Trout&rdquo; Quintet, so the artwork ran with it: a rainbow-trout
          illustration on a deep crimson field, with an italic serif curving across the
          cover. The poster added circular performer portraits that pick up the
          logo&rsquo;s roundel, then reflowed into the wide horizontal Aggie ad.
        </p>
        <p>
          Spring 2024 went the other way. A program of Ravel, Brahms, Borodin, and
          Schumann got huge condensed sans-serif names overlapping at angles over
          grayscale composer portraits and a montage of performers. Bold and type-driven
          &mdash; about as far from the Fall 2025 cover as the brand could go while
          still reading as DCP.
        </p>
      </CaseSection>

      <CaseSection heading="The concert program: editorial and information design">
        <p>
          The program booklet was the most text-heavy piece, and the one that rewarded
          careful editorial work the most. Each issue set a full repertoire listing with
          composers, works, opus and movement numbers, and performers, using the usual
          musical-typography conventions. Around that ran the director&rsquo;s mission
          note and several pages of performer biographies, each with a headshot and set
          for comfortable reading.
        </p>
        <p>
          This is the kind of dense, multi-section document where hierarchy and
          typographic discipline do the real work: a program of seven pieces and a dozen
          musicians has to stay legible and easy to follow in the hand.
        </p>
      </CaseSection>

      <CaseSection heading="Photography" showImg>
        <p>
          To keep the collateral supplied with usable images, I photographed rehearsals
          and built a stock for DCP to draw on. That archive &mdash; separate from the
          performers&rsquo; own supplied headshots &mdash; gave the posters, programs,
          and ads a consistent in-house source instead of a mix of borrowed photos.
        </p>
      </CaseSection>

      <CaseSection heading="Reflection">
        <p>
          The Davis Chamber Players is the longest-running piece of my freelance work,
          and the one I&rsquo;ve learned the most from. It&rsquo;s a real client with a
          real budget, and because the engagement is ongoing I treat the identity as
          something I keep coming back to and adjusting as each new season comes up.
          Across several seasons I&rsquo;ve gotten to do most of what identity design
          involves: drawing a logo from scratch, then building a concert system that can
          look formal one year and bold the next. The part I value most is seeing all of
          it in use &mdash; printed, mailed, run in the local paper, and handed to
          people at the concerts.
        </p>
      </CaseSection>

    </Layout>
  )
}

export default Dcp
