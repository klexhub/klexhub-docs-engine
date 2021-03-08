import React from "react"
import DocsNavLogoLockup from "./docs-nav-logo-lockup"
import KlexHubLogo from "./klexhub-logo"
const DocsMobileHeader = () => (
  <div className="DocsMobileHeader">
    <a
      className="DocsMobileHeader--cloudflare-logo-link Link Link-without-underline"
      href="https://developers.klexhub.com/"
    >
      <DocsNavLogoLockup
        small={true}
        logo={<KlexHubLogo />}
        text={
          <>
            <span data-text="KlexHub">KlexHub</span>
            <span>&nbsp;</span>
            <span data-text="Docs">Docs</span>
          </>
        }
      />
    </a>
  </div>
)

export default DocsMobileHeader
