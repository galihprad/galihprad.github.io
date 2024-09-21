/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import avatar from '../../content/assets/profile.png'

const Bio = () => {
  const author = {
    firstName: "Galih Pradipto Wisnujati",
    description: "Mathematics/Theoretical Computer Science",
  }
  const { authors } = useStaticQuery(graphql`
    query BioQuery {
      # if there was more than one user, this would need to be filtered
      author: wpUser {
        firstName
        twitter: name
        description
        avatar {
          url
        }
      }
    }
  `)

  const avatarUrl = author?.avatar?.url

  return (
    <div className="bio">
      {/* {avatarUrl && ( */}
      <img
        alt={author?.firstName || ``}
        className="bio-avatar"
        src={avatar}
      />
      {/* )} */}
      {author?.firstName && (
        <p>
          <strong>{author.firstName}</strong>
          {` `}<br />
          {author?.description || null}
          {` `}<br />
          galih.p.w.j@gmail.com{' '}
          <span role="img">🇮🇩</span>
          {/* {author?.twitter && (
            <a href={`https://twitter.com/${author?.twitter || ``}`}>
              You should follow them on Twitter
            </a>
          )} */}
        </p>
      )
      }
    </div >
  )
}

export default Bio
