import { twMerge } from "tailwind-merge";

function Button({ className, ...props }) {
  return (
    <button
      {...props}
      className={twMerge(
        "py-[14px] px-[24px] border text-white flex items-center justify-center  min-h-[62px]",
        className
      )}
    />
  );
}

export default Button;
