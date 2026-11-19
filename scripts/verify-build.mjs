import fs from "node:fs";
const html = fs.readFileSync("out/index.html", "utf8");
const fails = [];
const ok = (c, m) => { if (!c) fails.push(m); };
ok(/<title>[^<]+<\/title>/.test(html), "missing <title>");
const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
ok(desc.length >= 50 && desc.length <= 160, `meta description length ${desc.length} not in 50-160`);
ok(/<link rel="canonical"/.test(html), "missing canonical");
for (const p of ["og:title", "og:description", "og:image"]) ok(html.includes(`property="${p}"`), `missing ${p}`);
ok(html.includes('name="twitter:card"'), "missing twitter:card");
ok(/application\/ld\+json/.test(html) && html.includes('"@type":"Person"'), "missing Person JSON-LD");
ok((html.match(/<h1[\s>]/g) || []).length === 1, "expected exactly one <h1>");
let prev = 0;
for (const m of html.matchAll(/<h([1-6])[\s>]/g)) { const l = +m[1]; ok(prev === 0 || l <= prev + 1, `heading level skipped before h${l}`); prev = l; }
for (const m of html.matchAll(/<img\b[^>]*>/g)) for (const a of ["alt", "width", "height"]) ok(new RegExp(`\\s${a}=`).test(m[0]), `img missing ${a}: ${m[0].slice(0, 80)}`);
for (const f of ["sitemap.xml", "robots.txt", "llms.txt"]) ok(fs.existsSync(`out/${f}`), `missing out/${f}`);
if (fails.length) { console.error("verify-build failed:\n - " + fails.join("\n - ")); process.exit(1); }
console.log("verify-build: all checks passed");
