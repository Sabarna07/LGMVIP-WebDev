import styled from "styled-components";

export const Nav = styled.div`
    width: 100%;
    /* height: 70px; */
    background-color: ${({navbar})=>(navbar ? "black" : `` )};
    position: ${({navbar})=>(navbar ? "fixed" : 
    'relative' )};
    z-index: 20;
    transition: all .3s;
    @media screen and (max-width:768px){
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: #fff;
    }
`
export const NavWrapper = styled.div`
    padding: 0px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px -1px  4px rgba(0,0,0,.15);
`
export const Logo = styled.a`
    text-decoration:none;
    font-size: 18px;
    cursor:pointer;
    border-radius: 4px;
    display: block;
    width: 100px;
    height: 100px;
    position: relative;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width:768px){
        display: block;
        position: absolute;
        right: 30px;
        font-size: 25px;
        cursor: pointer;
        transition: all .3s;
    }
`
export const NavMenu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:768px){
        flex: none;
        position: fixed;
        bottom: ${({click})=>(click ? '100px' : '-100%')};
        left: 0;
        width: 100%;
        padding: 0;
        box-shadow: 0px -1px  4px rgba(0,0,0,.15);
        border-radius: 1.5rem 1.5rem 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        transition: 0.3s ease-in-out;
        background-color: #fff;
    }
`
export const NavItem = styled.li`
    /* height: 40px; */
    @media screen and (max-width:768px){
        padding: 10px 10px;
    }
`
export const NavLink = styled.a`
    color: #6c67ff;
    text-decoration:none;
    padding:0 1rem;
    font-size: 18px;
    cursor:pointer;
    border-radius: 4px;
    display: block;
    line-height: 40px;
    position: relative;
    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 3px;
        width: .2rem;
        height: 100%;
        background-color: #0381ff33;
        transform-origin: top;
        transform: scale(0);
        overflow-x: hidden;
        transition: transform .4s, .2s width .5s cubic-bezier(1,-0.16,.6,1.35);
        border-radius: 5px;
    }
    svg{
        padding: 0 10px 0 0;
        position: relative;
        top: 6px;
        font-size: 25px;
    }
    &:hover::before{
        color: #fefced;
        width: 100%;
        transform: scale(1);
    }
`