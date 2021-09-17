import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { CardContainer, CardWrapper, CardBody, CardCover, CardInfo } from './Card.element'

const Card = ({user}) => {
    
   let picNum = Math.floor( Math.random() * (5 - 0) + 1)

    return (
        <CardContainer>
            <CardWrapper>
            <CardBody>
                <CardCover>
                    <img src={`/images/cover${picNum}.jpg`} alt="" />
                    <div className="avatar">
                        <img src={`${user.avatar}`} alt="" />
                    </div>
                </CardCover>
                <CardInfo>
                    <div className="name">
                        <h4>{`${user.first_name} ${user.last_name}`}</h4>
                    </div>
                    <div className="email">
                        <p>{user.email}</p>
                    </div>
                    <div className="social__icons">
                        <span><FaFacebook/></span>
                        <span><FaInstagram/></span>
                        <span><FaTwitter/></span>
                    </div>
                </CardInfo>
            </CardBody>
            </CardWrapper>
        </CardContainer>
    )
}

export default Card
