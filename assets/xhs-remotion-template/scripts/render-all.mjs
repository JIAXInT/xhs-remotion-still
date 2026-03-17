import { execSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { postData } from "../data/post.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const themeMode = process.env.REMOTION_THEME === "dark" ? "dark" : "light";
const outDirName = process.env.REMOTION_OUT_DIR || (themeMode === "dark" ? "out-dark" : "out");
const outDir = path.resolve(projectRoot, outDirName);

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

postData.slides.forEach((_, i) => {
  const id = `Slide-${i + 1}`;
  const outFile = path.join(outDir, `slide-${i + 1}.png`);
  const cmd = `npx remotion still src/index.tsx ${id} "${outFile}"`;
  execSync(cmd, { stdio: "inherit", cwd: projectRoot, env: { ...process.env } });
});
