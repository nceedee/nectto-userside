import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

export const Card = ({ children, className }: Props) => {
  return (
    <div className={`shadow-custom rounded-md bg-primary ${className} `}>
      {children}
    </div>
  );
};
