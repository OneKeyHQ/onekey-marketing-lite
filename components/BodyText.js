export default function BodyText({ children, className }) {
  return (
    <p className={`text-base ${className}`}>
      {children}
    </p>
  );
}
