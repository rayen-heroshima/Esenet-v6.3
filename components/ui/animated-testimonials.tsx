"use client";

import { useEffect, useRef, useState } from "react";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
}

export default function AnimatedTestimonials({ testimonials }: AnimatedTestimonialsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState<number>(0);
  const scrollSpeed = 1.5; // Adjusted for smoother scroll
  const testimonialsLength = testimonials.length;
  const scrollAnimationRef = useRef<number | null>(null);

  const scrollTestimonials = () => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    if (scrollContainer.scrollLeft + scrollContainer.offsetWidth >= scrollContainer.scrollWidth) {
      // Reset scroll position and move to the next testimonial
      scrollContainer.scrollLeft = 0;
      setIndex((prevIndex) => (prevIndex + 1) % testimonialsLength);
    } else {
      scrollContainer.scrollLeft += scrollSpeed;
    }

    // Use requestAnimationFrame for smoother scrolling
    scrollAnimationRef.current = requestAnimationFrame(scrollTestimonials);
  };

  useEffect(() => {
    scrollAnimationRef.current = requestAnimationFrame(scrollTestimonials);

    return () => {
      if (scrollAnimationRef.current) {
        cancelAnimationFrame(scrollAnimationRef.current);
      }
    };
  }, [testimonialsLength]);

  return (
    <div className="overflow-hidden relative w-full" ref={containerRef}>
      <div className="flex w-max">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="flex-shrink-0 min-w-[350px] text-center p-6">
            <div className="group relative overflow-hidden bg-white shadow-xl rounded-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
              {/* Image Background */}
              <div
                className="w-full h-[400px] bg-cover bg-center transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:opacity-80"
                style={{ backgroundImage: `url(${testimonial.src})` }}
              />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <p className="text-2xl font-semibold group-hover:translate-y-4 transition-transform duration-300">
                  {testimonial.name}
                </p>
                <p className="text-md group-hover:translate-y-2 transition-transform duration-300">
                  {testimonial.designation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
