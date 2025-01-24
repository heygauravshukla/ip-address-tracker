import { FC, HTMLAttributes, ReactNode } from "react";

interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ className = "", children, ...props }) => {
  return (
    <div className={`mx-auto max-w-[80rem] px-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Wrapper;
