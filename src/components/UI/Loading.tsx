import { Icon } from "@iconify/react/dist/iconify.js";

export default function Loading() {
  return (
    <div className="h-screen bg-black/10 fixed inset-0 z-[999] backdrop-blur-md flex justify-center items-center">
      <Icon className="text-[3rem]" icon="line-md:loading-twotone-loop" />
    </div>
  );
}
