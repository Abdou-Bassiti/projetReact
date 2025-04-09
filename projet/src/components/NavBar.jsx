import React from 'react'

function NavBar() {
  return (
    <div>
        <div>
            <header className='.container-fluid bg-dark d-flex justify-content-between'>
              <div>
                <h1 className='text-white'>Librairie.</h1>
              </div>
                <nav className='navbar navbar-expand-lg navbar-dark bg-dark '>
                  <div className="container-fluid ">
                    <a className="navbar-brand" href="Accueil">Accueil</a>
                    <a className="navbar-brand" href="Connexion">Connexion</a>
                    <a className="navbar-brand" href="A propos">A propos</a>
                  </div>
                </nav>
            </header>
        </div>
    </div>
  )
}

export default NavBar