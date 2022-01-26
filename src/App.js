import './App.scss';
import { useState,  useEffect } from 'react'
import Logo from './assets/images/logo.png'


function App() {

  const [audio, setAudio] = useState([])


  useEffect(() => {
    fetch(`http://api.alquran.cloud/v1/quran/ar.alafasy`)
    .then((res) => res.json())
    .then((data) => setAudio(data.data.surahs))
  }, [])


 

  return (
    <>
      <div className='container'>
        <a className='logo' href='index.html'>
          <img  src={Logo} style={{width: "400px", height: "420px" }} alt='qoran logo'/>
        </a>
        <h1 className='heading'>The Nobel Quran</h1>
       
        

        <ul className='list'>
          {
            audio.map((item) => {
              return(
                <li className='list__item' key={item.number} >
                  <div className='list__number'>{item.number}</div>
                  <h2 className='list__heading'>{item.name}</h2>
                  <h2 className='list__engtitle'>{item.englishName}</h2>
                  {
                    item.ayahs.map((i) =>{
                      console.log(i);
                      return (
                      <>
                         <div className='list__box' key={i.number}>
                            <p className='list__text'>{i.text}</p>
                            <audio className='list__audio' controls>
                              <source src={i.audio}/>
                            </audio>
                         </div>
                      </>
                      )
                    })
                  }
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  );
}

export default App;
