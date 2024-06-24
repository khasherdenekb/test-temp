import { Tag, Bookmark, SquarePen, LayoutGrid, BugPlay, HistoryIcon } from "lucide-react";

import { checkPermission } from "./auth-helper";

type Submenu = {
  href: string;
  label: string;
  code?: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  code?: string;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  const fullMenuList: Group[] = [
    {
      groupLabel: "",
      menus: [
        {
          href: "/",
          label: "Home",
          active: pathname === "/",
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Examples",
      menus: [
        {
          href: "",
          label: "Examples",
          active: pathname.includes("/example"),
          icon: BugPlay,
          submenus: [
            {
              href: "/example",
              label: "Example page",
              active: pathname === "/example",
            },
            {
              href: "/example/upload-files",
              label: "Upload files",
              active: pathname === "/example/upload-files",
            },
            {
              href: "/example/upload-files2",
              label: "Upload files 2",
              active: pathname === "/example/upload-files2",
            },
            {
              href: "/example/form",
              label: "Example form",
              active: pathname === "/example/form",
            },
          ],
        },
      ],
    },
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "",
          label: "Posts",
          active: pathname.includes("/posts"),
          icon: SquarePen,
          submenus: [
            {
              href: "/posts",
              label: "User post",
              active: pathname === "/posts",
            },
            {
              href: "/posts/new",
              label: "New Post",
              active: pathname === "/posts/new",
            },
          ],
        },
        {
          href: "/categories",
          label: "Categories",
          active: pathname.includes("/categories"),
          icon: Bookmark,
          submenus: [],
        },
        {
          href: "/tags",
          label: "Tags",
          active: pathname.includes("/tags"),
          icon: Tag,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Логууд",
      menus: [
        {
          href: "/users",
          label: "Лог ",
          active: pathname.includes("/log"),
          icon: HistoryIcon,
          submenus: [
            {
              href: "/log/login",
              label: "Нэвтрэлтийн түүх",
              active: pathname === "/log/login",
            },
          ],
        },
      ],
    },
  ];

  const filteredMenuList = fullMenuList.map((group) => ({
    ...group,
    menus: group.menus
      .filter((menu) => {
        if (menu.href && menu.code) {
          return checkPermission(menu.code);
        }
        return (
          menu.submenus.length === 0 ||
          menu.submenus.some((submenu) => !submenu.code || checkPermission(submenu.code))
        );
      })
      .map((menu) => ({
        ...menu,
        submenus: menu.submenus.filter((submenu) => !submenu.code || checkPermission(submenu.code)),
      })),
  }));

  return filteredMenuList;
}
