import { Pokemon } from '../components';
import PropTypes from 'prop-types';

export const Card = ({ data, searchInfo, pokemonType }) => {
    return (
        <div className="container">
            {
                data.filter((pokemon) => pokemon.name.includes(searchInfo))
                    .map(({ name, url }) => {
                        return (
                            <Pokemon
                                key={name}
                                url={url}
                                pokemonType={pokemonType}
                            />
                        )
                    })
            }
        </div>
    )
}

Card.propTypes = {
    data: PropTypes.array.isRequired,
    searchInfo: PropTypes.string.isRequired,
    pokemonType: PropTypes.string.isRequired
}
