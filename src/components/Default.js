import React, { Component } from 'react';

class Default extends Component {
    render() {
        return (
            // <div>
            //     <h1>Ini Halaman Default</h1>
            // </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mx-auto text-center text-title text-uppercase pd-5'>
                        <h1 className='display-3'>404</h1>
                        <h1>error</h1>
                        <h2>Page Not Found</h2>
                        <h3>
                            the requested URL
                            <span className='text-danger'>{window.location.pathname}</span>{" "}
                            was not found
                        </h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Default;