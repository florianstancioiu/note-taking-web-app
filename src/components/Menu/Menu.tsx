import HomeIcon from "../../images/icon-home.svg?react";
import SearchIcon from "../../images/icon-search.svg?react";
import ArchiveIcon from "../../images/icon-archive.svg?react";
import TagIcon from "../../images/icon-tag.svg?react";
import SettingsIcon from "../../images/icon-settings.svg?react";

// TODO: Implement hover state for each menu item
// I should use an array to list each menu items, this will make it way easier to style them
const Menu = () => {
  return (
    <div className="border-t border-neutral-200 fixed left-0 bottom-0 w-full py-3 shadow-men z-10 bg-white text-neutral-500">
      <ul className="grid grid-cols-5">
        <li className="md:border-r md:border-neutral-100 text-center">
          <div className="inline-block mx-auto rounded-sm bg-blue-50 py-1 px-6 text-blue-500">
            <HomeIcon
              className="cursor-pointer inline-block mx-auto mb-1"
              stroke="currentColor"
            />
            <p className="hidden md:block text-xs">Home</p>
          </div>
        </li>
        <li className="md:border-r md:border-neutral-100 text-center">
          <div className="inline-block mx-auto">
            <SearchIcon className="cursor-pointer inline-block mx-auto mb-1" />
            <p className="hidden md:block text-xs text-neutral-500">Search</p>
          </div>
        </li>
        <li className="md:border-r md:border-neutral-100 text-center">
          <div className="inline-block mx-auto">
            <ArchiveIcon className="cursor-pointer inline-block mx-auto mb-1" />
            <p className="hidden md:block text-xs text-neutral-500">Archived</p>
          </div>
        </li>
        <li className="md:border-r md:border-neutral-100 text-center">
          <div className="inline-block mx-auto">
            <TagIcon className="cursor-pointer inline-block mx-auto mb-1" />
            <p className="hidden md:block text-xs text-neutral-500">Tags</p>
          </div>
        </li>
        <li className="text-center">
          <div className="inline-block mx-auto">
            <SettingsIcon className="cursor-pointer inline-block mx-auto mb-1" />
            <p className="hidden md:block text-xs text-neutral-500">Settings</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
