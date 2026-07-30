/*
  Layout.jsx — Shared Page Wrapper
  ==================================
  Layout is a "wrapper" component that provides the header and footer
  shared across every page EXCEPT the home page (which has its own
  special hero header).

  KEY REACT CONCEPT — CHILDREN:
  When you write:
    <Layout>
      <About />
    </Layout>
  React passes <About /> as the special `children` prop to Layout.
  Layout renders it inside its JSX with `{children}`. This is how
  you build reusable wrappers without knowing what goes inside.

  PROPS:
    children — the page content to render between header and footer.
*/

import { Link } from 'react-router-dom'
import Nav from './Nav.jsx'

function Layout({ children }) {
  return (
    /*
      The Google Fonts link in index.html (or in the <head> via the
      Vite plugin) loads Fraunces and Space Grotesk.
      The .page-wrapper CSS class handles max-width and padding.
    */
    <div className="page-wrapper">

      {/* Standard header: name on the left, nav on the right */}
      <header className="site-header">
        {/*
          <Link> is React Router's anchor tag. `to` is like `href`.
          `.site-header__name` styles it as the logo/wordmark.
        */}
        <Link to="/" className="site-header__name">
          Jess L McPeak
        </Link>

        {/* Nav is its own component — it handles active-state detection */}
        <Nav />
      </header>

      {/* `main` is the semantic HTML element for the page's primary content */}
      <main>
        {children}
      </main>

      <footer />
    </div>
  )
}

export default Layout
