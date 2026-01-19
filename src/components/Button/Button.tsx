import { cn } from "tailwind-cn";

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const Button = ({ children, className }: ButtonProps) => {
  const baseClasses = "text-neutral-600 cursor-pointer";
  const mergedClasses = cn(baseClasses, className);

  return <button className={mergedClasses}>{children}</button>;
};

export default Button;
