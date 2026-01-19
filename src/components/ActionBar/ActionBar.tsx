import ArchiveIcon from "../../images/icon-archive.svg?react";
import DeleteIcon from "../../images/icon-delete.svg?react";
import BackIcon from "../../images/icon-arrow-left.svg?react";

import Button from "../Button/Button";

const ActionBar = () => {
  return (
    <div className="bg-white rounded-t-xl px-4 -mt-3">
      <div className="flex justify-between items-center py-3 border-b border-neutral-200">
        <Button className="flex items-center gap-x-1">
          <BackIcon />
          <span>Go Back</span>
        </Button>
        <div className="flex items-center gap-x-4">
          <Button>
            <DeleteIcon />
          </Button>
          <Button>
            <ArchiveIcon />
          </Button>
          <Button>Cancel</Button>
          <Button className="text-blue-500">Save Note</Button>
        </div>
      </div>
    </div>
  );
};

export default ActionBar;
