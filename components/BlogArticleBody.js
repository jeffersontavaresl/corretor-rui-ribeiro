export default function BlogArticleBody({ content }) {
  const blocks = content.split("\n\n").filter(Boolean);

  return (
    <div className="max-w-3xl">
      {blocks.map((block, i) => {
        const line = block.trim();
        if (line.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="font-display mt-10 text-2xl font-bold text-brand-blue first:mt-0"
            >
              {line.replace(/^##\s+/, "")}
            </h2>
          );
        }
        return (
          <p key={i} className="mt-4 leading-relaxed text-brand-blue/80 first:mt-0">
            {line}
          </p>
        );
      })}
    </div>
  );
}
