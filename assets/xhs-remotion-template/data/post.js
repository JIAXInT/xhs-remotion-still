export const postData = {
  theme: {
    primary: "#00C48C",
    bg: "#F8F9FA",
    text: "#1A1A1A",
    accent: "#7C3AED",
    dark: "#111111"
  },
  slides: [
    {
      type: "COVER",
      tag: "OPENCLAW",
      title: ["OpenClaw 5分钟上手", "日更变流水线"],
      subtitle: "选题 → 文案 → 封面\n一次跑通",
      metrics: [
        { label: "FOCUS", value: "AI 运营流程" },
        { label: "EFFICIENCY", value: "↑ 200%", highlight: true }
      ]
    },
    {
      type: "LIST",
      tag: "PAIN POINTS",
      page: "02",
      title: "内容日更最痛的3件事",
      items: [
        { icon: "⏳", text: "选题卡壳，想半天也没方向" },
        { icon: "🧱", text: "文案反复改，效率低还不稳定" },
        { icon: "🎨", text: "封面排版耗时，风格不统一" }
      ],
      summary: { title: "结论：", text: "流程没串起来" }
    },
    {
      type: "LIST",
      tag: "WORKFLOW",
      page: "03",
      title: "我用 OpenClaw 做到这件事",
      items: [
        { icon: "✅", text: "选题：热点+常青自动组合" },
        { icon: "✅", text: "文案：标题+正文+引导一键生成" },
        { icon: "✅", text: "封面：统一风格模板批量出图" }
      ],
      summary: { title: "核心：", text: "流程自动跑" }
    },
    {
      type: "HOOK",
      tag: "TAKEAWAY",
      page: "04",
      title: "提升效率的瓶颈\n不是写得慢，而是",
      highlightTitle: "切换太多",
      cards: [
        { type: "light", label: "THE TRUTH", text: "上下文不完整，AI 只能碎片化帮忙。" },
        { type: "dark", label: "THE SOLUTION", text: "把流程串起来，交给 OpenClaw 执行。" }
      ],
      cta: "想要模板？评论【模板】"
    }
  ]
};
