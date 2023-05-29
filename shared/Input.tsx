import { InputHTMLAttributes } from "react";
import classNames from "classnames";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  label: string;
  value: string;
  className?: string;
}

export const Input = ({
  className,
  value,
  label,
  type,
  ...props
}: InputProps) => {
  return (
    <label>
      <p className="text-white ml-4 mb-1 text-sm opacity-80">{label}</p>
      <input
        className={classNames(
          "text-base px-4 py-2.5 rounded-lg bg-palette-grey-600 text-white w-full focus:outline-palette-grey-400 focus:outline-1 focus:outline-offset-2",
          className
        )}
        value={value}
        {...props}
      />
    </label>
  );
};
