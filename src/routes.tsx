import { Routes as ReactRouterRoutes, Route } from "react-router";

import AppLayout from "./layouts/App";

import Notes from "./pages/Notes/Notes";
import Archived from "./pages/Archived/Archived";
import Note from "./pages/Note/Note";
import Tag from "./pages/Tag/Tag";

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route element={<AppLayout />}>
        <Route index element={<Notes />} />
        <Route path="notes" element={<Notes />} />
        <Route path="archived" element={<Archived />} />
        <Route path="notes/:slug" element={<Note />} />
        <Route path="tags/:slug" element={<Tag />} />
      </Route>
    </ReactRouterRoutes>
  );
};

export default Routes;
