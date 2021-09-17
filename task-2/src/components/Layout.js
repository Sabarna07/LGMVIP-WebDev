import React from 'react'
import Navbar from './Navbar/Navbar'
import ParticleBackground from './Particle';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <section>
                <ParticleBackground />
            </section>
            {children}
        </>
    )
}

export default Layout
