import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateMovie = () => {
    let [movieName,setMovieName]=useState("");
    let [hero,setHero]=useState("");
    let [heroine,setHeroine]=useState("");
    let [gener,setGener]=useState("");
    let [ratings,setRatings]=useState("");
    let [storyline,setStoryline]=useState("");

    let history=useHistory();


    let handlesubmit=((e)=>{
        e.preventDefault();
        let movie={movieName,hero,heroine,gener,ratings,storyline}

        fetch("http://localhost:3001/movies",
        {
            method:"post",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(movie)
        }).then(()=>{
            // History.go(-1);
            history.push("/");

        })
    })
    

    return (  

        <div className="moviedetail">
        <h1>{hero}</h1>
        <h1>Add new movies</h1>
        <form className="create_movie" onSubmit={handlesubmit}>
            <label>MovieName</label>
            <input type="text" value={movieName} onChange={(e)=>{setMovieName(e.target.value)}} />
            <label>hero:</label>
            <input type="text" value={hero} onChange={(e)=>{setHero(e.target.value)}} />
            <label>heroine</label>
            <input type="text" value={heroine} onChange={(e)=>{setHeroine(e.target.value)}} />
            <label>gener</label>
            <input type="text" value={gener} onChange={(e)=>{setGener(e.target.value)}} />
            <label>ratings</label>
            <input type="number" value={ratings} onChange={(e)=>{setRatings(e.target.value)}} />
            <label>story line</label>
            <textarea value={storyline} onChange={(e)=>{setStoryline(e.target.value)}} />
            
            
        <input type="submit"  />


        </form>
        </div>



    );
}




 
export default CreateMovie;