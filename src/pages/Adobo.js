import React, {useState, useEffect} from 'react';
import Axios from 'axios'

function Adobo(){
    const [recipe, setRecipe] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3001/adobo', { withCredentials: true})
        .then( res => {
            console.log(res.data.meals[0]);
            setRecipe(res.data.meals[0])
        }
            
        )
        .catch(error => {
            console.log(error);
        })
    }, [])

    return(
        <div>
            <h1>Adobo Page</h1>
            <h2>{recipe.strMeal}</h2>
        </div>
    )
}

export default Adobo;