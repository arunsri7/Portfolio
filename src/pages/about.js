import React, { useContext } from "react"
import { PageLayout, PageTitle } from "../components"
import { Container, Image } from "react-bootstrap"
import ThemeContext from "../utils/theme"
import { Link, graphql } from "gatsby"
import { SEO } from "../utils"
import { FaCoffee } from 'react-icons/fa';

export default ({ data }) => {
  const MediaLink = ({ title, author, link }) => (
    <li key={title} style={{ color: "gray" }}>
      <a rel="noopener noreferrer" href={link}>
        {title}
      </a>
      &nbsp;-<i>{author}</i>
    </li>
  )

  const {
    author,
    occupation,
    showsList,
    designations,
    unemployed,
  } = data.site.siteMetadata
  const { dark } = useContext(ThemeContext)
  const showLinks = showsList.map(show => MediaLink(show))

  return (
    <PageLayout>
      <SEO title="About Me" />
      <PageTitle title="About Me" />
      <Container>
        <Image
          rounded
          width="140"
          height="140"
          fluid
          src={dark ? `../../icons/arun-dark.png` : `../../icons/arun.png`}
          alt={author}
        />
        <article className="w-75 m-auto pt-2 text-justify">
          <p className="text-center">
            {designations.map((attr, i) => (
              <span key={attr}>
                &nbsp;<b>{attr}</b>&nbsp;
                {i < designations.length - 1 && <>||</>}
              </span>
            ))}
          </p>
          <p className="i-5 mt-4 pt-2">
            Hello there! My name is <b>{`${author}`}</b>. I am a&nbsp;
            <a
              href="https://www.dictionary.com/e/fictional-characters/padawan/"
              target="_blank"
              rel="noopener noreferrer"
            >
            padawan
            </a>
            &nbsp;
            <b>{occupation}</b> discovering the ways of the code. 
          </p>
          <p className="i-5">
            I have experience in working with back-end services. 
            In my spare time, I can be found watching superhero content, 
            <Link to="https://www.youtube.com/playlist?list=PLw2UIOXHSGdwgfraotmYJ0bdBqNTjSaH3"> dancing </Link> 
            or working on 
            android/web projects. I also have an 
            <Link to="https://www.instagram.com/pukaippatam/"> instagram account </Link> 
             where I try to click some pictures on my phone. 
          </p>
          <p className="i-5">
            Check out my <Link to="/projects">projects</Link> to see what I've
            been up to! Or check out my <Link to="/blog">blog</Link> to see
            what's recently caught my eye!
          </p>
        </article>
        <article className="w-75 m-auto">
          {unemployed && (
            <>
              <hr />
              <p className="unemployed">
                <small>
                  I am <b>currently looking for new opportunities</b>! If you
                  like what you see, let's get
                  in&nbsp;
                  <a
                    href="mailto:arun.i1997@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    touch
                  </a>
                  <a>
                  , or you could just <Link to="https://www.buymeacoffee.com/aruniyer">buy me a coffee.</Link> <FaCoffee/>
                  </a>
                  !
                </small>
              </p>
            </>
          )}
          <hr />
          <h5 className="watch-list-title pt-4">
            Here are a couple of shows from my watch list:
          </h5>
          <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>{showLinks}</ul>
        </article>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        occupation
        author
        designations
        showsList {
          title
          link
        }
      }
    }
  }
`
