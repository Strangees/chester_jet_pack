import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  let imageHeight
  if (isRootPath) {
    header = (
      <div>
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
      </div>
    )
    imageHeight = (
      <StaticImage
        src="./rings.jpg"
        placeholder="none"
        layout="constrained"
        alt="T-Rex"
        transformOptions={{ grayscale: false }}
        aspectRatio="2.2"
      />
    )
  } else {
    header = (

      <div>
      <h1 className="main-heading">
      <Link className="header-link-home" to="/">
        {title}
      </Link>
      </h1>
    </div>
      
    )
    imageHeight = (
      <StaticImage
        src="./rings.jpg"
        placeholder="none"
        layout="constrained"
        alt="T-Rex"
        transformOptions={{ grayscale: false }}
        aspectRatio="4"
      />
    )
  }

  return (
    <div className="header-wrapper">
      {imageHeight}
      <header className="global-header">{header}</header>

      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout
