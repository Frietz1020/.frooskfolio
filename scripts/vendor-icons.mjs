// Copies the devicon SVGs we use (from the version pinned in package-lock) into public/icons.
import fs from "node:fs";
import path from "node:path";
const stems = ["c-plain","cplusplus-plain","csharp-plain","java-plain","python-plain","php-plain","javascript-plain","typescript-plain","html5-plain","css3-plain","react-original","nextjs-plain","nodejs-plain","fastapi-plain","tailwindcss-original","bootstrap-plain","postgresql-plain","mysql-plain","firebase-plain","supabase-plain","numpy-plain","pandas-plain","matplotlib-plain","git-plain","github-original","gitlab-plain","npm-original-wordmark","docker-plain","cloudflare-plain"];
const got = [], missing = [];
fs.mkdirSync("public/icons", { recursive: true });
for (const s of stems) {
  const src = path.join("node_modules/devicon/icons", s.split("-")[0], `${s}.svg`);
  if (fs.existsSync(src)) { fs.copyFileSync(src, `public/icons/${s}.svg`); got.push(s); } else missing.push(s);
}
fs.writeFileSync("src/content/icons.generated.json", JSON.stringify(got, null, 2));
console.log(`icons: ${got.length} vendored, missing: ${missing.join(", ") || "none"}`);
