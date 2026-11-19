import { Code } from "lucide-react";

export function TechIcon({ name }: { name?: string }) {
  if (!name) return <Code aria-hidden="true" className="size-5" strokeWidth={1.75} />;
  const url = `url(/icons/${name}.svg)`;
  return (
    <span aria-hidden="true" className="inline-block size-5 bg-current"
      style={{ maskImage: url, WebkitMaskImage: url, maskSize: "contain", WebkitMaskSize: "contain", maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat" }} />
  );
}
