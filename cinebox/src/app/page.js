"use client";

import React from "react";
import Navbar from "./Navbar"; // Ensure the path is correct
import styles from "./page.module.css"; // Import your CSS module


const movies = [
  {
    title: "Pushpa-2 The Rule",
    rating: "8.5/10",
    summary: "The clash is on as Pushpa and Bhanwar Singh continue their rivalry in this epic conclusion to the two-parted action drama.",
    image: "https://i.ibb.co/cgMyc73/Untitled.jpg",
  },
  {
    title: "Gladiator-2",
    rating: "7.8/10",
    summary: "Years after witnessing the death of Maximus at the hands of his uncle, Lucius must enter the Colosseum after the powerful emperors of Rome conquer his home. With rage in his heart and the future of the empire at stake, he looks to the past to find the strength and honor needed to return the glory of Rome to its people.",
    image: "https://i.ibb.co/zRPRXYc/Untitled1.jpg",
  },
  {
    title: "Lucky Bhaskar",
    rating: "9.1/10",
    summary: "A cash-strapped cashier working at a bank embarks on a risky investment scheme and soon gets drawn into the murky world of money laundering.",
    image: "https://i.ibb.co/WnxdTyD/Untitled2.jpg",
  },
  {
    title: "Venom-3",
    rating: "7.2/10",
    summary: "Eddie Brock and Venom must make a devastating decision as they're pursued by a mysterious military man and alien monsters from Venom's home world.",
    image: "https://i.ibb.co/HXm1gXb/Untitled3.jpg",
  },
  {
    title: "Furiosa",
    rating: "6.5/10",
    summary: "Snatched from the Green Place of Many Mothers, young Furiosa gets caught in the crossfire of two tyrannical warlords; as the tyrants fight for dominance, Furiosa soon finds herself in a nonstop battle to make her way home.",
    image: "https://i.ibb.co/5L78Nd1/Untitled4.jpg",
  },
  {
    title: "Aavesham",
    rating: "8.3/10",
    summary: "Three teens come to Bangalore for their engineering education and get involved in a fight. They find a local gangster to help them.",
    image: "https://i.ibb.co/6HP3DbQ/Untitled5.jpg",
  },
  {
    title: "Stree-2",
    rating: "7.9/10",
    summary: "The town of Chanderi is being haunted again. This time, women are mysteriously abducted by a terrifying headless entity. Once again, it is up to Vicky and his friends to save their town and loved ones.",
    image: "https://i.ibb.co/L69gmxD/Untitled6.jpg",
  },
  {
    title: "Devara",
    rating: "8.0/10",
    summary: "A village chief's son secretly continues his father's mission to end smuggling, while pretending to be weak and maintaining the illusion that his father is still alive.",
    image: "https://i.ibb.co/wCJjDK9/Untitled7.jpg",
  },
 
  {
    title: "Avatar 3",
    rating: "8.1/10",
    summary: "Jake and Neytiri's family faces new challenges as they embark on a journey across Pandora, exploring new territories and fighting new enemies.",
    image: "https://i.ibb.co/nQ8v5gB/Untitled8.jpg",
  },
  {
    title: "Mission: Impossible 8",
    rating: "7.9/10",
    summary: "Ethan Hunt faces his toughest mission yet, with his team torn apart and betrayal lurking at every corner as they try to prevent a global disaster.",
    image: "https://i.ibb.co/zrFZy0J/Untitled9.jpg",
  },
  {
    title: "The Flash",
    rating: "7.3/10",
    summary: "Barry Allen, a.k.a. The Flash, travels back in time to save his mother, but his actions create unintended consequences that alter the entire timeline.",
    image: "https://i.ibb.co/9V9scG8/Untitled10.jpg",
  },
  {
    title: "Spider-Man: Beyond the Spider-Verse",
    rating: "9.2/10",
    summary: "Miles Morales teams up with different versions of Spider-Man to stop a multiverse villain that threatens all realities.",
    image: "https://i.ibb.co/gvsHTCZ/Untitled11.jpg",
  },
  {
    title: "Indiana Jones 5",
    rating: "7.4/10",
    summary: "Indiana Jones embarks on his final adventure, facing old enemies and new mysteries as he uncovers a dangerous ancient artifact.",
    image: "https://i.ibb.co/4tkh7Vs/Untitled12.jpg",
  },
  {
    title: "The Marvels",
    rating: "7.5/10",
    summary: "Captain Marvel teams up with Monica Rambeau and Kamala Khan to stop an intergalactic threat that could destroy the universe.",
    image: "https://i.ibb.co/F0P9LVk/Untitled13.jpg",
  },
  {
    title: "Transformers: Rise of the Beasts",
    rating: "6.8/10",
    summary: "The Autobots and Decepticons clash with a new breed of transformers known as the Maximals and Predacons in the battle for Earth.",
    image: "https://i.ibb.co/s93v0H8/Untitled14.jpg",
  },
  {
    title: "John Wick: Chapter 5",
    rating: "8.4/10",
    summary: "John Wick returns for one last battle as he fights against an ever-growing enemy force to finally gain his freedom.",
    image: "https://i.ibb.co/k9S0mj2/Untitled15.jpg",
  },
  {
    title: "Guardians of the Galaxy Vol. 3",
    rating: "8.3/10",
    summary: "The Guardians must face their biggest challenge yet as they fight to protect the universe from an alien force threatening the galaxy.",
    image: "https://i.ibb.co/9pVv5vT/Untitled16.jpg",
  },
  {
    title: "The Hunger Games",
    rating: "7.7/10",
    summary: "The prequel to The Hunger Games series, following a young Coriolanus Snow as he navigates the world of the Hunger Games and betrayal.",
    image: "https://i.ibb.co/BnMkm21/Untitled17.jpg",
  },
  {
    title: "Shazam! Fury of the Gods",
    rating: "6.5/10",
    summary: "Shazam returns to face off against the daughters of Atlas, who are threatening to destroy the world with their newfound powers.",
    image: "https://i.ibb.co/d0N1b7S/Untitled18.jpg",
  },
  {
    title: "Aquaman and the Lost Kingdom",
    rating: "7.0/10",
    summary: "Aquaman must protect the lost kingdom of Atlantis from a dangerous enemy that threatens the underwater world.",
    image: "https://i.ibb.co/1bp6h3L/Untitled19.jpg",
  },
];

