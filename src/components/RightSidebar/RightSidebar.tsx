import ArchiveIcon from "../../images/icon-archive.svg?react";
import DeleteIcon from "../../images/icon-delete.svg?react";
import Button from "../../components/Button/Button";

const RightSidebar = () => {
  return (
    <div className="hidden xl:block xl:col-span-1 pl-4 pr-8 border-l border-neutral-200 pt-5">
      <Button className="flex gap-x-2.5 border border-neutral-200 w-full rounded-lg text-neutral-950 mb-3 px-4 py-3 items-center text-sm font-semibold">
        <ArchiveIcon />
        <span>Archive Note</span>
      </Button>
      <Button className="flex gap-x-2.5 border border-neutral-200 w-full rounded-lg text-neutral-950 mb-3 px-4 py-3 items-center text-sm font-semibold">
        <DeleteIcon />
        <span>Delete Note</span>
      </Button>
    </div>
  );
};

export default RightSidebar;
