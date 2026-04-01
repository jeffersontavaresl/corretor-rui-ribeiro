import Link from "next/link";

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const variants = {
    primary:
      "bg-brand-gold text-brand-blue-dark hover:bg-brand-gold-light focus-visible:outline-brand-gold",
    secondary:
      "border-2 border-white text-white hover:bg-white/10 focus-visible:outline-white",
    outline:
      "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue/5 focus-visible:outline-brand-blue",
    ghost: "text-brand-blue hover:bg-brand-blue/5 focus-visible:outline-brand-blue",
  };
  const cls = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={cls}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={cls} {...props}>
      {children}
    </button>
  );
}
