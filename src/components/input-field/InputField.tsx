// - - - - - - - - - - Libraries
import clsx from "clsx";
import type {Path, UseFormRegister, FieldValues} from "react-hook-form";

// - - - - - - - - - - InputField (Main Component)
type InputFieldProps<T extends FieldValues> = {
  placeholder: string;
  name: Path<T>;
  label: string;
  register: UseFormRegister<T>;
  error?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "name" | "placeholder">;

// - - - - - - - - - - InputField (Main Component)
const InputField = <T extends FieldValues>({
  placeholder,
  name,
  label,
  register,
  error,
  className,
  ...props
}: InputFieldProps<T>) => {
  // *** Base Style
  const baseStyle = `outline-0 border p-1.5 rounded-sm w-[300px] md:w-135 lg:w-180`;
  // *** Return JSX
  return (
    <div
      className={clsx(
        "input-field flex flex-col gap-1",
        error ? "text-red-500" : "text-green-500 focus-within:text-green-600"
      )}
    >
      <label htmlFor={name} className="font-bold">
        {label}
      </label>
      <input
        type="text"
        id={name}
        placeholder={placeholder}
        {...register(name)}
        {...props}
        className={clsx(baseStyle, className, {
          "border-green-500 focus:border-green-600 placeholder:text-green-600/50":
            !error,
          "border-red-500 focus:border-red-600 placeholder:text-red-600/50":
            error,
        })}
      />
      {error && <span className="error text-red-500">{error}</span>}
    </div>
  );
};
export default InputField;
