import "./HeroInfo.scss";

import thor from "../../resources/img/thor.jpeg";

import Button from "../UI/Button";
import Skeleton from "../UI/Skeleton";

function HeroInfo() {
  return (
    <div className="hero__info">
      <div className="hero__basics">
        <img src={thor} alt="thor" />
        <div>
          <div className="hero__info-name">thor</div>
          <div className="hero__btns">
            <a href="#">
              <Button text="homepage" type="main" />
            </a>
            <a href="#">
              <Button text="wiki" type="secondary" />
            </a>
          </div>
        </div>
      </div>
      <div className="hero__descr">
        In Norse mythology, Loki is a god or jötunn (or both). Loki is the son
        of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By
        the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the
        world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or
        Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in
        the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki
        is referred to as the father of Váli in the Prose Edda.
      </div>
      <div className="hero__comics">Comics:</div>
      <ul className="hero__comics-list">
        <li className="hero__comics-item">
          All-Winners Squad: Band of Heroes (2011) #3
        </li>
        <li className="hero__comics-item">Alpha Flight (1983) #50</li>
        <li className="hero__comics-item">Amazing Spider-Man (1999) #503</li>
        <li className="hero__comics-item">Amazing Spider-Man (1999) #504</li>
        <li className="hero__comics-item">
          AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
        </li>
        <li className="hero__comics-item">
          Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
        </li>
        <li className="hero__comics-item">
          Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
        </li>
        <li className="hero__comics-item">Vengeance (2011) #4</li>
        <li className="hero__comics-item">Avengers (1963) #1</li>
        <li className="hero__comics-item">Avengers (1996) #1</li>
      </ul>
      <p className="hero__select">Please select a hero to see information</p>
      <Skeleton />
    </div>
  );
}

export default HeroInfo;
