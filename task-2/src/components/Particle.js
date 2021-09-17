import React from 'react'
import Particles from 'react-particles-js';
import {ParticleConfig} from '../Particle.config'

export default function ParticleBackground(){
    return (
        <Particles style={{zIndex : -1 ,position:"absolute",top:0, backgroundColor:"#d8dbe2"}} width="100%" height="100vh" params={ParticleConfig}></Particles>
    )
}