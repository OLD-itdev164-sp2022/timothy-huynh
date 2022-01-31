import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import Seo from "../components/seo"

const Contact = ({ data }) => {
    const { name, company, address } = data.site.siteMetadata.contact;
    return (
        <Layout>
            <Seo title="Contact" />
            <h1>Contact Us</h1>
            <p>Please send all inquires to: </p>
            <div>{company}</div>
            <div>{`C/O ${name}`}</div>
            <div>{address}</div>

            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <Img />
            </div>
            <Link to="/">Home</Link>
        </Layout>
    )
}

export default Contact

export const query = graphql`
    query {
        site {
		    siteMetadata {
			    contact {
				    name
                    company
                    address
            }
        }
    }
}
`