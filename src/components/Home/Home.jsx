import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'
import { useSliderContext } from '../../context/Slider_context';


const Home = () => {
    const { initialWatch, straps } = useSliderContext()
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", }}>


            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }} className='text-white' >
                {
                    initialWatch.map((item, index) => <div key={index} className='watchContainer' >
                        <img src={item[0][0]} alt="" className='img1 w-[90%] h-[70%] top-[50%] translate-y-[-50%] left-[4%] absolute' />
                        <img src={item[1][0]} alt="" className='img2 w-[98%] top-[49.7%] translate-y-[-50%] left-[0.2%] absolute' />

                        <img src={item[2][0]} alt="" className='img3 w-[48%] top-[44%] translate-y-[-50%] left-[24%] absolute' />
                        {/* <h3>Size : {item[3]}</h3> */}
                        {/* <Link to={`/configure/${index}`}style={{ position: "absolute", bottom: "10px", left: "50%" }}>Configure watch</Link> */}
                        <Link to={`/configure/${index}`} className='absolute bottom-3 left-[50%] translate-x-[-50%] bg-white text-black py-1 px-3 rounded-full' >Configure watch</Link>

                    </div>)
                }

            </div>
        </div>
    );
};

export default Home;
