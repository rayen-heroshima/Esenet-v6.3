import  AnimatedTestimonials  from "@/components/ui/animated-testimonials";
export function Speaker() {
  const testimonials = [
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
      name: "Sofiene Hemissi ",
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
      name: "Mohamed Salah Frad",
      designation: "Directeur Général UGFS North Africa",
      src: "/speqkers/mohamed-salah-2.webp",
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
  return (
    <div className="content-visibility-auto flex justify-center items-center flex-col bg-slate-50 py-14" >
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
  Intervenants de l&apos;événement
</h1>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
