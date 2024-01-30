import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" bg-black">
      <div className="-mt-52 pl-12 relative z-20">
        <MovieList
          title={'Now Playing Movies'}
          movies={movies.nowPlayingMovies}
        />
        <MovieList title={'Popular Movies'} movies={movies.popularMovies} />
        <MovieList title={'Top Rated Movies'} movies={movies.topRatedMovies} />
        <MovieList title={'Upcoming Movies'} movies={movies.upcomingMovies} />
        <MovieList title={'Watch it Again'} movies={movies.nowPlayingMovies} />
        {/* <MovieList
          title={"We Think You'll Love These"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList title={'Only on Netflix'} movies={movies.nowPlayingMovies} />
        <MovieList
          title={'Hollywood Movies'}
          movies={movies.nowPlayingMovies}
        /> */}
      </div>
    </div>
  );
};

export default SecondaryContainer;
