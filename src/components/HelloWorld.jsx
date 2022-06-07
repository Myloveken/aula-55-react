import React from 'react'

class HelloWorld extends React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }

    render() {
        return ( < div >
            <
            p > Salve { this.props.name }!
            <
            /p> <
            /div>
        )
    }
}

export default HelloWorld