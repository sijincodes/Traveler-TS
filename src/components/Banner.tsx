import React from 'react'
import { BannerDetail } from '../types/types'

 type BannerProp = {
  bannerAPI : BannerDetail
}

export type BannerTestProp = {
  bannerAPI ?: BannerDetail
}

function Banner({bannerAPI}:BannerProp) {
  return (
    <>
    <div className='relative w-full max-w-5xl mx-auto my-0 xl:w-[95vw] rounded-lg'>
        <div className='relative flex items-center'>
            <img src={bannerAPI.imgSrc} alt="banner-img" className='h-[35vh] w-full rounded-lg' />
        </div>
        <div className='absolute top-24 left-12 w-full flex flex-col items-start md:items-center md:justify-center md:left-0 md:top-14'>
            <h1 className='text-3xl font-bold text-slate-900 drop-shadow-lg filter'>{bannerAPI.title}</h1>
            <p className='text-base sm:text-sm'>{bannerAPI.text}</p>
            <button type='button' className='py-1.5 px-5 bg-gradient-to-b from-gray-900 to-slate-800 text-slate-300 text-sm rounded-full shadow-lg shadow-slate-900
            transition-all duration-300 active:scale-110'>{bannerAPI.btnText}</button>
        </div>
    </div>
    </>
  )
}

export default Banner