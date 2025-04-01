export default function FeatureCard({ title, description }) {
  return (
    <div className="flex gap-4">
      <div className="font-bold text-lg">{title}</div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
