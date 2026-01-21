export type NoteItemProps = {
  title: string;
  tags: string[];
  lastEdited: string;
};

const NoteItem = ({ title, tags, lastEdited }: NoteItemProps) => {
  const date = new Date(lastEdited).toDateString().split(" ");
  const formattedDate = `${date[1]} ${date[2]} ${date[3]}`;

  return (
    <li className="p-2 pb-3 border-b border-neutral-200">
      <h2 className="text-base font-semibold text-neutral-950 mb-3">{title}</h2>
      {tags.length > 0 && (
        <ul className="mb-3 flex items-center gap-x-1">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="text-neutral-700 px-1.5 py-0.5 bg-neutral-200 rounded-sm text-xs font-normal inline-block cursor-pointer"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
      <p>{formattedDate}</p>
    </li>
  );
};

export default NoteItem;
