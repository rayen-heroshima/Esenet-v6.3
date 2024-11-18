"use client";

import { useEffect, useRef, useState } from "react";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

export function Speaker() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Ameur Cherif",
      designation: "Président de l'Université de la Manouba",
      src: "/speqkers/UMA.webp",
    },
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Lamine",
      designation: "CEO Convergen",
      src: "/speqkers/sara.webp",
    },
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sofiene Hemissi",
      designation: "Ministre des Technologies de la Communication",
      src: "/speqkers/elwzir.webp",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "TakiEddine Ben Masoud",
      designation: "CEO de Takiacademy",
      src: "/speqkers/takieddine.webp",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Mahjoub Langar",
      designation: "PDG Poulina Group Holding",
      src: "/speqkers/Mahjoub.webp",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Sahar Mechri",
      designation: "Dir. Exécutive Magazine Managers",
      src: "/speqkers/Sarahh.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Houda Bakir",
      designation: "Historiar- ODC",
      src: "/speqkers/mra.webp",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Youssef Boufaied",
      designation: "Coordinateur du projet Maken TIC DCE",
      src: "/speqkers/sayed.webp",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Abdlkerim REZGUI",
      designation: "CEO BI4YOU",
      src: "/speqkers/Abdelkerim.webp",
    },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const scrollSpeed = 1.5;
  const scrollAnimationRef = useRef<number | null>(null);

  const scrollTestimonials = () => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    if (scrollContainer.scrollLeft + scrollContainer.offsetWidth >= scrollContainer.scrollWidth) {
      scrollContainer.scrollLeft = 0;
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    } else {
      scrollContainer.scrollLeft += scrollSpeed;
    }

    scrollAnimationRef.current = requestAnimationFrame(scrollTestimonials);
  };

  useEffect(() => {
    scrollAnimationRef.current = requestAnimationFrame(scrollTestimonials);

    return () => {
      if (scrollAnimationRef.current) {
        cancelAnimationFrame(scrollAnimationRef.current);
      }
    };
  }, [testimonials.length]);

  return (
    <div className="content-visibility-auto flex justify-center items-center flex-col bg-slate-50 py-14">
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        Intervenants de l&apos;événement
      </h1>
      <div className="overflow-hidden relative w-full mt-8" ref={containerRef}>
        <div className="flex w-max">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="flex-shrink-0 min-w-[350px] text-center p-6">
              <div className="relative overflow-hidden bg-white shadow-xl rounded-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
                <div
                  className="w-full h-[400px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${testimonial.src})` }}
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-2xl font-semibold">{testimonial.name}</p>
                  <p className="text-md">{testimonial.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
