import React from 'react'
import { ContactForm } from '../components/contact/ContactForm'
import { ContactHero } from '../components/contact/ContactHero'

const Contact = () => {
  return (
     <div>
<ContactHero />
      <ContactForm />

     </div>

//     <div className="bg-cover bg-center  h-screen flex flex-col items-center justify-center p-4 sm:p-8 text-4xl">
//     Contact Page
//  </div>
  )
}

export default Contact