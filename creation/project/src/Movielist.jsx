import { Link } from "react-router-dom";

const Movielist = ({movies,title}) => { //pass props without brackets              ({deleteMovie})
    // let movies= props.movies
    return (  

        <div>
            <h1>{title}</h1>
            {movies.map((movie) =>(
                
                
                <div className="movie-content">
                    
                    <Link to={`/movie${movie.id}`}>
                        <div className="movielist">
                        <h2>movie:{movie.movieName}</h2>
                        <div className="h3tag">
                        <h3>hero:{movie.hero}</h3>
                        <h3>heroine:{movie.heroine}</h3>
                        </div>
                        <h3>gener:{movie.gener}</h3>
                        </div>
                    </Link>
                {/* <button onClick={()=>{deleteMovie(movie.id)}}>Delete</button> */}


            </div>
                
            )
            )}
        </div>



        
    );
}
 
export default Movielist;