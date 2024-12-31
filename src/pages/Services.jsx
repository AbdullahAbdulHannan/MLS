import React from 'react'
import { Hero } from '../components/service/Hero'
import { ServicesSection } from '../components/service/ServicesSection'
import { IndustryExpertise } from '../components/service/IndustryExpertise'
import { LanguagesSection } from '../components/service/LanguagesSection'
import { CTASection } from '../components/service/CTASection'
import { Helmet } from 'react-helmet-async';
const Services = () => {
  return (
    <>
     <Helmet>
        <title>Services - Multinational Language Services</title>
        <meta
          name="description"
          content="Explore our professional language interpretation and translation services tailored for various industries. Expert multilingual solutions serving clients worldwide."
        />
        <meta
          name="keywords"
          content="language services, professional translation, industry expertise, global language solutions, interpretation services"
        />
        <link rel="canonical" href="https://www.multinationallanguage.services/services" />

        {/* Open Graph */}
        <meta property="og:title" content="Services - Multinational Language Services" />
        <meta
          property="og:description"
          content="Explore our professional language interpretation and translation services tailored for various industries. Expert multilingual solutions serving clients worldwide."
        />
        <meta property="og:url" content="https://www.multinationallanguage.services/services" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:title" content="Services - Multinational Language Services" />
        <meta
          name="twitter:description"
          content="Explore our professional language interpretation and translation services tailored for various industries. Expert multilingual solutions serving clients worldwide."
        />
      </Helmet>
<div className="min-h-screen md:mt-14">
      <Hero/>
      <ServicesSection />
      <IndustryExpertise/>
      <LanguagesSection />
      <CTASection />
    </div>
    </>
  )
}

export default Services