import React, { useContext } from "react"
import { graphql } from "gatsby"
import ThemeContext from "../utils/theme"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {BrowserView, MobileView} from 'react-device-detect';

export default ({ data }) => {
  const { unemployed, firstName, lastName, occupation } = data.site.siteMetadata
  const { dark } = useContext(ThemeContext)
  return (
    <PageLayout>
      <SEO title="Home" 
      description={post.frontmatter.description || post.excerpt}
      image={image}/>
      <Container className="text-center pt-5 mt-5" fluid>
        <Image
          width="150"
          height="150"
          fluid
          src={dark ? `../../icons/darth-vader.png` : `../../icons/r2-d2.png`}
          alt={dark ? "Darth Vader" : "R2-D2"}
        />
     
        <Container className="py-0 my-0">
          <MobileView>
          <h1
            style={{
              fontSize: "3.5rem",
              color: "black",
            }}
          >
            <span className="first-name">{firstName}</span>&nbsp;
            <span className="last-name">{lastName}</span>
          </h1>
          </MobileView>
          <BrowserView>
          <h1
            style={{
              fontSize: "5rem",
              color: "black",
            }}
          >
            <span className="first-name">{firstName}</span>&nbsp;
            <span className="last-name">{lastName}</span>
          </h1>
          </BrowserView>
          <p>
            <i>
              {occupation} by day,&nbsp;
              {dark ? `Imperial enforcer by night` : `Jedi by night`}
            </i>
          </p>
        </Container>
        <hr className="my-3 w-25" />
        <MobileView>
        <div className="d-sm-inline-flex icons-container">
          <a
            href="https://github.com/arunsri7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="icons github"
              title="Github"
              style={{width : "8.5%"}}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/arun-iyer-412545154/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="icons linkedin"
              title="LinkedIn"
              style={{width : "8.5%"}}
            />
          </a>
          <a
            href="https://twitter.com/arunsri7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              className="icons hr"
              title="twitter"
              style={{width : "8.5%"}}
            />
          </a>
          <a
            href="mailto:arun.i1997@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className="icons mail"
              title="e-mail"
              style={{width : "8.5%"}}
            />
          </a>
          <a href="https://www.notion.so/Arun-Iyer-Resume-bb035d921b414df7940dac06ccd98ef3"  target="_blank" download>
            <FontAwesomeIcon
              icon={["fas", "file-alt"]}
              className="icons file"
              title="Resume"
              style={{width : "6%"}}
            />
          </a>
        </div>
        </MobileView>
        <BrowserView>
        <div className="d-md-inline-flex icons-container">
          <a
            href="https://github.com/arunsri7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              className="icons github"
              title="Github"
              
            />
          </a>
          <a
            href="https://www.linkedin.com/in/arun-iyer-412545154/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              className="icons linkedin"
              title="LinkedIn"
            />
          </a>
          <a
            href="https://twitter.com/arunsri7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              className="icons hr"
              title="twitter"
            />
          </a>
          <a
            href="mailto:arun.i1997@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={["fas", "envelope"]}
              className="icons mail"
              title="e-mail"
            />
          </a>
          <a href="https://www.notion.so/Arun-Iyer-Resume-bb035d921b414df7940dac06ccd98ef3" target="_blank" download>
            <FontAwesomeIcon
              icon={["fas", "file-alt"]}
              className="icons file"
              title="Resume"
            />
          </a>
        </div>
        </BrowserView>
      </Container>
      <hr className="my-3 w-25" />
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        firstName
        lastName
        occupation
      }
    }
  }
`
