import { Link } from "react-router-dom";
import clsx from "clsx";

interface LoginButtonProps {
  color?: "green" | "blue" | "red";
  size?: "sm" | "md" | "lg";
  text?: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ color = "green", size = "md", text = "Log In" }) => {
  return (
    <Link
      to="/login"
      className={clsx(
        "border rounded-full transition-colors flex items-center justify-center",
        {
          "px-3 py-1 text-sm": size === "sm",
          "px-4 py-2 text-base": size === "md",
          "px-5 py-3 text-lg": size === "lg",
          "text-green-600 border-green-600 hover:bg-green-600 hover:text-white": color === "green",
          "text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white": color === "blue",
          "text-red-600 border-red-600 hover:bg-red-600 hover:text-white": color === "red",
        }
      )}
    >
      {text}
    </Link>
  );
};

export default LoginButton;
