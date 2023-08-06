import React from "react";
import ReactDOMClient from "react-dom/client";
import "./style.css";
import { Convite } from "./Convite"


const app = document.getElementById("ap");
const root = ReactDOMClient.createRoot(app);

export const Intro = (): JSX.Element => {
    return (
        <div className="intro" onClick={() => root.render(<Convite />)}>
            <img className="img" alt="Frame" src="/img/frame-7.svg" />
            <div className="frame">
                <div className="overlap">
                    <div className="group">
                        <div className="overlap-group">
                            <img className="vector" alt="Vector" src="/img/vector-1.svg" />
                            <img className="vector-2" alt="Vector" src="/img/vector-3.svg" />
                            <img className="vector-3" alt="Vector" src="/img/vector-2.svg" />
                            <div className="ellipse-wrapper">
                                <div className="ellipse">
                                    <div className="heading-batizado">M</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-wrapper">Clique para abrir</div>
                </div>
            </div>
            <img className="group-2" alt="Group" src="/img/group-3.png" />
        </div >
    );
};
