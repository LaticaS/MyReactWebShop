import { useState } from "react";
import "./Proizvodi.scss";
import Books from "../databooks.json"

function Proizvodi() {
    
    return(
        <div className="div-proizvodi">                                
          {
          Books && Books.map( book => {
                return(                    
                <div className="div-book" key={book.id}>
                    <a href="" target="_blank" title="Detaljnije">
                    <img src={book.img} alt="book cover" /> 
                    </a>              
                <p>" {book.title} "</p>
                <p><em>{book.subtitle}</em></p>
                <p><strong> {book.author} </strong></p>
                <p style={{padding:5, color:"red", fontSize:"larger"}}>{book.price} €</p>
                <button>DODAJ U KOŠARICU</button>
            </div>                    
                )
            })
            }
        </div>
    )
}

export {Proizvodi}