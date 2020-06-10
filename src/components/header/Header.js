import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">GGames</a>
                <div className="navbar navbar-expand">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active mx-3">
                            <a href='#' className="nav-link" >Home</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a href='#' className="nav-link" >News</a>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}
