import Image from "next/image";
import { Star } from "lucide-react";

export default function CourseCard({
  title,
  image,
  instructor,
  rating,
  students,
}) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">By {instructor}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating)
                      ? "fill-amber-400 text-amber-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm ml-1">{rating}</span>
          </div>
          <div className="text-sm text-gray-600">{students} students</div>
        </div>
      </div>
    </div>
  );
}
