


'use client'
import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 w-full selection:text-blue-600 px-4 sm:gap-12 sm:px-0">
      <title>Ryan Morrissey's Personal site</title>
      <h1 className="text-3xl text-center font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
        Hi. I'm <span id='a' className="text-blue-600">Ryan</span>
      </h1>
      <h2 className="text-2xl text-center text-white sm:text-3xl md:text-4xl lg:text-5xl">Founder, Developer, Student</h2>
      <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6'>
        <a href='https://www.linkedin.com/in/ryan-morrissey-834256271/'>
          <AiFillLinkedin className="text-white w-10 h-10 sm:w-12 sm:h-12" />
        </a> 
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
      <a href='/About' id='c' className='text-white text-2xl sm:text-3xl lg:text-4xl hover:text-blue-600 cursor-pointer'>About Me</a> 
      <a href="/Contact" id='B' className='text-white text-lg sm:text-xl lg:text-2xl'>Contact Me</a>
    </main>
  );
}
