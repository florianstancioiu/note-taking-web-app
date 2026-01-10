import { Routes as ReactRouterRoutes, Route } from "react-router";

import AppLayout from "./layouts/App";

import Notes from "./pages/Notes/Notes";
import Note from "./pages/Note/Note";

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route element={<AppLayout />}>
        <Route index element={<Notes />} />
        <Route path="notes" element={<Notes />} />
        <Route path="notes/:slug" element={<Note />} />
      </Route>
    </ReactRouterRoutes>
  );
};

export default Routes;
