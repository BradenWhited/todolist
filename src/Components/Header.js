import React from 'react';

class Header extends React.Component {
    render(){
        return (
            <header style={headerStyle}>
                <h1>CPSC 222 ToDo List</h1>
            </header>
        );
    }
}

const headerStyle = {
    display: 'block',
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
    marginbottom: '0px'
}

export default Header;