import React from "react"; 

export default function Contact(){
    return(
        <main className='p-4 sm:p-8 selection:text-blue-600'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-left mb-8 sm:mb-10 font-bold'>Contact</h1>
            <section className='space-y-6 sm:space-y-8 max-w-prose mx-auto'> 
                <ul>
                    <li className="text-base sm:text-lg md:text-xl">
                      Personal Email: 
                      <span className="ml-2 font-bold">Ryanj.morrissey@gmail.com </span>
                    </li>
                </ul>
            </section>
        </main>
    );
}
