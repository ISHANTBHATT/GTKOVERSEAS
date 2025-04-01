// components/SwapColumnFeatures.js
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function SwapColumnFeatures({ features }) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {features.map((feature, index) => (
          <FeatureItem key={index} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
}

function FeatureItem({ feature, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          // Optionally disconnect after animation is triggered
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`
        flex flex-col md:flex-row ${
          index % 2 === 1 ? "md:flex-row-reverse" : ""
        }
        items-center py-8 transform transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
      `}
    >
      {/* Text Column */}
      <div className="md:w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
        <p className="text-gray-700">{feature.description}</p>
      </div>

      {/* Image Column */}
      <div className="md:w-1/2 p-4">
        <div
          className={`
            transform transition-transform duration-700
            ${
              visible
                ? index % 2 === 1
                  ? "-translate-x-0"
                  : "translate-x-0"
                : index % 2 === 1
                ? "-translate-x-12"
                : "translate-x-12"
            }
          `}
        >
          <Image
            src={feature.image}
            alt={feature.title}
            width={500}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
