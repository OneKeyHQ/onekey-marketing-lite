export default function H5({ children, className }) {
  return (
    <h5 className={`text-[17px] leading-[26px] md:text-2xl font-medium ${className}`}>{children}</h5>
  );
}
