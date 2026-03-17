const lightTheme = {
  mode: "light",
  primary: "#00C48C",
  bg: "#F8F9FA",
  text: "#1A1A1A",
  accent: "#7C3AED",
  dark: "#111111",
  surface: "#FFFFFF",
  surfaceAlt: "#F6F7FE",
  border: "#E5E7EB",
  muted: "#6B7280",
  grid: "#E5E7EB",
  tagBg: "#FFFFFF",
  tagBorder: "#EEF0F3",
  summaryHighlightBg: "#E0E7FF",
  summaryBg: "linear-gradient(90deg, #EEF2FF 0%, #FFFFFF 60%)",
  shadow: "0 8px 24px rgba(0,0,0,0.06)",
  shadowStrong: "0 16px 40px rgba(0,0,0,0.22)",
  surfaceDark: "#111111"
};

const darkTheme = {
  mode: "dark",
  primary: "#22D3EE",
  bg: "#0B0F14",
  text: "#E5E7EB",
  accent: "#A78BFA",
  dark: "#0B0F14",
  surface: "#111827",
  surfaceAlt: "#111827",
  border: "#1F2937",
  muted: "#94A3B8",
  grid: "#1F2937",
  tagBg: "#111827",
  tagBorder: "#1F2937",
  summaryHighlightBg: "#1E293B",
  summaryBg: "linear-gradient(90deg, #111827 0%, #0B0F14 60%)",
  shadow: "0 8px 24px rgba(0,0,0,0.35)",
  shadowStrong: "0 18px 44px rgba(0,0,0,0.5)",
  surfaceDark: "#0B0F14"
};

// ✅ 内容配置：章节自动拆分（每章至少 1 张图，超出则拆成多张）
const content = {
  maxItemsPerSlide: 8,
  maxLinesPerSlide: 12,
  maxCharsPerSlide: 360,
  cover: {
    tag: "INSTALL GUIDE",
    title: ["OpenClaw 安装教程", "从零到能跑"],
    subtitle: "适用 Windows / macOS\n核心思路：Node + 全局安装 + 启动网关",
    metrics: [
      { label: "环境", value: "Node 18+" },
      { label: "核心", value: "CLI + Gateway", highlight: true },
      { label: "检查", value: "status / gateway" }
    ],
    cta: "向左滑看步骤 →"
  },
  // chapters: 每个章节 = 一张图；如内容过多自动拆多张
  chapters: [
    {
      tag: "SUMMARY",
      title: "先说结论",
      body: "OpenClaw 的核心是『Node 环境 + 全局安装 + 启动网关』，步骤不难，卡点主要在环境变量和权限。"
    },
    {
      tag: "AUDIENCE",
      title: "适合谁",
      items: [
        { icon: "✅", text: "想用 OpenClaw 做自动化/Agent 的人" },
        { icon: "✅", text: "有基础命令行操作能力的人" },
        { icon: "⚠️", text: "不太适合：完全没碰过命令行的人" }
      ]
    },
    {
      tag: "PREP",
      title: "准备工作（3样）",
      items: [
        { icon: "✅", text: "Node.js（建议 18+）" },
        { icon: "✅", text: "包管理器 pnpm（或 npm）" },
        { icon: "✅", text: "一台能长期运行的电脑" }
      ]
    },
    {
      tag: "STEPS",
      title: "安装步骤（通用流程）",
      steps: [
        "安装 Node.js",
        "安装 pnpm：npm i -g pnpm",
        "全局安装 OpenClaw：pnpm add -g openclaw",
        "检查安装：openclaw --help",
        "启动网关：openclaw gateway start",
        "查看状态：openclaw gateway status"
      ]
    },
    {
      tag: "TIPS",
      title: "常见卡点 & 小建议",
      items: [
        { icon: "🔧", text: "终端找不到 openclaw：重启终端或检查环境变量" },
        { icon: "🔧", text: "端口占用：换端口或关闭占用程序" },
        { icon: "🔧", text: "权限不足：用管理员权限重新执行安装" },
        { icon: "✅", text: "先在本机跑通，再考虑接入自动化流程" },
        { icon: "✅", text: "记录每一步日志，后面排障更省事" }
      ]
    }
  ]
};

