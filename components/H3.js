export default function H3({ children, className, ...rest }) {
  return <h3 className={`text-[22px] md:text-[36px] leading-tight font-semibold ${className}`} {...rest}>{children}</h3>;
}