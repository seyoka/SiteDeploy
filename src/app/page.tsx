// import Image from 'next/image'
// import React from 'react'
// import { AiFillLinkedin } from 'react-icons/ai'
// import induct from './LogoWhiteFinal-removebg-preview.png'
// import induct2 from './LogoBlueFinal-removebg-preview.png'

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center gap-12 w-fill">
//       <h1 className="text-white-100 text-6xl font-bold">
//         Hi. I'm <span className="text-blue-600">Ryan</span>
//       </h1>
//       <h2 className="text-white-200 text-5xl">I Want to die</h2>
//       <div className='flex flex-row items-center justify-center gap-6'>
//         <a href='https://www.linkedin.com/in/ryan-morrissey-834256271/'><AiFillLinkedin className="text-white-200 hover:text-stone-400 hover:cursor-pointer w-12 h-12" /></a> 
//         <a href='https://induct.ie/'><img src={induct.src} alt="Induct Logo" className="hover:text-stone-400 hover:cursor-pointer w-12 h-12" /></a>
//       </div>
//       <div className="flex gap-24">
//         <a className='text-white-200 text-4xl hover:text-blue-600 cursor-pointer'>Github:</a> 
//         <a className='text-white-200 text-4xl hover:text-blue-600 cursor-pointer'>Projects:</a> 
//         <a className='text-white-200 text-4xl hover:text-blue-600 cursor-pointer'>About Me:</a> 
//       </div>
//     </main>
//   )
// }

'use client'
import React, { useState } from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import induct from './LogoWhiteFinal-removebg-preview.png';
import induct2 from './LogoBlueFinal-removebg-preview.png';

export default function Home() {
  const [logoSrc, setLogoSrc] = useState(induct.src);

  const handleLogoHover = () => {
    setLogoSrc(induct2.src);
  };

  const handleLogoLeave = () => {
    setLogoSrc(induct.src);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 w-fill">
      <h1 className="text-white-100 text-6xl font-bold">
        Hi. I'm <span className="text-blue-600" id="a">Ryan</span>
      </h1>
      <h2 className="text-white-200 text-5xl">Founder, Developer, Student</h2>
      <div className='flex flex-row itemflexs-center justify-center gap-6'>
      <a href='https://www.linkedin.com/in/ryan-morrissey-834256271/'><AiFillLinkedin className="text-white-200 hover:text-stone-400 hover:cursor-pointer w-12 h-12" /></a> 
        <a href='https://induct.ie/'>
          <div id="svg-container">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className="linkedin-svg"
            width="30pt" height="30pt" viewBox="0 0 478.000000 522.000000"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,522.000000) scale(0.100000,-0.100000)"
               stroke="none">
                <path d="M1505 5150 c-267 -48 -448 -119 -656 -259 -342 -228 -574 -547 -691
                -946 -61 -210 -60 -192 -65 -1227 l-4 -948 450 0 451 0 0 913 c0 885 1 916 20
                993 72 282 296 505 580 575 71 18 104 21 210 16 168 -7 275 -40 406 -129 115
                -77 248 -243 294 -366 50 -131 50 -128 50 -1087 0 -518 5 -932 10 -974 24
                -184 144 -320 329 -375 182 -54 394 35 495 207 67 113 66 97 66 1092 0 557 -4
                933 -10 993 -34 309 -124 563 -286 802 -271 402 -677 655 -1171 729 -111 17
                -362 12 -478 -9z"/>
                <path d="M1640 3894 c-69 -19 -131 -55 -193 -113 -58 -54 -93 -110 -118 -192
                -18 -58 -19 -108 -19 -1012 0 -1027 0 -1028 55 -1250 75 -307 256 -610 492
                -826 224 -205 486 -340 789 -407 119 -27 145 -29 339 -29 181 0 225 3 320 23
                462 97 837 355 1091 748 106 164 186 362 235 579 23 99 23 109 29 1073 l5 972
                -447 0 -448 0 0 -902 c0 -961 0 -959 -49 -1089 -76 -201 -262 -386 -466 -461
                -99 -37 -161 -48 -274 -48 -352 0 -665 247 -756 596 -13 50 -15 192 -15 974 0
                556 -4 942 -10 985 -39 272 -301 449 -560 379z"/>
            </g>
          </svg>
        </div>
        </a>       
      </div> 
      <a href='/About' className='text-white-200 text-4xl hover:text-blue-600 cursor-pointer'>About Me</a> 
      <a href="/Contact" id='B' className='text-base'>Contact Me</a>
    </main>
  );
} 
