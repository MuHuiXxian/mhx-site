import {Badge} from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      {/* 头像 */}
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-pink-200 text-4xl font-semibold text-white">
        娴
      </div>

      <h1 className="text-4xl font-bold">穆惠娴</h1>
      <p className="text-neutral-500">一名正在自我成长的独立开发者</p>
      <div className="flex gap-4 text-sm text-neutral-500">
        <a href="https://github.com/MuHuiXxian" className="hover:text-green-800">GitHub</a>
        <a href="mailto:mhxdianziyoujian@icloud.com" className="hover:text-green-800">Email</a>
      </div>
      <div className="flex flex-wrap justify-center gap-2 text-xs text-green-800">
        <Badge variant="outline" className="border-neutral-800 text-green-800">Java</Badge>
        <Badge variant="outline" className="border-neutral-800 text-green-800">Spring Boot</Badge>
        <Badge variant="outline" className="border-neutral-800 text-green-800">React</Badge>
        <Badge variant="outline" className="border-neutral-800 text-green-800">JavaScript</Badge>
        <Badge variant="outline" className="border-neutral-800 text-green-800">MySQL</Badge>
      </div>

      {/*分割线*/}
      <div className="my-4 h-px w-48 bg-neutral-200"/>

    </div>  
  );
}
