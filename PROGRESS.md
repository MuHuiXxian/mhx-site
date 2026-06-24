# 个人网站 — 开发进度

## Day 1（6/21 周六）

### 完成了什么
- [x] Next.js 项目初始化（mhx-site）
- [x] 首页：头像、名字、介绍、GitHub/Email 链接、技术栈标签、项目/博客导航
- [x] 项目页：2张项目卡片（苍穹外卖 + 个人网站）
- [x] 博客列表页：从 content/blog/ 读取 Markdown，解析 frontmatter
- [x] 博客详情页：[slug] 动态路由，显示文章内容

### 踩过的坑
- 往期所有坑已记录在本文档的"常见坑"部分

### 明天（Day 2）
- [ ] 写第二篇 Markdown 文章
- [x] 首页自我介绍的措辞优化（用户确认满意，无需改）
- [ ] 考虑：要不要加「关于」页面

---

## Day 3（6/23 周二）— 组件拆分 + shadcn/ui

### 完成了什么
- [x] 用 shadcn CLI 添加 Badge 和 Card 组件
- [x] 提取 ProjectCard 组件：从项目页两张重复卡片中抽取出 `src/components/ui/project-card.tsx`
- [x] ProjectCard 使用 Badge 渲染技术栈标签
- [x] 项目页用 `<ProjectCard>` 替换两张手写卡片 div
- [x] 理解组件化核心概念：props 传参、列表渲染（`.map()`）、组件嵌套（"套娃"）

### 学到的知识点
- 拆组件判断标准：同一 JSX 结构出现 ≥2 次
- 拆组件步骤：复制已有代码 → 包进函数 → 找不同的内容 → 变 props → import 使用
- shadcn/ui 不是 npm 包，是复制粘贴到项目里的源码
- React 组件化 = "套娃"：每层只负责一件事

### 明天（Day 4）
- [x] ProjectCard 外层 div 换成 Card + CardContent 组件
- [x] 首页技术栈标签换成 Badge 组件
- [x] 关于页面从 /blog 搬到 /about，深色主题改为白色统一
- [x] layout.tsx 清理：删除 web font（Geist）、metadata 改为个人标题、lang 改为 zh-CN
- [x] 创建 Nav 组件（首页/项目/关于链接 + usePathname 当前页高亮）
- [x] 创建 Footer 组件
- [x] 删除死代码（button.tsx、hello-world.md）
- [x] 页面级 metadata（about、projects）
- [x] 学习 Server Component vs Client Component 概念
- [x] 响应式检查通过

### 学到的知识点
- Default export vs Named export 的 import 区别（花括号）
- `"use client"` 指令切换客户端组件
- `usePathname()` hook 读取当前路由
- `export const metadata` 覆盖页面标题
- Server Component（默认，服务端运行）vs Client Component（浏览器运行，可用 hooks）
- 创意型网站（WebGL/GSAP）vs 应用型网站（CRUD/数据库）的学习路径完全不同

### 明天（Day 5）
- [ ] 将网站推送到 GitHub
- [ ] Vercel 部署上线
- [ ] 研究 vercel/nextjs-postgres-auth-starter（全栈项目拆解起点）
