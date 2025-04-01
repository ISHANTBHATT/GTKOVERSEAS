import { BookOpen, Users, Building, CheckCircle } from "lucide-react";

export default function StatCard({ title, value, icon }) {
  const IconComponent = getIcon(icon);

  return (
    <div className="flex flex-col items-center justify-center p-6 text-center">
      <div className="w-16 h-16 flex items-center justify-center mb-4">
        <IconComponent className="h-10 w-10" />
      </div>
      <div className="font-bold text-2xl mb-1">{value} +</div>
      <div className="text-gray-600 text-sm">{title}</div>
    </div>
  );
}

function getIcon(name) {
  switch (name.toLowerCase()) {
    case "book-open":
      return BookOpen;
    case "users":
      return Users;
    case "building":
      return Building;
    case "check-circle":
      return CheckCircle;
    default:
      return BookOpen;
  }
}
