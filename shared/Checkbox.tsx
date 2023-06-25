import { InputHTMLAttributes } from "react";
import classNames from "classnames";
import { CheckIcon } from "@/shared/icons";

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
            "w-5 h-5 border border-palette-grey-200 absolute top-0 rounded-md flex justify-center items-center",
            { "bg-white": selected }
          )}
        >
          <CheckIcon />
        </div>
      </div>
      <p className="text-white">{label}</p>
    </label>
  );
};
