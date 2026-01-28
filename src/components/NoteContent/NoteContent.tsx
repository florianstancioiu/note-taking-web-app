import NoteHeader from "../NoteHeader/NoteHeader";
import Button from "../Button/Button";

const NoteContent = () => {
  return (
    <main className="hidden xl:block xl:col-span-3 xl:relative">
      <NoteHeader
        title="React Performance Optimization"
        tags={["Dev", "React"]}
        lastEdit="29 Oct 2024"
      />
      <div className="px-6 mt-4">
        <p>Key performance optimization techniques:</p>
        <br />
        <ol className="list-decimal list-inside">
          <li className="mb-2.5">
            <span>Code Splitting</span>
            <ul className="list-disc list-inside pl-4">
              <li>Use React.lazy() for route-based splitting</li>
              <li>Implement dynamic imports for heavy components</li>
            </ul>
          </li>
          <li className="mb-2.5">
            <span>Memoization</span>
            <ul className="list-disc list-inside pl-4">
              <li>useMemo for expensive calculations</li>
              <li>useCallback for function props</li>
              <li>React.memo for component optimization</li>
            </ul>
          </li>
          <li className="mb-2.5">
            <span>Virtual List Implementation</span>
            <ul className="list-disc list-inside pl-4">
              <li>Use react-window for long lists</li>
              <li>Implement infinite scrolling</li>
            </ul>
          </li>
        </ol>
        <br />
        <p>TODO: Benchmark current application and identify bottlenecks</p>
      </div>
      <div className="border-t border-neutral-200 absolute bottom-0 w-full py-4 px-6">
        <Button className="bg-blue-500 text-white px-4 py-3 rounded-lg text-sm font-medium mr-4">
          Save Note
        </Button>
        <Button className="bg-neutral-100 text-neutral-600 px-4 py-3 rounded-lg text-sm font-medium">
          Cancel
        </Button>
      </div>
    </main>
  );
};

export default NoteContent;
