import React from 'react';
import '../Style/Header.css';
import styled from 'styled-components'
import Logo from './Elements/HeaderLogo';
import Menu from './Elements/HeaderMenu';
import My from './Elements/MyMenuSection';


function Header () {
    const InfoWrapper = styled.div`
    position: relative ;
    z-index: 101;
    `
    const HeaderWrapper = styled.div`
    height: 80px ;
    left: 0px ;
    width: 100% ;
    z-index: 100 ;
    --header-brand-color: #FF385C ;
    position: absolute ;
    `
    const ContentsWrapper = styled.div`
    max-width: var(--page-shell-max-content-width, 1440px);
    -webkit-box-align: center;
    -webkit-box-pack: justify;
    justify-content: space-between !important;
    align-items: center;
    display: flex ;
    height: 100% ;
    position: relative ;
    width: 100% ;
    z-index: 1 ;
    margin: 0 auto
    `
    return(
    <>
        <InfoWrapper>
            <aside className='Info-inner-wrapper'>
                <a 
                className='Info-print-wrapper'
                href='/'
                target='_blank'
                rel='noreferrer'
                >
                    <span className='Info-content'>
                        에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.
                    </span>
                </a>
            </aside>
        </InfoWrapper>
        <HeaderWrapper className='HeaderWrapper'>
            <ContentsWrapper>
                <Logo />
                <Menu />
                <My />
            </ContentsWrapper>
        </HeaderWrapper>
    </>
    );   
}

export default Header;