const chunkArray = (arr, size) => {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

const splitText = (text, maxChars) => {
  const parts = text
    .split(/(?<=[。！？；.!?])\s*/)
    .map((p) => p.trim())
    .filter(Boolean);
  const chunks = [];
  let buf = "";
  for (const p of parts) {
    if ((buf + p).length > maxChars && buf) {
      chunks.push(buf.trim());
      buf = p;
    } else {
      buf += (buf ? "" : "") + p;
    }
  }
  if (buf) chunks.push(buf.trim());
  // fallback hard split
  return chunks.flatMap((c) => {
    if (c.length <= maxChars) return [c];
    const hard = [];
    for (let i = 0; i < c.length; i += maxChars) hard.push(c.slice(i, i + maxChars));
    return hard;
  });
};

const inferType = (sec) => {
  if (sec.type) return sec.type;
  if (sec.lines) return "TERMINAL";
  if (sec.steps) return "STEPS";
  if (sec.items && sec.summary) return "POINTS";
  if (sec.items) return "LIST";
  if (sec.body) return "SIMPLE";
  return "SIMPLE";
};

const splitChapter = (sec, cfg) => {
  if (sec.items && sec.items.length > (cfg.maxItemsPerSlide || 5)) {
    const chunks = chunkArray(sec.items, cfg.maxItemsPerSlide || 5);
    return chunks.map((items) => ({ ...sec, items }));
  }
  if (sec.steps && sec.steps.length > (cfg.maxItemsPerSlide || 5)) {
    const chunks = chunkArray(sec.steps, cfg.maxItemsPerSlide || 5);
    return chunks.map((steps) => ({ ...sec, steps }));
  }
  if (sec.lines && sec.lines.length > (cfg.maxLinesPerSlide || 8)) {
    const chunks = chunkArray(sec.lines, cfg.maxLinesPerSlide || 8);
    return chunks.map((lines) => ({ ...sec, lines }));
  }
  if (sec.body && sec.body.length > (cfg.maxCharsPerSlide || 220)) {
    const chunks = splitText(sec.body, cfg.maxCharsPerSlide || 220);
    return chunks.map((body) => ({ ...sec, body }));
  }
  return [sec];
};

const parseChaptersFromRaw = (raw) => {
  if (!raw) return [];
  const lines = raw.split(/\r?\n/);
  const chapters = [];
  let cur = null;
  const push = () => {
    if (cur) {
      cur.body = cur.body.trim();
      chapters.push(cur);
    }
  };
  for (const line of lines) {
    if (/^#{2,3}\s+/.test(line)) {
      push();
      cur = { title: line.replace(/^#{2,3}\s+/, ""), body: "" };
    } else {
      if (!cur) cur = { title: "正文", body: "" };
      cur.body += line + "\n";
    }
  }
  push();
  return chapters;
};

const buildSlides = (cfg) => {
  const slides = [];
  slides.push({ type: "COVER", ...cfg.cover });

  const chapters = cfg.chapters?.length
    ? cfg.chapters
    : cfg.sections?.length
      ? cfg.sections
      : parseChaptersFromRaw(cfg.rawText);

  let page = 2;
  chapters
    .flatMap((s) => splitChapter(s, cfg))
    .forEach((sec, idx, arr) => {
      const sameTitleCount = arr.filter((x) => x.title === sec.title).length;
      const duplicate = sameTitleCount > 1;
      const order = arr.filter((x) => x.title === sec.title).indexOf(sec) + 1;
      const title = duplicate ? `${sec.title}（${order}/${sameTitleCount}）` : sec.title;

      slides.push({
        type: inferType(sec),
        page: String(page).padStart(2, "0"),
        ...sec,
        title
      });
      page += 1;
    });

  return slides;
};

const slides = buildSlides(content);

export const postDataLight = {
  theme: lightTheme,
  slides
};

export const postDataDark = {
  theme: darkTheme,
  slides
};

export const postData =
  process.env.REMOTION_THEME === "dark" ? postDataDark : postDataLight;
=
  process.env.REMOTION_THEME === "dark" ? postDataDark : postDataLight;
