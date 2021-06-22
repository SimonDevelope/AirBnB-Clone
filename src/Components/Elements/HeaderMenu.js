import React from 'react';
import '../ElementsStyle/HeaderMenu.css';
import styled from 'styled-components';

function Menu () {
    const MiddleContentsWrapper = styled.div `
    text-align: center ;
    flex: 0 1 auto ;
    min-width: 348px ;
    padding: 0 24px ;
    text-align: center ;
    min-height: 48px ;
    
    `
    const ModifyIconStyle = {
        display: 'block',
        fill: 'none',
        height: '16px',
        width: '16px',
        stroke: 'currentColor',
        strokeWidth: '4',
        overflow: 'visible',
    }
    const SearchBarUnderStyle = {
        display: 'block',
        fill: 'none',
        height: '12px',
        width: '12px',
        stroke: 'currentcolor',
        strokeWidth: '5.33333',
        overflow: 'visible',
    }
    return(
        <MiddleContentsWrapper>
            <div className='Search-Bar-Under-Area'>
                <div 
                className='Search-Bar-Under-Cover-Area'
                role='search'
                aria-labelledby='LittleSearchLabel'
                >
                    <button
                    className='Search-Bar-Under-Cover-Area-B'
                    type='button'
                    >
                        <div className='Search-Bar-Under-List-Area'>검색 시작하기</div>
                        <div
                         className='Search-Bar-Under-Wrapper-Area'
                         data-icon='true'
                         >
                            <svg
                            viewBox='0 0 32 32'
                            xmlns='http://www.w3.org/2000/svg'
                            aria-hidden='true'
                            role='presentation'
                            style={SearchBarUnderStyle} 
                            >
                                <g fill='none'>
                                    <path
                                    d="m 13 24 c 6.07513 0 11 -4.92487 11 -11 c 0 -6.07513 -4.92487 -11 -11 -11 c -6.07513 0 -11 4.92487 -11 11 c 0 6.07513 4.92487 11 11 11 Z m 8 -3 l 9 9"
                                    ></path>
                                </g>
                            </svg>
                         </div>
                    </button>
                </div>
            </div>
            <div className='Total-Contents-area'>
                <div data-nosnippet='true'>
                    <div className='All-contents-area'>
                        <div>
                            <form 
                            className='Middle-contents-area'
                            action='/'
                            method='get'
                            role='search'
                            >
                                <fieldset className='Middle-menu-area'>
                                    <div 
                                    className='Middle-menu-wrapper'
                                    role='tablist'
                                    aria-label='무엇을 찾고 계신가요?'
                                    >
                                        <label for='search-block-tab-false-STAYS'>
                                            <input 
                                            type='radio'
                                            className='Common-input-style'
                                            role='tab'
                                            ></input>
                                            <span className='Common-span-style'>숙소</span>
                                        </label>
                                        <label for='search-block-tab-false-EXPERIENCES'>
                                            <input
                                            className='Common-input-style'
                                            type='radio'
                                            role='tab'
                                            ></input>
                                            <span className='Common-span-style'>체험</span>
                                        </label>
                                        <div className='Online-experience-outter-wrapper'>
                                            <a
                                            href='/'
                                            className='Online-experience-inner-wrapper'
                                            >
                                                <div className='Online-experience-inner-area'>온라인 체험</div>
                                            </a>
                                        </div>
                                    </div>
                                </fieldset>
                                <div 
                                className='Search-bar-area-wrapper'
                                data-panel-bounds='true'
                                >
                                    <div className='Search-bar-area-inner-wrapper'>
                                        <div className='Location-total-area'>
                                            <div>
                                                <div className='Location-outter-wrapper'>
                                                    <label 
                                                    className='Location-inner-wrapper'
                                                    for='bigsearch-query-detached-query'
                                                    >
                                                        <div className='Location-inner-contents-wrapper'>
                                                            <div className='Location-word-wrapper'>위치</div>
                                                            <input
                                                            className='Location-search-input-area'
                                                            placeholder='어디로 여행가세요?'
                                                            ></input>
                                                        </div>
                                                    </label>
                                                    <span className='Search-bar-Common-span-style'>추천 검색 결과를 확인하려면 계속 진행하세요.</span>
                                                    <span 
                                                    className='Search-bar-Common-span-style'
                                                    aria-atomic='true'
                                                    aria-live='polite'
                                                    role='status'
                                                    ></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Common-sector-partition'></div>
                                        <div className='Check-inNout-outter-area'>
                                            <div className='Check-in-total-area'>
                                                <div 
                                                className='Check-in-outter-wrapper'
                                                role='button'
                                                tabIndex='0'
                                                aria-expanded='false'
                                                >
                                                    <div className='Check-in-inner-wrapper'>
                                                        <div className='Checi-in-word-wrapper'>체크인</div>
                                                        <div className='Check-in-dateTime-input'>날짜 입력</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='Common-sector-partition'></div>
                                            <div className='check-out-total-area'>
                                                <div 
                                                className='Check-in-outter-wrapper'
                                                role='button'
                                                tabIndex='0'
                                                aria-expanded='false'
                                                >
                                                    <div className='Check-out-inner-wrapper'>
                                                        <div className='Check-out-word-area'>체크아웃</div>
                                                        <div className='Check-out-dateTime-input'>날짜 입력</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='Common-sector-partition'></div>
                                        <div class='People-Numb-check-total-area'>
                                            <div
                                            className='People-numb-check-outter-wrapper'
                                            role='button'
                                            tabIndex='0'
                                            aria-expanded='false'
                                            >
                                                <div className='People-numb-check-inner-wrapper'>
                                                    <div className='People-numb-word-wrapper'>인원</div>
                                                    <div className='Add-guest-numb-input-wrapper'>게스트 추가</div>
                                                </div>
                                            </div>
                                            <div className='Modify-icon-total-area'>
                                                <button
                                                className='Modify-icon-outter-wrapper'
                                                aria-expanded='false'
                                                type='button'
                                                >
                                                    <div className='Modify-icon-inner-wrapper'>
                                                        <div>
                                                            <svg
                                                            viewBox='0 0 32 32'
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            style={ModifyIconStyle}
                                                            aria-hidden='true'
                                                            role='presentation'
                                                            focusable='false'
                                                            >
                                                                <g fill='none'>
                                                                    <path
                                                                    d="m 13 24 c 6.07513 0 11 -4.92487 11 -11 c 0 -6.07513 -4.92487 -11 -11 -11 c -6.07513 0 -11 4.92487 -11 11 c 0 6.07513 4.92487 11 11 11 Z m 8 -3 l 9 9"
                                                                    ></path>
                                                                </g>
                                                            </svg>
                                                        </div>
                                                        <div className='Next-Modify-icon'>검색</div>
                                                    </div>    
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </MiddleContentsWrapper>
    );
}

export default Menu;