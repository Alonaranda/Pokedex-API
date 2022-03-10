import { useState } from 'react';
import { Card, Loading } from '../components';
import { useData } from '../hooks/useData';

export const Pokedex = () => {
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=80`);
    const resp = useData(url);
    const { loading, data } = resp;

    const [counter, setCounter] = useState(1);


    const [inputValue, setValue] = useState("");
    const [searchInfo, setSearchInfo] = useState("");
    const handleInputText = (e) => {
        const inputData = (e.target.value).toLowerCase()
        setValue(inputData);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchInfo(inputValue);

    }

    const nextPage = () => {
        if (data.next === null) {
            alert("No more pokemons");
            return;
        }
        setSearchInfo('');
        setValue('');
        setCounter((prev) => prev + 1)
        setUrl(data.next);
    };

    const previousPage = () => {
        if (data.previous === null) {
            alert("No more pokemons");
            return;
        }
        setSearchInfo('');
        setValue('');
        setCounter((prev) => prev - 1)
        setUrl(data.previous);
    };

    const [pokemonType, setPokemonType] = useState("");
    const handleOption = (e) => {
        setPokemonType(e.target.value);
    };

    return (
        <div className="content">
            {loading ? (
                <Loading />
            ) : (
                <div>
                    <div className="filter-container">
                        <div className="search-pokemon">
                            <p>¿What type do you want?</p>
                            <select
                                defaultValue=""
                                onChange={(e) => handleOption(e)}
                            >
                                <option disabled value="">
                                    --Choose type --
                                </option>
                                <option value="normal">Normal</option>
                                <option value="fire">Fire</option>
                                <option value="fighting">Fighting</option>
                                <option value="water">Water</option>
                                <option value="poison">Poison</option>
                                <option value="electric">Electric</option>
                                <option value="ground">Ground</option>
                                <option value="grass">Grass</option>
                                <option value="flying">Flying</option>
                                <option value="ice">Ice</option>
                                <option value="bug">Bug</option>
                                <option value="psychic">Psychic</option>
                                <option value="rock">Rock</option>
                                <option value="dragon">Dragon</option>
                                <option value="ghost">Ghost</option>
                                <option value="dark">Dark</option>
                                <option value="steel">Steel</option>
                                <option value="fairy">Fairy</option>

                            </select>
                        </div>
                        <form
                            className="search-pokemon"
                            onSubmit={handleSubmit}
                        >
                            <p>¿What pokemon do you want?</p>
                            <input
                                text="text"
                                value={inputValue}
                                onChange={handleInputText}
                                placeholder="Write your pokemon..."
                            ></input>
                        </form>
                    </div>
                    <Card
                        data={data.results}
                        searchInfo={searchInfo}
                        pokemonType={pokemonType}
                    />
                    <div className="btn-container">
                        <button className="btn" onClick={previousPage}>
                            Prev
                        </button>
                        <h1>Page: {counter} of {Math.ceil(data.count/80)}</h1>
                        <button className="btn" onClick={nextPage}>
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
