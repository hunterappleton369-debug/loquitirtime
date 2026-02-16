import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'navy';
  className?: string;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', icon, ...props }) => {
  const baseClasses = "relative px-8 py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center group overflow-hidden";
  
  let variantClasses = "";
  switch (variant) {
    case 'primary':
      variantClasses = "bg-primary text-white shadow-xl shadow-primary/20 hover:shadow-primary/40";
      break;
    case 'navy':
      variantClasses = "bg-navy-custom text-white hover:bg-navy-custom/90 shadow-xl";
      break;
    case 'outline':
      variantClasses = "border-2 border-primary text-primary hover:bg-primary/10";
      break;
    case 'secondary':
      variantClasses = "bg-white text-navy-custom border border-navy-custom/10 hover:border-primary/50";
      break;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">
            {icon}
          </span>
        )}
      </span>
      {/* Subtle shine effect on hover */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
    </motion.button>
  );
};

export default Button;