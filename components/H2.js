export default function H2({ children, className }) {
  return (
    <h2 className={`text-[28px] leading-[38px] font-semibold ${className}`}>
      {children}
    </h2>
  );
}
