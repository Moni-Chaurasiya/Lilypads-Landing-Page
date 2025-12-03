import { Flower2 } from 'lucide-react';

const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-12 h-12">
        <Flower2 
          className="w-12 h-12 text-primary-purple" 
          fill="#8B7AB8"
          strokeWidth={1.5}
        />
        <Flower2 
          className="w-12 h-12 text-accent-pink absolute top-0 left-0 opacity-60" 
          fill="#D6527C"
          strokeWidth={1.5}
          style={{ transform: 'rotate(45deg)' }}
        />
      </div>
    </div>
  );
};

export default Logo;