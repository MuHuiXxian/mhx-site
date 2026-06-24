"use client";
import {usePathname} from "next/navigation";
import Link from "next/link";
export default function Nav() {
    const pathname = usePathname();
    return (
      <nav className="px-6 py-4 max-w-2xl mx-auto w-full flex items-center justify-between">
        <span className="font-semibold text-lg">mhx</span>
        <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/" className={pathname=="/" ? "text-green-800" : "text-gray-500 hover:text-green-800"}>首页</Link>
            <Link href="/projects" className={pathname=="/projects" ? "text-green-800" : "text-gray-500 hover:text-green-800"}>项目</Link>
            <Link href="/about" className={pathname=="/about" ? "text-green-800" : "text-gray-500 hover:text-green-800"}>关于</Link>
        </div>
      </nav>
    );
  }