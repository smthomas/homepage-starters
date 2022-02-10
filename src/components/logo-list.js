import * as React from "react"
import { graphql } from "gatsby"
import { Space, Container, Section, FlexList, Text, Logo } from "./ui"

function LogoItem({ alt, image }) {
  if (!image) return false

  return <Logo alt={alt} image={image.gatsbyImageData} size="medium" />
}

export default function LogoList({ text, logos }) {
  return (
    <Section>
      <Container width="narrow">
        {text && (
          <Text center variant="lead">
            {text}
          </Text>
        )}
        <Space size={4} />
        <FlexList gap={4} variant="center">
          {logos.map(
            (logo) =>
              logo && (
                <li key={logo.id}>
                  <LogoItem {...logo} />
                </li>
              )
          )}
        </FlexList>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageLogoList on node__homepage_logo_list {
    id
    text
    logos {
      id
      alt
      image {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
