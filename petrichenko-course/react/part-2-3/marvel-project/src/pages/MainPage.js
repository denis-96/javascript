import { Helmet } from "react-helmet";

import ErrorBoundary from "../components/ErrorBoundaries/ErrorBoundary";
import RandomHero from "../components/Heroes/RandomHero";
import Heroes from "../components/Heroes/Heroes";

function MainPage() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Marvel information portal" />
        <title>Marvel information portal</title>
      </Helmet>
      <ErrorBoundary>
        <RandomHero />
      </ErrorBoundary>
      <Heroes />
    </>
  );
}

export default MainPage;
