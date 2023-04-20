import ErrorBoundary from "../components/ErrorBoundaries/ErrorBoundary";
import RandomHero from "../components/Heroes/RandomHero";
import Heroes from "../components/Heroes/Heroes";

function MainPage() {
  return (
    <>
      <ErrorBoundary>
        <RandomHero />
      </ErrorBoundary>
      <Heroes />
    </>
  );
}

export default MainPage;
