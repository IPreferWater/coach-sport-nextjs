import styles from '../styles/Home.module.css'
import {Sticker}  from '@components/sticker'

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

{/* Qu'est ce qu'un coach sportif */}
<div className="text-center w-4/5 mb-16">
    <div className="text-4xl mb-2">Qu'est ce qu'un coach sportif</div>
    <div className="">Le coach sportif vous accompagne afin d’augmenter vos performances sportives. Il aide à atteindre un objectif particulier comme le renforcement musculaire, la prise de masse, la tonification, la perte de poids...</div>
</div>
{/* Les avantages d’avoir un coach sportif */}
<div className="w-4/5 mb-16">
<div className="text-center text-4xl mb-4">Les avantages d’avoir un coach sportif</div>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>✅ Suivi professionnel</div>
        <div>✅ Perte de poids</div>
        <div>✅ Conseil en nutrition</div>
        <div>✅ Progression en toute sécurité</div>
        <div>✅ Séances motivantes</div>
        <div>✅ Programme personnalisé</div>
    </div>
    
</div>

{/* A qui s’adresse le coaching sportif ? */}
<div className="w-6/10 mb-16">
    <div className="text-center text-4xl mb-2">A qui s’adresse le coaching sportif ?</div>
    <div className="flex flex-row justify-between">

        <div className="flex flex-col text-center">
        <div className="text-5xl">🏃</div>
        <div>Particuliers</div>
        </div>

        <div className="flex flex-col text-center">
        <div className="text-5xl">🏃</div>
        <div>Sportifs</div>
        </div>

        <div className="flex flex-col text-center">
        <div className="text-5xl">🏢</div>
        <div>Entreprises et clubs</div>
        </div>
    </div>
</div>

{ /* Coaching à domicile ou extérieur, seul ou en petit groupe */}
<div>
    <div className="text-4xl mb-10">Coaching à domicile ou extérieur, seul ou en petit groupe</div>
    <div className="text-4xl">Entrainement proposé</div>

<div className="my-8">
<Sticker
title="Renforcement musculaire"
subTitle="Le renforcement musculaire qualifie toute activité qui tend à exercer les muscles de manière à faire évoluer son corps."
listTitle1="Idéal pour :"
liste1= {['Affiner sa silhouette','Gagner en force','Prise de masse','Augmentation de la dépense énergétique', 'Augmentation des fibres musculaires et baisse de la masse graisseuse']}
listTitle2="Avec une variété d’exercices au poids du corps ou charges additionnelles :"
liste2= {['Haltères','Kettlebell','Trx','Swiss ball', 'Bosu balance', 'Elastique']}
bg="tana-red"
/>
</div>

<div className="my-8">
<Sticker className="my-4"
title="Cardio-training"
subTitle="Le cardio-training regroupe toutes les activités d’endurance qui ont pour but d’améliorer la capacité cardiaque et pulmonaire du corps. "
listTitle1="Idéal pour :"
liste1= {['Augmenter les capacités cardio-vasculaires','Evacuer votre stress','Baisse de la masse graisseuse','Baisse de la pression artérielle ']}
listTitle2="Avec une variété d’exercices"
liste2= {['Course à pied','Vélo','Step','Circuit training']}
bg="tana-red-2"
/>
</div>

<div className="my-8">
<Sticker className="my-4"
title="MOBILITE"
subTitle="La mobilité c’est la capacité d’exécuter des mouvements de grandes amplitudes faisant jouer une ou plusieurs articulations. Elle est essentielle dans la réalisation des exercices physiques."
listTitle1="Idéal pour :"
liste1= {['Manque de souplesse','Mouvements limités','Douleur ou gêne ']}
listTitle2="Avec une variété d’exercices au poids du corps ou charges additionnelles :"
liste2= {['Stretching','Équilibre','Auto-massage']}
bg="tana-red-3"
/>
</div>

<div className="my-8">
<Sticker className="my-4"
title="Préparation physique"
subTitle="La préparation physique est la composante de l'entraînement qui permet de développer les qualités physiques du sportif pour les mettre au service de la discipline pratiquée. Elle englobe les domaines de l’optimisation de la performance mais aussi de la récupération et de prévention des blessures."
listTitle1="Idéal pour :"
liste1= {['Développer les qualités physiques','Perfectionner dans la discipline','Augmenter la force, puissance, explosivité, endurance, agilité, souplesse et équilibre']}
listTitle2="Avec une :"
liste2= {['Préparation physique de pré-saison et inter-saison','Travail de prévention de blessure','Développement des qualités physiques requises en fonction de la discipline']}
bg="tana-red-4"
/>
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