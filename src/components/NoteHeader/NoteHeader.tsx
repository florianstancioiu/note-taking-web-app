import TagIcon from "../../images/icon-tag.svg?react";
import ClockIcon from "../../images/icon-clock.svg?react";

export type NoteHeaderProps = {
  title: string;
  tags?: string[];
  lastEdit: string;
};

const NoteHeader = ({ title, tags, lastEdit }: NoteHeaderProps) => {
  return (
    <div className="bg-white px-4 xl:px-6">
      <div className="border-b border-neutral-200 pb-3">
        <h1 className="mb-4 pt-3 font-bold text-neutral-950 text-2xl">
          {title}
        </h1>
        <div className="flex gap-x-9.5">
          <div className="text-neutral-700">
            <p className="flex items-center gap-x-1.5 mb-3.5">
              <TagIcon />
              <span>Tags</span>
            </p>
            <p className="flex items-center gap-x-1.5">
              <ClockIcon />
              <span>Last Edited</span>
            </p>
          </div>
          <div>
            <p className="mb-3.5 min-h-6 flex items-center">
              {tags?.join(", ")}
            </p>
            <p className="min-h-6 flex items-center">{lastEdit}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteHeader;
