import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AnimatedComponent = ({ children }) => {
    const componentRef = useRef(null);

    useEffect(() => {
        const component = componentRef.current;
        // Set initial state
        gsap.set(component, { opacity: 0, y: 30 });
        // Scroll-triggered animation
        gsap.fromTo(
            component,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: component,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none none',
                },
            }
        );

        return () => {
            // No need to manually kill the animations, ScrollTrigger will handle it
        };
    }, []);

    return <div ref={componentRef}>{children}</div>;
};
