// src/components/layout/Navbar.jsx

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import useScroll from '../../hooks/useScroll'
import Tagline from './Tagline'
import logoDark from '../../assets/images/logo-dark.png'
import logoWhite from '../../assets/images/logo-white.png'
import logoLight from '../../assets/images/logo-light.png'

// ─── DATA ───────────────────────────────────────────
const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'Tours',
    children: [
      {
        label: 'Tour Grid',
        children: [
          { label: 'Grid', path: '/grid' },
          { label: 'Grid Left Sidebar', path: '/grid-left' },
          { label: 'Grid Right Sidebar', path: '/grid-right' },
        ]
      },
      {
        label: 'Tour List',
        children: [
          { label: 'List', path: '/list' },
          { label: 'List Left Sidebar', path: '/list-left' },
        ]
      },
      {
        label: 'Tour Detail',
        children: [
          { label: 'Tour Detail One', path: '/tour-detail-1' },
          { label: 'Tour Detail Two', path: '/tour-detail-2' },
        ]
      },
    ]
  },
  {
    label: 'Pages',
    children: [
      { label: 'About Us', path: '/about' },
      { label: 'Contact', path: '/contact' },
      { label: 'Pricing', path: '/pricing' },
    ]
  },
  { label: 'Blog', path: '/blog' },
]

