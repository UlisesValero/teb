import { useState, useEffect } from 'react'

const Welcome = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
        <section className='text-stroke-white h-[200dvh]'>
   <div className=" flex items-center justify-center flex-col">
    <img src="http://teb-transportes.com/wp-content/uploads/2019/05/teb-bus-2-1.jpg" className=' brightness-50 z-10' alt="" />
      <h1
        className="h-fit text-7xl left-5 top-10 font-bold bg-clip-text text-transparent absolute z-20"
        style={{
          backgroundImage: "url('/assets/retatur.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: `center ${scrollY * 0.4}px`, 
        }}
      >
        TEB
          </h1>
          <h4 className='absolute z-20 left-9 text-xs'>
            35 años de experiencia en el traslado de pasajeros
          </h4>
    </div>
    </section>
    )
}

export default Welcome

