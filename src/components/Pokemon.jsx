import { useData } from '../hooks/useData'
import { Item, Loading } from '../components';
import PropTypes from 'prop-types';

export const Pokemon = ({ url, pokemonType }) => {

    const { data, loading } = useData(url);
    const { id, name, sprites, types } = data;

    return (
        <div>
            {
                loading ? (
                    <Loading />
                ) : (
                    <div>
                        {
                            // eslint-disable-next-line
                            types.map(({ type }, idx) => {
                                if (pokemonType && type.name === pokemonType) {
                                    return (
                                        <Item
                                            key={idx}
                                            id={id}
                                            name={name}
                                            sprites={sprites}
                                            types={types}
                                        />
                                    )
                                }
                            })
                        }
                    </div>


                )
            }
        </div>
    )
}

Pokemon.propTypes = {
    url: PropTypes.string.isRequired,
    pokemonType: PropTypes.string.isRequired
}