export default function Home() {
  const [watchlist, setWatchlist] = React.useState([]);

  const handleAddToWatchlist = (movie) => {
    setWatchlist((prev) => [...prev, movie]);
  };
  const handleRemoveFromWatchlist = (index) => {
    setWatchlist(watchlist.filter((_, i) => i !== index));
  };

  // Clear the entire watchlist
  const handleClearWatchlist = () => {
    setWatchlist([]);
  };

  const reviews = [
    {
      image: "https://i.ibb.co/cgMyc73/Untitled.jpg",
      title: "Pushpa-2: The Rule",
      rating: "9/10",
      review:
        "An epic continuation of the rivalry between Pushpa and Bhanwar Singh, featuring thrilling action and drama.",
    },
    {
      image: "https://i.ibb.co/zRPRXYc/Untitled1.jpg",
      title: "Gladiator-2",
      rating: "8/10",
      review:
        "A majestic return to the Colosseum, with Maximus' legacy influencing the next generation of gladiators.",
    },
    {
      image: "https://i.ibb.co/7NfBzG6/luckybhaskar.jpg",
      title: "Lucky Bhaskar",
      rating: "8.5/10",
      review:
        "A rollercoaster of drama and action, with a gripping storyline and powerful performances.",
    },
    {
      image: "https://i.ibb.co/9pNfr24/venom3.jpg",
      title: "Venom-3",
      rating: "7.5/10",
      review:
        "Eddie and Venom deliver another fun ride with an exciting mix of humor and action, though slightly predictable.",
    },
    {
      image: "https://i.ibb.co/9pNfr24/stree2.jpg",
      title: "Stree-2",
      rating: "8/10",
      review:
        "A spooky yet hilarious experience that blends horror and comedy in a way only Stree can.",
    },
  ];

  return (
    <>
      <Navbar />
 
      <div className={styles.welcomeSection}>
        <h1>Welcome Cinephiles</h1>
        <p>Explore the world of cinema!</p>
      </div>

      <hr className={styles.whiteLine} />


      <div className={styles.exploreSection}>
        <p>Explore new releases</p>
      </div>


      <div className={styles.carouselContainer}>
        {movies.slice(0, 8).map((movie, index) => (
          <div key={index} className={styles.carouselItem}>
            <img src={movie.image} alt={movie.title} />
            <button className={styles.carouselItemButton}></button>
            
            <div className={styles.expandedView}>
              <div className={styles.movieDetails}>
                <div className={styles.movieTitle}>{movie.title}</div>
                <div className={styles.movieRating}>{movie.rating}</div>
                <div className={styles.movieSummary}>{movie.summary}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <div className={styles.catalogueSection}>
        <h2 className={styles.catalogueTitle}>Catalogue</h2>

        
        <div className={styles.searchGenreSection}>
          <div className={styles.searchContainer}>
            <label htmlFor="search">Search:</label>
            <input type="text" id="search" placeholder="Search for a movie..." className={styles.searchInput} />
          </div>
          <div className={styles.genreContainer}>
            <label htmlFor="genre">Genre:</label>
            <select id="genre" className={styles.genreSelect}>
              <option value="action">Action</option>
              <option value="drama">Drama</option>
              <option value="comedy">Comedy</option>
              <option value="thriller">Thriller</option>
            </select>
          </div>
        </div>

        
        <div className={styles.recommendationsText}>
          <p>Here are some of our recommendations for you</p>
        </div>

        
        <div className={styles.catalogueContainer}>
          {movies.map((movie, index) => (
            <div key={index} className={styles.catalogueItem}>
              <img className={styles.catalogueImage} src={movie.image} alt={movie.title} />
              <div className={styles.movieTitle}>{movie.title}</div>
            </div>
          ))}
        </div>
      </div>

    
      <hr className={styles.whiteLine} />

   
      <h2 className={styles.sectionTitle}>Reviews and Watchlist</h2>
      <div className={styles.container}>
        <div className={styles.reviewsWatchlistSection}>
 
          <div className={styles.reviews}>
            <div className={styles.searchContainer}>
              <label htmlFor="reviewSearch">Search Reviews:</label>
              <input type="text" id="reviewSearch" placeholder="Search for a review..." className={styles.searchInput} />
            </div>
            <div className={styles.reviewList}>
              {reviews.map((review, index) => (
                <div key={index} className={styles.reviewItem}>
                  <img
                    src={review.image}
                    alt={review.title}
                    className={styles.reviewImage}
                  />
                  <div className={styles.reviewDetails}>
                    <div className={styles.reviewTitle}>{review.title}</div>
                    <div className={styles.reviewRating}>
                      Rating: {review.rating}
                    </div>
                    <div className={styles.reviewText}>{review.review}</div>
                  </div>
                  <button
                    className={styles.addToWatchlistButton}
                    onClick={() => handleAddToWatchlist(review)}
                  >
                    Add to Watchlist
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.watchlist}>
            <h3>Watchlist</h3>
            <div className={styles.watchlistItems}>
              {watchlist.map((item, index) => (
                <div key={index} className={styles.watchlistItem}>
                  <p>{item.title}</p><button
                    className={styles.removeButton}
                    onClick={() => handleRemoveFromWatchlist(index)}
                  >
                    X
                  </button>
                  
                </div>
              ))}
            </div>
            {watchlist.length > 0 && (
              <button
                className={styles.clearWatchlistButton}
                onClick={handleClearWatchlist}
              >
                Clear Watchlist
              </button>
            )}
          </div>
        </div>

     
      <hr className={styles.whiteLine} />

<div className={styles.aboutSection}>
  <h2>About</h2>
  <p>
    Cinebox aims to improve the movie-watching experience for all cinephiles. 
    By offering a curated collection of movies, personalized recommendations, 
    and engaging user reviews, we strive to connect movie lovers to the best 
    films across genres. Our mission is to build a vibrant community where 
    cinema is celebrated and enjoyed to its fullest.
  </p>
</div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <h3>About Us</h3>
            <p>
              Cinebox is your one-stop destination for all things cinema. Explore, review, 
              and add movies to your watchlist effortlessly.
            </p>
          </div>
          <div className={styles.footerColumn}>
            <h3>Contact</h3>
            <p>Email: support@cinebox.com</p>
            <p>Phone: +1-800-CINEBOX</p>
          </div>
          <div className={styles.footerColumn}>
            <h3>Follow Us</h3>
            <p>
              <a href="#" target="_blank">Facebook</a> |{" "}
              <a href="#" target="_blank">Twitter</a> |{" "}
              <a href="#" target="_blank">Instagram</a>
            </p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2024 Cinebox. All rights reserved. | Terms of Service | Privacy Policy</p>
        </div>
      </footer>
    </>
  );
}
