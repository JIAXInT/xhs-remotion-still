import { execSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { postData } from "../data/post.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const outDir = path.resolve(projectRoot, "out");

if (!existsSync(outDir)) mkdirSync(outDir);

postData.slides.forEach((_, i) => {
  const id = `Slide-${i + 1}`;
  const outFile = path.join(outDir, `slide-${i + 1}.png`);
  const cmd = `npx remotion still src/index.tsx ${id} "${outFile}"`;
  execSync(cmd, { stdio: "inherit", cwd: projectRoot });
});
