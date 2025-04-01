"use client";

export default function StarRating({ rating, max = 5 }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex">
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className="text-lg">
          {i < fullStars ? (
            <span className="text-yellow-500">★</span>
          ) : i === fullStars && hasHalfStar ? (
            <span className="text-yellow-500">★</span>
          ) : (
            <span className="text-gray-300">★</span>
          )}
        </span>
      ))}
    </div>
  );
}
