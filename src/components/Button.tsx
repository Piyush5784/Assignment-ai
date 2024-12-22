import React from "react";
import { Link } from "react-router";

// Define ButtonProps for better TypeScript support
interface ButtonProps {
  icon?: React.ReactNode; // Icon to display (optional)
  label: string; // Button text
  styles?: string; // Additional classes (optional)
  disabled?: boolean; // Disabled state (optional)
}

const Button: React.FC<ButtonProps> = ({
  icon,
  label,
  styles = "",
  disabled = false,
}) => {
  return (
    <Link to={"/dashboard"}>
      <button
        disabled={disabled}
        className={`border-[#D8DAE5] border rounded-lg flex items-center justify-center gap-2 h-14 w-[20rem] md:w-[27.875rem] transition 
      ${
        disabled
          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
          : "bg-white hover:bg-gray-100"
      } ${styles}`}
      >
        {icon && <span>{icon}</span>}
        <p className="font-semibold font-inter text-[#171717]">{label}</p>
      </button>
    </Link>
  );
};

export default Button;
