import React from 'react'
import { Link } from "react-router-dom";
export default function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg  " style={{ backgroundColor: '#e3f2fd', }}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="void:(0)">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link to="/" className='nav-link active'>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/about" className='nav-link'>About</Link>
                            </li>
                            <li class="nav-item" >
                                <Link to="/login" className='nav-link'>Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" className='nav-link'>Contact</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="void:()" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hooks
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="void:()">useState</a></li>
                                    <li><a class="dropdown-item" href="void:()">UseEffect</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="void:()">use Reducer </a></li>
                                </ul>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
