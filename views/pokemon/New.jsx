const React = require('react');
const DefaultLayout = require('../Default.jsx');

class New extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <form action="/pokemon" method="post">
                    <fieldset>
                        <legend style={{ fontSize: '3rem' }}>Create a New Pokemon</legend>
                        <label>
                            NAME:<input type="text" name="name" placeholder="enter name" />

                        </label>
                    </fieldset>
                    <input type="submit" value="create New fruit" />
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New