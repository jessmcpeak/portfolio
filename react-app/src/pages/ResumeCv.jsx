/*
  ResumeCv.jsx — Resume & CV Page
  =================================
  Placeholder for resume / CV links or embedded content.
  Swap the anchor tags below for real PDF links when ready.
*/

import Layout from '../components/Layout.jsx'

function ResumeCv() {
  return (
    <Layout>
      <div className="resume-layout">
        <h2>Resume & Curriculum Vitae</h2>

        <p>
          Download a PDF version of my resume or curriculum vitae below.
          The resume is a one-page overview; the CV includes a full list of
          design projects, research roles, and presentations.
        </p>

        {/*
          Replace # with the actual path to your PDF files.
          e.g. href="/files/jess-mcpeak-resume.pdf"
          Files in the react-app/public/ folder are served at the root URL.
        */}
        <p>
          <a href="#" className="btn btn--cta" target="_blank" rel="noreferrer">
            Resume (PDF) &darr;
          </a>
        </p>

        <p>
          <a href="#" className="btn btn--cta" target="_blank" rel="noreferrer">
            Curriculum Vitae (PDF) &darr;
          </a>
        </p>
      </div>
    </Layout>
  )
}

export default ResumeCv
