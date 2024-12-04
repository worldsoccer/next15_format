"use client";

import { useState } from "react";
import { userMenuItems } from "@/config/user";
import { UserMenuItem } from "@/types";
import { Icons } from "@/components/icon/icon";
import { cn } from "@/lib/utils";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";

export default function UserNav({ session }: { session: Session | null }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleMenuItemClick = (onClick?: () => void, href?: string) => {
    // href があれば遷移する
    if (href) {
      router.push(href);
    }
    // onClick があれば実行する
    if (onClick) {
      onClick();
    }
    // メニューを閉じる
    setIsOpen(false);
  };

  return (
    <div className='relative'>
      <button
        onClick={toggleMenu}
        className='flex items-center space-x-2 rounded-md bg-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-300'
      >
        <span>{session?.user?.name || "ゲスト"}</span>
      </button>
      {isOpen && (
        <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50'>
          <ul className='py-1'>
            {userMenuItems.map((item: UserMenuItem, index: number) => {
              const Icon = Icons[(item.icon as string) || "arrowRight"];
              return (
                <li key={index}>
                  <button
                    onClick={() => handleMenuItemClick(item.onClick, item.href)}
                    className={cn(
                      "flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                      item.className || "",
                    )}
                  >
                    {Icon && <Icon className='mr-2 h-4 w-4' />}
                    <span>{item.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
