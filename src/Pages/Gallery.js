import React from 'react'
import './Gallery.css';
import download1 from '../Pages/download.jpg';
import download2 from '../Pages/download2.jpg';
import download3 from '../Pages/download3.jpg';
import download4 from '../Pages/download4.jpg';
import download5 from '../Pages/download5.jpg';
import download6 from '../Pages/download6.jpg';
import download7 from '../Pages/download7.jpg';
import download8 from '../Pages/download8.jpg';


const Gallery = () => {
    return (
        <div className='display mt-5'>
            <div class="card mx-auto" style={{ width: '18rem' }}>
                <img src={download1} class="card-img-top" alt="" />
                <div class="card-body">
                    <p class="card-text"></p>
                </div>
            </div>
            <div class="card mx-auto" style={{ width: '18rem' }}>
                <img src={download2} class="card-img-top" alt="" />
                <div class="card-body">
                    <p class="card-text"></p>
                </div>
            </div>

            <div class="card mx-auto" style={{ width: '18rem' }}>
                <img src={download3} class="card-img-top" alt="" />
                <div class="card-body">
                    <p class="card-text"></p>
                </div>


                <div class="card mx-auto" style={{ width: '18rem' }}>
                    <img src={download4} class="card-img-top" alt="" />
                    <div class="card-body">
                        <p class="card-text"></p>
                    </div>
                </div>
            </div>
            <div class="card mx-auto" style={{ width: '18rem' }}>
                <img src={download5} class="card-img-top" alt="" />
                <div class="card-body">
                    <p class="card-text"></p>
                </div>
            </div>
            <div class="card mx-auto" style={{ width: '18rem' }}>
                <img src={download6} class="card-img-top" alt="" />
                <div class="card-body">
                    <p class="card-text"></p>
                </div>
            </div>
            <div class="card mx-auto" style={{ width: '18rem' }}>
                <img src={download7} class="card-img-top" alt="" />
                <div class="card-body">
                    <p class="card-text"></p>
                </div>
            </div>
            <div class="card mx-auto" style={{ width: '18rem' }}>
                <img src={download8} class="card-img-top" alt="" />
                <div class="card-body">
                    <p class="card-text"></p>
                </div>
            </div>
        </div >
    )

}
export default Gallery;