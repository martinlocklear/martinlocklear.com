import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"


function MetaData({ meta }) {

    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    )

    return (
        <Helmet
            title={site.siteMetadata.title}
            meta={[
                { name: `description`,
                  content: site.siteMetadata.description },
                { name: `og:description`,
                  content: site.siteMetadata.description },
                { name: `og:type`,
                  content: `website` },
                { name: `twitter:card`,
                  content: `summary` },
                { name: `twitter:creator`,
                  content: site.siteMetadata.author },
                { name: `twitter:title`,
                  content: site.siteMetadata.title },
                { name: `twitter:description`,
                  content: site.siteMetadata.description },
            ].concat(meta)}
        />
    )
}

MetaData.defaultProps = {
    lang: `en`,
    meta: [],
}

export default MetaData
