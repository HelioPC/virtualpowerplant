import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "../../assets/particle/particlejs-config";

import './login.css'

export default function Login() {
    const BACKIMG = 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Dülmen%2C_Börnste%2C_Waldweg_--_2015_--_4649.jpg?uselang=pt';
    return(
        <>
            <Particles params={particlesConfig} />

            <div className="form-container">
                <div 
                    className="form-group"
                    style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: `url(${BACKIMG})`,
                    }}
                >
                    <div className="form-group-v">
                        <h1>Virtual Power Plant</h1>
                        <p>
                            Already registered.
                            <a href="/login" style={{color: '#57F'}}> Log in</a>
                        </p>
                        <form className="form-1">
                            <div className="form-1-name">
                                <input type='text' placeholder="First name" />
                                <input type='text' placeholder="Last name" />
                            </div>

                            <div className="form-1-oth">
                                <input type='email' placeholder="Email" />
                                <input type='password' placeholder="Password" />
                            </div>

                            <div className="form-1-btns">
                                <button style={{backgroundColor: '#707070'}}>Change Method</button>
                                <button style={{backgroundColor: '#4af'}}>Create Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
