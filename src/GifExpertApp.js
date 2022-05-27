import React, { Fragment, useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'One Piece' ])
    
    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>  
            
            <ol>
                {   
                    categories.map( ( category, index ) => (
                        <GifGrid 
                            key={ category+'_'+index } 
                            category={category} 
                        /> 
                    ))
                }
            </ol>  
        </Fragment>
    )
}

export default GifExpertApp;