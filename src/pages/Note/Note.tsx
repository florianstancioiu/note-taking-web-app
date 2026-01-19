// import { useParams } from "react-router";
import ActionBar from "../../components/ActionBar/ActionBar";
import NoteHeader from "../../components/NoteHeader/NoteHeader";

const Note = () => {
  // const { slug } = useParams();

  return (
    <>
      <ActionBar />
      <NoteHeader
        title="React Performance Optimization"
        tags={["Dev", "React"]}
        lastEdit="29 Oct 2024"
      />
      <main className="bg-white px-4 py-3 text-sm">
        Key performance optimization techniques: 1. Code Splitting - Use
        React.lazy() for route-based splitting - Implement dynamic imports for
        heavy components 2. Memoization - useMemo for expensive calculations -
        useCallback for function props - React.memo for component optimization
        3. Virtual List Implementation - Use react-window for long lists -
        Implement infinite scrolling TODO: Benchmark current application and
        identify bottlenecks
      </main>
    </>
  );
};

export default Note;
