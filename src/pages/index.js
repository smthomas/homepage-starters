import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Hero from "../components/hero"
import LogoList from "../components/logo-list"

const Fallback = (props) => {
  console.warn(`No component found for: ${props.blocktype}`)
  return false
}

export default function Homepage(props) {
  const {
    nodeHomepageHero: hero,
    nodeHomepageLogoList: logolist,
    homepage,
  } = props.data

  return (
    <Layout {...homepage}>
      {hero && (
        <Hero
          image={hero.relationships.field_image.gatsbyImageData}
          image_alt={hero.relationships.alt}
          kicker={hero.field_kicker}
          subhead={hero.subhead}
          text={hero.text}
        />
      )}
      {logolist && <LogoList text={logolist.text} logos={logolist.logos} />}
      {homepage.blocks.map((block, i) => {
        const Component = sections[block.blocktype] || Fallback
        return <Component key={block.id} index={i} {...block} />
      })}
    </Layout>
  )
}

export const query = graphql`
  {
    nodeHomepageHero {
      id
      field_kicker
      heading
      subhead
      text
      relationships {
        field_links {
          id
          href
          text
        }
        field_image {
          id
          gatsbyImageData
          alt
        }
      }
    }
    # We can also use fragments to keep our queries cleaner.
    nodeHomepageLogoList {
      ...HomepageLogoList
    }
    # Original stuff.
    homepage {
      id
      title
      description
      image {
        id
        url
      }
      blocks: content {
        id
        blocktype
        ...HomepageFeatureContent
        ...HomepageFeatureListContent
        ...HomepageCtaContent
        ...HomepageTestimonialListContent
        ...HomepageBenefitListContent
        ...HomepageStatListContent
        ...HomepageProductListContent
      }
    }
  }
`
