import React, { useState } from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import induct from './LogoWhiteFinal-removebg-preview.png';
import induct2 from './LogoBlueFinal-removebg-preview.png'; 

export default function AboutMe(){

      
    return(
        <main>
        <h1 className='text-5xl text-center'>About Me</h1>
        <nav className='
        items-center justify-center gap-6 mt-10'>
        <p>Founder of <a className='text-blue-600' href='https://induct.ie/'>Induct, </a>I am one of the founders of induct. A simple solution to Access Management</p>
        <h2>Patch<a className='text-blue-600'> 23</a></h2>
        <p> I partook in the patch 23 cohort, the best time of my life could not reccomend something more; if youre interested check it out <a href='https://joinpatch.org' 
        className='text-blue-600'>Here</a></p> 
        <p>Limerick Leader article. <a className=''>here</a></p>
        </nav>
        </main>
    )
} 
// 'use client'
// import React, { useState } from 'react';
// import { AiFillLinkedin } from 'react-icons/ai';
// import styles from './AboutMe.module.css'; // Assuming you have a CSS module for this component
// import induct from './LogoWhiteFinal-removebg-preview.png';
// import induct2 from './LogoBlueFinal-removebg-preview.png';

// export default function AboutMe() {
//   const Text = (props: { text: string }) => {
//     return <p className="text-base">{props.text}</p>;
//   };

//   const TextAnimation = () => {
//     const [isVisible, setIsVisible] = useState(false);

//     const animateText = () => {
//       setIsVisible(!isVisible);
//     };

//     return (
//       <div className={styles.animationContainer}>
//         <button onClick={animateText}>Animate Text</button>
//         <div className={`${styles.animatedText} ${isVisible ? '' : styles.hidden}`}>
//           Text that will animate
//         </div>
//       </div>
//     );
//   };

//   return (
//     <main>
//       <TextAnimation />
//       <h1 className="text-5xl text-center">About Me</h1>
//       <nav className="flex flex-row items-center justify-center gap-6 mt-10">
//         <h2 className="text-cyan-300">Projects</h2>
//         <h2>Patch</h2>
//         <h2>Accolades</h2>
//         <h2>Philosophy</h2>
//         <h2>Current Media</h2>
//       </nav>
//     </main>
//   );
// }
