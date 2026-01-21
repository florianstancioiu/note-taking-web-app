import PageTitle from "../../components/PageTitle/PageTitle";
import NoteItem from "../../components/NoteItem/NoteItem";
import NewNoteBtn from "../../components/NewNoteBtn/NewNoteBtn";
import data from "../../data.json";

const Notes = () => {
  const { notes } = data;

  return (
    <>
      <PageTitle title="All Notes" />
      <ul className="list-none mt-4 px-4 pb-12">
        {notes.map((note, index) => (
          <NoteItem key={index} {...note} />
        ))}
      </ul>
      <NewNoteBtn />
    </>
  );
};

export default Notes;
