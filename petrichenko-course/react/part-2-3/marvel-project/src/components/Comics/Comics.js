import "./Comics.scss";

import ComicBanner from "./ComicBanner";
import ComicsList from "./ComicsList";
import Comic from "./Comic";

function Comics() {
  return (
    <>
      <ComicBanner />
      <ComicsList />
      {/* <Comic /> */}
    </>
  );
}

export default Comics;
