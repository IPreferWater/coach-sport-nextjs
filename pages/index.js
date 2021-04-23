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
        <div className="text-4xl md:text-7xl font-bold ">motivational word</div>
        <div className="text-xl md:text-5xl">motivational speech wich describe what you will achived</div>
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
          <div className="flex flex-col md:flex-row justify-between w-full">
            
            {/* img */}
          <div className="w-full lg:w-1/2">
          <LazyImage fileName={'santana_coaching_groupe.jpg'} loaded={this.state.imgLoaded} ></LazyImage>
          </div>
          {/* text */}
          <div className="w-full lg:w-1/2 px-2 md:px-6">

          <div className="text-4xl text-center" >seance groupe citadelle</div>
          <div className=" my-4">
          <div className="text-2xl w-full">crossfit tous les samedi à la citadelle de Lille  </div>
          <div className="flex flex-row justify-center">
          <Link  href={"https://www.google.com/maps/@50.6444298,3.0488013,18z"}>
                            <a className=" px-4" target="_blank">
                            lien googlemap<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAwFBMVEVHcEzX3+XV3uTW3+XW3+Xh6O3h6O3M1t3M1t3U3ePM1t3S2+LM1t3M1t3S3OLS3OLh6O3M1t3T3OLT3OPh6O3h6O3S4/Cry+K93PKn1PWSzfiIyflVrO5cr+1/u+mVw+W2zuDB0t9kseyfxuNvtuuHxemEw8xWqdh8uYh4tGF3slVckTtbll1Zn5WCwLhck0aAvqd+vJ1Zm35amXNXpcFVquN9u5NWp8xblFF6t3lXpLZamGhYoqtZnYmFxdpYoKCQF0sqAAAAFnRSTlMAQDB4t+///++pcBCf32Ag38+KUI/HADQ6MgAAA75JREFUeAHskFOWAEEQBMe27bn/FXfa1Ws7fjNfFJQv4J9/VFV5O5pumJbtuJ52b+wHoR0GUfy4JI7cxELYiPv6sWMT0ix/QOLnRWkxbPuBfmADDP3O1lqGJJyqfqhvy6AXxHxb9BQgadquH8ZpXqR+5AvRWtcrCK8X+D57CpAgBsQ27aDvRExUj1d4nJLMAjAJFyFgP6CijYdia7AKc0DRrb5HRCBCL8CD4D13RLA/24j4joi9wJIkN5TXB5KkMAwF0INYm5dgi5zBprn/rXbUGBHGdu38iZ0eklMVnDiBZ77vzT0gjnApqVSY5U/rDw34V6BCfQQRy2cDZPwnVFRVVSsLYdM2HVxyh/reDw2KgzajBxonupIHipWaC4Y42eKASnql7KFfWm2e0KzmiKFrtHlCHV4z5f0NKopifrbGb71DI073S12hqJaKg890NwgSWPFMu4zMvKgY6axIQ4sr3KFbdw1AO0eX1TOIygmZPoFPkEFO1sOqqqMipVIhUndrrnXU4JlSo1Lq9S5IKhUJIV1QmbmgDa8hSEbvetRAK+mIvhS+JS6oLx9QvS/Gaqj37SHJmeGUTNu5IMgfUGwnnyds/sBel7e1uRvqs4ujVfrax1oqhob5JWh29V580+ZO6DpMLQjBDqeeY0G7qTN2bsEDsVT2Fop2h0OQQQMap6UHP5SQsq64gYWGuzO8z+zFwIK59zziVQmg4YD2gmZb13we/qsJQ7ARZJIDsnUUO1QwZEbwQJwG8xGuFclCHDstYijPxzbxQrycVoZSWdGn56Mzrgjb0jdrHDPR70hwHBDketSmCUPQNGZCNcxpdD/8K4YofdfjNHohPgj4k5SIHqWCYpV8QswXXeZBSFtIxodU72cBQ3Y3ma5pApBBC1EVXFIlLtCKVgKT+KGFIcmjJA/SNs97KdjatEPscBgqsZyQkgehjgfbB+lm6TM/xBnLNxT7IL4cbmEIWoKkCEKQ2TMpBGnkgvwQ5A05QShD2uthiBOARkQ1iK9Dvz8XhG4nANE9zR+4J8HSiC9C+03N9weUj+BC/tFdFkkQwzAQDDMzc/7/xCWTHHnnqqkue2499J2zn8uhBKXuN+v8PCogDdOsfV1mBNICIgHbev0HDQRCQKh/EBAwtvYWMOk/JAAE+3NLQVriiRufAP6HJfO/+hXFrAwFjbhm4gOWu30neEJsyxRCGJA+DFRo6dUQ4tSFrKi4H8kSXORY/OoKSTPue1i62QRsFNRQ9OMoVB6N7wTfUQztPRoMXVAORgEAoySYpT+MH2gAAAAASUVORK5CYII="></img>
                            </a>
                        </Link>
                        </div>
          </div>
          
          <div className="text-3xl bold flex flex-col space-y-6 md:space-y-10">
            <div>
            <div>🦍 8h30 - 9h30 intense crossfit</div>
          <div className="text-xl text-gray-600">convient aux personnes pratiquant régulierement du sport</div>
            </div>
            <div>
            <div>🐒 9h30 - 10h30 initiation crossfit</div>
            <div className="text-xl text-gray-600">convient aux personnes souhaitant découvrir ou reprendre une activité physique</div>
            </div>
          <div>

          </div>
          <div>🦧 10h30 - 11h30 todo</div>
          <div className="text-xl text-gray-600">courte explication de cette seance</div>
          </div>
          </div> 
          </div>
          <div>coach personel</div>
          <div>jujitsu/self defense</div>
  </div>



            {/* presentation */}
            <div className="flex flex-col justify-between w-full md:w-4/5 md:flex-row my-20 text-center">
        <div>
        <div className="flex justify-center">
          <DiplomaIcon className="h-16 w-16"/>
          </div>
        
         <div className="text-2xl font-bold">diplomes</div>
            <ul>
        <li>diplome 1 - 2021</li>
        <li>ceinture noire jujitsu - 2018</li>
        <li>diplome 3</li>
    </ul>
        </div>

        <div className="w-full lg:w-1/3 mb-4">
        <div className="flex justify-center">
          <PassionIcon className="h-16 w-16"/>
          </div>
        <div className="text-2xl font-bold">passions</div>
         <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
    
        </div>
        
        <div className="w-full lg:w-1/3 mb-4">
        <div className="flex justify-center">
          <HaltereIcon className="h-16 w-16"/>
          </div>
        <div className="text-2xl font-bold">sessions</div>
         <div>je propose</div>
         <ol>
        <li>seance groupe citadelle</li>
        <li>coach personnel domicile</li>
        <li>cours de jujitsu/self defense adapté au niveau de la personne</li>
    </ol>
    
        </div>
        </div>

      
       
       {/* timetable */}
       <div>
       <div className="text-2xl font-bold">presentation des seances</div>
       <div>todo</div>
       </div>
       
        {/* tarifs */}
        
        <div>
       <div className="text-2xl font-bold">tarifs</div>
       <div>todo</div>
       </div>
        {/* contact */}
        <div>
       <div className="text-2xl font-bold">contact</div>
       <div>todo</div>
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