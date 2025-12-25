// - - - - - - - - - - Libraries
// *** clsx
import clsx from "clsx";

// - - - - - - - - - - Types
// *** ButtonProps
type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "danger" | "outline";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

// - - - - - - - - - - Button (Main Component)
const Button = ({
  children,
  variant = "primary",
  type = "button",
  className,
  ...props
}: ButtonProps) => {
  // *** Base Styles
  const baseStyles = `py-1 px-2.5 rounded-sm cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 select-none`;
  // *** Variant
  const variants = {
    primary: `bg-green-500 text-white hover:bg-green-700 active:bg-green-500 disabled:hover:bg-green-500`,
    danger: `bg-purple-700 text-white hover:bg-purple-900 active:bg-purple-700 disabled:hover:bg-purple-700`,
    outline: `border border-green-300 text-green-300 hover:bg-green-500 hover:border-green-500 hover:text-white`,
  };
  // *** Return JSX
  return (
    <button
      type={type}
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
