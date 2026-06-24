 import ProjectCard from "@/components/ui/project-card";
import {Badge} from "@/components/ui/badge";
import type { Metadata } from "next";

  export const metadata: Metadata = {
    title: "项目 - 穆惠娴",
  };
export default function Projects(){
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-4">
           <h1 className="text-3xl font-bold">项目</h1>
           <div className="grid max-w-2xl gap-6 sm:grid-cols-2  lg:grid-cols-2 mix-auto">
            {/*项目卡片1*/}
            <ProjectCard
                title="苍穹外卖"
                description="仿美团外卖的后端管理系统，涵盖员工管理，菜品管理，订单管理等模块"
                tags={["java","Spring Boot","MySQL"]}
            /> 

            {/*项目卡片2*/}
            <ProjectCard
                title="个人网站"
                description="目前网站用 Next.js 和 Tailwind CSS构建"
                tags={["React","Next.js","Tailwind CSS"]}
            />
            </div>

        </div>
    )
}