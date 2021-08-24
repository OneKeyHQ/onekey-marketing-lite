export default function H3({ children, className, ...rest }) {
  return <h3 className={`text-[22px] leading-8 font-semibold ${className}`} {...rest}>{children}</h3>;
}