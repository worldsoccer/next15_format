export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};
export type MainNavItem = NavItem;

export type SiteConfig = {
  name: string;
  description?: string;
  url: string;
  ogImage: string;
  links: {
    builtBy: string;
    hosted: string;
    // x: string;
    // github: string;
  };
  builtBy: string;
  hosted: string;
};

export type SupportConfig = {
  mainNav: NavItem[];
};

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icon;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavItem[];
    }
);

export type DashboardConfig = {
  mainNav: NavItem[];
  sidebarNav: SidebarNavItem[];
};

export type UserMenuItem = {
  title: string; // メニュー項目のタイトル
  href?: string; // リンク先（オプション）
  onClick?: () => void; // クリック時の処理（オプション）
  className?: string; // 追加のクラス名（オプション）
  icon?: string; // アイコン名（オプション）
};
