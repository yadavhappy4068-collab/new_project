
//   const sriename ="Stranger Things"
//   const rating = 8.2;
//   const description = "This series Most watched on Netflix.";
//   const reliseDate = "July 15, 2016";
//   const review = () => {

//     const reviewText = "This series is awesome!";
//     return reviewText;
//   }
//   let age = 5;
//   const AgeCheck = () => {
//     if (age < 18) {
//       return "You are not allowed to watch this series.";
//     }
//     return "You can watch this series.";
//   }
//   // if (age < 18) {
//   //   return <p>You are not allowed to watch this series.</p>;
//   // }
// import Series from "../data/Series.json";
import { jsxDEV } from "react/jsx-dev-runtime";
 import Series from "../Api/Series.json";
 import image from "../../public/stranger.jpg"
 <link rel="stylesheet" href="App.css" />

const NetflixSeries = () => {
  return (
    <ul>
      {Series.map((series) => (
        <li key={series.id}>
          <img
            src={series.img_url}
            alt={series.name}
            style={{ width: "250px", borderRadius: "10px" }}
          />

          <h1>{series.name}</h1>
          <h3>⭐ Rating: {series.rating}</h3>

          <p>{series.description}</p>

          <p>
            <strong>Genre:</strong> {series.genre.join(", ")}
          </p>

          <p>
            <strong>Cast:</strong> {series.cast.join(", ")}
          </p>

          <a
            href={series.watch_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Watch Now</button>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NetflixSeries;