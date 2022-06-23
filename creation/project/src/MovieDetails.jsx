import { useParams ,useHistory} from "react-router-dom";
import useFetch from "./useFetch";
const MovieDetails = () => {

    let {id} = useParams();
    let {data:movie , pending ,error} = useFetch(`http://localhost:3001/movies/${id}`);
    let history=useHistory();
    function handleDelete(id)
    {
        fetch(` http://localhost:3001/movies/${id}`,{method:"DELETE"})
        .then(()=>{
            alert("deleted");
            history.push("/");
        })
    }

    return ( 
        <div>
            {error && <h1>{error}</h1>}
        
            {pending && <h1>Loading ..........</h1>}

           {movie && 
            <div>
                
                {/* <img src={movie.poster}/> */}
                <h1>{id}</h1>
                <h1>{movie.movieName}</h1>
                <h2>Hero : {movie.hero}</h2>
                <h2>Heroine : {movie.heroine}</h2>
                <h2>Genere : {movie.gener}</h2>
                <h2>IMBD rating : {movie.rating}</h2>
                <p>Story line : {movie.story}</p>
                

            <button onClick={()=>{handleDelete(movie.id)}}>Delete</button>
                
                
            </div>
            }
        </div>
    );
}
export default MovieDetails;
// import { useParams } from "react-router-dom";
// import useFetch from "./useFetch";

// const MovieDetails = () => {

//     const {id}=useParams();
//     let {data:movie , pending ,error}=useFetch(`http://localhost:3001/movies/${id}`);
    



//     return ( 

//         <div >
//             {error &&<h1 className='error'>{error}</h1>  }
//             {pending&&<h1>loading...</h1>}
//             <h1>{id}</h1>
//             {movie && <h1>{movie.heroine}  </h1>}



//         </div>
//      );
// }
 
// export default MovieDetails;