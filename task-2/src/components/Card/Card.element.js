import styled from "styled-components";

export const CardContainer = styled.div`
    width: 300px;
    height: 370px;
    background-color: #6c67ff;
    margin: 20px 20px;
    border-radius: 10px;
    
`
export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    justify-content: center;
    
`
export const CardBody = styled.div`
    width: 100%;
`
export const CardCover = styled.div`
    position: relative;
    height: 200px;
    width: 100%;
    img{
        width: 100%;
        height: 100%;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }

    .avatar{
        width: 120px;
        height: 120px;
        border-radius: 100%;
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 10%);
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 90%;
            height: 90%;
            object-fit: cover;
            border-radius: 100%;
        }

    }
`
export const CardInfo = styled.div`
    padding: 0 20px;
    margin: 40px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    .name{
        margin-bottom: 5px;
        font-size: 20px;
    }

    .email{
        margin-bottom: 25px;
        font-size: 18px;
    }

    .social__icons{
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 25px;

        span{
            cursor: pointer;
            /* filter: invert(1); */
        }
    }

`