import React, { useEffect, useState } from "react";

import Header from "./components/header/header";

import './Home.css';

import mainImg from '../../assets/img/bg-img.png';

export default function Home() {
    const[colorHeader, setColorHeader] = useState(false);

    useEffect(() => {
        const scrollListener = () => {
            setColorHeader(window.scrollY > 35);
        }

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    }, []);

    return(
        <>
            <div className="page">
                <div className="first-look" style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${mainImg})`,
                }}>
                    <Header color={colorHeader} />
                    <div className="first-look-v">
                        <div className="first-look-slogan">
                            Our software enables smarter energy
                        </div>

                        <div className="first-look-description">
                            Powering the transition to a resilient, renewable, decentralised energy system of the future.
                        </div>

                        <div className="first-look-buttons">
                            <a href="/login" className="btn-1">Sign in</a>
                            <a href="/" className="btn-2">Buy now</a>
                        </div>
                    </div>
                </div>
                
                <div className="rest">
                    Eliude P. C. Vemba
                </div>
            </div>
        </>
    );
}
