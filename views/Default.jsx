const React = require('react');


//This took some moving around! I almost forgot the "render" since it wasnt in markdown. tricky :)
class DefaultLayout extends React.Component {
    render() {
        const { pokemon } = this.props;
        return (
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>We Got Pokemon!</title>
                </head>
                <body>
                    <header>
                        <h1>See All The Pokemon</h1>
                    </header>
                    <main>
                        {this.props.children}
                    </main>

                </body>
            </html>
        )
    }
}
module.exports = DefaultLayout;