// import { useParams } from "react-router";
import ActionBar from "../../components/ActionBar/ActionBar";
import NoteHeader from "../../components/NoteHeader/NoteHeader";

const Tag = () => {
  // const { slug } = useParams();

  return (
    <>
      <ActionBar />
      <NoteHeader
        title="React Performance Optimization"
        tags={["Dev", "React"]}
        lastEdit="29 Oct 2024"
      />
      <main className="bg-white px-4 py-3 text-sm pb-16">
        <div>
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
      </main>
    </>
  );
};

export default Tag;
