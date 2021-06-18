import React from 'react';
import '../Style/Header.css';
import styled from 'styled-components'
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
    const LogoSection = styled.div `
    -webkit-flex: 0 0 auto ;
    -ms-flex: 0 0 auto ;
    flex: 0 0 auto ;
    `
    const MenuBarSection = styled.div`
    -webkit-flex: 0 1 auto ;
    -ms-flex: 0 1 auto ;
    flex: 0 1 auto ;
    min-width: 348px ;
    padding: 0 24px ;
    `
    const IconSection = styled.div `
    -webkit-flex: 1 0 auto ;
    -ms-flex: 1 0 auto ;
    flex: 1 0 auto ;
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
            <LogoSection>
                <a
                className='Logo-outter-space'
                aria-label='에어비앤비 홈페이지'
                href='/'
                >
                    <div>
                        <svg
                        className='Logo-box'
                        width='102'
                        height='32'
                        fill='currentColor'
                        >
                            <path
                            d="M 29.24 22.68 c -0.16 -0.39 -0.31 -0.8 -0.47 -1.15 l -0.74 -1.67 l -0.03 -0.03 c -2.2 -4.8 -4.55 -9.68 -7.04 -14.48 l -0.1 -0.2 c -0.25 -0.47 -0.5 -0.99 -0.76 -1.47 c -0.32 -0.57 -0.63 -1.18 -1.14 -1.76 a 5.3 5.3 0 0 0 -8.2 0 c -0.47 0.58 -0.82 1.19 -1.14 1.76 c -0.25 0.52 -0.5 1.03 -0.76 1.5 l -0.1 0.2 c -2.45 4.8 -4.84 9.68 -7.04 14.48 l -0.06 0.06 c -0.22 0.52 -0.48 1.06 -0.73 1.64 c -0.16 0.35 -0.32 0.73 -0.48 1.15 a 6.8 6.8 0 0 0 7.2 9.23 a 8.38 8.38 0 0 0 3.18 -1.1 c 1.3 -0.73 2.55 -1.79 3.95 -3.32 c 1.4 1.53 2.68 2.59 3.95 3.33 A 8.38 8.38 0 0 0 22.75 32 a 6.79 6.79 0 0 0 6.75 -5.83 a 5.94 5.94 0 0 0 -0.26 -3.5 Z m -14.36 1.66 c -1.72 -2.2 -2.84 -4.22 -3.22 -5.95 a 5.2 5.2 0 0 1 -0.1 -1.96 c 0.07 -0.51 0.26 -0.96 0.52 -1.34 c 0.6 -0.87 1.65 -1.41 2.8 -1.41 a 3.3 3.3 0 0 1 2.8 1.4 c 0.26 0.4 0.45 0.84 0.51 1.35 c 0.1 0.58 0.06 1.25 -0.1 1.96 c -0.38 1.7 -1.5 3.74 -3.21 5.95 Z m 12.74 1.48 a 4.76 4.76 0 0 1 -2.9 3.75 c -0.76 0.32 -1.6 0.41 -2.42 0.32 c -0.8 -0.1 -1.6 -0.36 -2.42 -0.84 a 15.64 15.64 0 0 1 -3.63 -3.1 c 2.1 -2.6 3.37 -4.97 3.85 -7.08 c 0.23 -1 0.26 -1.9 0.16 -2.73 a 5.53 5.53 0 0 0 -0.86 -2.2 a 5.36 5.36 0 0 0 -4.49 -2.28 c -1.85 0 -3.5 0.86 -4.5 2.27 a 5.18 5.18 0 0 0 -0.85 2.21 c -0.13 0.84 -0.1 1.77 0.16 2.73 c 0.48 2.11 1.78 4.51 3.85 7.1 a 14.33 14.33 0 0 1 -3.63 3.12 c -0.83 0.48 -1.62 0.73 -2.42 0.83 a 4.76 4.76 0 0 1 -5.32 -4.07 c -0.1 -0.8 -0.03 -1.6 0.29 -2.5 c 0.1 -0.32 0.25 -0.64 0.41 -1.02 c 0.22 -0.52 0.48 -1.06 0.73 -1.6 l 0.04 -0.07 c 2.16 -4.77 4.52 -9.64 6.97 -14.41 l 0.1 -0.2 c 0.25 -0.48 0.5 -0.99 0.76 -1.47 c 0.26 -0.51 0.54 -1 0.9 -1.4 a 3.32 3.32 0 0 1 5.09 0 c 0.35 0.4 0.64 0.89 0.9 1.4 c 0.25 0.48 0.5 1 0.76 1.47 l 0.1 0.2 c 2.44 4.77 4.8 9.64 7 14.41 l 0.03 0.03 c 0.26 0.52 0.48 1.1 0.73 1.6 c 0.16 0.39 0.32 0.7 0.42 1.03 c 0.19 0.9 0.29 1.7 0.19 2.5 Z M 41.54 24.12 a 5.02 5.02 0 0 1 -3.95 -1.83 a 6.55 6.55 0 0 1 -1.6 -4.48 a 6.96 6.96 0 0 1 1.66 -4.58 a 5.3 5.3 0 0 1 4.08 -1.86 a 4.3 4.3 0 0 1 3.7 1.92 l 0.1 -1.57 h 2.92 V 23.8 h -2.93 l -0.1 -1.76 a 4.52 4.52 0 0 1 -3.88 2.08 Z m 0.76 -2.88 c 0.58 0 1.09 -0.16 1.57 -0.45 c 0.44 -0.32 0.8 -0.74 1.08 -1.25 c 0.25 -0.51 0.38 -1.12 0.38 -1.8 a 3.42 3.42 0 0 0 -1.47 -3.04 a 2.95 2.95 0 0 0 -3.12 0 c -0.44 0.32 -0.8 0.74 -1.08 1.25 a 4.01 4.01 0 0 0 -0.38 1.8 a 3.42 3.42 0 0 0 1.47 3.04 c 0.47 0.29 0.98 0.45 1.55 0.45 Z M 53.45 8.46 c 0 0.35 -0.06 0.67 -0.22 0.93 c -0.16 0.25 -0.38 0.48 -0.67 0.64 c -0.29 0.16 -0.6 0.22 -0.92 0.22 c -0.32 0 -0.64 -0.06 -0.93 -0.22 a 1.84 1.84 0 0 1 -0.67 -0.64 a 1.82 1.82 0 0 1 -0.22 -0.93 c 0 -0.36 0.07 -0.68 0.22 -0.93 c 0.16 -0.3 0.39 -0.48 0.67 -0.64 c 0.29 -0.16 0.6 -0.23 0.93 -0.23 a 1.84 1.84 0 0 1 1.6 0.86 a 2 2 0 0 1 0.21 0.94 Z m -3.4 15.3 V 11.7 h 3.18 v 12.08 h -3.19 Z m 11.68 -8.9 v 0.04 c -0.15 -0.07 -0.35 -0.1 -0.5 -0.13 c -0.2 -0.04 -0.36 -0.04 -0.55 -0.04 c -0.89 0 -1.56 0.26 -2 0.8 c -0.48 0.55 -0.7 1.32 -0.7 2.31 v 5.93 h -3.19 V 11.69 h 2.93 l 0.1 1.83 c 0.32 -0.64 0.7 -1.12 1.24 -1.48 a 3.1 3.1 0 0 1 1.81 -0.5 c 0.23 0 0.45 0.02 0.64 0.06 c 0.1 0.03 0.16 0.03 0.22 0.06 v 3.2 Z m 1.28 8.9 V 6.74 h 3.18 v 6.5 c 0.45 -0.58 0.96 -1.03 1.6 -1.38 a 5.02 5.02 0 0 1 6.08 1.31 a 6.55 6.55 0 0 1 1.6 4.49 a 6.96 6.96 0 0 1 -1.66 4.58 a 5.3 5.3 0 0 1 -4.08 1.86 a 4.3 4.3 0 0 1 -3.7 -1.92 l -0.1 1.57 l -2.92 0.03 Z m 6.15 -2.52 c 0.57 0 1.08 -0.16 1.56 -0.45 c 0.44 -0.32 0.8 -0.74 1.08 -1.25 c 0.26 -0.51 0.38 -1.12 0.38 -1.8 c 0 -0.67 -0.12 -1.28 -0.38 -1.79 a 3.75 3.75 0 0 0 -1.08 -1.25 a 2.95 2.95 0 0 0 -3.12 0 c -0.45 0.32 -0.8 0.74 -1.09 1.25 a 4.01 4.01 0 0 0 -0.38 1.8 a 3.42 3.42 0 0 0 1.47 3.04 c 0.47 0.29 0.98 0.45 1.56 0.45 Z m 7.51 2.53 V 11.69 h 2.93 l 0.1 1.57 a 3.96 3.96 0 0 1 3.54 -1.89 a 4.1 4.1 0 0 1 3.82 2.44 c 0.35 0.76 0.54 1.7 0.54 2.75 v 7.24 h -3.19 v -6.82 c 0 -0.84 -0.19 -1.5 -0.57 -1.99 c -0.38 -0.48 -0.9 -0.74 -1.56 -0.74 c -0.48 0 -0.9 0.1 -1.27 0.32 c -0.35 0.23 -0.64 0.52 -0.86 0.93 a 2.7 2.7 0 0 0 -0.32 1.35 v 6.92 h -3.16 Z m 12.52 0 V 6.73 h 3.19 v 6.5 a 4.67 4.67 0 0 1 3.73 -1.89 a 5.02 5.02 0 0 1 3.95 1.83 a 6.57 6.57 0 0 1 1.59 4.48 a 6.95 6.95 0 0 1 -1.66 4.58 a 5.3 5.3 0 0 1 -4.08 1.86 a 4.3 4.3 0 0 1 -3.7 -1.92 l -0.09 1.57 l -2.93 0.03 Z m 6.18 -2.53 c 0.58 0 1.09 -0.16 1.56 -0.45 c 0.45 -0.32 0.8 -0.74 1.09 -1.25 c 0.25 -0.51 0.38 -1.12 0.38 -1.8 a 3.42 3.42 0 0 0 -1.47 -3.04 a 2.95 2.95 0 0 0 -3.12 0 c -0.44 0.32 -0.8 0.74 -1.08 1.25 a 3.63 3.63 0 0 0 -0.38 1.8 a 3.42 3.42 0 0 0 1.47 3.04 c 0.47 0.29 0.95 0.45 1.55 0.45 Z"
                            ></path>
                        </svg>
                    </div>
                </a>
            </LogoSection>
            <MenuBarSection>
            </MenuBarSection>
            <IconSection></IconSection>
        </HeaderWrapper>
    </>
    );   
}

export default Header;