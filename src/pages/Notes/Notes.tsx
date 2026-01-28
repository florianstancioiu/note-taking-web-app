import PageTitle from "../../components/PageTitle/PageTitle";
import NoteItem from "../../components/NoteItem/NoteItem";
import NewNoteBtn from "../../components/NewNoteBtn/NewNoteBtn";
import Button from "../../components/Button/Button";
import NoteContent from "../../components/NoteContent/NoteContent";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import data from "../../data.json";

const Notes = () => {
  const { notes } = data;

  return (
    <div className="w-full">
      <PageTitle title="All Notes" />
      <div className="xl:grid xl:grid-cols-5">
        <ul className="xl:col-span-1 list-none mt-4 px-4 pb-12 xl:border-r xl:border-neutral-200 xl:mt-0 overflow-y-auto">
          <li className="hidden xl:block pl-2 mb-2 mt-5">
            <Button className="w-full bg-blue-500 py-3 px-4 text-white text-sm font-medium rounded-lg">
              + Create New Note
            </Button>
          </li>
          {notes.map((note, index) => (
            <NoteItem key={index} {...note} />
          ))}
        </ul>
        <NoteContent />
        <RightSidebar />
      </div>
      <NewNoteBtn />
    </div>
  );
};

export default Notes;
