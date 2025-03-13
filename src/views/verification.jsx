import { useEffect, useState } from "react";
import { HeaderPg } from "./include/header";
import { CinPages } from "./searche-cin";
import { ImPages } from "./searche-im";

export const VerificationImPg = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setheight] = useState(window.innerHeight);
    
    useEffect(() => {
        const width = () => setWidth(window.innerWidth);
        const height = () => setheight(window.innerHeight);
    
        window.addEventListener("resize", width);
        window.addEventListener("resize", height);
    }, []);

    return  <div id='verificationBlock' style={{width: `${width}px`,height: `${height}px`, overflowY:`hidden` }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3 col-sm-2 col-xs-1'></div>
                            <div className='col-md-6 col-sm-8 col-xs-10'>
                                <div id='form-verification'>
                                    <HeaderPg/>
                                    <ImPages />
                                </div>
                            </div>
                        <div className='col-md-3 col-sm-2 col-xs-1'></div>
                    </div>
                </div>
            </div>
}

export const VerificationCinPg = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setheight] = useState(window.innerHeight);
    
    useEffect(() => {
        const width = () => setWidth(window.innerWidth);
        const height = () => setheight(window.innerHeight);
    
        window.addEventListener("resize", width);
        window.addEventListener("resize", height);
    }, []);
    
    return  <div id='verificationBlock' style={{width: `${width}px`,height: `${height}px`, overflowY:`hidden` }}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-3 col-sm-2 col-xs-1'></div>
                                <div className='col-md-6 col-sm-8 col-xs-10'>
                                    <div id='form-verification'>
                                        <HeaderPg/>
                                        <CinPages />
                                    </div>
                                </div>
                            <div className='col-md-3 col-sm-2 col-xs-1'></div>
                        </div>
                    </div>
            </div>
}