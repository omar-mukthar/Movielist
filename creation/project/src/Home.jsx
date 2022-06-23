
import Movielist from './Movielist';
import useFetch from './useFetch';
// import image from "../src/image/Avengers.jpg";
const Home = () => {
    

    let{data : movies,pending,error}=useFetch("http://localhost:3001/movies");


        
    // const deleteMovie =(passedId)=>{
         
    //     let newMovies=movies.filter((movie)=>{return movie.id !== passedId});
    //     setMovies(newMovies);
    // }
    

    
    return (
        <div className='home-content'>
            {/* <img src={image} alt="" /> */}
            {error &&<h1 className='error'>{error}</h1>  }
            {pending&&<h1>loading...</h1>}
            {movies&&<Movielist title="All movies" movies={movies}   />}
             {/* deleteMovie={deleteMovie} */}
            
            
            {/* <Movielist title="action movies" movies={movies.filter((movie)=>{return movie.gener.includes("action")})}/> */}



        </div>
        );
    }
 

export default Home;







// import { useState } from "react";

// const Home = () => {
//     var [movieName,setMovies]=useState("thangam");
    
//     const handleEvent=()=>
//     {
//         setMovies("Raman thediya seedhai");
        
//     }
    
//     return (  
//         <div className="Homecontent">
//             <h2>{movieName}</h2>
//             <button onClick={()=>{handleEvent()}}>Add</button>

//         </div>

//     );
// }
 
// export default Home;