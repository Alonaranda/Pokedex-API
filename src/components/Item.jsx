import PropTypes from 'prop-types';

export const Item = ({id, name, sprites,types}) => {
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <span>#{id}</span>
                    <h1>{name}</h1>
                </div>
                <hr />
                <div className="card-body">
                    <img src={sprites.front_default} alt="pokemon" />
                </div>
                <hr />
                <div className="card-footer">
                    {
                        types.map(({ type }, id) => {
                            return (
                                <div
                                    key={id}
                                    className="card-footer-container"
                                >
                                    <span>{type.name}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

Item.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    sprites: PropTypes.object.isRequired,
    types: PropTypes.array.isRequired,

}