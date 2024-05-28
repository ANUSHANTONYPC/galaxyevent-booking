import React from 'react'
import Test from "../../components/Testimonial/tesst.jpg";
import Slider from 'react-slick';
import Image from 'next/image';


const bgStyle = {
    backgroundImage: `url(${Test.src})`,
    backgroundSize: 'auto',
    backgroundPosition: 'center',
    backgroundRepeat : "repeat"
};
const TestData =[
    {
        id: 1,
        name: "ALAN",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus iusto assumenda ,",
        img: "https://picsum.photos/101/101"
    },
    {
        id: 2,
        name: "BRIAN",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus iusto assumenda , ",
        img: "https://picsum.photos/102/102"
    },
    {
        id: 3,
        name: "CAROL",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus iusto assumenda , ",
        img: "https://picsum.photos/103/103"
    },
    {
        id: 4,
        name: "DAVID",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus iusto assumenda ",
        img: "https://picsum.photos/104/104"
    },
    {
        id: 5,
        name: "EMILY",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus iusto assumenda officia porro quidem laboriosam recusandae,",
        img: "https://picsum.photos/105/105"
    }
]

const Testimonial = () => {

    //slider set up 

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1, // Changed from slideToScroLl to slidesToScroll
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear", // Changed from CssEase to cssEase (JavaScript is case-sensitive)
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    
  return (
    <div style={bgStyle} className=''>
    <div className='dark:bg-gray-800/90 bg-white/50  py-14 dark:text-white '>
    <div className="container ">
        {/*  text content section */}


        <div className='text-center mb-10' data-aos = "fade-up">
            <h1 className='text-4xl font-bold sm:text-3xl'>TESTIMONIAL</h1>
           
        </div>

        {/*  slider section */}
        <div data-aos = "zoom-in" >
            <Slider {...settings}>
                {
                    TestData.map(({id, name, text, img}) =>{
                        return (
                            <div key={id} className='my-6 relative'>
                            <div className='flex flex-col gap-6  shadow-lg py-8 px-6 mx-4 rounded-3xl bg-white dark:bg-black relative sm:grid-col-1 '>
                        
                                {/* Content section */}
                                <div className='flex flex-col items-center gap-4'>
                                  
                                        <p className='text-xs'>{text}</p>
                                    
                                </div>
                        
                                {/* Image and Name */}
                                <div className='flex items-center gap-4 '>
                        
                                    {/* Image */}
                                    <img src={img} alt={name} className='rounded-full w-16 h-16 ' />
                        
                                    {/* Name */}
                                    <div className='space-y-2'>
                                        <h1 className='text-xl font-bold text-black/80 dark:text-primary font-cursive'>{name}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                        )
                    })
                }
            </Slider>

        </div>
    </div>
    </div>
    </div>
  )
}

export default Testimonial
