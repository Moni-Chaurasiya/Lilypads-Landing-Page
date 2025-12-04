const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'px-6 py-3 rounded-[1.25rem] font-medium transition-all duration-300 flex items-center gap-2';
  
  const variants = {
    primary: 'bg-[#7C5AC7] text-white hover:bg-primary-dark shadow-lg hover:shadow-xl',
    outline: 'border-2 border-white text-white hover:bg-primary-purple hover:text-white',
    white: 'bg-white text-primary-purple hover:bg-gray-50 shadow-md',
    greyBtn: ' text-white bg-[#2E302F] hover:bg-[#3B3C3BFFhover:text-white rounded-xl',
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