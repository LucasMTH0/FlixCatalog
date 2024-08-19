import { useState } from "react";

export function Header() {
    //const navigate = useNavigate()
    const [isSearchEnabled, setIsSearchEnabled] = useState(false)
    // const [searchMovieText, setSearchMovieText] = useState('')
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    // function redirectToPage(){
    //     toggleMenuOpen()
    //     navigate(url)
    // }

    function toggleMenuOpen(){
        setIsMenuOpen(!isMenuOpen)
    }


    // function searchMovie() {

    // }

    function toggleSearchButton(){
        if(!isSearchEnabled){
            setIsSearchEnabled(true)
        } else {
            // if(searchMovieText.length === 0){
            //     setIsSearchEnabled(false)
            // } else {
            //     searchMovie()
            // }
            
        }
    }

    return (
        <aside>
            {
                !isMenuOpen 
                && 
                <button onClick={toggleMenuOpen}>
                    <span className="material-symbols-outlined">
                        menu
                    </span>
                </button>
            }

            {
                isMenuOpen
                &&
                <header>
                <button onClick={toggleMenuOpen}>
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </button>
                <nav>
                    {/* <li onClick={() => redirectToPage('/')}>
                        Home
                    </li>
                    <li onClick={() => redirectToPage('/movies')}>
                        Movies
                    </li> */}

                    <li>
                        {
                            isSearchEnabled && <input type="search" />
                        }
                        
                        <button onClick={toggleSearchButton}>
                            <span className="material-symbols-outlined">
                                search
                            </span>
                        </button>
                    </li>
                </nav>
            </header>
            }

        </aside>

    )
}