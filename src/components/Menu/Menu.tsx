import HomeIcon from "../../images/icon-home.svg?react";
import SearchIcon from "../../images/icon-search.svg?react";
import ArchiveIcon from "../../images/icon-archive.svg?react";
import TagIcon from "../../images/icon-tag.svg?react";
import SettingsIcon from "../../images/icon-settings.svg?react";

const Menu = () => {
  return (
    <div className="border-t border-neutral-200 fixed left-0 bottom-0 w-full py-3 shadow-menu">
      <ul className="flex justify-evenly">
        <li>
          <HomeIcon />
        </li>
        <li>
          <SearchIcon />
        </li>
        <li>
          <ArchiveIcon />
        </li>
        <li>
          <TagIcon />
        </li>
        <li>
          <SettingsIcon />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
