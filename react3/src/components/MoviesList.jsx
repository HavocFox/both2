import React, { useState } from 'react';

const MoviesList = () => {
  const [desc, setDesc] = useState('');
  const [gMode, setGMode] = useState(false);
  const [horror, setHorror] = useState([
    'The Shining', 'Get Out', 'A Nightmare on Elm Street', 'The Conjuring', 'Hereditary'
  ]);
  const [all, setAll] = useState([
    'Inception', 'The Matrix', 'Interstellar', 'The Godfather', 'Pulp Fiction', 'The Shining', 'Get Out', 'A Nightmare on Elm Street', 'The Conjuring', 'Hereditary'
  ]);

  const descriptions = {
    'The Shining': 'A family heads to an isolated hotel where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.',
    'Get Out': 'A young African-American visits his white girlfriend\'s parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.',
    'A Nightmare on Elm Street': 'The monstrous spirit of a slain janitor seeks revenge by invading the dreams of teenagers whose parents were responsible for his untimely death.',
    'The Conjuring': 'Paranormal investigators work to help a family terrorized by a dark presence in their farmhouse.',
    'Hereditary': 'A grieving family is haunted by tragic and disturbing occurrences after the death of their secretive grandmother.',
    'Inception': 'A thief who enters the dreams of others is given the inverse task of planting an idea into the mind of a CEO.',
    'The Matrix': 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    'Interstellar': 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    'The Godfather': 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    'Pulp Fiction': 'The lives of two mob hitmen, a boxer, a gangster, and his wife intertwine in four tales of violence and redemption.'
  };

  const showDetails = (movie) => {
    setDesc(descriptions[movie]);
  };

  const toggleGMode = () => {
    setGMode(prevGMode => !prevGMode);
  };

  const deleteMovie = (index) => {
    if (gMode) {
      setHorror(prevHorror => prevHorror.filter((_, i) => i !== index));
    } else {
      setAll(prevAll => prevAll.filter((_, i) => i !== index));
    }
  };

  return (
    <div>
      <h1>Movies</h1>
      <p>Description: {desc}</p>

      <button onClick={toggleGMode}>
        {gMode ? 'All Movies' : 'Horror Movies'}
      </button>

      {gMode ? (
        <div>
          <h2>Horror Movies</h2>
          <ul>
            {horror.map((movie, index) => (
              <li key={index}>
                <button onClick={() => showDetails(movie)}>{movie}</button>
                <button onClick={() => deleteMovie(index)}>Remove Movie</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2>All Movies</h2>
          <ul>
            {all.map((movie, index) => (
              <li key={index}>
                <button onClick={() => showDetails(movie)}>{movie}</button>
                <button onClick={() => deleteMovie(index)}>Remove Movie</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MoviesList;
