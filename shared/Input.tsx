import { InputHTMLAttributes } from "react";
import classNames from "classnames";
import { UseFormRegister } from "react-hook-form";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  label: string;
  className?: string;
  name: string;
  register: UseFormRegister<any>;
}

export const Input = ({
  className,
  label,
  register,
  name,
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
        {...register(name)}
        {...props}
      />
    </label>
  );
};
