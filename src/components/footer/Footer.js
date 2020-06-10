import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <footer className="container-fluid bg-dark" >
                <h5 className="pt-3 text-center text-light border-bottom border-light">Vous pouvez aussi me suivre sur  :</h5>     
                <div className="row">
                    <div className="d-flex justify-content-center">
                        <a href="#" className="m-2"></a>
                        <a href="#" className="m-2"></a>
                        <a href="#" className="m-2"></a>
                    </div>
                </div>
                <p className="text-center text-light mb-0 pb-3 pt-3">Ce projet à été réalisé par Petot Sonny pour le projet 5 d'OpenClassroom </p> 
            </footer>

        )
    }
}
