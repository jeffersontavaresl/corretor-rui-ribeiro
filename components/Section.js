export default function Section({
  id,
  title,
  eyebrow,
  subtitle,
  children,
  className = "",
  containerClass = "",
  dark = false,
}) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 ${dark ? "bg-brand-blue text-white" : "bg-white text-brand-blue"} ${className}`}
    >
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${containerClass}`}>
        {(eyebrow || title || subtitle) && (
          <div className="mx-auto mb-10 max-w-3xl text-center">
            {eyebrow && (
              <p
                className={`text-sm font-semibold uppercase tracking-wider ${dark ? "text-brand-gold" : "text-brand-gold-dark"}`}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={`mt-4 text-lg ${dark ? "text-white/85" : "text-brand-blue/80"}`}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
