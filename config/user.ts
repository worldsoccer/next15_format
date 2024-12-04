import { UserMenuItem } from "@/types";
import { handleLogout } from "@/utils/userActions";

export const userMenuItems: UserMenuItem[] = [
  {
    title: "設定",
    href: "/dashboard/settings",
    icon: "settings",
  },
  {
    title: "ログアウト",
    onClick: handleLogout,
    icon: "logOut",
  },
];
