const React = require('react');
const DefaultLayout = require('../Default.jsx')

class Show extends React.Component {
    render() {
        const { pokemon } = this.props
        return (
            <DefaultLayout>
                <div>
                    <article>

                        <h1>{pokemon.name}</h1>
                        <h3>{pokemon.image}</h3>
                        <a href={`/pokemon/${pokemon._id}/Edit`}><button>Edit</button></a>
                        <form action={`/pokemon/${pokemon._id}?_method=DELETE`} method="POST">
                            <input type="submit" value="Delete" />
                        </form>
                        <a href="/pokemon/"><button>Back to Main</button></a>
                    </article>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show