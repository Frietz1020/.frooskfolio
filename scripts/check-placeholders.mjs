// Launch gate: fails a production build while any placeholder remains.
import { site } from "../src/content/site.ts";
import { projects } from "../src/content/projects.ts";
import { certificates } from "../src/content/certificates.ts";

const left = [["site", site], ...projects.map((p) => [`project: ${p.title}`, p]), ...certificates.map((c) => [`certificate: ${c.title}`, c])]
  .filter(([, r]) => r.placeholder).map(([n]) => n);
const problems = [];
if (left.length) problems.push(`${left.length} placeholder record(s): ${left.join("; ")}`);
if (site.url.includes("example")) problems.push(`site.url is still "${site.url}"`);
if (!process.env.NEXT_PUBLIC_CONTACT_ENDPOINT) problems.push("NEXT_PUBLIC_CONTACT_ENDPOINT is not set");
if (process.env.NODE_ENV === "production" && problems.length) {
  console.error("Placeholder guard failed:\n - " + problems.join("\n - "));
  process.exit(1);
}
console.log(problems.length ? `(dev) placeholders remaining:\n - ${problems.join("\n - ")}` : "No placeholders remain.");
