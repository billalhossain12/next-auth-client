import RedStar from '../UI/RedStar';
import Error from '../UI/Error';
import { useFormContext } from 'react-hook-form';

type TCustomInputProps = {
	type: string;
	name: string;
	label?: string;
	placeholder?:string;
	required?: boolean;
	readonly?: boolean;
	formName?: string;
};

export default function CustomInput({
	type,
	name,
	label,
	required,
	readonly,
	placeholder
}: TCustomInputProps) {
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
			<input
				className={`outline-none border-[1px] px-[12px] py-2 w-full duration-300 ${
					readonly && 'cursor-not-allowed'
				} ${errors[name]?.message ? 'border-red-500' : 'border-[#D9D9D9]'}`}
				type={type}
				{...register(name)}
				id={name}
				placeholder={placeholder}
				readOnly={readonly}
			/>
			{errors[name]?.message && <Error message={errors[name].message as string} />}
		</div>
	);
}
