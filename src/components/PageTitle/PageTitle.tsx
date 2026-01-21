export type PageTitleProps = {
  title: string;
  description?: string;
};

const PageTitle = ({ title, description }: PageTitleProps) => {
  return (
    <div className="bg-white rounded-t-xl px-4 -mt-3 pt-6">
      <h1 className="text-2xl text-neutral-950 font-bold">{title}</h1>
      {description !== "undefined" && <p>{description}</p>}
    </div>
  );
};

export default PageTitle;
