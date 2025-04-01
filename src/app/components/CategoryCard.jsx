import Image from "next/image";
import Link from "next/link";

const colorMap = {
  teal: "border-teal-400 text-teal-600",
  blue: "border-blue-400 text-blue-600",
  orange: "border-orange-400 text-orange-600",
  purple: "border-purple-400 text-purple-600",
  pink: "border-pink-400 text-pink-600",
};

export default function CategoryCard({ title, icon, color }) {
  const borderColor = colorMap[color] || "border-gray-400 text-gray-600";

  return (
    <Link href={`/category/${title.toLowerCase()}`}>
      <div
        className={`flex flex-col items-center p-10 rounded-full border-2 ${borderColor} hover:shadow-lg transition-all duration-300 bg-white`}
      >
        <div className="mb-3">
          <Image
            src={icon || "/placeholder.svg"}
            alt={title}
            width={40}
            height={40}
            className="h-20 w-auto"
          />
        </div>
        <h3 className="font-semibold text-center">{title}</h3>
      </div>
    </Link>
  );
}
