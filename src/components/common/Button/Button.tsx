import type { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonTypes {
  children: string | ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonTypes) {
  return (
    <button
      onClick={onClick}
      className={`${className} ${styles.button}`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
