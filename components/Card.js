export default function Card({ children, className = "", as: Tag = "div", ...props }) {
  return (
    <Tag
      className={`rounded-2xl border border-brand-blue/10 bg-white p-6 shadow-sm transition hover:border-brand-gold/30 hover:shadow-md ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
