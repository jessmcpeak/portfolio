/*
  Nav.jsx — Navigation Component
  ================================
  This component renders the five navigation links as pill-shaped buttons.

  KEY REACT CONCEPTS HERE:
  - useLocation()  — a React Router hook that tells us the current URL path.
                     We use it to highlight which button is "active" (the
                     current page gets a filled indigo background).
  - className      — JSX uses `className` instead of `class` (since `class` is
                     a reserved word in JavaScript).
  - Template literals — `btn ${isActive ? 'btn--active' : ''}` builds a
                     string of class names conditionally.
  - <Link>         — React Router's version of <a>. It updates the URL without
                     a full page reload, keeping React in control.
*/

import { Link, useLocation } from 'react-router-dom'

function Nav() {
  // useLocation() returns an object like { pathname: '/about', ... }
  // We only need the pathname (the URL path after the domain).
  const { pathname } = useLocation()

  /*
    isActive(href) returns true if the current page matches the link's href.
    Special case: '/work' should also be active for all /work/* sub-pages,
    so we check startsWith instead of exact equality for that one.
  */
  function isActive(href) {
    if (href === '/work') return pathname.startsWith('/work')
    return pathname === href
  }

  // The nav items as a data array — easier to maintain than repeating JSX.
  // If you want to add or rename a nav item, just edit this array.
  const navItems = [
    { label: 'Work',            href: '/work'      },
    { label: 'About',           href: '/about'     },
    { label: 'Resume',          href: '/resume-cv' },
    { label: 'Curriculum Vitae', href: '/resume-cv' },
    { label: 'Contact',         href: '/contact'   },
  ]

  return (
    <nav aria-label="Main navigation">
      {/*
        .map() iterates over navItems and returns a JSX element for each one.
        Each item needs a unique `key` prop so React can track changes
        in the list efficiently.
      */}
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.href + item.label}>
            <Link
              to={item.href}
              className={`btn ${isActive(item.href) ? 'btn--active' : ''}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
