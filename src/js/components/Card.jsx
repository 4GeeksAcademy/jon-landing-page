import React from "react";
import '../../styles/index.css'

const Card = () => {
    return (
        <div class="card-style">
            <div class="card">
                <img src="https://media.istockphoto.com/id/498309616/es/foto/gran-mar-carretera-la-v%C3%ADa-l%C3%A1ctea-en-la-noche-vista.webp?a=1&b=1&s=612x612&w=0&k=20&c=Hba_808FkWmT2v52R5e2eiQSDMxPLrIFTVRao-LL1Ew=" class="card-img-top" alt="..." />
                <div class="card-body text-center">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
};

export default Card;