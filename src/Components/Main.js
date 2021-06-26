import React from 'react';
import styled from 'styled-components';
import '../Style/Main.css';
import Look from './Elements/LookAround';
import Where from './Elements/Where';
import Idea from './Elements/GetIdea';
import Experience from './Elements/LookExperience';
import Setting from './Elements/NewFunction';

function Main () {
    const MainWrapper = styled.main`
    display: block;
    `
    const MainInnerWrapper = styled.div`
    min-height:400px;
    `
    const MainContentsWrapper = styled.div`
    overflow-anchor: none ;
    `
    const IMGInnerAreaStyle = {
        height: '100%',
        width: '100%',
        backgroundSize: 'cover',
    }
    const IMGStyle = {
        position: 'absolute',
        left: '0px',
        right: '0px',
        objectFit: 'cover',
        objectPosition: '50% 50%',
        verticalAlign: 'bottom',
    }
    return(
        <MainWrapper tabIndex='-1'>
            <MainInnerWrapper>
                <MainContentsWrapper>
                    <div className='Common-Contents-style'>
                        <div className='Background-IMG-Ex'>
                            <div className='Header-area-wrapper'>
                                <div className='Total-view-port-IMG'>
                                    <div 
                                    className='Total-view-port-IMG-inner-area'
                                    style={IMGInnerAreaStyle}
                                    >
                                        <picture>
                                            <source
                                            srcSet='https://a0.muscache.com/im/pictures/ddc7f01f-3fb3-483c-87e6-701dad52c930.jpg?im_w=960'
                                            ></source>
                                            <img
                                            className='Image-wrapper'
                                            aria-hidden='true'
                                            src='https://a0.muscache.com/im/pictures/ddc7f01f-3fb3-483c-87e6-701dad52c930.jpg?im_w=960'
                                            style={IMGStyle}
                                            alt='https://a0.muscache.com/im/pictures/ddc7f01f-3fb3-483c-87e6-701dad52c930.jpg?im_w=960'
                                            ></img>
                                        </picture>
                                    </div>
                                </div>
                                <div className='Header-inner-area-port'>
                                    <div className='Header-inner-area-port-wrapper'>
                                        <div className='Inner-Content-first'>
                                            <div 
                                            role='heading'
                                            aria-level='1'
                                            >
                                                <span>
                                                    <span className='Main-Common-Sapn-style'>슬기로운 자연생활</span>
                                                </span>
                                            </div>
                                            <span className='Main-Common-Span-Style-A'>
                                                <span className='Main-Area-Heading-A'>에어비앤비가 엄선한 워시리스트를&nbsp;만나보세요.</span>
                                            </span>
                                            <span className='Main-Common-Span-Style-A'>
                                                <a
                                                target='_blank'
                                                href='/'
                                                className='Main-Area-Heading-Address-Style'
                                                >
                                                    <div className='Main-Area-Heading-Address-Inner'>
                                                        <span className='Main-Area-Heading-Span-Area'>여행 아이디어&nbsp;얻기</span>
                                                    </div>
                                                </a>
                                            </span>
                                        </div>
                                        <div className='Inner-Content-Second'>
                                            <div
                                            role='heading'
                                            aria-level='1'
                                            >
                                                <span className='Main-Common-Sapn-style'>슬기로운 자연생활</span>
                                            </div>
                                            <span className='Main-Common-Span-Style-A'>
                                                <span className='Main-Area-Heading-A'>에어비앤비가 엄선한 위시리스트를&nbsp;만나보세요.</span>
                                            </span>
                                            <span className='Main-Common-Span-Style-A'>
                                                <a
                                                target='_blank'
                                                href='/'
                                                className='Main-Area-Heading-Address-Style'
                                                >
                                                    <div className='Main-Area-Heading-Address-Inner'>
                                                        <span className='Main-Area-Heading-Span-Area'>여행 아이디어&nbsp;얻기</span>
                                                    </div>
                                                </a>
                                            </span>
                                        </div>
                                        <div className='Inner-Content-Third'>
                                            <div
                                            role='heading'
                                            aria-level='1'
                                            >
                                                <span>
                                                    <span className='Wisdom-Word-wrapper'>슬기로운<br />
                                                    자연생활</span>
                                                </span>
                                            </div>
                                            <span className='Main-Common-Span-Style-B'>
                                                <span className='Wish-list-wrapper'>에어비앤비가 엄선한 위시리스트를&nbsp;만나보세요.</span>
                                            </span>
                                            <span className='Main-Common-Span-Style-B'>
                                                <a
                                                target='_blank'
                                                href='/'
                                                className='Main-Area-Heading-Address-wrapper'
                                                >
                                                    <div className='Get-idea-wrapper'>
                                                        <span className='Get-idea-word-wrapper'>여행 아이디어&nbsp;얻기</span>
                                                    </div>
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Look />
                    <Where />
                    <Idea />
                    <Experience />
                    <Setting />
                </MainContentsWrapper>
            </MainInnerWrapper>
        </MainWrapper>
    );
}

export default Main;