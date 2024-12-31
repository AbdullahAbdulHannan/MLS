import React from 'react'
import { ContactForm } from '../components/contact/ContactForm'
import { ContactHero } from '../components/contact/ContactHero'
import { Helmet } from 'react-helmet-async';
const Contact = () => {
  return (
     <>
      <Helmet>
        <title>Contact Us - Multinational Language Services</title>
        <meta
          name="description"
          content="Get in touch with Multinational Language Services for professional interpretation and translation services. We're here to assist you with all your language needs."
        />
        <meta
          name="keywords"
          content="contact translation services, professional interpretation support, multilingual solutions, contact MLS, language services inquiry"
        />
         <link rel="canonical" href="https://www.multinationallanguage.services/contact" />
        <meta property="og:title" content="Contact Us - Multinational Language Services" />
        <meta
          property="og:description"
          content="Reach out to Multinational Language Services for expert language solutions tailored to your needs. Contact us today."
        />
        <meta property="og:image" content="https://www.multinationallanguage.services/site_logo.png" />
        <meta property="og:url" content="https://www.multinationallanguage.services/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Multinational Language Services" />
        <meta
          name="twitter:description"
          content="Get in touch with Multinational Language Services for professional interpretation and translation services."
        />
        <meta name="twitter:image" content="https://www.multinationallanguage.services/site_logo.png" />
      </Helmet>
<ContactHero />
      <ContactForm />

     </>
  )
}

export default Contact