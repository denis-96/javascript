import { Helmet } from "react-helmet";
import ComicBanner from "../components/Comics/ComicBanner";
import ComicsList from "../components/Comics/ComicsList";

function ComicsPage() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Page with list of our comics" />
        <title>Comics Page</title>
      </Helmet>
      <ComicBanner />
      <ComicsList />
    </>
  );
}

export default ComicsPage;
