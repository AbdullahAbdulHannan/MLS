import React, { useEffect, useState } from 'react';
import Slider from '../components/Slides';
import { Link } from 'react-router-dom';

function Home() {
  const slides = [
    {
      heading: "Bridge Language Barriers Seamlessly",
      text: "Providing professional interpretation and translation services to connect global communities.",
    },
    {
      heading: "Empowering Multilingual Communication",
      text: "Tailored language solutions for businesses and individuals to thrive in a diverse world.",
    },
    {
      heading: "Your Partner in Global Reach",
      text: "Ensuring your message is heard and understood, no matter the language or region.",
    },
  ];


  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);
  return (
    <div className="font-sans">
      {/* Header */}
      {/* <header className="bg-blue-900 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">MLS</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-yellow-400">Home</a></li>
              <li><a href="#" className="hover:text-yellow-400">About</a></li>
              <li><a href="#" className="hover:text-yellow-400">Services</a></li>
              <li><a href="#" className="hover:text-yellow-400">Career</a></li>
            </ul>
          </nav>
        </div>
      </header> */}
{/* <StickyNavbar/> */}
      {/* Hero Section */}
      <section className="bg-cover bg-center  h-screen flex flex-col items-center justify-center p-4 sm:p-8 " style={{ backgroundImage: "url('/bg.webp')", backgroundRepeat:'no-repeat',backgroundSize:'cover',  backgroundPosition: '50% 50%' }}>
        <div className="overlay absolute inset-0 flex flex-col items-center justify-center bg-black opacity-80 text-center text-white " >
          <h1 className="text-4xl md:text-6xl font-bold mb-4" data-aos='fade-right'>Welcome to MLS</h1>
          {/* <p className="text-lg md:text-2xl mb-6">Connecting the World Through Language</p> */}
          <Slider slides={slides} currentSlide={currentSlide}  />
          <Link to={'/services'}><button className="bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition" data-aos='fade-right'>Explore Our Services</button></Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-100 text-center" data-aos='fade-up'>
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-extrabold text-blue-900 mb-8">Why Choose MLS?</h2>
    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
      At MLS, we specialize in interpretation and translation services that bridge cultural and linguistic gaps. Our mission is to empower communication and foster understanding in a globalized world.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-900 mb-4">Expert Linguists</h3>
        <p className="text-gray-600">
          Our certified linguists and interpreters ensure accurate and culturally sensitive communication in over 100 languages.
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-900 mb-4">Industry-Specific Solutions</h3>
        <p className="text-gray-600">
          Tailored language solutions for legal, medical, business, and technology sectors to meet unique demands.
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-900 mb-4">Cutting-Edge Technology</h3>
        <p className="text-gray-600">
          Leveraging the latest tools and technologies to deliver high-quality services with unmatched precision and speed.
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-900 mb-4">Global Reach</h3>
        <p className="text-gray-600">
          Accessible anytime, anywhere, providing seamless communication through in-person or remote services.
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-900 mb-4">Customer-Centric Approach</h3>
        <p className="text-gray-600">
          Personalized support and flexible solutions designed to help you achieve your goals efficiently.
        </p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold text-blue-900 mb-4">Our Promise</h3>
        <p className="text-gray-600">
          A trusted partner committed to breaking barriers and building bridges, one word at a time.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Services Section */}
      <section className="py-16 bg-white" data-aos='fade-up'>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="shadow-lg p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Interpretation</h3>
              <p className="text-gray-700">Professional interpretation for conferences, meetings, and more, ensuring clear and precise communication.</p>
            </div>
            <div className="shadow-lg p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Translation</h3>
              <p className="text-gray-700">High-quality translation services for documents, and multimedia content.</p>
            </div>
            <div className="shadow-lg p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4 text-blue-900">Localization</h3>
              <p className="text-gray-700">Adapting your content to align with the cultural and linguistic preferences of your target audience.</p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center mt-8'>
<Link to={'/services'}>
          <button className="bg-yellow-400 text-blue-900 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 ">View More &rarr;</button></Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-16 bg-gray-100" data-aos='fade-up'>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10 text-blue-900">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <p className="text-gray-700 italic">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores doloremque ea commodi, quia minus esse aspernatur, ab enim, iusto fugit perferendis laborum placeat corporis? Consequatur modi deserunt officiis illum totam?</p>
              <h4 className="mt-4 font-bold text-blue-900">- ABC, CEO</h4>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <p className="text-gray-700 italic">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, quas! Cumque dicta necessitatibus hic repellendus nisi laudantium, asperiores numquam praesentium totam repellat corrupti itaque eius. Similique harum modi itaque nemo.</p>
              <h4 className="mt-4 font-bold text-blue-900">- ABC, Marketing Head</h4>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <p className="text-gray-700 italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro corrupti ipsa repellat ab quos saepe sit. At qui, sint saepe incidunt sequi quidem tempora cumque sunt cum facilis architecto reiciendis?</p>
              <h4 className="mt-4 font-bold text-blue-900">- ABC, Product Manager</h4>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call-to-Action Section */}
      <section className="py-16 bg-blue-900 text-white text-center" data-aos='fade-up'>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Expand Your Reach?</h2>
          <p className="mb-6">Contact MLS today and let us help you connect with the world!</p>
         <Link to={'/contact'}> <button className="bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition">Contact Now!</button></Link>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-blue-900 text-white py-6">
        <div className="container mx-auto text-center px-4">
          <p>&copy; 2024 MLS - Multinational Language Services | All Rights Reserved</p>
        </div>
      </footer> */}
    </div>
  );
}

export default Home;