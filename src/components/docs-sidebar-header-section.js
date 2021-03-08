import React from "react"
import DocsNavLogoLockup from "./docs-nav-logo-lockup"
import KlexHubLogo from "./klexhub-logo"

const DocsSidebarHeaderSection = () => (
  <div className="DocsSidebar--section DocsSidebar--header-section">
    <a
      className="DocsSidebar--cloudflare-logo-link DocsSidebar--link"
      href="https://developers.klexhub.com/"
    >
      <DocsNavLogoLockup
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

export default DocsSidebarHeaderSection
