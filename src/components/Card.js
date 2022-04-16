import React from "react";
import { Button } from "react-bootstrap";
import TextTruncate from "react-text-truncate";

export function Card({title, category,uploaded, description, url}){
    return(
    <div>
        <div className="d-flex justify-content-center" id="a
        rticle">

            <div className='card-container d-flex justify-content-center'>
                <div className='card-body '>
                    <div className='card-title'>
                        <h5>{title}</h5>
                    </div>
                    <div className='image-container d-flex justify-content-center'>
                        <div className="wrap-element">
                            <iframe className="wrapped-iframe" src={url} 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen></iframe>

                        </div>
                    </div>
                    <div>Catégorie: {category}</div>
                    <div className="border-top">

                        <p>Article uploadé le {uploaded}</p>
                        <p className='card-text'  >
                            <TextTruncate
                            line={1}
                            truncateText="…"
                            text={description}
                            textTruncateChild={<Button>Lire l'article</Button>} /></p>
                    </div>
                </div>
            </div>
        </div>
           {/*  <div id="pub" className="text-center">
                <p>{adsTitle}</p>
                <a href={adsLink} target="blank"><img 
                                    width="275px"
                                    height="200px"
                                    src={adsImageFileName} 
                                    className="rounded"
                                    alt="pub"/>
                </a>
            </div> */}

    </div>        
    )
}