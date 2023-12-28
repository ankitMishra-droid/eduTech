"use client"

import React from "react";
import Image from "next/image";
import styled, {keyframes, css} from "styled-components";
import heroPara from "../../../assets/heroPara.svg"
import airtel from "../../../assets/images/airtel.svg"
import cavista from "../../../assets/images/cavista.svg"
import amdocs from "../../../assets/images/amdocs.svg"
import analytic from "../../../assets/images/analytic.png"
import avizva from "../../../assets/images/avizva.svg"
import bosch from "../../../assets/images/bosch.svg"

export default function BrandSlider() {

    const Data = [
        {id: 1, img: airtel,},
        {id: 2, img: cavista,},
        {id: 3, img: amdocs,},
        {id: 4, img: analytic,},
        {id: 5, img: avizva,},
        {id: 6, img: bosch,},
      ];
    
    return(
        <>
         <main className="relative min-h-screen flex flex-col justify-center overflow-hidden">
            <div className="w-full md:container mx-auto px-4 md:px-6 py-24">
                <h1 className='text-center text-6xl py-0 text-white font-bold mb-16'>Our <span className='text-orange-500 mb-0'>Partners</span><span><Image className='m-auto' src={heroPara} alt="paraUnderline" width={200} height={200}/></span></h1>
            <div className="text-center">
                <div
                x-data="{}"
                x-init="$nextTick(() => {
                            let ul = $refs.logos;
                            ul.insertAdjacentHTML('afterend', ul.outerHTML);
                            ul.nextSibling.setAttribute('aria-hidden', 'true');
                        })"
                className="w-full inline-flex flex-nowrap overflow-hidden bg-white rounded-xl"
                >
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    {
                        Data.map((item) => (    
                            <li key={item.id}>
                                <Image src={item.img} width={200} height={200} alt="brandImg"/>
                            </li>
                        ))
                    }
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                    {
                        Data.map((item) => (
                            <li key={item.id}>
                                <Image src={item.img} width={200} alt="brandImg"/>
                            </li>
                        ))
                    }
                </ul>
                </div>
            </div>
            </div>
        </main>   
        </>
    )
}