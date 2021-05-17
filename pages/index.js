import styles from '../styles/Home.module.css'
import Post from '@components/post'
import {DiplomaIcon}  from '@components/icons/diploma-icon'
import {PassionIcon}  from '@components/icons/passion-icon'
import {HaltereIcon}  from '@components/icons/haltere-icon'
import { LazyImage} from '@components/lazy-image'
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
          <Link  href={"https://www.google.com/maps/@50.6444298,3.0488013,18z"}>
                            <a className="px-4 flex flex-row items-center text-blue-500" target="_blank">
                              <div>lien googlemap</div>
                              <div className="ml-2 text-3xl">📌</div>
                             
                            </a>
                        </Link>
                        </div>
          </div>
          
          <div className="text-3xl bold flex flex-col space-y-6 md:space-y-10">
            <div>
            <div>🦍 8h30 - 9h30</div>
            </div>
            <div>
            <div>🐒 9h30 - 10h30</div>
            </div>
          <div>
          </div>
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
         {/* <div className="flex flex-row justify-center">
           <Link  href={"https://www.google.com/maps/@50.6444298,3.0488013,18z"}>
                            <a className=" px-4" target="_blank">
                            lien googlemap<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAwFBMVEVHcEzX3+XV3uTW3+XW3+Xh6O3h6O3M1t3M1t3U3ePM1t3S2+LM1t3M1t3S3OLS3OLh6O3M1t3T3OLT3OPh6O3h6O3S4/Cry+K93PKn1PWSzfiIyflVrO5cr+1/u+mVw+W2zuDB0t9kseyfxuNvtuuHxemEw8xWqdh8uYh4tGF3slVckTtbll1Zn5WCwLhck0aAvqd+vJ1Zm35amXNXpcFVquN9u5NWp8xblFF6t3lXpLZamGhYoqtZnYmFxdpYoKCQF0sqAAAAFnRSTlMAQDB4t+///++pcBCf32Ag38+KUI/HADQ6MgAAA75JREFUeAHskFOWAEEQBMe27bn/FXfa1Ws7fjNfFJQv4J9/VFV5O5pumJbtuJ52b+wHoR0GUfy4JI7cxELYiPv6sWMT0ix/QOLnRWkxbPuBfmADDP3O1lqGJJyqfqhvy6AXxHxb9BQgadquH8ZpXqR+5AvRWtcrCK8X+D57CpAgBsQ27aDvRExUj1d4nJLMAjAJFyFgP6CijYdia7AKc0DRrb5HRCBCL8CD4D13RLA/24j4joi9wJIkN5TXB5KkMAwF0INYm5dgi5zBprn/rXbUGBHGdu38iZ0eklMVnDiBZ77vzT0gjnApqVSY5U/rDw34V6BCfQQRy2cDZPwnVFRVVSsLYdM2HVxyh/reDw2KgzajBxonupIHipWaC4Y42eKASnql7KFfWm2e0KzmiKFrtHlCHV4z5f0NKopifrbGb71DI073S12hqJaKg890NwgSWPFMu4zMvKgY6axIQ4sr3KFbdw1AO0eX1TOIygmZPoFPkEFO1sOqqqMipVIhUndrrnXU4JlSo1Lq9S5IKhUJIV1QmbmgDa8hSEbvetRAK+mIvhS+JS6oLx9QvS/Gaqj37SHJmeGUTNu5IMgfUGwnnyds/sBel7e1uRvqs4ujVfrax1oqhob5JWh29V580+ZO6DpMLQjBDqeeY0G7qTN2bsEDsVT2Fop2h0OQQQMap6UHP5SQsq64gYWGuzO8z+zFwIK59zziVQmg4YD2gmZb13we/qsJQ7ARZJIDsnUUO1QwZEbwQJwG8xGuFclCHDstYijPxzbxQrycVoZSWdGn56Mzrgjb0jdrHDPR70hwHBDketSmCUPQNGZCNcxpdD/8K4YofdfjNHohPgj4k5SIHqWCYpV8QswXXeZBSFtIxodU72cBQ3Y3ma5pApBBC1EVXFIlLtCKVgKT+KGFIcmjJA/SNs97KdjatEPscBgqsZyQkgehjgfbB+lm6TM/xBnLNxT7IL4cbmEIWoKkCEKQ2TMpBGnkgvwQ5A05QShD2uthiBOARkQ1iK9Dvz8XhG4nANE9zR+4J8HSiC9C+03N9weUj+BC/tFdFkkQwzAQDDMzc/7/xCWTHHnnqqkue2499J2zn8uhBKXuN+v8PCogDdOsfV1mBNICIgHbev0HDQRCQKh/EBAwtvYWMOk/JAAE+3NLQVriiRufAP6HJfO/+hXFrAwFjbhm4gOWu30neEJsyxRCGJA+DFRo6dUQ4tSFrKi4H8kSXORY/OoKSTPue1i62QRsFNRQ9OMoVB6N7wTfUQztPRoMXVAORgEAoySYpT+MH2gAAAAASUVORK5CYII="></img>
                            </a>
                        </Link>
                        </div>*/}
          </div>
          
          <div className="text-3xl bold flex flex-col space-y-6 md:space-y-10">
          <div className="text-base text-gray-600 italic mb-5">
          <div>Le jiu-jitsu brésilien (portugais : jiu-jitsu brasileiro; japonais : ブラジリアン柔術, burajirian jūjutsu), est un art martial, un sport de combat et un système de défense personnelle dérivé de techniques du judo et du ju-jitsu importées du Japon au Brésil par Mitsuyo Maéda vers 1920, puis développé par la famille Gracie.</div>
          <div>Le jiu-jitsu brésilien promeut le concept qu'une personne peut se défendre face à un opposant plus lourd et fort en utilisant les techniques appropriées, plus particulièrement en amenant le combat au sol et en appliquant des techniques d'étranglement, de clé articulaire ou de compression musculaire.</div>
          </div>
            <div>
            <div>🦍 Dimanche 9h30 - 12h00 jiu-jitsu</div>
            </div>
          <div>

          </div>
          <div>🦧 Jeudi 17h00 - 19h00 jiu-jitsu</div>
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
        
        <div>
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


       </div>


        {/* contact */}
        <div>
       <div className="text-2xl font-bold overflow-x-auto">contact</div>
       <div className="flex flex-row items-center whitespace-nowrap">
       <div>Vous pouvez m'envoyer un</div>
         <a className="text-blue-500 font-bold mx-2 p-1 border-2 border-blue-500" href="mailto:ou.santana@gmail.com">email</a>
         <div>ou choisir le réseau que vous préférez dans la partie</div>
         <div className="bg-tana-black text-white p-1 m-1">Suivez moi</div>
         <div>ci-dessous</div>
       </div>
       
       </div>
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