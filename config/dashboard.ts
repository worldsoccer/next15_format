import { DashboardConfig } from "@/types";

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "ホーム",
      href: "/",
    },
    {
      title: "材料検索",
      href: "/dashboard/serach",
      // disabled: true,
    },
    {
      title: "持出",
      href: "/dashboard/takingout",
      // disabled: true,
    },
    {
      title: "刃物",
      href: "/dashboard/doril",
      // disabled: true,
    },
    {
      title: "工程",
      href: "/dashboard/process",
      // disabled: true,
    },
    {
      title: "納期",
      href: "/dashboard/deadline",
      // disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "ダッシュボード",
      href: "/dashboard",
      icon: "logo",
      // disabled: true,
    },
    {
      title: "サポート",
      href: "/dashboard/support",
      icon: "help",
      // disabled: true,
    },
    {
      title: "設定",
      href: "/dashboard/settings",
      icon: "settings",
      // disabled: true,
    },
    // {
    //   title: "材料検索",
    //   href: "/dashboard/serach",
    //   icon: "search",
    //   // disabled: true,
    // },
    // {
    //   title: "持出管理",
    //   href: "/dashboard/takingout",
    //   icon: "logOut",
    //   // disabled: true,
    // },
    // {
    //   title: "刃物管理",
    //   href: "/dashboard/doril",
    //   icon: "drill",
    //   // disabled: true,
    // },
    // {
    //   title: "工程管理",
    //   href: "/dashboard/process",
    //   icon: "workflow",
    //   // disabled: true,
    // },
    // {
    //   title: "納期管理",
    //   href: "/dashboard/deadline",
    //   icon: "calendar",
    //   // disabled: true,
    // },
  ],
};
