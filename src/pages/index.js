import React from "react"
import { Link } from "gatsby"

import Arrow from "../components/Arrow"
import Container from "../components/Container"
import Form from "../components/Form"
import Hero from "../components/Hero"
import SEO from "../components/seo"
import Layout from "../components/Layout"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container colour="green">
      <Hero />
    </Container>
    <Arrow />
    <Container>
      <h2>We're under construction at the moment, updates coming soon.</h2>
    </Container>
    {/* <Form /> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
