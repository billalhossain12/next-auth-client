import 'flatpickr/dist/themes/material_green.css';
import Flatpickr from 'react-flatpickr';
import { Controller, useFormContext } from 'react-hook-form';
import Error from '../UI/Error';
import { Icon } from '@iconify/react/dist/iconify.js';
import RedStar from '../UI/RedStar';

type TCustomDatePickerProps = {
	name: string;
	label?: string;
	required?: boolean;
	formName?: string;
	placeholder?: string;
};

export default function CustomDatePicker({
	name,
	label,
	required,
	placeholder,
}: TCustomDatePickerProps) {
	const {
		control,
		formState: { errors },
	} = useFormContext();

	return (
		<div>
			<label className="block" htmlFor={name}>
				{label}
				{required && <RedStar />}
			</label>
			<div
				className={`outline-none border-[1px] border-gray-300 px-[12px] py-2 cursor-pointer w-full relative duration-300 ${
					errors[name]?.message ? 'border-red-500' : 'border-[#D9D9D9]'
				}`}
			>
				<Controller
					name={name}
					control={control}
					render={({ field: { onChange, onBlur, ref }, field }) => {
						return (
							<Flatpickr
								{...field}
								onChange={value => onChange(value[0])}
								onBlur={onBlur}
								ref={ref}
								className="outline-none cursor-pointer w-full"
								placeholder={placeholder}
							/>
						);
					}}
				/>
				<Icon
					className="absolute right-2 top-3 text-gray-500"
					icon="fontisto:date"
				/>
			</div>
			{errors[name]?.message && (
				<Error message={errors[name]?.message as string} />
			)}
		</div>
	);
}
