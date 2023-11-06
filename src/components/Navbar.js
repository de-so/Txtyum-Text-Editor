import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    const pageToggle = (event)=>{
        let pageActive = document.getElementById(event.target.id);
        let pageShow = document.querySelector('.remove');
        let pageHide = document.querySelector('.add');
        if(!pageActive.classList.contains('active')){
            document.querySelector('.active').classList.remove('active');
            pageActive.classList.add('active');
            pageShow.classList.add('add');
            pageShow.classList.remove('remove');
            pageHide.classList.add('remove');
            pageHide.classList.remove('add');
        }
    }
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/Txtyum-Text-Editor/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" id='page1' onClick={pageToggle} aria-current="page" href="#kitchen">{props.page1}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id='page2' onClick={pageToggle} href="#cookbook">{props.page2}</a>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} me-4 my-2`}>
                            <label className="form-check-label" htmlFor="modeSwitchCheck">Change Mode</label>
                            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="modeSwitchCheck" />
                        </div>
                        <button type="button" className="btn btn-outline-danger py-1 my-2 disabled" >Report Bug</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    page1: PropTypes.string,
    page2: PropTypes.string
}
Navbar.defaultProps = {
    title: 'Title',
    page1: 'Home',
    page2: 'About'
}