import React, { useEffect, useState } from 'react';
import './configure.css'
import { useSliderContext } from '../../context/Slider_context';
import { Link, useParams } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';



const Configure = () => {

    var settings = {
        // dots: true,
        infinite: true,
        arrows: true,
        slidesToShow: 16,
        slidesToScroll: 16,
        speed: 500,
        centerPadding: '50px',
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    arrows: true,
                    slidesToShow: 16,
                    slidesToScroll: 16,
                    infinite: false,

                }
            },
            {
                breakpoint: 1280,
                settings: {
                    arrows: true,
                    slidesToShow: 15,
                    slidesToScroll: 15,
                    infinite: false,

                }
            },
            {
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    slidesToShow: 10,
                    slidesToScroll: 10,
                    infinite: false,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    slidesToShow: 8,
                    slidesToScroll: 8,
                    infinite: false,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    arrows: true,
                    slidesToShow: 8,
                    slidesToScroll: 8
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            }
        ]
    };


    const { size, setSize, straps, dialsBAGUETTE, dialsBRUSHED, dialsROMAN, bazzels, initialWatch, activator, activeWatch, bazzelsActivator, dialsActivator, dials, extraStraps, extraStrapsActivator, extraStrap,
        setExtraStrap, selectedSize, setSelectedSize, extraStrapsSelector, selectedExtraStrapsIndex, setActiveNavigetor2, activeNavigetor2 } = useSliderContext()

    const { selected } = useParams()

    // --------------------------------------------------------------------------------initial style white page load---------------------------------------------------------------

    useEffect(() => {
        const navigator2Child = document.querySelectorAll(".nanigator2 div")[0]
        navigator2Child.style.background = "black"
        navigator2Child.style.color = "white"
        navigator2Child.style.border = "solid white 1px"
        document.getElementsByClassName('textContainer2')[selected].style.display = 'block'

        document.getElementsByClassName('strapsNavigators')[0].style.display = "flex"
        document.getElementsByClassName('sliderContainer')[0].style.display = "flex"

        bazzels.map((i, index) => {
            document.getElementsByClassName('imgContainer2')[index].style.left = `${index * 200}%`

        })
        dials.map((i, index) => {
            document.getElementsByClassName('imgContainer3')[index].style.left = `${index * 200}%`

        })
        extraStraps.map((i, index) => {
            document.getElementsByClassName('imgContainer4')[index].style.left = `${index * 200}%`

        })



    }, [])

    // window resize functionality ---------------------------------------------------
    useEffect(() => {
        console.log(activeNavigetor2, "active navigator2")

    }, [activeNavigetor2])


    useEffect(() => {
        // Update the windowWidth state when the window is resized
        const handleResize = () => {
            const navigator2Childs = document.querySelectorAll(".nanigator2 div")
            navigator2Childs[activeNavigetor2].click()
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    // EPIA = element postion in array 
    const handleNavigator = (className, e, navigatorIndex, imgContainerclassName, EPIA, loopProperty) => {
        const innerwidth = window.innerWidth
        setActiveNavigetor2(EPIA)


        const navigator2Childs = document.querySelectorAll(".nanigator2 div")
        for (let div of navigator2Childs) {
            // div.style.transform = "scale(1) translateY(0px) "
            // div.style.borderTop = ".5px"
            div.style.background = "white"
            div.style.color = "black"
            div.style.border = "1px solid white"
        }

        e.target.style.background = "black"
        e.target.style.color = "white"
        e.target.style.border = "1px solid white"


        document.getElementsByClassName("dialsNavigators")[0].style.display = "none"
        document.getElementsByClassName("dialsNavigators")[1].style.display = "none"
        document.getElementsByClassName("bezzelsNavigators")[0].style.display = "none"
        document.getElementsByClassName("bezzelsNavigators")[1].style.display = "none"
        document.getElementsByClassName("strapsNavigators")[0].style.display = "none"
        document.getElementsByClassName("extraStrapsNavigator")[0].style.display = "none"

        if (className == "dialsNavigators" && (innerwidth < 1024)) {

            document.getElementsByClassName("dialsNavigators")[1].style.display = "block"


        }
        if (className == "dialsNavigators" && (innerwidth >= 1024)) {

            document.getElementsByClassName("dialsNavigators")[0].style.display = "flex"

        }
        // if (className != "dialsNavigators") {
        //     document.getElementsByClassName(className)[0].style.display = "flex"

        // }
        // if (className != "bezzelsNavigators") {
        //     document.getElementsByClassName(className)[0].style.display = "flex"

        // }

        // /--------------------------------------------------------------------------------------------

        if (className == "bezzelsNavigators" && (innerwidth < 1024)) {
            // window.alert("lessw")
            document.getElementsByClassName("bezzelsNavigators")[1].style.display = "block"

        }
        if (className == "bezzelsNavigators" && (innerwidth >= 1024)) {
            // window.alert("gretter")
            document.getElementsByClassName("bezzelsNavigators")[0].style.display = "flex"

        }

        if ((className != "dialsNavigators") && (className != "bezzelsNavigators")) {

            document.getElementsByClassName(className)[0].style.display = "flex"

        }
        // /--------------------------------------------------------------------------------------------

        const sliderContainer = document.getElementsByClassName('sliderContainer')
        for (let i of sliderContainer) {
            i.style.display = 'none'
        }
        sliderContainer[navigatorIndex].style.display = "block"
        // now change in moveable part according to previous state like change bazzels in bazzels slider based on other sliders bazzels postion 
        const activeElement = document.getElementsByClassName(imgContainerclassName)[initialWatch[activeWatch][EPIA][3]]
        activeElement.style.left = "0%"
        const greaterThan = []
        const lessThan = []
        loopProperty.map((i, index) => {
            // console.log(index,'inddex')
            if (index < initialWatch[activeWatch][EPIA][3]) {
                lessThan.push(index)

            }
            if (index > initialWatch[activeWatch][EPIA][3]) {

                greaterThan.push(index)

            }
        })
        console.log(greaterThan, "greater than")
        greaterThan.map((i, index) => {
            document.getElementsByClassName(imgContainerclassName)[i].style.left = `${(index + 1) * 200}%`
            document.getElementsByClassName(imgContainerclassName)[i].style.transition = `all 1s`

        })
        lessThan.map(i => {
            document.getElementsByClassName(imgContainerclassName)[i].style.left = `-${(lessThan.length - i) * 110}%`
            document.getElementsByClassName(imgContainerclassName)[i].style.transition = `all 1s`

        })



    }

    //  ---------------------------------- -----------------------------initial positioning  on page load -------------------------------------------------------------
    useEffect(() => {
        const initSyle = () => {
            document.getElementsByClassName('textContainer')[selected].style.display = 'block'
            if (selected == 0) {
                document.getElementsByClassName('imgContainer')[0].style.left = `${0}%`
                document.getElementsByClassName('imgContainer')[1].style.left = `${200}%`

            } else {
                document.getElementsByClassName('imgContainer')[0].style.left = `${-200}%`
                document.getElementsByClassName('imgContainer')[1].style.left = `${0}%`

            }
            // initialWatch.map((i, index) => {
            //     document.getElementsByClassName('imgContainer')[index].style.left = `${index * 200}%`

            // })

        }
        initSyle()

    }, [])

    // initial default checked setup white page load 
    useEffect(() => {
        const inputs = document.querySelectorAll('input')
        console.log(inputs, "inputs")
        selectedExtraStrapsIndex.map((index) => {
            inputs[index].checked = true
        })


    }, [])





    return (
        <div >
            <div className='absolute top-24 md:top-10 z-[9999] '>

                <Link className='pl-5 md:pl-32 pt-5 text-base cursor-pointer hover:underline  underline-offset-1 text-white ' to='/checkout'>Checkout</Link>
            </div>



            <div className="flex gap-x-2 items-center absolute top-24 md:top-10 right-2 md:right-14 z-[9999]">
                <h1 className={`text-sm text-white`}>
                    Size:
                </h1>
                <div className="text-sm rounded">
                    <button onClick={() => setSelectedSize('41')}
                        className={`px-3 py-1 
                        
                       
                    ${(selectedSize === '41') ? 'bg-white text-black border border-gray-400' : 'border border-transparent bg-black text-white'} 
                            `}
                    >
                        41</button>
                    <button onClick={() => setSelectedSize('36')} className={`px-3 py-1     ${(selectedSize === '36') ? 'bg-white text-black border border-gray-400' : 'border border-transparent bg-black text-white'}`}>36</button>
                </div>

            </div>








            {/*--------------------------------------------------------------------slider 1 straps part start --------------------------------------------------------------------------- */}

            <div className='sliderContainer sliderContainer1'>

                <div className='slider1 slider flex flex-col md:flex-row '>
                    <div className='itemContainer'>
                        {
                            initialWatch.map((item, index) => <div key={index}>
                                {/* text container */}
                                <div className=' hidden mid-sm:block'>
                                    <div className='textContainer  text-white'>
                                        <h3>Model</h3>
                                        <h3 className='text-2xl'>{item[0][1]}</h3>
                                        <h3 >{item[0][1]} {selectedSize} mm</h3>
                                        <h3 className=''>{initialWatch[activeWatch]?.[1][1]}</h3>
                                        <h3 className=''>{initialWatch[activeWatch]?.[2][1]}</h3>
                                        <h3 className=''>Watch Price : £{(((selectedSize == 41) ? initialWatch[activeWatch][0][2] : (initialWatch[activeWatch][0][2] - 750)) + initialWatch[activeWatch][1][2] + ((selectedSize == 41) ? initialWatch[activeWatch][2][2] : ((initialWatch[activeWatch][2][2] - 500) > 0) ? (initialWatch[activeWatch]?.[2][2] - 500) : 0))}</h3>

                                    </div>
                                </div>

                                <div className='imgContainer'>

                                    <img src={item[0][0]} alt="" className='img1 w-[90%] h-[70%] top-[50%] translate-y-[-50%] left-[4%] absolute' />
                                    <img src={item[1][0]} alt="" className='img2 w-[98%] top-[49.7%] translate-y-[-50%] left-[0.2%] absolute' />
                                    <img src={item[2][0]} alt="" className='img3 w-[48%] top-[44%] translate-y-[-50%] left-[24%] absolute' />


                                </div>

                            </div>)
                        }

                    </div>
                    {/* text contianer for small device  */}
                    <div className=' overflow-hidden mid-sm:hidden text-white'>
                        {
                            initialWatch.map((item, index) => <div key={index} className='textContainer2'>
                                <h3>Models</h3>
                                <h3 className='text-2xl'>{item[0][1]}</h3>
                                {/* <h3 className=''>{initialWatch[activeWatch]?.[1][1]}</h3>
                                <h3 className='text-2xl'>{initialWatch[activeWatch]?.[2][1]}</h3> */}
                                <h3 className=''>Watch Price : £ {(((selectedSize == 41) ? initialWatch[activeWatch][0][2] : (initialWatch[activeWatch][0][2] - 750)) + initialWatch[activeWatch][1][2] + ((selectedSize == 41) ? initialWatch[activeWatch][2][2] : ((initialWatch[activeWatch][2][2] - 500) > 0) ? (initialWatch[activeWatch]?.[2][2] - 500) : 0))}</h3>

                            </div>)
                        }

                    </div>

                </div>



            </div>
            {/*----------------------------------------------------------------slider 1 straps part end  --------------------------- --------------------------------------------- */}

            {/* --------------------------------------------------------------------slider two bezzels --------------------------------------------------------------  */}



            <div className='sliderContainer sliderContainer2'>
                <div className='slider1 slider flex flex-col md:flex-row ' >


                    <div className='itemContainer itemContainer2'>

                        {<img src={initialWatch[activeWatch]?.[0][0]} alt="face" className='img1 w-[90%] h-[70%] top-[50%] translate-y-[-50%] left-[4%] absolute' />}

                        {<img src={initialWatch[activeWatch]?.[1][0]} alt="belt" className='img2 w-[98%] top-[49.7%] translate-y-[-50%] left-[0.2%] absolute' />}
                        {bazzels.map((item, index) =>
                            <div key={index} className='imgContainer2'>

                                {<img src={item[0]} alt="face" className='img3 w-[70.5%] top-[44.3%] translate-y-[-50%] left-[36.9%] absolute' />}
                            </div>)}

                    </div>
                    <div className='text-white'>
                        {/* <h3 className=''>{initialWatch[activeWatch]?.[0][1]}</h3>
                        <h3 className=''>{initialWatch[activeWatch]?.[0][2]}</h3>
                        <h3 className=''>{initialWatch[activeWatch]?.[1][1]}</h3>
                        <h3 className=''>{initialWatch[activeWatch]?.[1][2]}</h3> */}
                        <h3>Bezzels</h3>
                        <h3 className='text-2xl'>{initialWatch[activeWatch]?.[2][1]}</h3>
                        {/* <Link to='/checkout' className='text-white'>checkout</Link> */}
                        {/* <h3 className=''>{initialWatch[activeWatch]?.[2][2]}</h3> */}
                        <h3 className=''>Watch Price : £{(((selectedSize == 41) ? initialWatch[activeWatch][0][2] : (initialWatch[activeWatch][0][2] - 750)) + initialWatch[activeWatch][1][2] + ((selectedSize == 41) ? initialWatch[activeWatch][2][2] : ((initialWatch[activeWatch][2][2] - 500) > 0) ? (initialWatch[activeWatch]?.[2][2] - 500) : 0))}</h3>
                    </div>


                </div>


            </div>
            {/* ---------------------------------------------------------------------slider dials three ---------------------------------------------------------------- */}
            <div className='sliderContainer sliderContainer2'>
                <div className='slider1 slider flex flex-col md:flex-row ' >
                    <div className='itemContainer itemContainer2'>
                        {<img src={initialWatch[activeWatch]?.[0][0]} alt="face" className='img1 w-[90%] h-[70%] top-[50%] translate-y-[-50%] left-[4%] absolute' />}

                        {<img src={initialWatch[activeWatch]?.[2][0]} alt="belt" className='img3 w-[48%] top-[44%] translate-y-[-50%] left-[24%] absolute z-30' />}
                        {dials.map((item, index) =>
                            <div key={index} className='imgContainer imgContainer3'>

                                {<img src={item[0]} alt="face" className='img2 w-[98%] top-[49.60%] translate-y-[-50%] left-[48.8%] translate-x-[-50%] absolute' />}
                            </div>)}

                    </div>
                    <div className='text-white'>
                        <h3>Dials</h3>
                        {/* <h3 className=''>{initialWatch[activeWatch]?.[0][1]}</h3>
                        <h3 className=''>{initialWatch[activeWatch]?.[0][2]}</h3> */}
                        <h3 className='text-2xl'>{initialWatch[activeWatch]?.[1][1]}</h3>
                        {/* <h3 className=''>{initialWatch[activeWatch]?.[1][2]}</h3>
                        <h3 className=''>{initialWatch[activeWatch]?.[2][1]}</h3>
                        <h3 className=''>{initialWatch[activeWatch]?.[2][2]}</h3> */}
                        <h3 className=''>Watch Price : £{(((selectedSize == 41) ? initialWatch[activeWatch][0][2] : (initialWatch[activeWatch][0][2] - 750)) + initialWatch[activeWatch][1][2] + ((selectedSize == 41) ? initialWatch[activeWatch][2][2] : ((initialWatch[activeWatch][2][2] - 500) > 0) ? (initialWatch[activeWatch]?.[2][2] - 500) : 0))}</h3>
                        {/* <Link to='/checkout' className='text-white'>checkout</Link> */}
                    </div>

                </div>


            </div>

            {/* ---------------------------------------------------------------slider extra straps  ---------------------------------------------------------------- */}
            <div className='sliderContainer sliderContainer2'>
                <div className='slider1 slider flex flex-col md:flex-row ' >
                    <div className='itemContainer itemContainer2'>
                        {<img src={initialWatch[activeWatch]?.[1][0]} alt="face" className='img2 w-[98%] top-[49.60%] translate-y-[-50%] left-[48.9%] translate-x-[-50%] absolute' />}

                        {<img src={initialWatch[activeWatch]?.[2][0]} alt="belt" className='img3 w-[48%] top-[44%] translate-y-[-50%] left-[24%] absolute z-30' />}
                        {extraStraps.map((item, index) =>
                            <div key={index} className='imgContainer imgContainer4' >
                                {/* left-[-2%] */}

                                {<img src={item[0]} alt="face" className='img1 w-[100%] left-[2%] h-[70%] top-[50%] translate-y-[-50%] absolute' />}
                            </div>)}

                    </div>
                    <div className='text-white'>
                        {/* <h3 className=''>{initialWatch[activeWatch]?.[0][1]}</h3>
                        <h3 className=''>{initialWatch[activeWatch]?.[0][2]}</h3>
                        <h3 className=''>{initialWatch[activeWatch]?.[1][1]}</h3>
                        <h3 className=''>{initialWatch[activeWatch]?.[1][2]}</h3>
                        <h3 className=''>{initialWatch[activeWatch]?.[2][1]}</h3>
                        <h3 className=''>{initialWatch[activeWatch]?.[2][2]}</h3> */}
                        <h3>Rubber Straps</h3>
                        <h3 className='text-2xl '>Choose additional straps</h3>
                        <h3 className='text-2xl'>(+£500)</h3>
                        {/* <h2>select</h2>
                        <Link to='/checkout' className='text-white'>checkout</Link> */}
                    </div>

                </div>


            </div>


            {/*--------------------------------------------navigator parts start   --------------------------------------------- */}
            <div className='navigatorContainers'>
                <div className='navigator1 my-3'>
                    <div className='dialsNavigators  items-center justify-center gap-x-4 w-full overflow-hidden hidden' >
                        {/* ------------------------------------------- dial naivagor start ---------------------------------------- */}
                        {/* <span>Baguette</span> */}
                        <div className='flex'>

                            {
                                dialsBAGUETTE.map((dial, index) => <img key={index} className=' lg:w-10 lg:h-10 mid-xl:w-14 mid-xl:h-14 object-cover object-center' src={dial[0]} onClick={() => dialsActivator(index)} />)
                               
                            }

                        </div>

                        {/* <span>BRUSHED</span> */}
                        <div className='flex'>
                            {
                                dialsBRUSHED.map((dial, index) => <img key={index} className=' lg:w-10 lg:h-10 mid-xl:w-14 mid-xl:h-14 object-cover object-center' src={dial[0]} onClick={() => dialsActivator(dialsBAGUETTE.length + index)} />)
                            }
                        </div>
                        {/* <span>ROMAN</span> */}
                        <div className='flex'>
                            {
                                dialsROMAN.map((dial, index) => <img key={index} className=' lg:w-10 lg:h-10 mid-xl:w-14 mid-xl:h-14 object-cover object-center' src={dial[0]} onClick={() => dialsActivator(dialsBAGUETTE.length + dialsROMAN.length + index)} />)
                            }
                        </div>
                      


                    </div>


                    <div >
                        <Slider  {...settings} className='dialsNavigators w-full hidden'>
                            {
                                dials?.map((dial, index) => {
                                    // const { img, filename } = image;
                                    return (
                                        <div key={index} className='  rounded '>
                                            <img key={index} className='w-full xl:h-full  cursor-pointer ' src={dial[0]} onClick={() => dialsActivator(index)} />
                                            {/* <img src={img} alt="dial image" className=" w-full xl:h-full  cursor-pointer" 
                                        onClick={() => { handleDialClick(filename) }} /> */}
                                            {/* {/ <h6 className='text-xs text-black bg-transparent text-center my-2 hidden sm:block'>{name}</h6> /} */}
                                        </div>
                                    )
                                }
                                )
                            }

                        </Slider>

                    </div>

                      {/* ------------------------------------------- dial navigator end------------------------------------------ */}
                      {/* ------------------------------------------- bezzels navigator start------------------------------------------ */}

                    <div className='bezzelsNavigators  w-full overflow-hidden hidden justify-center gap-x-2'>
                        {
                            bazzels.map((dial, index) => <img key={index} className='w-12 lg:w-12 lg:h-12 mid-xl:w-14 mid-xl:h-14 object-cover object-center' src={dial[0]} onClick={() => bazzelsActivator(index)} />)
                            // <div key={index} className='imgNavigator'></div>
                        }


                    </div>
                   
                    <div >
                        <Slider  {...settings} className='bezzelsNavigators w-full hidden '>
                            {
                                bazzels?.map((dial, index) => {
                                    // const { img, filename } = image;
                                    return (
                                        <div key={index} className='  rounded '>
                                            <img key={index} className='w-full xl:h-full  cursor-pointer ' src={dial[0]} onClick={() => bazzelsActivator(index)} />
                                            {/* <img src={img} alt="dial image" className=" w-full xl:h-full  cursor-pointer" 
                                        onClick={() => { handleDialClick(filename) }} /> */}
                                            {/* {/ <h6 className='text-xs text-black bg-transparent text-center my-2 hidden sm:block'>{name}</h6> /} */}
                                        </div>
                                    )
                                }
                                )
                            }

                        </Slider>

                    </div>
                    {/* -------------------------------------------------------- bezzels navigator end-------------------------------- */}
                    {/* -------------------------------------------------------- straps navigator start-------------------------------- */}


                    <div className='strapsNavigators align-middle justify-center w-full overflow-hidden hidden'>
                        {
                            straps.map((dial, index) => <img key={index} className='w-12 lg:w-12 lg:h-12 mid-xl:w-14 mid-xl:h-14 object-cover object-center cursor-pointer' src={dial[0]} onClick={() => activator(index)} />)
                            // <div key={index} className='imgNavigator'></div>
                        }


                    </div>
                    {/*------------------------------------------------------------- straps navigator end--------------------------------------------------- */}
                    {/*------------------------------------------------------------- extra straps navigator start--------------------------------------------------- */}

                    <div className='extraStrapsNavigator align-middle justify-center w-full overflow-hidden hidden'>
                        {
                            extraStraps.map((dial, index) => <div key={index}>
                                <input type="checkbox" name="" id="" onClick={(e) => extraStrapsSelector(e, index)} className='relative left-[50%] translate-x-[-50%] ' />
                                <img className='w-12 lg:w-12 lg:h-12 mid-xl:w-14 mid-xl:h-14 object-cover object-center cursor-pointer' src={dial[0]} onClick={() => extraStrapsActivator(index)} />
                            </div>)
                            // <div key={index} className='imgNavigator'></div>
                        }


                    </div>
                      {/*------------------------------------------------------------- extra straps navigator end--------------------------------------------------- */}

                </div>
                <div className='nanigator2 flex items-center '>
                    <div className='mx-1 text-[10px] sm:text-xs md:text-sm w-20 sm:w-24 md:w-32  text-center rounded-full' onClick={(e) => handleNavigator('strapsNavigators', e, 0, "imgContainer", 0, straps)}>Bracelate</div>
                    <div className='mx-1 text-[10px] sm:text-xs md:text-sm w-20 sm:w-24 md:w-32  text-center rounded-full' onClick={(e) => handleNavigator('dialsNavigators', e, 2, "imgContainer3", 1, dials)}> Dials</div>
                    <div className='mx-1 text-[10px] sm:text-xs md:text-sm w-20 sm:w-24 md:w-32  text-center rounded-full' onClick={(e) => handleNavigator('bezzelsNavigators', e, 1, "imgContainer2", 2, bazzels)}>Bezzels</div>

                    <div className='mx-1 sm:text-xs md:text-sm  w-28 md:w-32  text-center text-[10px] rounded-full' onClick={(e) => handleNavigator("extraStrapsNavigator", e, 3, "imgContainer4", 3)}>Extra straps</div>

                </div>


            </div>



            {/*--------------------------------------------navigator parts end   --------------------------------------------- */}
           



        </div>
    );
};

export default Configure;



