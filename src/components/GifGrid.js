import React, { Fragment } from 'react'
import { useFetchGifts } from '../hooks/useFetchGifs';
import GifGridItem from '../components/GifGridItem'

const GifGrid = ( { category } ) => {
    const { data:images, loading } = useFetchGifts( category )
    return (
        <Fragment>
            <h3>{ category }</h3>

            { loading && <p className="animate__animated animate__flash">...Cargando</p> }

            <div className="card-grid animate__animated animate__fadeInDownBig">
                {   
                    images.map( ( img )  => (
                        <GifGridItem key={ img.id } {...img } /> 
                        ))
                    }
            </div>
        </Fragment>
    )
};

export default GifGrid;
