import styles from '../styles/Home.module.css'
import {DiplomaIcon}  from '@components/icons/diploma-icon'
import {PassionIcon}  from '@components/icons/passion-icon'
import { LazyImage} from '@components/lazy-image'
import {StickerTarif}  from '@components/sticker-tarif'
import Link from 'next/link'

export default class Home extends React.Component {

  state = { imgLoaded: false, mmm: <div>waiting</div> };
  t = {


  }
  componentDidMount() {
    this.setState({ imgLoaded: true })
  }
  render() {
    return (
      <div className={styles.container}>
        {/* catchy */}
        <div className="flex flex-col justify-between w-full md:w-4/5 md:flex-row ">
        <div className="w-full text-center my-4">
        {/*<div className="text-4xl md:text-7xl font-bold ">motivational word</div> */}
        <div className="text-xl md:text-5xl font-bold italic">“La pire des défaites, c’est d’avoir refusé le combat.”</div>
        <div className="text-xl text-gray-600 italic">Gérard D’Aboville</div>
        <div className="w-full my-3 md:my-10 flex justify-center">
        <LazyImage className="h-32 w-32" fileName={'logo.jpg'} loaded={this.state.imgLoaded} ></LazyImage>
        </div>
        </div>
        <div className="">
        <LazyImage fileName={'santana_coaching.jpg'} loaded={this.state.imgLoaded} ></LazyImage>
        </div>
        </div>


{/* button */}
<Link href="/coach-sportif">
<a className="my-20 text-4xl border-4 border-tana-black p-6 w-full text-center">
          Qu'est ce qu'un coach sportif
          </a>
        </Link>


  {/* presentation des seances */}


  <div>
        <div className=" text-7xl md:my-4 font-bold text-center">seances</div>
          <div className="flex flex-col justify-between w-full space-y-10">
            
            {/* citadelle */}
            <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="w-full lg:w-1/2">
          <div className="text-4xl text-center">Circuit training 3 sessions Samedi matin au quartier-libre de Lille</div>
          <LazyImage fileName={'santana_coaching_groupe.jpg'} loaded={this.state.imgLoaded} ></LazyImage>
          </div>
          <div className="w-full lg:w-1/2 px-2 md:px-6">

          
          <div className=" my-4">
          <div className="text-2xl w-full">Séance visant à améliorer le système cardio vasculaire  et l'endurance, adaptée à  la perte de poids et au renforcement musculaires</div>
          <div className="flex flex-row justify-center">
          <Link  href={"https://www.google.com/maps/dir//50.6444043,3.049842/@50.6444298,3.0488013,18z/data=!4m2!4m1!3e1"}>
                            <a className="px-4 flex flex-row items-center text-blue-500" target="_blank">
                              <div>lien googlemap</div>
                              <div className="ml-2 text-3xl">📌</div>
                             
                            </a>
                        </Link>
                        </div>
          </div>
          
          <div className="text-3xl bold flex flex-col space-y-6 md:space-y-10">
            <div>🦍 8h30 - 9h30</div>
            <div>🐒 9h30 - 10h30</div>
            <div>🦧 10h30 - 11h30</div>
          </div>
          </div> 
          </div>
          {/* jiu-jitsu */}

          <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="w-full lg:w-1/2">
          <div className="text-4xl text-center">jiu-jitsu brésilien</div>
          <LazyImage fileName={'santana_coaching_jujitsu.jpg'} loaded={this.state.imgLoaded} ></LazyImage>
          </div>
          <div className="w-full lg:w-1/2 px-2 md:px-6">

          
          <div className=" my-4">
          <div className="text-2xl w-full">cours de jiu-jitsu brésilien dans un dojo privé</div>
          </div>
          
          <div className="text-3xl bold flex flex-col space-y-6 md:space-y-10">
          <div className="text-base text-gray-600 italic mb-5">
          <div>Le jiu-jitsu brésilien promeut le concept qu'une personne peut se défendre face à un opposant plus lourd et fort en utilisant les techniques appropriées, plus particulièrement en amenant le combat au sol et en appliquant des techniques d'étranglement, de clé articulaire ou de compression musculaire.</div>

          <Link  href={"https://fr.wikipedia.org/wiki/Jiu-jitsu_br%C3%A9silien"}>
                            <a className="text-blue-500" target="_blank">
                              <div>en savoir plus sur wikipedia</div>
                            </a>
                        </Link>

          <div></div>
          </div>
            <div>🦍 Dimanche 9h30 - 12h00 jiu-jitsu</div>
            <div>🦧 Jeudi 18h00 - 20h00 jiu-jitsu</div>
          </div>
          </div> 
          </div>
          

          </div>
  </div>


          
            {/* presentation */}
            <div className="flex flex-col w-full md:w-full md:flex-row my-20 text-center mb-4">
        <div className="w-full lg:w-1/2">
        <div className="flex justify-center">
          <DiplomaIcon className="h-16 w-16"/>
          </div>
        
         <div className="text-2xl font-bold">diplomes</div>
            <ul>
        <li>Bpjeps Activité de la Formes - 2020</li>
        <li>Ceinture noire de JJB - 2017</li>
        <li>PSC1</li>
    </ul>
        </div>

        <div className="w-full lg:w-1/2">
        <div className="flex justify-center">
          <PassionIcon className="h-16 w-16"/>
          </div>
        <div className="text-2xl font-bold">passions</div>
         <div>Palmares competitions de jiu-jitsu</div>
         <ul>
        <li>1x Champion d'europe CBJJE</li>
        <li>3x Champion de France CFJJB</li>
        <li>1x Champion de France CFG</li>
    </ul>
    
        </div>
        
       
        </div>
       
        {/* tarifs */}
        <div className="flex flex-col md:flex-row md:justify-between">
        <StickerTarif title="Coaching individuel" prices={[50,40,30,25]}/>
        <StickerTarif title="Coaching en duo" prices={[60,50,40,30]}/>
        <StickerTarif title="Coaching en trio" prices={[75,60,45,45]}/>
        
        <div className={`flex flex-col border-2 border-tana-green rounded-lg p-4 m-8`}>
    <div className="text-center text-2xl text-gray-600">jiu-jitsu brésilien</div>

    <div className="flex flex-row items-center my-2">
            <div>✅ illimité 1 mois ➡ 40€</div>
            <div className="flex flex-col text-xs ml-4 text-gray-600">
              <div>soit</div>
              <div>12 séances / mois</div>
              </div>
            </div>

      <div className="flex flex-row items-center my-2">
            <div>✅ 1 séance ➡ 10€</div>
            </div>


</div>

        </div>
        
      {/**  <div>
       <div className="text-2xl font-bold">tarifs</div>
       <div className="grid grid-cols-1 md:grid-cols-3">
       <div className="min-h-200 min-w-200 rounded overflow-hidden shadow-lg relative">
    <div className="px-6 py-4 pb-16">
      <div className="flex flex-row justify-between">
        <div className="font-bold text-xl mb-2">
         Circuit training 
        </div>
        <div className="text-xs"></div>
      </div>
      <ul className={`min-h-32 min-w-32`}>
          <li  className={`flex flex-col text-center rounded-lg p-2 mb-2 `}>
            <span className={`font-semibold`}>
             5€
            </span>
          </li>
          <li  className={`flex flex-col text-center rounded-lg p-2 mb-2 `}>
            <span className={`font-semibold`}>
            ✔ accés 1 séance circuit-training au choix
            </span>
          </li>
      </ul>
    </div>
       </div>
       

       <div className="min-h-200 min-w-200 rounded overflow-hidden shadow-lg relative">
    <div className="px-6 py-4 pb-16">
      <div className="flex flex-row justify-between">
        <div className="font-bold text-xl mb-2">
        Session jiu-jitsu 
        </div>
        <div className="text-xs"></div>
      </div>
      <ul className={`min-h-32 min-w-32`}>
          <li  className={`flex flex-col text-center rounded-lg p-2 mb-2 `}>
            <span className={`font-semibold`}>
             10€
            </span>
          </li>
          <li  className={`flex flex-col text-center rounded-lg p-2 mb-2 `}>
            <span className={`font-semibold`}>
            ✔ accés 1 séance jiu-jitsu au choix
            </span>
          </li>
      </ul>
    </div>
       </div>



       <div className="min-h-200 min-w-200 rounded overflow-hidden shadow-lg relative">
    <div className="px-6 py-4 pb-16">
      <div className="flex flex-row justify-between">
        <div className="font-bold text-xl mb-2">
         Abonnement jiu-jitsu 
        </div>
        <div className="text-xs"></div>
      </div>
      <ul className={`min-h-32 min-w-32`}>
          <li  className={`flex flex-col text-center rounded-lg p-2 mb-2 `}>
            <span className={`font-semibold`}>
             40€
            </span>
          </li>
          <li  className={`flex flex-col text-center rounded-lg p-2 mb-2 `}>
            <span className={`font-semibold`}>
            ✔ 2 séances jiu-jitsu par semaine
            </span>
          </li>
          <li  className={`flex flex-col text-center rounded-lg p-2 mb-2 `}>
            <span className={`font-semibold`}>
            ✔ séances circuit-training 8h30 citadelle
            </span>
          </li>
      </ul>
    </div>
    </div>
       </div>


       </div> */}
      </div>
    )
  }
}

export async function getStaticProps() {

const todo = {"1":"post"}
  return {
    props: {
      todo: todo,
    }
  }
}