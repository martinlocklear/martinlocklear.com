import React from "react"
import "./header.css"
import ProfileImage from "../components/profileImage"
import { Link } from "gatsby"

const ListLink = ({children, to, ...other}) => {
    
    // If this is an internal link, we use a gatsby link object.  Otherwise, nope.
    // Pattern from: https://www.gatsbyjs.org/docs/gatsby-link/#use-link-only-for-internal-links
    const internal = /^\//.test(to)

    if (internal) {
        return (
            <Link to={to} {...other}>
                <li className="navigation-link">{children}</li>
            </Link>
        )
    }

    return (
        <a href={to} {...other}>
            <li className="navigation-link">{children}</li>
        </a>
    )
    
}

export default () => (
    // Outside div, contains everything
    <div id="header">
        {/* Colored top bar */}
        <div id="header-bar">
            <div id="avatar-wrapper">
                <ProfileImage />
            </div>
        </div>
        <div id="navigation-bar">
            <ul id="navigation-list">
                <ListLink to="/">Home</ListLink>
                <ListLink to="https://www.linkedin.com/in/martinlocklear/">LinkedIn</ListLink>
                <ListLink to="https://www.instagram.com/aliveeverywhere/">Instagram</ListLink>
            </ul>
        </div>
    </div>
)