// ─── COMPONENT ──────────────────────────────────────
export default function Navbar() {

  const [openDropdown, setOpenDropdown] = useState(null)
  const [openNested, setOpenNested] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const { scrollY, scrollDirection } = useScroll()
  const isSticky = scrollDirection === 'down' || scrollY > 60

  const closeAll = () => {
    setOpenDropdown(null)
    setOpenNested(null)
  }

  return (
    <>
      <Tagline />

      <nav className={`
        w-full z-50 transition-all duration-300
        ${isSticky
          ? 'fixed top-0 bg-white dark:bg-slate-900 shadow-md py-3'
          : 'absolute top-10 bg-transparent py-5'
        }
      `}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">

            {/* ── LOGO ── */}
            <Link to="/" onClick={closeAll}>
              {!isSticky
                ? <img src={logoWhite} alt="logo" className="h-8 w-auto" />
                : <>
                  <img src={logoDark} className="h-8 w-auto dark:hidden" alt="logo" />
                  <img src={logoLight} className="h-8 w-auto hidden dark:block" alt="logo" />
                </>
              }
            </Link>

            {/* ── DESKTOP NAV ── */}
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map((item) => (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => {
                    if (item.children) setOpenDropdown(item.label)
                  }}
                  onMouseLeave={() => {
                    setOpenDropdown(null)
                    setOpenNested(null)
                  }}
                >

                  {/* ── PARENT LINK ── */}
                  {item.path
                    ? (
                      // Simple link — no children
                      <Link
                        to={item.path}
                        className={` 
                          flex items-center gap-1 px-3 py-2 rounded text-sm
                          font-medium transition-colors duration-200
                          hover:text-red-500
                          ${isSticky ? 'text-slate-700 dark:text-slate-200' : 'text-white'}
                        `}
                        onClick={closeAll}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      // Button — has children
                      <button className={`
                        flex items-center gap-1 px-3 py-2 rounded text-sm
                        font-medium transition-colors duration-200 
                        hover:text-red-500
                        ${isSticky ? 'text-slate-700 dark:text-slate-200' : 'text-white'}
                      `}>
                        {item.label}
                        <ChevronDown className={`
                          w-4 h-4 transition-transform duration-200
                          ${openDropdown === item.label ? 'rotate-180' : 'rotate-0'}
                        `} />
                      </button>
                    )
                  }

                  {/* ── FIRST LEVEL DROPDOWN ── */}
                  {item.children && (
                    <ul className={`
                      absolute top-full left-0 mt-1 w-52
                      bg-white dark:bg-slate-800
                      rounded-lg shadow-xl border border-slate-100
                      dark:border-slate-700 z-50
                      transition-all duration-200
                      ${openDropdown === item.label
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible translate-y-2'
                      }
                    `}>
                      {item.children.map((child) => (
                        <li
                          key={child.label}
                          className="relative group/nested"
                          onMouseEnter={() => {
                            if (child.children) setOpenNested(child.label)
                          }}
                          onMouseLeave={() => setOpenNested(null)}
                        >

                          {/* Child has no further children */}
                          {!child.children && (
                            <Link
                              to={child.path}
                              className="flex items-center px-4 py-2.5 text-sm
                                         text-slate-600 dark:text-slate-300
                                         hover:text-red-500 hover:bg-red-50
                                         dark:hover:bg-slate-700 transition-colors"
                              onClick={closeAll}
                            >
                              {child.label}
                            </Link>
                          )}

                          {/* Child HAS further children (nested) */}
                          {child.children && (
                            <>
                              <button className="
                                w-full flex items-center justify-between
                                px-4 py-2.5 text-sm text-slate-600
                                dark:text-slate-300 hover:text-red-500
                                hover:bg-red-50 dark:hover:bg-slate-700
                                transition-colors
                              ">
                                {child.label}
                                <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
                                {/* rotated left = points RIGHT = shows nested opens right */}
                              </button>

                              {/* ── SECOND LEVEL NESTED DROPDOWN ── */}
                              <ul className={`
                                absolute left-full top-0 ml-1 w-52
                                bg-white dark:bg-slate-800
                                rounded-lg shadow-xl border border-slate-100
                                dark:border-slate-700 z-50
                                transition-all duration-200
                                ${openNested === child.label
                                  ? 'opacity-100 visible translate-x-0'
                                  : 'opacity-0 invisible -translate-x-2'
                                }
                              `}>
                                {child.children.map((nested) => (
                                  <li key={nested.label}>
                                    <Link
                                      to={nested.path}
                                      className="block px-4 py-2.5 text-sm
                                                 text-slate-600 dark:text-slate-300
                                                 hover:text-red-500 hover:bg-red-50
                                                 dark:hover:bg-slate-700
                                                 transition-colors"
                                      onClick={closeAll}
                                    >
                                      {nested.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}

                        </li>
                      ))}
                    </ul>
                  )}

                </li>
              ))}
            </ul>

            {/* ── LOGIN BUTTON ── */}
            <Link
              to="/login"
              className={`
                hidden md:inline-flex items-center gap-2 text-sm
                px-5 py-2 rounded-md font-medium transition-all duration-300
                ${isSticky
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-white/20 text-white border border-white/50 hover:bg-white/30'
                }
              `}
            >
              Login
            </Link>

          </div>
        </div>
      </nav>
    </>
  )
}
```

---

## Full Data Flow Diagram
```
navLinks array(data)
        │
        │  .map() loops every item
        ↓
┌───────────────────┐
│  item.label       │ → renders text
│  item.path        │ → if exists = <Link>, if null = <button>
  │  item.children    │ → if exists = show dropdown
  └───────────────────┘
  │
  │  onMouseEnter
  ↓
  setOpenDropdown('Tours')
  │
  │  React re-renders
  ↓
  openDropdown === 'Tours'  →  TRUE   → opacity-100 visible
  openDropdown === 'Pages'  →  FALSE  → opacity-0 invisible
  │
  │  child.children.map()
  ↓
  ┌───────────────────┐
  │  child.label      │ → renders text
  │  child.path       │ → if exists = <Link>, if null = nested button
    │  child.children   │ → if exists = second level dropdown
    └───────────────────┘
    │
    │  onMouseEnter on child
    ↓
    setOpenNested('Tour Grid')
    │
    │  React re-renders
    ↓
    openNested === 'Tour Grid'  → TRUE  → show nested right side
    openNested === 'Tour List'  → FALSE → keep hidden
    │
    │  user clicks a link
    ↓
    closeAll() → setOpenDropdown(null) + setOpenNested(null)
    │
    ↓
    React Router navigates to path