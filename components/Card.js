import H5 from "./H5";

export default function Card({ children, className, label }) {
  return (
    <div className={`p-6 md:p-8 rounded-xl overflow-hidden ${className}`}>
      {label && <H5>{label}</H5>}
      {children}
    </div>
  );
}
