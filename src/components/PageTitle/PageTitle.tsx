import SettingsIcon from "../../images/icon-settings.svg?react";
import { Link } from "react-router";

export type PageTitleProps = {
  title: string;
  description?: string;
};

const PageTitle = ({ title, description }: PageTitleProps) => {
  return (
    <div className="bg-white rounded-t-xl px-4 -mt-3 pt-6 xl:py-4.5 xl:mt-0 xl:border-b xl:border-neutral-200 xl:pr-8">
      <div className="xl:hidden">
        <h1 className="text-2xl text-neutral-950 font-bold">{title}</h1>
        {description !== "undefined" && <p>{description}</p>}
      </div>
      <div className="hidden xl:flex xl:justify-between xl:items-center">
        <div>
          <h1 className="text-2xl text-neutral-950 font-bold">{title}</h1>
        </div>
        <div className="flex items-center gap-x-6">
          <div className="">
            <input
              type="text"
              className="border border-neutral-300 px-4 py-3 text-sm rounded-lg placeholder:text-neutral-500"
              placeholder="Search by title, content or tags"
            />
          </div>
          <Link to="/">
            <SettingsIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
