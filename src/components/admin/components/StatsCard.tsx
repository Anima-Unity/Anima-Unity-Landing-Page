// components/CardStats.tsx
interface CardStatsProps {
  label: string;
  value: number;
  icon?: React.ReactNode;
}

export default function CardStats({ label, value, icon }: CardStatsProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md flex items-center gap-4">
      {icon && <div className="text-primary text-xl">{icon}</div>}
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <h2 className="text-xl font-bold">{value}</h2>
      </div>
    </div>
  );
}