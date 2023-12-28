"use client"

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import heroPara from "../../../assets/heroPara.svg";
import deepam from "../../../assets/images/deepam 2.jpg";

import './grid.css'

// Component definition
const OurTeam = () => {
  // Slick settings for grid mode
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2, // Number of slides to show at a time
    slidesToScroll: 2, // Number of slides to scroll at a time
    autoplay: true, // Autoplay enabled
    autoplaySpeed: 4000,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  
  const data = [
    { id: 1, titlename: "DEEPAM RAJ", post: 'Howard Trained Life Coach', content: '&quot;A huge shoutout to my mentor for being my constant support and helping me navigate the ups and downs of life. I couldn&apos;t have asked for a better mentor.&quot' },
    { id: 2, titlename: "DEEPAM RAJ", post: 'Howard Trained Life Coach', content: '&quot;A huge shoutout to my mentor for being my constant support and helping me navigate the ups and downs of life. I couldn&apos;t have asked for a better mentor.&quot' },
    { id: 3, titlename: "DEEPAM RAJ", post: 'Howard Trained Life Coach', content: '&quot;A huge shoutout to my mentor for being my constant support and helping me navigate the ups and downs of life. I couldn&apos;t have asked for a better mentor.&quot' },
    { id: 4, titlename: "DEEPAM RAJ", post: 'Howard Trained Life Coach', content: '&quot;A huge shoutout to my mentor for being my constant support and helping me navigate the ups and downs of life. I couldn&apos;t have asked for a better mentor.&quot' },
  ];
  

  const data2 = [
    { id: 1, titlename: "DEEPAM RAJ", post: 'Howard Trained Life Coach', content: '&quot;A huge shoutout to my mentor for being my constant support and helping me navigate the ups and downs of life. I couldn&apos;t have asked for a better mentor.&quot' },
    { id: 2, titlename: "DEEPAM RAJ", post: 'Howard Trained Life Coach', content: '&quot;A huge shoutout to my mentor for being my constant support and helping me navigate the ups and downs of life. I couldn&apos;t have asked for a better mentor.&quot' },
    { id: 3, titlename: "DEEPAM RAJ", post: 'Howard Trained Life Coach', content: '&quot;A huge shoutout to my mentor for being my constant support and helping me navigate the ups and downs of life. I couldn&apos;t have asked for a better mentor.&quot' },
    { id: 4, titlename: "DEEPAM RAJ", post: 'Howard Trained Life Coach', content: '&quot;A huge shoutout to my mentor for being my constant support and helping me navigate the ups and downs of life. I couldn&apos;t have asked for a better mentor.&quot' },
  ];

  return (
    <div className='text-white mt-24 bg-black'>
    <div className=' md:container'>
      <h1 className='text-center text-6xl py-20 text-white font-bold mb-0'>Our <span className='text-orange-500 mb-0'>Team</span><span><Image className='m-auto' src={heroPara} alt="paraUnderline" width={200} height={200}/></span></h1>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className='mb-0 p-4'>
            <figure className="md:flex bg-[#181719] rounded-[27px] p-8 md:p-0 relative text-black min-[1024px]:h-auto min-[1230px]:h-auto">
                    <Image className="w-24 h-24 md:w-32 md:h-32 md:my-auto md:mx-10 mx-auto rounded-full" src={deepam} alt="abhay" />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <figcaption className="font-medium pl-10 max-[767px]:pl-0 lg:pl-2">
                    <div className="text-white text-xl font-bold">
                        {item.titlename}
                    <div className="text-orange-500">
                        {item.post}
                    </div>
                    </div>
                    </figcaption>
                    <blockquote>
                    <p className="text-lg text-white font-medium pl-10 max-sm:pl-0 lg:pl-2">
                        {item.content}
                    </p>
                    </blockquote>
                    </div>
            </figure>
            </div>
        ))}
      </Slider>
      <Slider {...settings}>
        {data2.map((item) => (
          <div key={item.id} className='md:mb-32 p-4'>
            <figure className="md:flex bg-[#181719] rounded-[27px] p-8 md:p-0 relative text-black min-[1024px]:h-auto min-[1230px]:h-auto">
                    <Image className="w-24 h-24 md:w-32 md:h-32 md:my-auto md:mx-10 mx-auto rounded-full" src={deepam} alt="abhay" />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <figcaption className="font-medium pl-10 max-[767px]:pl-0 lg:pl-2">
                    <div className="text-white text-xl font-bold">
                        {item.titlename}
                    <div className="text-orange-500">
                        {item.post}
                    </div>
                    </div>
                    </figcaption>
                    <blockquote>
                    <p className="text-lg text-white font-medium pl-10 max-sm:pl-0 lg:pl-2">
                        {item.content}
                    </p>
                    </blockquote>
                    </div>
            </figure>
            </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default OurTeam;