import React, { useEffect, useState } from "react";

import Header from "./components/header/header";

import './style.css';

import mainImg from '../../assets/img/bg-img.png';
import Footer from "./components/footer/footer";

export default function Home() {
    const[colorHeader, setColorHeader] = useState(false);
    const imgCardSize = 60;

    useEffect(() => {
        const scrollListener = () => {
            setColorHeader(window.scrollY > 35);
        }

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener)
        }
    }, []);

    /*function scrollTop() {
        window.scrollTo({   
            top: 0,
            behavior: 'smooth'
        })
    }*/

    return(
        <>
            <div className="page">
                <Header color={colorHeader} />
                <div className="first-look" style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${mainImg})`,
                }}>
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
                
                <div className="body-content">
                    <div className="content-1">
                        <div className="content-1-txt">
                            <div style={{fontWeight: 'bold', fontSize: '24px'}}>
                                <p>We are leading the charge as energy disruptors through our cutting edge software</p>
                            </div>
                            <div className="content-1-txt-bd">
                            Evergen provides a platform where solar and battery energy resources can be optimised through power trading and distribution, peak demand avoidance, demand response, and grid stabilisation management services. Our systems can support trading functions for risk profile management, asset dispatching and financial transactions as a Virtual Power Plant (VPP) operator.
                            </div>
                        </div>
                        <div className="content-1-img">
                            <img height={320} width={320} src="https://cdn-bpjgc.nitrocdn.com/fCZSeaygFajigEqWZvaIggmTFrMVXbDl/assets/static/optimized/rev-7c13358/wp-content/uploads/2021/09/e-logo.png" alt="logo" />
                        </div>
                    </div>

                    <div className="content-2">
                        <div className="content-2-cards">
                            <div className="card">
                                <div className="card-body">
                                    <img
                                        height={imgCardSize}
                                        width={imgCardSize}
                                        alt="icon"
                                        src="https://cdn-bpjgc.nitrocdn.com/fCZSeaygFajigEqWZvaIggmTFrMVXbDl/assets/static/optimized/rev-7c13358/wp-content/uploads/2021/09/case-studies-icon.png"
                                    />
                                    <h1>Case Studies</h1>
                                    <p>See how our solutions are changing the energy sector.</p>
                                    <a href="/login" target="_blank">READ</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <img
                                        height={imgCardSize}
                                        width={imgCardSize}
                                        alt="icon"
                                        src="https://cdn-bpjgc.nitrocdn.com/fCZSeaygFajigEqWZvaIggmTFrMVXbDl/assets/static/optimized/rev-7c13358/wp-content/uploads/2021/09/reports-icon.png"
                                    />
                                    <h1>Reports</h1>
                                    <p>Discover our industry research reports.</p>
                                    <a href="/login" target="_blank">READ</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                <img
                                    height={imgCardSize}
                                    width={imgCardSize} 
                                    alt="icon"
                                    src="https://cdn-bpjgc.nitrocdn.com/fCZSeaygFajigEqWZvaIggmTFrMVXbDl/assets/static/optimized/rev-7c13358/wp-content/uploads/2021/09/datasheets-icon.png"
                                />
                                    <h1>Datasheets</h1>
                                    <p>Download Evergen datasheets.</p>
                                    <a href="/login" target="_blank">READ</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
