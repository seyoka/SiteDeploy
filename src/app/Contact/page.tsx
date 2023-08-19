import React from "react"; 

export default function Contact(){
    return(
       <main>
        <a  href="/" className="text-white-100 text-xl">Back</a>
        <h1 className="text-white-100 text-5xl">Contact</h1>
        <h2 className="text-base">Where to find me</h2>
        <h2 className="text-cyan-200 text-3xlz">Socials</h2>
        <ul>
        <li>X: </li>
        <li>LinkedIn:</li>
        <li>Mail: Ryan@<span className="text-blue-600">induct.ie</span> </li>
        <li></li>
        </ul>
        <h2 className="text-red-300">Places</h2>
        <ul>
            <li><a href="https://www.analog.com/en/about-adi/incubators/catalyst.html"id="C">ADI Catalyst</a></li>
            <li><a href="https://dogpatchlabs.com/">Dog Patch Labs 🐕</a></li>
        </ul>
        </main>
    )
}