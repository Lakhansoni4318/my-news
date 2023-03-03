import React from 'react'
import Image from './Image.png'
export default function NewsItem (props) {
        return (
            <div className='container' style={{marginTop: '90px'}}>
                <div className="card">
                    <img src={!props.img ? Image : props.img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
        )
    }