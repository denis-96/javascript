// import { Component } from "react";
import { useState, useEffect, useCallback, useMemo } from "react";
import { Container } from "react-bootstrap";

// class Slider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       autoplay: false,
//       slide: 0,
//     };
//   }

//   componentDidMount() {
//     document.title = `Slide: ${this.state.slide}`;
//   }

//   componentDidUpdate(_, prevState) {
//     if (prevState.slide !== this.state.slide) {
//       document.title = `Slide: ${this.state.slide}`;
//     }
//   }

//   changeSlide = (i) => {
//     this.setState(({ slide }) => ({
//       slide: slide + i,
//     }));
//   };

//   toggleAutoplay = () => {
//     this.setState(({ autoplay }) => ({
//       autoplay: !autoplay,
//     }));
//   };

//   render() {
//     return (
//       <Container>
//         <div className="slider w-50 m-auto">
//           <img
//             className="d-block w-100"
//             src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
//             alt="slide"
//           />
//           <div className="text-center mt-5">
//             Active slide {this.state.slide} <br />{" "}
//             {this.state.autoplay ? "auto" : null}
//           </div>
//           <div className="buttons mt-3">
//             <button
//               className="btn btn-primary me-2"
//               onClick={() => this.changeSlide(-1)}
//             >
//               -1
//             </button>
//             <button
//               className="btn btn-primary me-2"
//               onClick={() => this.changeSlide(1)}
//             >
//               +1
//             </button>
//             <button
//               className="btn btn-primary me-2"
//               onClick={this.toggleAutoplay}
//             >
//               toggle autoplay
//             </button>
//           </div>
//         </div>
//       </Container>
//     );
//   }
// }

const countTotal = (num) => {
  console.log("counting...");
  return num + 10;
};

function Slider(props) {
  // const [state, setState] = useState({ slide: 1, autoplay: false });

  // const changeSlide = (i) => {
  //   setState((state) => ({ ...state, slide: state.slide + i }));
  // };

  // const toggleAutoplay = () => {
  //   setState((state) => ({ ...state, autoplay: !state.autoplay }));
  // };

  const [slide, setSlide] = useState(
    () => 1 /*Math.floor(Math.random() * (50 - 1) + 1)*/
  );
  const [autoplay, setAutoplay] = useState(false);

  const getRandomImages = useCallback((amount, width = 800, height = 500) => {
    console.log("fetching");
    const imagesArray = [];
    for (let i = 0; i < amount; i++) {
      const randomId = Math.floor(Math.random() * 200);
      imagesArray.push(
        `https://picsum.photos/id/${randomId}/${width}/${height}`
      );
    }
    return imagesArray;
  }, []);

  const changeSlide = (i) => {
    setSlide((slide) => slide + i);
  };

  const toggleAutoplay = () => {
    setAutoplay((autoplay) => !autoplay);
  };

  useEffect(() => {
    document.title = `Slide: ${slide}`;
  }, [slide]);

  // const log = () => console.log("log");
  // useEffect(() => {
  //   window.addEventListener("click", log);
  //   return () => {
  //     window.removeEventListener("click", log);
  //   };
  // }, []);

  const total = useMemo(() => countTotal(slide), []);
  const style = useMemo(
    () => ({
      color: slide > 4 ? "red" : "black",
    }),
    [slide]
  );

  useEffect(() => {
    console.log("styles");
  }, [style]);

  return (
    <Container>
      <div className="slider w-50 m-auto">
        <Slides getRandomImages={getRandomImages} />

        <div className="text-center mt-5">
          Active slide {slide} <br />
          {autoplay && "auto"}
        </div>
        <div style={style} className="text-center mt-5">
          Total slides: {total}
        </div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(-1)}
          >
            -1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(1)}
          >
            +1
          </button>
          <button className="btn btn-primary me-2" onClick={toggleAutoplay}>
            toggle autoplay
          </button>
        </div>
      </div>
    </Container>
  );
}

function Slides({ getRandomImages }) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    setImages(getRandomImages(4));
  }, [getRandomImages]);

  return (
    <>
      {images.map((url, i) => (
        <img key={i} className="d-block w-100" src={url} alt="slide" />
      ))}
    </>
  );
}

export default Slider;
