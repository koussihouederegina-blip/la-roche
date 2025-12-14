interface Button3DProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Button3D({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = ''
}: Button3DProps) {
  const baseStyles = "relative font-semibold transition-all duration-200 active:translate-y-1 active:shadow-none cursor-pointer";

  const variantStyles = {
    primary: "bg-[#9B8E57] hover:bg-[#8a7d4e] text-white shadow-[0_6px_0_#7a6d3e]",
    secondary: "bg-[#96121D] hover:bg-[#7d0f18] text-white shadow-[0_6px_0_#6d0c14]"
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-xl",
    lg: "px-8 py-4 text-lg rounded-xl"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
}
