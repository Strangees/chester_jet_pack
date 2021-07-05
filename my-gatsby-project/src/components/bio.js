/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="https://pbs.twimg.com/profile_images/1406706609817067523/z171jP6V_400x400.jpg"
        width={130}
        height={130}
        alt="Profile picture"
      />
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="https://pbs.twimg.com/profile_images/964143494800592896/fO0FrpWa_400x400.jpg"
        width={130}
        height={130}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Velkommen til våres bryllupsside. Her vil alt av informasjon rundt våres brullup ligge.
          Ta en titt og kom gjerne med tilbakemeldinger. 
        </p>
      )}
    </div>
  )
}

export default Bio
