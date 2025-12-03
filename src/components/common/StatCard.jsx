const StatCard = ({ number, label }) => {
  return (
    <div className="text-left">
      <h3 className="text-4xl md:text-5xl font-bold text-primary-purple mb-2">
        {number}
      </h3>
      <p className="text-gray-600 text-sm md:text-base font-medium">
        {label}
      </p>
    </div>
  );
};

export default StatCard;