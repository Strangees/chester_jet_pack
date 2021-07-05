import * as React from "react"
//simport "./src/index.scss"
import { StaticImage } from "gatsby-plugin-image"
import "./default.css"
// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  maxheight: 320,
}
const headingAccentStyles = {
  color: "#663399",
}



// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  }
]

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <div><StaticImage
     src="https://images.unsplash.com/photo-1609151162377-794faf68b02f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=80"
     alt="A dinosaur"
     placeholder="blurred"
     layout="fullWidth"
     aspectRatio="3"
     /></div>  
      <h1 style={headingStyles}>
        Congratulations
        <br /> 
        <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      
    </main>
  )
}

export default IndexPage
