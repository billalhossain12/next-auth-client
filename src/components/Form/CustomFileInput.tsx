import { Icon } from '@iconify/react/dist/iconify.js';
import Error from '../UI/Error';
import { useFormContext } from 'react-hook-form';

type TCustomFileInputProps = {
	name: string;
	type: string;
	label?: string;
	placeholder?: string;
};

export default function CustomFileInput({
	name,
	type,
	label,
	placeholder,
}: TCustomFileInputProps) {
	const {
		formState: { errors },
		setValue,
		watch,
		register,
	} = useFormContext();
	const selectedFile = watch(name);

	const handleRemoveFile = () => {
		setValue(name, '', { shouldValidate: true });
	};

	return (
		<div className="h-full">
			<p>{label}</p>
			{/* Upload file  */}
			{!selectedFile?.length && (
				<div
					onClick={() => document?.getElementById('file')?.click()}
					className={`border-[1px] border-gray-300 rounded-md md:p-0 p-[1rem]  h-full flex flex-col gap-2 justify-center items-center cursor-pointer duration-300 ${
						errors[name]?.message ? 'border-red-200' : 'border-[#e7e4e4]'
					}`}
				>
					<Icon
						className="text-[5rem] text-[#44b63a9a]"
						icon="line-md:cloud-upload-outline-loop"
					/>
					<div className="flex items-center gap-2 text-primary">
						<Icon className="text-[1.3rem]" icon="ri:download-cloud-fill" />
						<h5>Upload Image</h5>
					</div>
					<h5 className="text-[14px] text-gray-500">{placeholder}</h5>
					<p className="text-gray-500 text-[12px]">
						File Format <span className="font-bold text-black">jpeg, png</span>{' '}
						Recommened Size{' '}
						<span className="font-bold text-black">600x600 (1:1)</span>
					</p>
					<input
						id="file"
						className="hidden"
						{...register(name, { required: true })}
						type={type}
						name={name}
					/>
				</div>
			)}

			{/*Display uploaded file  */}
			{selectedFile?.length > 0 && (
				<div className="border-[1px] border-gray-300 rounded-md p-2 h-full flex flex-col justify-center items-center space-y-[1rem]">
					<img
						className="h-[70%] w-full"
						src={URL.createObjectURL(selectedFile[0])}
						alt=""
					/>
					<h3>{selectedFile[0].name}</h3>
					<Icon
						className="border-[1px] cursor-pointer border-red-700 text-red-700 hover:bg-red-700 hover:text-white duration-200 rounded-md text-[2rem] p-1"
						icon="radix-icons:cross-2"
						onClick={handleRemoveFile}
					/>
				</div>
			)}
			{errors[name]?.message && (
				<Error message={errors[name].message as string} />
			)}
		</div>
	);
}
