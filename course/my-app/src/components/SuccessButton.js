import React, { Component } from 'react';

function Card(props) {
    return <div className="flip-container">
        <div className="front">
            <img src="./img.png" alt="" />
            <div className="footer">
                <p><strong>Title</strong><br/>
                    Film category
                </p>
            </div>
        </div>
            <div className="back">
                <p><strong>Film title</strong>
                    <br/>
                    <br/> Film info <br/> More info <br/> Much more info
                </p>
            </div>
    </div>

}

export default Card