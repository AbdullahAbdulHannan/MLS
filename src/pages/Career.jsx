import React from 'react'
import { OpenPositions } from '../components/career/OpenPositions'
// import { CareerHero } from '../components/career/CareerHero'
import { Benefits } from '../components/career/Benefits'
import { CareerHero } from '../components/career/CareerHero'
import { JoinProcess } from '../components/career/JoinProcess'
import { Helmet } from 'react-helmet-async'

const Career = () => {
  return (
    <>
    <Helmet>
        <title>Career - Multinational Language Services</title>
        <meta
          name="description"
          content="Explore exciting career opportunities at Multinational Language Services. Join a dynamic team dedicated to delivering expert translation and interpretation services worldwide."
        />
        <meta
          name="keywords"
          content="career at MLS, language services jobs, translation jobs, interpretation jobs, career opportunities, work at Multinational Language Services"
        />
         <link rel="canonical" href="https://www.multinationallanguage.services/career" />
        <meta property="og:title" content="Career Opportunities - Multinational Language Services" />
        <meta
          property="og:description"
          content="Be a part of Multinational Language Services. Explore career opportunities and join our team of language experts today."
        />
        <meta property="og:image" content="https://www.multinationallanguage.services/site_logo.png" />
        <meta property="og:url" content="https://www.multinationallanguage.services/career" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Career Opportunities - Multinational Language Services" />
        <meta
          name="twitter:description"
          content="Explore career opportunities at Multinational Language Services and join our expert team."
        />
        <meta name="twitter:image" content="https://www.multinationallanguage.services/site_logo.png" />
      </Helmet>
    <CareerHero/>
    <Benefits/>
    <OpenPositions/>
    <JoinProcess/>
    </>
  )
}

export default Career