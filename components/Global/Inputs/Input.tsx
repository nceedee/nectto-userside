import { ReactNode } from "react";

type InputType = React.ComponentProps<"input"> & { icon?: ReactNode };

export const Input = ({ className, icon, ref, ...props }: InputType) => {
  return (
    <div className={` ${className} `}>
      <input {...props} />
      {icon}
    </div>
  );
};