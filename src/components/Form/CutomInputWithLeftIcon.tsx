import RedStar from "../UI/RedStar";
import Error from "../UI/Error";
import { useFormContext } from "react-hook-form";
import { Icon } from "@iconify/react/dist/iconify.js";

type TCustomInputWithLeftIconProps = {
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  readonly?: boolean;
  formName?: string;
};

export default function CustomInputWithLeftIcon({
  type,
  name,
  label,
  required,
  readonly,
  placeholder,
}: TCustomInputWithLeftIconProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <label className="block mb-[0.5rem]" htmlFor={name}>
        {label}
        {required && <RedStar />}
      </label>
      <div className="relative">
        <input
          className={`outline-none border-[1px] pr-[12px] pl-[30px] py-2 w-full duration-300 ${
            readonly && "cursor-not-allowed"
          } ${errors[name]?.message ? "border-red-500" : "border-[#D9D9D9]"}`}
          type={type}
          {...register(name)}
          id={name}
          placeholder={placeholder}
          readOnly={readonly}
        />
        <Icon
          className="absolute left-2 top-3 text-[1.3rem]"
          icon="mdi:dollar"
        />
      </div>
      {errors[name]?.message && (
        <Error message={errors[name].message as string} />
      )}
    </div>
  );
}
