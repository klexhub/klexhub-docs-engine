import React from "react"
import AnchorLink from "../components/mdx/anchor-link"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="Not found" />
    <h1>Nicht gefunden :/</h1>
    <p>Leider konnten wir diese Website nicht finden.</p>
    <p>
      <AnchorLink href="/">Zurück</AnchorLink>
    </p>
  </>
)

export default NotFoundPage
