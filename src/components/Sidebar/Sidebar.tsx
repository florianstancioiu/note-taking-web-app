import { cn } from "tailwind-cn";
import { NavLink, Link } from "react-router";
import LogoIcon from "../../images/logo.svg?react";
import HomeIcon from "../../images/icon-home.svg?react";
import ArchiveIcon from "../../images/icon-archive.svg?react";
import TagIcon from "../../images/icon-tag.svg?react";
import RightIcon from "../../images/icon-chevron-right.svg?react";

const Sidebar = () => {
  const menuItems = [
    {
      id: 1,
      url: "/notes",
      title: "All Notes",
      icon: <HomeIcon className="w-5 h-5" stroke="currentColor" />,
    },
    {
      id: 2,
      url: "/archived",
      title: "Archived Notes",
      icon: <ArchiveIcon className="w-5 h-5" stroke="currentColor" />,
    },
  ];

  const tags = [
    {
      id: 1,
      url: "/tags/cooking",
      title: "Cooking",
    },
    {
      id: 2,
      url: "/tags/dev",
      title: "Dev",
    },
    {
      id: 3,
      url: "/tags/fitness",
      title: "Fitness",
    },
    {
      id: 4,
      url: "/tags/health",
      title: "Health",
    },
    {
      id: 5,
      url: "/tags/personal",
      title: "Personal",
    },
    {
      id: 6,
      url: "/tags/react",
      title: "React",
    },
    {
      id: 7,
      url: "/tags/recipes",
      title: "Recipes",
    },
    {
      id: 8,
      url: "/tags/shopping",
      title: "Shopping",
    },
    {
      id: 9,
      url: "/tags/travel",
      title: "Travel",
    },
    {
      id: 10,
      url: "/tags/typescript",
      title: "Typescript",
    },
  ];

  return (
    <aside className="w-68 px-4 pt-6 border-r border-neutral-200 min-h-dvh">
      <Link to="/notes" className="pb-7 inline-block">
        <LogoIcon />
      </Link>
      <div className="border-b border-neutral-200 pb-2">
        <ul className="list-none">
          {menuItems.map((menuItem) => (
            <li key={menuItem.id}>
              <NavLink
                to={menuItem.url}
                className={({ isActive }) => {
                  const baseClasses =
                    "inline-flex justify-between items-center py-2.5 px-3 w-full";
                  const activeClasses = isActive
                    ? "bg-neutral-100 rounded-lg"
                    : "";

                  return cn(baseClasses, activeClasses);
                }}
              >
                {({ isActive }) => (
                  <>
                    <p className="flex items-center gap-x-2 text-sm justify-between">
                      <span className={isActive ? "text-blue-500" : ""}>
                        {menuItem.icon}
                      </span>
                      <span>{menuItem.title}</span>
                    </p>
                    {!isActive && <RightIcon className="opacity-0" />}
                    {isActive && <RightIcon />}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-sm text-neutral-500 font-medium pl-2 py-2">Tags</p>
        <ul>
          {tags.map((tag) => (
            <li key={tag.id}>
              <NavLink
                to={tag.url}
                className={({ isActive }) => {
                  const baseClasses =
                    "flex justify-between items-center py-2.5 px-3";
                  const activeClasses = isActive
                    ? "bg-neutral-100 rounded-lg w-full"
                    : "";

                  return cn(baseClasses, activeClasses);
                }}
              >
                {({ isActive }) => (
                  <>
                    <p className="flex items-center gap-x-2 text-sm">
                      <span className={isActive ? "text-blue-500" : ""}>
                        <TagIcon className="w-5 h-5" stroke="currentColor" />
                      </span>
                      <span>{tag.title}</span>
                    </p>
                    {!isActive && <RightIcon className="opacity-0" />}
                    {isActive && <RightIcon />}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
