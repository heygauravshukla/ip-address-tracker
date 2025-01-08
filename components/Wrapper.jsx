export default function Wrapper({ className = "", children, ...props }) {
  return (
    <div className={`mx-auto max-w-[80rem] px-6 ${className}`} {...props}>
      {children}
    </div>
  );
}
