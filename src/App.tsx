import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectPokemons } from './Redux/pokemons/pokemonsSelectors';
import { SharedLayout } from './Components/SharedLayout/SharedLayout';
import { lazy } from 'react';
import { selectRandomPokemon } from './Redux/pokemonInfo/pokemonInfoSelectors';
import Pokemon from '../src/Pages/Pokemon/Pokemon';
import { selectPokemonDetails } from './Redux/pokemonInfo/pokemonInfoSelectors';
import NotFound from '../src/Pages/NotFound/NotFound';
import { selectSearchPokemons } from './Redux/pokemons/pokemonsSelectors';
import { selectAuthState } from './Redux/auth/authSelectors';
const HomePage = lazy(() => import('../src/Pages/Home/Home'));
// const NotFoundPage = lazy(() => import('../src/Pages/NotFound/NotFound'));
const PokeDexPage = lazy(() => import('../src/Pages/PokeDex/PokeDex'));
// const PokemonPage = lazy(() => import('../src/Pages/Pokemon/Pokemon'));
const LoginPage = lazy(() => import('../src/Pages/Login/Login'));
const RegisterPage = lazy(() => import('../src/Pages/Register/Register'));

export const App = () => {
  const randomPoke = useSelector(selectRandomPokemon);
  const pokeData = useSelector(selectPokemons);
  const pokeDetails = useSelector(selectPokemonDetails);
  const searchPokemon = useSelector(selectSearchPokemons);
  const AuthState = useSelector(selectAuthState);
  const handlePokeData = () => {
    console.log(pokeData);
  };

  return (
    <>
      <div>
        <button type="button" onClick={handlePokeData}>
          WHAT IN THE BOX
        </button>
        <button onClick={() => console.log(randomPoke)}>
          co tam w randomie slychac
        </button>
        <button onClick={() => console.log(pokeDetails)}>Pokemon detale</button>
        <button onClick={() => console.log(searchPokemon)}>
          Serach Pokemon co tam masz
        </button>
        <button onClick={() => console.log(AuthState)}>Stan Autoryzacji</button>
      </div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="pokedex" element={<PokeDexPage />} />
          <Route path="pokemon/:id" element={<Pokemon />}></Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};