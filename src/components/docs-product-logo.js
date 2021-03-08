import React from "react"
import getCloudflareDocsConfig from "../utils/get-cloudflare-docs-config"

export default () => {
  const { product, productLogoPathD } = getCloudflareDocsConfig()

  return (
    <svg
      title={`KlexHub ${product} logo`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
    >
      <path fill="currentColor" d={productLogoPathD}></path>
    </svg>
  )
}
