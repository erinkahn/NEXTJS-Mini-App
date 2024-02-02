import Image from 'next/image'
import React from 'react'
import Button from './Button'
import HeroText from './HeroText'
import SvgTent from '@/components/svgs/SvgTent'
import User from './svgs/User'
import Star from './svgs/Star'
import Close from './svgs/Close'

const Hero = () => {
   return (
      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
         <div className="hero-map" />

         <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
            <HeroText
               image={<SvgTent />}
               title="Putuk Truno Camp Area"
               titleClass="bold-52 lg:bold-88"
               descrClass='regular-16 mt-6 text-gray-30 xl:max-w-[520px] mb-8'
               description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nostrum at quos. Debitis labore neque dolores sequi doloremque voluptatem optio nam, sed illo dolor cupiditate quod impedit necessitatibus cum natus.'
            />

            <div className="my-11 flex flex-wrap gap-5">
               <div className="flex items-center gap-2">
                  {Array(5).fill(1).map((_, index) => (
                     <Star key={`${index}-star`} />
                  ))}
               </div>

               <p className="bold-16 lg:bold-20 text-blue-70">
                  198k
                  <span className="regular-16 lg:regular20 ml-1.5">Excellent Reviews</span>
               </p>
            </div>

            <div className="flex flex-col w-full gap-3 sm:flex-row">
               <Button
                  type="button"
                  title="Download App"
                  variant="btn_green"
               />
               <Button
                  type="button"
                  title="How We Work?"
                  icon={<User />}
                  variant="btn_white"
               />
            </div>
         </div>

         <div className="relative flex flex-1 items-start">
            <div className="relative x-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
               <div className="flex flex-col">
                  <div className='flexBetween'>
                     <p className='regular-16 text-gray-20'>Location</p>
                     <Close />
                  </div>
                  <p className='bold-20 text-white'>Aguas Calientes</p>
               </div>

               <div className='flexBetween'>
                  <div className="flex flex-col">
                     <p className='regular-16 text-gray-20'>Distance</p>
                     <p className="bold-20 text-white">173.28 miles</p>
                  </div>

                  <div className="flex flex-col">
                     <p className='regular-16 text-gray-20'>Elevation</p>
                     <p className="bold-20 text-white">2.040 km</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Hero