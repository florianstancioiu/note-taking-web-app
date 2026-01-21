import CrossIcon from "../../images/icon-cross.svg?react";

const NewNoteBtn = () => {
  return (
    <button className="lg:hidden grid place-content-center w-12 h-12 bg-blue-500 rounded-full fixed bottom-18 right-4 cursor-pointer shadow-create-btn md:right-9 md:bottom-27 md:w-16 md:h-16">
      <CrossIcon className="rotate-45" />
    </button>
  );
};

export default NewNoteBtn;
