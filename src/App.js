import './assets/output.css'
import hero from './assets/hpy.jpg';
import Adam from './assets/Adam.jpg';
import Ola from './assets/Ola.jpg';
import Krzysiek from './assets/Krzysiek.jpg';
import Daria from './assets/Daria.jpg';
import Aga from './assets/Aga.jpg';

import ReactPlayer from "react-player";

function App() {
  return (
    <main className='w-screen h-screen'>
    <img src={hero} alt='happy-new-year'
    className='bg-contain h-4/5 w-screen'
    />
      <div className='2xl:bg-yellow-400 bg-cover w-screen h-1/5 flex justify-center items-center'>
        <h1 className='text-black text-7xl font-light tracking-widest animate-bounce m-20'>
          Szczęśliwego nowego roku!
        </h1>
        <img src={Adam} alt='Adam' className='rounded-full w-32 h-32 m-10 shadow-2xl transform scale-150'/>
        <img src={Ola} alt='Ola' className='rounded-full w-32 h-32 m-10 shadow-2xl transform scale-150'/>
        <img src={Krzysiek} alt='Krzysiek' className='rounded-full w-32 h-32 m-10 shadow-2xl transform scale-150'/>
        <img src={Daria} alt='Daria' className='rounded-full w-32 h-32 m-10 shadow-2xl transform scale-150'/>
        <img src={Aga} alt='Aga' className='rounded-full w-32 h-32 m-10 shadow-2xl transform scale-150 mr-20'/>
      </div>
      <ReactPlayer url={'https://www.youtube.com/watch?v=W2CB6Icnjv0'} playing={true}
                   width={0}
                   height={0}
      />
    </main>
  );
}

export default App;
