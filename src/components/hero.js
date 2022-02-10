import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  Container,
  Section,
  Text,
  Heading,
  Subhead,
  Kicker,
  Flex,
  Box,
  ButtonList,
} from "./ui"

export default function Hero({
  image,
  image_alt,
  heading,
  subhead,
  text,
  links,
  kicker = false,
}) {
  return (
    <Section>
      <Container>
        <Flex variant="responsive">
          <Box width="half">
            {image && <GatsbyImage alt={image_alt} image={image} />}
          </Box>
          <Box width="half">
            <Heading as="h1">
              {kicker && <Kicker>{kicker}</Kicker>}
              {heading}
            </Heading>
            <Subhead as="h2">{subhead}</Subhead>
            <Text as="p">{text}</Text>
            <ButtonList links={links} />
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}
