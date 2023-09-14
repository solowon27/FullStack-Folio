import React, { useState, useEffect } from 'react';

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <div className="fixed bottom-0 right-0 mb-10 mr-10"
        style= {{ zIndex: 9999 }}
        >
      {isVisible && (
        <div onClick={scrollToTop}>
           <svg className='w-10 h-10 text-lime-400' viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
            <path d="M17 18L12 13L7 18M17 11L12 6L7 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
      )}
    </div>
    );
}




export default BackToTop;
