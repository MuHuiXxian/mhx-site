 import type { Metadata } from "next";

  export const metadata: Metadata = {
    title: "关于 - 穆惠娴",
  };
export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center pt-24 px-4">
      
      <div className="max-w-xl w-full space-y-12">
        {/* 自我介绍 */}
        <section>
          <h2 className="text-xs font-medium uppercase tracking-wider text-neutral-800 mb-4">
            关于我
          </h2>
          <p className="text-gray-800 leading-relaxed">
            我是穆惠娴，一名正在自我成长的独立开发者。从 Java 后端起步，
            目前在向前端拓展，目标是具备独立全栈开发的能力。
            相比于追逐新技术，我更在意把基础打扎实——能脱离视频和模板，
            从零写出能跑的代码。
          </p>
        </section>

        {/* 兴趣爱好 */}
        <section>
          <h2 className="text-xs font-medium uppercase tracking-wider text-neutral-800 mb-4">
            兴趣爱好
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-neutral-800 px-3 py-1 text-sm text-neutral-300">
              阅读
            </span>
            <span className="rounded-full bg-neutral-800 px-3 py-1 text-sm text-neutral-300">
              写作
            </span>
            <span className="rounded-full bg-neutral-800 px-3 py-1 text-sm text-neutral-300">
              独立开发
            </span>
            <span className="rounded-full bg-neutral-800 px-3 py-1 text-sm text-neutral-300">
              散步
            </span>
          </div>
        </section>

        {/* 性格特征 */}
        <section>
          <h2 className="text-xs font-medium uppercase tracking-wider text-neutral-800 mb-4">
            性格特征
          </h2>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-neutral-800 px-3 py-1 text-sm text-neutral-300">
              务实
            </span>
            <span className="rounded-full bg-neutral-800 px-3 py-1 text-sm text-neutral-300">
              自律
            </span>
            <span className="rounded-full bg-neutral-800 px-3 py-1 text-sm text-neutral-300">
              好奇心强
            </span>
            <span className="rounded-full bg-neutral-800 px-3 py-1 text-sm text-neutral-300">
              喜欢反思
            </span>
          </div>
        </section>

        {/* 当前状态 */}
        <section>
          <h2 className="text-xs font-medium uppercase tracking-wider text-neutral-800 mb-4">
            当前状态
          </h2>
          <div className="rounded-xl border border-green-800  p-4">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-green-800" />
              <span className="text-sm text-green-800">
                正在学习前端，搭建个人网站中
              </span>
            </div>
          </div>
        </section>

        {/* 联系方式 */}
        <section>
          <h2 className="text-xs font-medium uppercase tracking-wider text-neutral-800 mb-4">
            联系
          </h2>
          <div className="flex gap-4 text-sm text-neutral-400">
            <a
              href="https://github.com/MuHuiXxian"
              className="hover:text-green-800 transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:mhxdianziyoujian@icloud.com"
              className="hover:text-green-800 transition-colors"
            >
              Email
            </a>
          </div>
        </section>
      </div>

      <div className="h-24" />
    </div>
  );
}

