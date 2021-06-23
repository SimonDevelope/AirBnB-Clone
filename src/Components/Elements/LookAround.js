import React from 'react';
import '../ElementsStyle/LookAround.css';

function Look() {
    const SeoulImageAttr = {
        objectFit: 'cover',
        verticalAlign: 'bottom',
    }
    return(
        <div className='Common-Contents-style'>
            <div className='All-contents-outter-wrapper'>
                <div></div>
                <div>
                    <div className='All-contents-inner-wrapper'>
                        <div className='Contents-viewer-inner-area'>
                            <div className='Contents-viewer-area'>
                                <section>
                                    <div className='Word-viewer-outter-wrapper'>
                                        <div className='Word-viewer-inner-wrapper'>
                                            <div className='Word-viewer-inner-wrapper-A'>
                                                <h1 tabIndex='-1' className='Word-printing-area-A'>
                                                    <div className='Word-printing-outter-wrapper-S'>
                                                        <span className='Look_expepa'>가까운 여행지 둘러보기</span>
                                                    </div>
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='Real-title-outter-wrapper'>
                                        <div className='Real-title-inner-wrapper'>
                                            <h1 
                                            tabIndex='-1'
                                            className='Title-word-outter-wrapper'
                                            >
                                                <div className='Title-word-inner-sector-area'>
                                                    <span className='Title-word-inner-printing-attr'>
                                                        가까운 여행지&nbsp;둘러보기
                                                    </span>
                                                </div>
                                            </h1>
                                        </div>
                                    </div>
                                </section>
                                <div className='Contents-area-wrapper'>
                                    <div className='Contents-area-sectore-partition-wrapper'>
                                        <div className='Small-contents-common-attr'>
                                            <a 
                                            href='/' 
                                            className='Seoul-sector-Total-wrapper'
                                            >
                                                <span className='Seoul-image-outter-wrapper'>
                                                    <div className='Seoul-image-inner-wrapper'>
                                                        <picture>
                                                            <source
                                                            srcSet='https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=240'
                                                            ></source>
                                                            <img
                                                            className='Seoul-image-tag-Attr'
                                                            aria-hidden='true'
                                                            src='https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=720'
                                                            style={SeoulImageAttr}
                                                            alt='https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=720'
                                                            ></img>
                                                        </picture>
                                                        <div className='Seoul-Cata-blank-area'></div>
                                                    </div>
                                                </span>
                                                <span className='Seoul-word-outter-wrapper'>
                                                    <span className='Seoul-word-common-attr'>
                                                        <b>서울</b>
                                                    </span>
                                                    <span className='Seoul-word-common-attr'>차로 15분 거리</span>
                                                </span>
                                            </a>
                                        </div>
                                        <div className='Small-contents-common-attr'>
                                            <a
                                            className='Busan-area-total-outter-wrapper'
                                            href='/'
                                            >
                                                <span className='Busan-image-outter-wrapper'>
                                                    <div className='Busan-image-inner-wrapper'>
                                                        <picture>
                                                            <source
                                                            srcSet='https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=240'
                                                            ></source>
                                                            <img
                                                            className='Busan-image-attr'
                                                            aria-hidden='true'
                                                            alt='https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=240'
                                                            src='https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=720'
                                                            ></img>
                                                        </picture>
                                                        <div className='Next-to-Busan-image'></div>
                                                    </div>
                                                </span>
                                                <span className='Busan-word-area-outter-wrapper'>
                                                    <span className='Busan-word-common-attr'>
                                                        <b>부산</b>
                                                    </span>
                                                    <span className='Busan-word-common-attr'>차로 5시간 거리</span>
                                                </span>
                                            </a>
                                        </div>
                                        <div className='Small-contents-common-attr'>
                                            <a
                                            className='Yang-yang-area-outter-wrapper'
                                            href='/'
                                            >
                                                <span className='Yang-yang-Image-area-outter-wrapper'>
                                                    <div className='Yang-yang-Image-area-inner-wrapper'>
                                                        <picture>
                                                            <source
                                                            srcSet='https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&im_w=240'
                                                            ></source>
                                                            <img
                                                            className='Yang-yang-image-attr'
                                                            aria-hidden='true'
                                                            src='https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&im_w=720'
                                                            alt='https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&im_w=720'
                                                            ></img>
                                                        </picture>
                                                        <div className='Next-to-yang-yang-image'></div>
                                                    </div>
                                                </span>
                                                <span className='Yang-yang-word-area-outter-wrapper'>
                                                    <span className='Yang-yang-word-common-attr'>
                                                        <b>양양군</b>
                                                    </span>
                                                    <span className='Yang-yang-word-common-attr'>차로 2.5시간 거리</span>
                                                </span>
                                            </a>
                                        </div>
                                        <div className='Small-contents-common-attr'>
                                            <a
                                            className='Sokcho-Total-area-outter-wrapper'
                                            href='/'
                                            >
                                                <span className='Sokcho-image-outter-wrapper'>
                                                    <div className='Sokcho-image-inner-wrapper'>
                                                        <picture>
                                                            <source
                                                            srcSet='https://a0.muscache.com/im/pictures/52e8083e-2de2-446d-a860-534eab250541.jpg?im_q=medq&im_w=240'
                                                            ></source>
                                                            <img
                                                            src='https://a0.muscache.com/im/pictures/52e8083e-2de2-446d-a860-534eab250541.jpg?im_q=medq&im_w=720'
                                                            className='Sokcho-img-tag-style'
                                                            aria-hidden='true'
                                                            alt='https://a0.muscache.com/im/pictures/52e8083e-2de2-446d-a860-534eab250541.jpg?im_q=medq&im_w=720'
                                                            ></img>
                                                        </picture>
                                                        <div className='Next-to-Sokcho-attr'></div>
                                                    </div>
                                                </span>
                                                <span className='Sokcho-word-area-outter-wrapper'>
                                                    <span className='Sokcho-word-common-attr'>
                                                        <b>속초시</b>
                                                    </span>
                                                    <span className='Sokcho-word-common-attr'>차로 2.5시간 거리</span>
                                                </span>
                                            </a>
                                        </div>
                                        <div className='Small-contents-common-attr'>
                                            <a
                                            className='Jeju-area-outter-wrapper'
                                            href='/'
                                            >
                                                <span className='Jeju-image-outter-wrapper'>
                                                    <div className='Jeju-image-inner-wrapper'>
                                                        <picture>
                                                            <source
                                                            srcSet='https://a0.muscache.com/im/pictures/20e74de0-0eb8-4fca-afb8-b111875acdf5.jpg?im_q=medq&im_w=240'
                                                            ></source>
                                                            <img
                                                            className='Jeju-image-attr'
                                                            aria-hidden='true'
                                                            src='https://a0.muscache.com/im/pictures/20e74de0-0eb8-4fca-afb8-b111875acdf5.jpg?im_q=medq&im_w=720'
                                                            alt='https://a0.muscache.com/im/pictures/20e74de0-0eb8-4fca-afb8-b111875acdf5.jpg?im_q=medq&im_w=720'
                                                            ></img>
                                                        </picture>
                                                        <div className='Next-to-jeju-attr'></div>
                                                    </div>
                                                </span>
                                                <span className='Jeju-word-outter-wrapper'>
                                                    <span className='Jeju-word-common-attr'>
                                                        <b>제주도(Jeju)</b>
                                                    </span>
                                                    <span className='Jeju-word-common-attr'>차로 7.5시간 거리</span>
                                                </span>
                                            </a>
                                        </div>
                                        <div className='Small-contents-common-attr'>
                                            <a
                                            href='/'
                                            className='Wanju-Total-area-outter-wrapper'
                                            >
                                                <span className='Wanju-image-outter-wrapper'>
                                                    <div className='Wanju-image-inner-wrapper'>
                                                        <picture>
                                                            <source
                                                            srcSet='https://a0.muscache.com/im/pictures/e639b7ab-aee3-48ee-9743-216684a51319.jpg?im_q=medq&im_w=240'
                                                            ></source>
                                                            <img
                                                            src='https://a0.muscache.com/im/pictures/e639b7ab-aee3-48ee-9743-216684a51319.jpg?im_q=medq&im_w=720'
                                                            aria-hidden='true'
                                                            alt='https://a0.muscache.com/im/pictures/e639b7ab-aee3-48ee-9743-216684a51319.jpg?im_q=medq&im_w=720'
                                                            className='Wanju-image-attr'
                                                            ></img>
                                                        </picture>
                                                        <div className='Next-to-wanju-attr'></div>
                                                    </div>
                                                </span>
                                                <span className='Wanju-word-outter-wrapper'>
                                                    <span className='Wanju-word-common-style'>
                                                        <b>완주군</b>
                                                    </span>
                                                    <span className='Wanju-word-common-style'>차로 3시간 거리</span>
                                                </span>
                                            </a>
                                        </div>
                                        <div className='Small-contents-common-attr'>
                                            <a 
                                            className='Jeonju-Total-area-outter-wrapper'
                                            href='/'
                                            >
                                                <span className='Jeon-ju-image-area-outter-wrapper'>
                                                    <div className='Jeon-ju-image-area-inner-wrapper'>
                                                        <picture>
                                                            <source
                                                            srcSet='https://a0.muscache.com/im/pictures/ca3737ef-0faf-46ba-b055-b4a2d99e2cea.jpg?im_q=medq&im_w=240'
                                                            ></source>
                                                            <img
                                                            src='https://a0.muscache.com/im/pictures/ca3737ef-0faf-46ba-b055-b4a2d99e2cea.jpg?im_q=medq&im_w=720'
                                                            aria-hidden='true'
                                                            alt='https://a0.muscache.com/im/pictures/ca3737ef-0faf-46ba-b055-b4a2d99e2cea.jpg?im_q=medq&im_w=720'
                                                            className='Jeon-ju-image-attr'
                                                            ></img>
                                                        </picture>
                                                        <div className='Next-to-jeon-ju-attr'></div>
                                                    </div>
                                                </span>
                                                <span className='Jeon-ju-word-area-outter-wrapper'>
                                                    <span className='Jeon-ju-word-common-attr'>
                                                        <b>전주시</b>
                                                    </span>
                                                    <span className='Jeon-ju-word-common-attr'>차로 3시간 거리</span>
                                                </span>
                                            </a>
                                        </div>
                                        <div className='Small-contents-common-attr'>
                                            <a
                                            className='Goseong-total-area-outter-wrapper'
                                            href='/'
                                            >
                                                <span className='Goseong-image-outter-wrapper'>
                                                    <div className='Goseong-image-inner-wrapper'>
                                                        <picture>
                                                            <source
                                                            srcSet='https://a0.muscache.com/im/pictures/585d1e53-e2e1-4baf-a34e-36301dd1e2da.jpg?im_q=medq&im_w=240'
                                                            ></source>
                                                            <img
                                                            className='Goseong-image-attr'
                                                            src='https://a0.muscache.com/im/pictures/585d1e53-e2e1-4baf-a34e-36301dd1e2da.jpg?im_q=medq&im_w=720'
                                                            aria-hidden='true'
                                                            alt='https://a0.muscache.com/im/pictures/585d1e53-e2e1-4baf-a34e-36301dd1e2da.jpg?im_q=medq&im_w=720'
                                                            ></img>
                                                        </picture>
                                                        <div className='Next-to-Goseong-attr'></div>
                                                    </div>
                                                </span>
                                                <span className='Goseong-word-outter-wrapper'>
                                                    <span className='Goseong-word-common-attr'>
                                                        <b>고성군</b>
                                                    </span>
                                                    <span className='Goseong-word-common-attr'>차로 3시간 거리</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Look;