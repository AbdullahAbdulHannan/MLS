import React from 'react'
import { OpenPositions } from '../components/career/OpenPositions'
// import { CareerHero } from '../components/career/CareerHero'
import { Benefits } from '../components/career/Benefits'
import { CareerHero } from '../components/career/CareerHero'
import { JoinProcess } from '../components/career/JoinProcess'

const Career = () => {
  return (
    <>
    <CareerHero/>
    <Benefits/>
    <OpenPositions/>
    <JoinProcess/>
    </>
    // <div className="bg-cover bg-center  h-screen flex flex-col items-center justify-center p-4 sm:p-8 text-4xl">
    //    
    // </div>
  )
}

export default Career