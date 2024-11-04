import RedStar from "../UI/RedStar";
import Error from "../UI/Error";
import { useFormContext } from "react-hook-form";

type TCustomTextAreaProps = {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  readonly?: boolean;
  formName?: string;
};

export default function CustomTextArea({
  name,
  label,
  required,
  readonly,
  placeholder,
}: TCustomTextAreaProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="h-full">
      <label className="block mb-[0.5rem]" htmlFor={name}>
        {label}
        {required && <RedStar />}
      </label>
      <textarea
        className={`outline-none border-[1px] px-[12px] py-2 w-full md:h-[81%] h-[150px] duration-300 ${
          readonly && "cursor-not-allowed"
        } ${errors[name]?.message ? "border-red-500" : "border-[#D9D9D9]"}`}
        {...register(name)}
        id={name}
        placeholder={placeholder}
        readOnly={readonly}
      ></textarea>
      {errors[name]?.message && (
        <Error message={errors[name].message as string} />
      )}
    </div>
  );
}
