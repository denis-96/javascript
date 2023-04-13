import "./ComicsList.scss";

import ComicCard from "./ComicCard";
import Button from "../UI/Button";

function ComicsList() {
  return (
    <div className="comics__list">
      <ul className="comics__grid">
        <ComicCard
          title="ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB"
          price="9.99$"
          imageName="UW"
        />
        <ComicCard
          title="X-Men: Days of Future Past"
          price="NOT AVAILABLE"
          imageName="xMen"
        />
        <ComicCard
          title="ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB"
          price="9.99$"
          imageName="UW"
        />
        <ComicCard
          title="X-Men: Days of Future Past"
          price="NOT AVAILABLE"
          imageName="xMen"
        />
        <ComicCard
          title="ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB"
          price="9.99$"
          imageName="UW"
        />
        <ComicCard
          title="X-Men: Days of Future Past"
          price="NOT AVAILABLE"
          imageName="xMen"
        />
        <ComicCard
          title="ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB"
          price="9.99$"
          imageName="UW"
        />
        <ComicCard
          title="X-Men: Days of Future Past"
          price="NOT AVAILABLE"
          imageName="xMen"
        />
        <ComicCard
          title="ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB"
          price="9.99$"
          imageName="UW"
        />
        <ComicCard
          title="X-Men: Days of Future Past"
          price="NOT AVAILABLE"
          imageName="xMen"
        />
        <ComicCard
          title="ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB"
          price="9.99$"
          imageName="UW"
        />
        <ComicCard
          title="X-Men: Days of Future Past"
          price="NOT AVAILABLE"
          imageName="xMen"
        />
      </ul>
      <Button text="load more" type="main" isLong />
    </div>
  );
}

export default ComicsList;
