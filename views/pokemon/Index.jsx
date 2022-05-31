const React = require('react')
const DefaultLayout = require('../Default')

class Index extends React.Component {
    render() {
        const { pokemon } = this.props
        return (
            <DefaultLayout>

                <div>
                    <a href="/pokemon/new"><button>Create A New Pokemon</button></a>
                    {
                        pokemon.map((pokemon) => (
                            <article>
                                <a href={`/pokemon/${pokemon._id}`}>
                                    <h2>{pokemon.name}</h2>
                                </a>
                            </article>
                        ))
                    }
                </div>
            </DefaultLayout >
        )
    }

}

module.exports = Index;