//Do I need this??
//const React = require('react');

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
};
//This took some moving around! I almost forgot the "render" since it wasnt in markdown. tricky :)
class MyFirstComponent extends React.Component {
    render() {
        return (
            <div style={myStyle}>My First React Component</div>
        )
    }
}

<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>We Got Pokemon!</title>
    </head>
    <body>
        <h1>Checkout these Pokemon</h1>

    </body>
</html>

module.exports = MyFirstComponent;