import React from 'react';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="/azad">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul className='navbar-nav me-auto mb-2 mb-lg-0'></ul>
                        <div className="navbar-nav me-auto mb-2 mb-lg-0">
                        <form class="d-flex">
                            <input class="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        </div>
                        <button class="btn btn-outline-dark" type="submit">Search</button>
                        
                        
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;