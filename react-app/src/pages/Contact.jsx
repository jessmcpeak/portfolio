/*
  Contact.jsx — Contact Page
  ============================
  Simple contact info page. Add your actual email, LinkedIn, etc. below.
*/

import Layout from '../components/Layout.jsx'

function Contact() {
  return (
    <Layout>
      <div className="contact-layout">
        <h2>Get in touch</h2>

        <p>
          I&rsquo;m open to full-time design roles and select freelance
          engagements. The best way to reach me is by email.
        </p>

        {/*
          Replace the href and display text with your real contact details.
          `mailto:` links open the user's default email client.
        */}
        <p>
          <a href="mailto:jessica.mcpeak@gmail.com">jessica.mcpeak@gmail.com</a>
        </p>

        <p>
          You can also find me on{' '}
          {/* Replace with your actual LinkedIn URL */}
          <a href="https://www.linkedin.com/in/jessmcpeak" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          .
        </p>
      </div>
    </Layout>
  )
}

export default Contact
