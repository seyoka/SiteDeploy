import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';

export default function AboutMe() {
  return (
    <main className='p-4 sm:p-8 selection:text-blue-600'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl text-center mb-6 sm:mb-10 font-bold'>About Me</h1>
        <section className='space-y-6 sm:space-y-8 max-w-prose mx-auto'>
            <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold mb-2'>
                    Founder of 
                    <span className='text-blue-600 ml-3 font-bold'>Induct</span>
                </h2>
                <p>
                    I am a founder of
                    <a className='underline ml-1 font-bold' href='https://induct.ie/'>Induct</a>, 
                    a straightforward solution for Access Management.
                </p>
            </div>
            
            <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold mb-2'>
                    Patch 
                    <a className='text-blue-600 underline ml-1' href='#'>23</a>
                </h2>
                <p>
                    I was part of the Patch 23 cohort, which was a transformative experience for me. 
                    I highly recommend it. Learn more 
                    <a className='underline ml-1 font-bold' href='https://joinpatch.org'>here</a>.
                </p>
            </div>

            <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold mb-2'>
                    LC Student @ 
                    <span className='text-blue-600 ml-3 font-bold'>St.Clements College, Limerick</span>
            </h2>
            <p>
                Currently a 6th year student, Check out all my flashcards for biology, business, and english on
                <span className="ml-3 font-bold">
                    <a href='https://www.remnote.com/profile/seyoka' className='underline'>remnote</a>
                </span>
            </p>

            <p>
            Also when my Technology project and Comp Sci projects are complete and graded I'll be uploading to my 
            <span className="ml-3 font-bold">
                    <a href='' className='underline'>Github</a>
                </span>
            </p>

            <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">Interests</h2>
                <ul className="list-none pl-0">
                    <li className="flex items-center mb-2">
                        <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                        Reading
                    </li>
                    <li className="flex items-center mb-2">
                        <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                        Maths (Currently Learning Multivariable Calculus)
                    </li>
                    <li className="flex items-center mb-2">
                        <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                        Programming
                    </li>
                    <li className="flex items-center mb-2">
                        <span className="h-2 w-2 bg-blue-600 rounded-full mr-2"></span>
                        Computational Biology
                    </li>
                </ul>
            </div>

            <div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold mb-2'>
                    Favourite 
                    <span className='text-blue-600 ml-3 font-bold'>Books</span> 
                </h2> 
                <p>
                <a href='https://www.amazon.com/Contemporanea-Debolsillo-Spanish-George-Orwell/dp/8499890946/ref=sr_1_9?keywords=george+orwell+1984+book&sr=8-9'>
            <span className="underline">1984</span> - George Orwell 
                </a>
                <br/>
                <a href='https://www.amazon.com/Stranger-Albert-Camus/dp/0679720200/ref=tmm_pap_swatch_0?_encoding=UTF8&sr=8-2'>
                    <span className="underline">The Stranger</span> - Albert Camus 
                </a>
                <br/> 
                <a href='https://www.amazon.com/Beyond-Good-Evil-Penguin-Classics/dp/014044923X/ref=sr_1_1?keywords=beyond+good+and+evil+friedrich+nietzsche&sr=8-1'>
                    <span className="underline">Beyond Good and Evil</span> - Friedrich Nietzsche 
                </a>
                <br/> 
                <a> 
                    <span className="underline">Atomic Habits</span> - James Clear 
                </a>
                <br/> 
                <a>
                    <span className="underline">Diary of a CEO</span> - Steven Bartlett 
                </a>
                <br/> 
                <a>
                    <span className="underline">Making of the Prince of Persia</span> - Jordan Mechner
                </a>
                <br/> 
                </p>
            </div> 

            <div>
                <div>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold mb-2'>
                    Currently 
                    <span className='text-blue-600 ml-3 font-bold'>Reading</span>
                    </h2> 
                    <a>
                        <span className="underline">In Search Of Schrodinger's Cat</span> - John Gribbin
                    </a>
                    <br/>
                    <p>Please send me recommendations :)</p>
                </div>
            </div>  
        </section>
    </main>
  );
}
