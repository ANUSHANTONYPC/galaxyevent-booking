
// About.js
"use client" ;
import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import './about.css'; // Import the CSS file
import background from '../../components/About/background.jpg';
import Banner from './Banner';

const bgstyle = {
  backgroundImage: `url(${background.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  minHeight: '520px',
  width: '100vw',
};

const About = () => {
  return (
    <div style={bgstyle}>
      <div className="text-white bg-black/80  min-h-[530px] flex items-center py-10  ">
        <div className="container">
          <div className="space-y-2 text-center  py-14">
            <p>
              <span className="text-primary text-2xl font-bold uppercase">ForEver </span>
              <span className="text-2xl font-bold uppercase">Together</span>
            </p>
            <h1>Than You Wish</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
            <div className="space-y-8" data-aos="fade-up">
              <Banner 
                title={'PHOTOGRAPHY'}
                description={
                  'Discover the world through the lens at our photography event, where every snapshot tells a story. Join us for a celebration of creativity, passion, and the art of capturing moments.'
                }
                icon={<CiPlay1 />}
              />
              <Banner
                title={'F & S'}
                description={'Elevate your experience with our curated event lineup. Join us for unforgettable moments.'}
                icon={<CiPlay1 />}
              />
            </div>
            <div className="space-y-8"  data-aos="fade-up">
              <Banner
                title={'STAGE DECORATION'}
                description={'Transform any space with our stunning stage decorations, adding flair and ambiance to your event.'}
                icon={<CiPlay1 />}
              />
              <Banner
                title={'LIGHT & SOUND'}
                description={'Elevate your event atmosphere with our expertly crafted light and sound solutions, setting the perfect mood for every moment.'}
                icon={<CiPlay1 />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
