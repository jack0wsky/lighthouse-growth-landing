import { InputHTMLAttributes } from "react";
import classNames from "classnames";

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "checked"> {
  label: string;
  selected: boolean;
  className?: string;
}
export const Checkbox = ({
  label,
  selected,
  className,
  ...props
}: CheckboxProps) => {
  return (
    <label
      className={classNames(
        "flex items-center gap-x-3 cursor-pointer",
        className
      )}
    >
      <div className="relative w-5 h-5">
        <input
          checked={selected}
          {...props}
          type="checkbox"
          className="w-5 h-5 invisible"
        />
        <div
          className={classNames(
            "w-5 h-5 border border-palette-grey-200 absolute top-0 rounded-md",
            { "bg-white": selected }
          )}
        />
      </div>
      <p className="text-white">{label}</p>
    </label>
  );
};
