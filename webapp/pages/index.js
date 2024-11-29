// pages/index.js
import Link from 'next/link';
import { useEdrawData } from '../src/app/utils/EdrawDataContext';
import './home.css';
import {
    Box,
    Container,
    Grid,
    Button,
} from '../src/app/components/muiComponents';
import { splitAndHighlightMultiple } from '../src/app/utils/EdrawDataContext';


export default function Home() {
    const homePageData = useEdrawData('/api/home-page');

    if (!homePageData) return <div>Loading...</div>;
    const {
        Title,
        Description,
        WhyeDraw,
        WhyeDrawDesc,
        WhyeDrawSubHeading,
        Feature1,
    } = homePageData;
    // const titleParts = edrawTitle.split('e-Draw');
    const highlightWords = ['e-Draw'];
    const highlightWords1 = ['flexibility', 'scalability']
    return (
        <>
            <div className='container'>
                <div className='grid grid-cols-12 gap-4'>
                    <div class="col-span-6">
                        <div>
                            <h1>{splitAndHighlightMultiple(Title, highlightWords)}</h1>
                        </div>
                        <div className="font-18">
                            {Description}{splitAndHighlightMultiple(Description, highlightWords1)}
                        </div>
                        <div>
                            <button className='features-btn p-2 text-base rounded  mr-20' href='/features'>Explore Features</button>
                            <button className='free-btn p-2 text-base rounded ml-10 ' href='/auth/signup'>  Get Started For Free</button>

                        </div>
                    </div>
                    <div class="col-span-6">
                        <img src="/Vector2.png" alt="Vector 2" />
                        <img
                            className="eifu-gif"
                            src="/Vector3.png"
                            alt="Vector 3"
                        />
                    </div>
                </div>
                <div className='grey-bg'>
                    <div>  {Description}{splitAndHighlightMultiple(Description, highlightWords1)}</div>
                </div>
            </div>
            <div className='grey-bg'>
                <div className='container text-center'>
                    <div className='grid grid-cols-12 gap-4'>
                        <div class="col-span-6 text-center">
                            <img src="/vector4.png" alt="Vector 2" />
                        </div>
                        <div class="col-span-6" text-cente>
                            <h2>{WhyeDraw}</h2>
                            <hr className="hr"></hr>
                            <h3>{WhyeDrawSubHeading}</h3>
                            <p className="font-18">{WhyeDrawDesc}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='grey-card'>
                    <h2>Features</h2>
                    <hr className="Features-hr"></hr>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-4'>
                            <h4>Barcode Generation</h4>
                            <img src="/vector5.png" alt="Vector 2" />
                            <div className="features-text">
                                Built-in barcode creation with support for a variety
                                of formats ensures compliance and efficiency
                            </div>
                        </div>
                        <div className='col-span-4'>
                            <h4>Barcode Generation</h4>
                            <img src="/vector6.png" alt="Vector 2" />
                            <div className="features-text">
                                Built-in barcode creation with support for a variety
                                of formats ensures compliance and efficiency
                            </div>
                        </div>
                        <div className='col-span-4'>
                            <h4>Barcode Generation</h4>
                            <img
                                className="share-img"
                                src="/vector7.png"
                                alt="Vector 2"
                            />
                            <div className="features-text">
                                Built-in barcode creation with support for a variety
                                of formats ensures compliance and efficiency
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='container'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-7'>
                        <h2> {WhyeDraw}</h2>
                        <hr className="hr2"></hr>
                        <h4>{WhyeDrawSubHeading}</h4>
                        <p> {WhyeDrawDesc}</p>
                        <h4>{WhyeDrawSubHeading}</h4>
                        <p> {WhyeDrawDesc}</p>
                    </div>
                    <div className='col-span-4 text-center'>
                        <img src="/vector8.png" alt="Vector 2" />
                    </div>
                </div>
            </div>
            <div className='grey-bg'>
                <div className='container'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-5'>
                            <img src="/vector9.png" alt="Vector 2" />
                        </div>
                        <div className='col-span-7'>
                            <h2> {WhyeDraw}</h2>
                            <hr className="hr2"></hr>
                            <h4>{WhyeDrawSubHeading}</h4>
                            <p> {WhyeDrawDesc}</p>
                            <h4>{WhyeDrawSubHeading}</h4>
                            <p> {WhyeDrawDesc}</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='container'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-7'>
                        <h2> {WhyeDraw}</h2>
                        <hr className="hr2"></hr>
                        <h4>{WhyeDrawSubHeading}</h4>
                        <p> {WhyeDrawDesc}</p>
                        <h4>{WhyeDrawSubHeading}</h4>
                        <p> {WhyeDrawDesc}</p>
                    </div>
                    <div className='col-span-4 text-center'>
                        <img src="/vector10.png" alt="Vector 2" />
                    </div>
                </div>
            </div>
            <div className='grey-bg'>
                <div className='grid-cols-1'></div>
            </div>
            <div className='grey-bg'>
                <h2>Benefits</h2>
                <hr className="Features-hr"></hr>
                <div className='grid grid-cols-12'>
                    <div className='col-span-6'>
                        <p>
                            Cloud Collaboration Multiple users can work on the
                            same document in real-time, with full version
                            control. On-Premise Control Maintain full control
                            over your data with on-premise hosting, meeting the
                            needs of high-security environments like life
                            sciences and pharmaceuticals.
                        </p>
                    </div>
                    <div className='col-span-6'>
                        <img src="/vector11.png" alt="Vector 2" />
                    </div>
                    <div className='col-span-6'>

                        <img src="/vector11.png" alt="Vector 2" />
                    </div>
                    <div className='col-span-6'>
                        <p>
                            Cloud Collaboration Multiple users can work on the
                            same document in real-time, with full version
                            control. On-Premise Control Maintain full control
                            over your data with on-premise hosting, meeting the
                            needs of high-security environments like life
                            sciences and pharmaceuticals.
                        </p>
                    </div>
                    <div className='col-span-6'>
                        <p>
                            Cloud Collaboration Multiple users can work on the
                            same document in real-time, with full version
                            control. On-Premise Control Maintain full control
                            over your data with on-premise hosting, meeting the
                            needs of high-security environments like life
                            sciences and pharmaceuticals.
                        </p>
                    </div>
                    <div className='col-span-6'>
                        <img src="/vector11.png" alt="Vector 2" />
                    </div>

                </div>
            </div>
        </>
    );
}
