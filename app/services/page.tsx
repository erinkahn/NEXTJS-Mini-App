import HeroText from '@/components/HeroText'
import React from 'react'

const page = () => {
   return (
      <HeroText
         title="Services"
         titleClass="bold-52 lg:bold-88"
         descrClass='regular-16 mt-6 text-gray-30 xl:max-w-[520px] mb-8'
         description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nostrum at quos.'
      />
   )
}

export default page