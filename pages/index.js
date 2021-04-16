import styles from '../styles/Home.module.css'
import Post from '@components/post'
import { LazyImage} from '@components/lazy-image'

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
        <div className="text-4xl font-bold">motivational word</div>
        <div>motivational speech wich describe what you will achived</div>
        </div>
        <div className="">
        <LazyImage fileName={'index_1.jpg'} loaded={this.state.imgLoaded} ></LazyImage>
        </div>
        </div>

            {/* presentation */}
            <div className="flex flex-col justify-between w-full md:w-4/5 md:flex-row my-20 text-center">
        <div className="w-full lg:w-1/3 mb-4">
        	
         <div className="text-6xl">&#127891;</div>
         <div className="text-2xl font-bold">diplomes</div>
            <ul>
        <li>diplome 1 - 2021</li>
        <li>ceinture noire jujitsu - 2018</li>
        <li>diplome 3</li>
    </ul>
        </div>

        <div className="w-full lg:w-1/3 mb-4">
        <div className="text-6xl">	&#x2764;&#xFE0F;</div>
        <div className="text-2xl font-bold">passions</div>
         <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
    
        </div>
        
        <div className="w-full lg:w-1/3 mb-4">
        <div className="text-6xl">&#127939;</div>
        <div className="text-2xl font-bold">sessions</div>
         <div>je propose</div>
         <ol>
        <li>seance groupe citadelle</li>
        <li>coach personnel domicile</li>
        <li>cours de jujitsu/self defense adapté au niveau de la personne</li>
    </ol>
    
        </div>
        </div>

        {/* presentation des seances */}


        <div>
        <div className="text-2xl font-bold">presentation des seances</div>
          <div>seance de groupe</div>
          <div>coach personel</div>
          <div>jujitsu/self defense</div>
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