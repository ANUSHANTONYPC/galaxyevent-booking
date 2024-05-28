import React from "react";
import Image from "next/image";

const bestoffer = [
  {
    id: 1,
    img: require("../../components/BestPlans/image1.png"),
    name: " Economy Budget",
    price: "Below 1 Lakh",
    description: "Here we provide the service under a best economy rate",
    aosDelay: '100'
  },
  {
    id: 2,
    img: require("../../components/BestPlans/center.png"),
    name: " Standard Budget",
    price: "1 Lakh - 2 Lakh",
    description: "Here we provide the service under a best standard rate",
    aosDelay: '100'
  },
  {
    id: 3,
    img: require("../../components/BestPlans/image2.png"),
    name: " Premium Budget",
    price: "Above 2 Lakh",
    description: "Here we provide the service under a best premium rate",
    aosDelay: '100'
  }
];

const Bestoffer = () => {
  const handleBookNowClick = (whatsappMessage) => {
    const whatsappNumber = '7736590907';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.location.href = whatsappUrl;
  };

  return (
    <div className='py-10 bg-white dark:bg-black text-black dark:text-white'>
      <div className="container">
        {/* header title section */}
        <div data-aos="fade-up" className='text-center mb-20'>
          <h1 className='text-4xl font-bold text-teal-950 dark:text-white'>
            Choose Your Plan
          </h1>
        </div>
        {/* card section */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-14 place-items-center mt-4'>
          {bestoffer.map(({ id, name, img, price, description, aosDelay }) => {
            return (
              <div key={id} data-aos="fade-up" data-aos-delay={aosDelay}
                className='group rounded-2xl bg-white dark:bg-black hover:!bg-primary shadow-xl duration-200 max-w-[200px] relative'
              >
                <div className='h-[110px]'>
                  <Image
                    src={img} alt={name}
                    className='max-w-[200px] block mx-auto transform -translate-y-20 group-hover:scale-110 group-hover:translate-x-4 duration-300 place-items-center'
                  />
                </div>
                <div className='p-3 text-center space-y-3'>
                  <h1 className='text-xl font-bold'>{name}</h1>
                  <p className='text-gray-500 group-hover:text-black duration-300 text-sm line-clamp-2'>{description}</p>
                  <h2 className='text-primary text-2xl font-bold group-hover:text-black'>{price}</h2>
                  <button className='bg-black text-white px-4 py-2 rounded-lg' onClick={() => handleBookNowClick(`Hi, I would like to book ${name} of ${price} ` )}>
                    <span className='text-teal-100'>FOR MORE</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Bestoffer;
