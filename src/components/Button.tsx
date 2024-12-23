import React from "react";
import { Link } from "react-router";

interface ButtonProps {
  icon?: React.ReactNode;
  label: string;
  styles?: string;
  disabled?: boolean;
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
          ? "bg-gray-200  cursor-not-allowed"
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
