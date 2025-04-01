import { Users, Eye, Heart, ShieldCheck, Brain, Handshake } from "lucide-react";

export default function BenefitCard({ title, description, icon }) {
  const IconComponent = getIcon(icon);

  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-full border flex items-center justify-center mb-4">
        <IconComponent className="h-6 w-6" />
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <div className="mt-4 flex items-center text-blue-600">
        <span className="text-sm">Learn more</span>
        <span className="ml-2">→</span>
      </div>
    </div>
  );
}

function getIcon(name) {
  switch (name.toLowerCase()) {
    case "users":
      return Users;
    case "eye":
      return Eye;
    case "heart":
      return Heart;
    case "shield-check":
      return ShieldCheck;
    case "brain":
      return Brain;
    case "handshake":
      return Handshake;
    default:
      return Users;
  }
}
