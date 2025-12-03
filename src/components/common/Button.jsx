const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2';
  
  const variants = {
    primary: 'bg-primary-purple text-white hover:bg-primary-dark shadow-lg hover:shadow-xl',
    outline: 'border-2 border-white text-white hover:bg-primary-purple hover:text-white',
    white: 'bg-white text-primary-purple hover:bg-gray-50 shadow-md',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;