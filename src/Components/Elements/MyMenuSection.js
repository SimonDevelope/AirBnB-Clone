import React from 'react';
import styled from 'styled-components';
import '../ElementsStyle/MyMenuSection.css';

function My () {    
    const TotalWrapper = styled.div `
    -webkit-flex: 1 0 auto;
    -ms-flex: 1 0 auto;
    flex: 1 0 140px;
    `
    const WorldEmojiStyle = {
        display: 'block',
        height: '16px',
        width: '16px',
        fill: 'currentcolor',
    }
    const HambugEmojiStyle = {
        display: 'block',
        fill: 'none',
        height: '16px',
        width: '16px',
        stroke: 'currentcolor',
        strokeWidth: '3',
        overflow: 'visible',
    }
    const HumanEmojiStyle = {
        display: 'block',
        height: '100%',
        width: '100%',
        fill: 'currentcolor',
    }
    return(
        <TotalWrapper>
            <nav
            className='My-section-outter-wrapper'
            aria-label='메인'
            >
                <div className='To-be-host-section-area'>
                    <a
                    className='To-be-host-inner-wrappre'
                    href='/'
                    >
                        <div className='To-be-host-word-area'>호스트 되기</div>
                    </a>
                    <div className='world-emoji-outter-wrapper'>
                        <button
                        type='button'
                        className='world-emoji-inner-wrapper'
                        aria-expanded='false'
                        aria-label='언어와 통화'
                        >
                            <div className='world-emoji-inner-area-A'>
                                <div 
                                className='world-emoji-inner-area-B'
                                aria-hidden='true'
                                >
                                    <svg
                                    viewBox='0 0 16 16'
                                    xmlns='http://www.w3.org/2000/svg'
                                    aria-hidden='true'
                                    role='presentation'
                                    focusable='false'
                                    style={WorldEmojiStyle}
                                    >
                                        <path
                                        d="m 8.002 0.25 a 7.77 7.77 0 0 1 7.748 7.776 a 7.75 7.75 0 0 1 -7.521 7.72 l -0.246 0.004 a 7.75 7.75 0 0 1 -7.73 -7.513 l -0.003 -0.245 a 7.75 7.75 0 0 1 7.752 -7.742 Z m 1.949 8.5 h -3.903 c 0.155 2.897 1.176 5.343 1.886 5.493 l 0.068 0.007 c 0.68 -0.002 1.72 -2.365 1.932 -5.23 Z m 4.255 0 h -2.752 c -0.091 1.96 -0.53 3.783 -1.188 5.076 a 6.257 6.257 0 0 0 3.905 -4.829 Z m -9.661 0 h -2.75 a 6.257 6.257 0 0 0 3.934 5.075 c -0.615 -1.208 -1.036 -2.875 -1.162 -4.686 l -0.022 -0.39 Z m 1.188 -6.576 l -0.115 0.046 a 6.257 6.257 0 0 0 -3.823 5.03 h 2.75 c 0.085 -1.83 0.471 -3.54 1.059 -4.81 Z m 2.262 -0.424 c -0.702 0.002 -1.784 2.512 -1.947 5.5 h 3.904 c -0.156 -2.903 -1.178 -5.343 -1.892 -5.494 l -0.065 -0.007 Z m 2.28 0.432 l 0.023 0.05 c 0.643 1.288 1.069 3.084 1.157 5.018 h 2.748 a 6.275 6.275 0 0 0 -3.929 -5.068 Z"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                <div>
                    <div className='My-icon-area-fixed'>
                        <button
                        type='button'
                        className='My-icon-inner-wrapper'
                        aria-expanded='false'
                        >
                            <div>
                                <svg
                                viewBox='0 0 32 32'
                                xmlns='http://www.w3.org/2000/svg'
                                aria-hidden='true'
                                role='presentation'
                                focusable='false'
                                style={HambugEmojiStyle}
                                >
                                    <g fill='none' fill-rule='nonzero'>
                                        <path d="m 2 16 h 28"></path>
                                        <path d="m 2 24 h 28"></path>
                                        <path d="m 2 8 h 28"></path>
                                    </g>
                                </svg>
                            </div>
                            <div 
                            className='Human-emoji-outter-wrapper'
                            aria-label='메인 탐색 메뉴'
                            >
                                <svg
                                viewBox='0 0 32 32'
                                xmlns='http://www.w3.org/2000/svg'
                                aria-hidden='true'
                                role='presentation'
                                focusable='false'
                                style={HumanEmojiStyle}
                                >
                                    <path
                                    d="m 16 0.7 c -8.437 0 -15.3 6.863 -15.3 15.3 s 6.863 15.3 15.3 15.3 s 15.3 -6.863 15.3 -15.3 s -6.863 -15.3 -15.3 -15.3 Z m 0 28 c -4.021 0 -7.605 -1.884 -9.933 -4.81 a 12.425 12.425 0 0 1 6.451 -4.4 a 6.507 6.507 0 0 1 -3.018 -5.49 c 0 -3.584 2.916 -6.5 6.5 -6.5 s 6.5 2.916 6.5 6.5 a 6.513 6.513 0 0 1 -3.019 5.491 a 12.42 12.42 0 0 1 6.452 4.4 c -2.328 2.925 -5.912 4.809 -9.933 4.809 Z"
                                    ></path>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>
        </TotalWrapper>
    );
}

export default My;