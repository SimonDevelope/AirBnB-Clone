import React from 'react';
import '../Style/Header.css';
import styled from 'styled-components'
import Logo from './Elements/HeaderLogo';
import Menu from './Elements/HeaderMenu';
import My from './Elements/MyMenuSection';
import Main from './Main';


function Header () {
    const TotalViewContent = styled.div `
    --page-shell-max-content-width: 1760px;
    `
    const InenrTotalViewContent = styled.div`
    position: relative !important;
    min-height: 100vh !important;
    `
    const MainHeaderOutterWrapper = styled.div`
    display: block !important;
    `
    const MainHeaderInnerWrapper = styled.div`
    box-sizing: border-box;
    `
    const InfoWrapper = styled.div`
    position: relative ;
    z-index: 101;
    `
    const HeaderWrapper = styled.header`
    height: 80px ;
    left: 0px ;
    width: 100% ;
    z-index: 100 ;
    --header-brand-color: #FF385C ;
    position: absolute ;
    `
    const ContentsWrapper = styled.div`
    padding-left: 80px ;
    padding-right: 80px ;
    max-width: var(--page-shell-max-content-width, 1440px) ;
    -webkit-box-align: center ;
    -webkit-box-pack: justify ;
    justify-content: space-between ;
    align-items: center ;
    display: flex ;
    height: 100% ;
    position: relative ;
    width: 100% ;
    z-index: 1 ;
    margin: 0 auto ;
    `
    return(
    <>
        <TotalViewContent>
            <InenrTotalViewContent>
                <MainHeaderOutterWrapper>
                    <MainHeaderInnerWrapper className='MainHeaderInnerarea'>
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
                    </MainHeaderInnerWrapper>
                </MainHeaderOutterWrapper>
                <Main />
            </InenrTotalViewContent>       
        </TotalViewContent>
    </>
    );   
}

export default Header;