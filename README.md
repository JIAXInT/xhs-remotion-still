# xhs-remotion-skill

**Version:** 0.2.0

使用 Remotion Still 批量生成小红书图文静态套图的 Skill。内置模板，可用数据驱动方式一键出图。

## 功能
- Remotion Still 静态图模板（3:4 小红书最佳比例）
- 数据驱动（`data/post.js`）修改文本即可出图
- 批量渲染 PNG 输出到 `out/`

## 快速开始

### 1) 从 Skill 拷贝模板到任意目录
```bash
python scripts/bootstrap_template.py --dest <project-path>
```

### 2) 修改内容数据
编辑：`<project-path>/data/post.js`

### 3) 安装依赖
```bash
cd <project-path>
npm i
```

### 4) 预览（可选）
```bash
npm run start
```

### 5) 批量导出
```bash
npm run render:all
```
输出路径：`<project-path>/out/slide-*.png`

## 数据结构
`data/post.js`：
- `theme`: 颜色主题（primary/bg/text/accent/dark）
- `slides[]`: 由多张图组成
  - `type`: `COVER` | `LIST` | `HOOK` | `QUOTE` | `STEPS` | `COMPARE` | `POINTS` | `SIMPLE` | `AUTO`
  - **AUTO** 会根据内容字段自动匹配模板：
    - `metrics + title[]` → COVER
    - `cards` → HOOK
    - `left/right` → COMPARE
    - `steps` → STEPS
    - `quote` → QUOTE
    - `items + summary.highlight/desc` → POINTS
    - `items` → LIST
    - 其他 → SIMPLE
  - 常用字段：`tag`、`page`、`title`、`subtitle`、`items`、`summary`、`cards`、`cta`

## 默认尺寸
- 1080 × 1440（3:4）

## 目录结构
```
assets/xhs-remotion-template/
├── data/post.js
├── src/
│   ├── Root.tsx
│   ├── SlideLayout.tsx
│   └── slides/ (Cover/List/Hook)
├── scripts/render-all.mjs
├── package.json
└── out/ (render 输出)
```

## 备注
- `out/` 与 `node_modules/` 已在 `.gitignore` 中忽略
- 可按需扩展更多 slide 类型
��─ out/ (render 输出)
```

## 备注
- `out/` 与 `node_modules/` 已在 `.gitignore` 中忽略
- 可按需扩展更多 slide 类型
