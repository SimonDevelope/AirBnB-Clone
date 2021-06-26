import React from 'react';
import '../ElementsStyle/GetIdea.css';

function Idea () {
    return(
        <div className='Common-Contents-style'>
            <div className='Idea-total-view-port-wrapper'>
                <div></div>
                <div></div>
                <div>
                    <div>
                        <div className='Idea-total-view-port-inner-wrapper'>
                            <a 
                            className='Idea-total-image-outter-wrapper'
                            href='/'
                            >
                                <div className='Idea-image-sparse-area'></div>
                                <div className='Idea-image-outter-area'>
                                    <div className='Idea-image-picture-outter-wrapper'>
                                        <picture>
                                            <source
                                            srcSet='https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440'
                                            ></source>
                                            <img
                                            className='Idea-image-attr'
                                            aria-hidden='true'
                                            alt='https://a0.muscache.com/im/pictures/f0343d6a-328c-4213-90a2-13ba3572a01f.jpg?im_q=medq&im_w=720'
                                            ></img>
                                        </picture>
                                    </div>
                                </div>
                                <div className='Idea-image-inner-word-outter-area'>
                                    <div className='First-word-Total-outter-wrapper'>
                                        <span className='First-word-total-inner-wrapper'>슬기로운 자연생활</span>
                                    </div>
                                    <div className='Second-word-Total-outter-wrapper'>
                                        <span className='Second-word-total-inner-wrapper'>에어비앤비가 엄선한 위시리스트</span>
                                    </div>
                                    <div className='Third-word-Total-outter-wrapper'>
                                        <button 
                                        type='button'
                                        className='Third-word-total-inner-wrapper'
                                        >
                                            <span className='Third-word-inner-wrapper'>여행 아이디어 얻기</span>
                                        </button>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Idea;