import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

// Search movie in TMDB
const useSearchMovies = async (movie) => {
  const data = await fetch(
    'https://api.themoviedb.org/3/search/movie?query=' +
      movie +
      '&include_adult=false&language=en-US&page=1',
    API_OPTIONS
  );
  const json = await data.json();

  return json.results;
};

const handleGptSearchClick = async () => {
  console.log(searchText.current.value);
  // Make an API call to GPT API and get Movie Results

  const gptQuery =
    'Act as a Movie Recommendation system and suggest some movies for the query : ' +
    searchText.current.value +
    '. only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmal, Koi Mil Gaya';

  const gptResults = await openai.chat.completions.create({
    messages: [{ role: 'user', content: gptQuery }],
    model: 'gpt-3.5-turbo',
  });

  if (!gptResults.choices) {
    // TODO: Write Error Handling
  }

  console.log(gptResults.choices?.[0]?.message?.content);

  // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
  const gptMovies = gptResults.choices?.[0]?.message?.content.split(',');

  // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]

  // For each movie I will search TMDB API

  const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
  // [Promise, Promise, Promise, Promise, Promise]

  const tmdbResults = await Promise.all(promiseArray);

  console.log(tmdbResults);

  dispatch(
    addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
  );
};

export default useSearchMovies;