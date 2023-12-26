"use client"

import { useMediaQuery } from '@react-hook/media-query';
import Image from 'next/image';
import halfCircle from "../../../assets/images/Ellipse 7.png"
import man from "../../../assets/images/man.png"
import women from "../../../assets/images/woman.png"
import heroPara from "../../../assets/heroPara.svg"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './style.css'

import { Autoplay, Pagination } from 'swiper/modules';

export default function SliderComponent() {

    const isWideScreen = useMediaQuery('(max-width: 1024px)');

    return (
        <>
            <div className="mx-auto text-white flex-col md:container md:flex-row mt-32 md:mt-44 w-full p-6">
                <h1 className="text-start text-white text-5xl md:text-6xl font-bold max-[340px]:text-4xl">Our <span className="text-orange-500">Testimonials<Image alt="Image" src={heroPara} className="md:ml-28 mt-1" /></span></h1>
                <div className="mt-16 mb-10">
                    <p className="font-normal text-base -mt-10">Join the ranks of happy customers who have found their perfect solution with us!</p>
                </div>
                <Swiper
                    slidesPerView={isWideScreen ? 1 : 2}
                    spaceBetween={20}
                    autoplay={
                        {
                            delay: 2500
                        }
                    }
                    pagination={{
                        dynamicBullets: true,
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                // className="mySwiper"
                >
                    <div className="w-full mt-20 flex justify-center align-bottom items-center flex-col lg:flex-row">
                        {/* <div className="lg:w-1/2 lg:mr-5 mt-5"> */}
                            <SwiperSlide >
                                {/* card 1 */}
                                <figure className="md:flex bg-white rounded-[27px] p-8 md:p-0 relative text-black min-[1024px]:h-96 min-[1230px]:h-64">
                                    <div className="absolute left-0 top-0 hidden md:inline-block">
                                        <Image src={halfCircle} alt="halfCircle" className="rounded-t-[27px] rounded-r-none" width={150} height={150} />
                                    </div>
                                    <Image className="w-24 h-24 md:w-60 md:h-auto md:rounded-none rounded-full mx-auto z-10" src={man} alt="abhay" />
                                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                        <blockquote>
                                            <p className="text-lg font-medium pl-10 max-sm:pl-0 lg:pl-2">
                                                &quot;A huge shoutout to my mentor for being my constant support and helping me navigate the ups and downs of life. I couldn&apos;t have asked for a better mentor.&quot;
                                            </p>
                                        </blockquote>
                                        <figcaption className="font-medium pl-10 max-sm:pl-0 lg:pl-2">
                                            <div className="text-black dark:text-black-400 text-xl font-bold">
                                                Abhay Bhagat
                                            </div>
                                            {/* <div className="text-slate-700 dark:text-slate-500">
                    Staff Engineer, Algolia
                    </div> */}
                                        </figcaption>
                                    </div>
                                </figure>
                                {/* card 1 */}
                            </SwiperSlide>
                        {/* </div> */}
                        {/* <div className="lg:w-1/2 lg:ml-5 mt-5"> */}
                            <SwiperSlide >
                                {/* card 2 */}
                                <figure className="relative md:flex bg-white rounded-[27px] p-8 md:p-0 text-black min-[1024px]:h-96 min-[1230px]:h-64">
                                    <div className="absolute left-0 top-0 hidden md:inline-block">
                                        <Image src={halfCircle} alt="halfCircle" className="rounded-t-[27px] rounded-r-none" width={150} height={150} />
                                    </div>
                                    <Image className="w-24 h-24 md:w-60 md:h-auto md:rounded-none rounded-full mx-auto z-10" src={women} alt="" />
                                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                        <blockquote>
                                            <p className="text-lg font-medium pl-10 lg:pl-2 max-sm:pl-0">
                                                &quot;A huge shoutout to my mentor for being my constant support and helping me navigate the ups and downs of life. I couldn&apos;t have asked for a better mentor.&quot;
                                            </p>
                                        </blockquote>
                                        <figcaption className="font-medium pl-10  lg:pl-2 max-sm:pl-0">
                                            <div className="text-black dark:text-black-400 text-xl font-bold">
                                                Diksha Sharma
                                            </div>
                                            {/* <div className="text-slate-700 dark:text-slate-500">
                    Staff Engineer, Algolia
                    </div> */}
                                        </figcaption>
                                    </div>
                                </figure>
                                {/* card 2 */}
                            </SwiperSlide>
                        {/* </div> */}
                        {/* <div className="lg:w-1/2 lg:mr-5 mt-5"> */}
                            <SwiperSlide >
                                {/* card 1 */}
                                <figure className="md:flex bg-white rounded-[27px] p-8 md:p-0 relative text-black min-[1024px]:h-96 min-[1230px]:h-64">
                                    <div className="absolute left-0 top-0 hidden md:inline-block">
                                        <Image src={halfCircle} alt="halfCircle" className="rounded-t-[27px] rounded-r-none" width={150} height={150} />
                                    </div>
                                    <Image className="w-24 h-24 md:w-60 md:h-auto md:rounded-none rounded-full mx-auto z-10" src={man} alt="abhay" />
                                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                        <blockquote>
                                            <p className="text-lg font-medium pl-10 max-sm:pl-0 lg:pl-2">
                                                &quot;A huge shoutout to my mentor for being my constant support and helping me navigate the ups and downs of life. I couldn&apos;t have asked for a better mentor.&quot;
                                            </p>
                                        </blockquote>
                                        <figcaption className="font-medium pl-10 max-sm:pl-0 lg:pl-2">
                                            <div className="text-black dark:text-black-400 text-xl font-bold">
                                                Abhay Bhagat
                                            </div>
                                            {/* <div className="text-slate-700 dark:text-slate-500">
                    Staff Engineer, Algolia
                    </div> */}
                                        </figcaption>
                                    </div>
                                </figure>
                                {/* card 1 */}
                            </SwiperSlide>
                        {/* </div> */}
                        {/* <div className="lg:w-1/2 lg:ml-5 mt-5"> */}
                            <SwiperSlide >
                                {/* card 2 */}
                                <figure className="relative md:flex bg-white rounded-[27px] p-8 md:p-0 text-black min-[1024px]:h-96 min-[1230px]:h-64">
                                    <div className="absolute left-0 top-0 hidden md:inline-block">
                                        <Image src={halfCircle} alt="halfCircle" className="rounded-t-[27px] rounded-r-none" width={150} height={150} />
                                    </div>
                                    <Image className="w-24 h-24 md:w-60 md:h-auto md:rounded-none rounded-full mx-auto z-10" src={women} alt="" />
                                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                        <blockquote>
                                            <p className="text-lg font-medium pl-10 lg:pl-2 max-sm:pl-0">
                                                &quot;A huge shoutout to my mentor for being my constant support and helping me navigate the ups and downs of life. I couldn&apos;t have asked for a better mentor.&quot;
                                            </p>
                                        </blockquote>
                                        <figcaption className="font-medium pl-10  lg:pl-2 max-sm:pl-0">
                                            <div className="text-black dark:text-black-400 text-xl font-bold">
                                                Diksha Sharma
                                            </div>
                                            {/* <div className="text-slate-700 dark:text-slate-500">
                    Staff Engineer, Algolia
                    </div> */}
                                        </figcaption>
                                    </div>
                                </figure>
                                {/* card 2 */}
                            </SwiperSlide>
                        {/* </div> */}
                    </div>
                </Swiper>
            </div>

        </>
    );
}
