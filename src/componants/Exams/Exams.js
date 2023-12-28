import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import enmg from '../../assets/images/enmg.jpg'
import eeg from '../../assets/images/eeg.jpg'
import irm from '../../assets/images/irm.jpg'
import pl from '../../assets/images/pl.jpg'
import blood from '../../assets/images/bloodtest.jpg'
import './Exams.css'

const Exams = () => {
  return (
    <div className="Super-exams">
      <Header/>
      <div className='Exams'>
        <div className='Exams-introduction'>
          <h1>Examens complémentaires</h1>
          <p>Les examens complémentaires en neurologie jouent un rôle essentiel dans le diagnostic et le suivi des pathologies du système nerveux. Vous trouverez ci-dessous la plupart des examens prescrits en neurologie. </p>
        </div>
            
            <div className="Exams-paragraphe">

                <div className='Exams-type'>
                <h2>Examens électrophysiologiques</h2>
                    <h3>L’électroneuromyogramme ou ENMG</h3>
                        <p>Il s’agit d’un examen étudiant les nerfs, l’activité musculaire, et la jonction entre les nerfs et les muscles.
                        <br/>Il peut vous être prescrit par exemple, pour une suspicion de syndrome de canal carpien, de neuropathie ou pour explorer une fatigabilité à l’effort.
                        <br/>Réalisé par le neurologue au cabinet, il dure entre 30 minutes et une heure selon les nerfs étudiés.
                        <br/>L’examen comprend 2 parties : 
                        <br/>La première vise à explorer les nerfs, par l’administration de faibles impulsions électriques, dont les réponses sont recueillies par des électrodes disposées sur la peau.
                        <br/>La seconde consiste à étudier les muscles grâce à une très fine aiguille couplée à un micro, qui enregistre l’activité musculaire au repos et lors d’une contraction.</p>
                        <p>Nous vous remercions d’informer votre neurologue avant l’examen de tout traitement fluidifiant le sang ou si vous souffrez d’une anomalie de la coagulation sanguine.
                        <br/>Pour des raisons pratiques, il vous sera demandé de rendre accessibles les parties du corps analysées afin de pouvoir y apposer les électrodes (vêtements amples remontant au-dessus du genou et/ou des coudes, éviter les bas de contention s’il s’agit d’un examen au membre inférieur, retrait des bijoux au membre supérieur). De même, merci d’éviter l’application de crème sur la peau à ce niveau.</p>
                    <img src={enmg} alt="enmg"></img>

                    <h3>L’électroencéphalogramme ou EEG</h3>
                        <p>Cet examen non invasif permet d’analyser l’activité électrique du cerveau à l’aide d’électrodes disposées sur le cuir chevelu. Principalement prescrit dans le cadre de l’épilepsie ou pour les bilans de malaise, cet examen est non douloureux, il est réalisé par une infirmière au cabinet et dure une vingtaine de minutes.
                        <br/>Le neurologue interprète les résultats dans un second temps et vous transmettra ses conclusions.</p>
                    <img src={eeg} alt="eeg"></img>
                    </div>


                <h2>Examens d’imagerie</h2>
                    <h3>L’IRM cérébrale ou médullaire</h3>
                        <p>Cette technique par résonnance magnétique, permet la visualisation fine du cerveau ou de la moelle épinière. L’IRM peut être couplée à l’administration intraveineuse de produit de contraste (gadolinium). L’examen dure entre 20 et 30 minutes.</p>
                        <p>Si vous êtes claustrophobe, enceinte, insuffisant rénal, ou porteur d’implant métallique (stimulateurs cardiaques, valves cardiaques métalliques, prothèses vasculaires, implants cochléaires…) merci d’en informer votre neurologue et radiologue.</p>
                    

                    <h3>Le scanner ou tomodensitométrie (TDM)</h3>
                        <p>Cette technique utilisant des rayons X permet de visualiser les structures anatomiques. Il peut être couplé à l’injection de produit de contraste iodé pour l’étude des vaisseaux. L’examen dure une quinzaine de minutes. Dans le cadre de la Neurologie, nous prescrivons principalement des scanners du cerveau et de la colonne vertébrale.</p>
                        <p>Si vous souffrez d’insuffisance rénale, d’une allergie à l’Iode, ou êtes enceinte, merci d’en informer votre neurologue et radiologue.</p>
                    
                    <h3>Examens de médecine nucléaire</h3>
                        <p>Leur principe repose sur l’administration d’un traceur radioactif dans la circulation sanguine, dont les rayonnements émis sont détectés par un scanner. Ces examens sont réalisés au CHU en médecine nucléaire.</p>
                        <ul>
                            <li><span>Le DAT scan cérébral</span> évalue le fonctionnement des neurotransmetteurs, en particulier la dopamine, dans le cerveau. Il constitue une aide diagnostique dans les pathologies du mouvement telles que la maladie de Parkinson.</li>
                            <li><span>Le TEP-scan</span>, ou Tomographie par Émission de Positons fournit des informations sur le métabolisme des tissus. En neurologie, le TEP-Scan cérébral est un outil diagnostic des troubles neurodégénératifs.</li>
                        </ul>

                    <h3>Examen de médecine vasculaire</h3>
                        <ul>
                            <li><span>Echodoppler des troncs supra aortiques :</span> Cet examen non invasif combine l’échographie et le doppler, afin d’évaluer le flux sanguin des artères situées dans la zone du cou, appelées troncs supra-aortiques. Il est réalisé par un radiologue ou un médecin vasculaire, et dure une trentaine de minutes. Son but est de détecter la présence d'éventuels rétrécissements (sténoses) ou des obstructions dans les artères, notamment dans le cadre du bilan d’AVC.</li>
                            <li><span>Echodoppler transcrânien :</span>Il s’agit de la même technique, visant cette fois ci à étudier les vaisseaux cérébraux via une sonde d’échographie placée sur le crâne. Il peut être couplé à l’injection de bulles d’air dans une veine du bras, pour déceler des communications anormales entre les cavités cardiaques pouvant être pourvoyeuses d’AVC.</li>
                        </ul>

                <img src={irm} alt="irm"></img>

                <h2>Examens biologiques</h2>
                    <h3>Ponction lombaire</h3>
                        <p>Cette procédure vise à prélever un échantillon du liquide céphalorachidien (LCR) qui est le liquide entourant le cerveau et la moelle épinière, afin de l’analyser. Il s’agit d’une aide précieuse au diagnostic de plusieurs maladies du système nerveux central et périphérique, tels que la sclérose en plaque, la maladie d’Alzheimer ou certaines neuropathies notamment. </p>
                        <p>Elle est réalisée par le neurologue et dure entre 20 et 30 minutes. Le patient est en position assise ou allongée. Après une désinfection du point de ponction, une fine aiguille est introduite entre les vertèbres lombaires, sous la moelle épinière, dans l’espace contenant le LCR. Le recueil du liquide ne dure en lui-même que quelques minutes.</p>
                        <p>Une sensation de pression ou de brûlure peut être ressentie au point de ponction lors de l’insertion de l’aiguille, celle-ci est temporaire.</p>
                        <p>Des maux de têtes peuvent parfois survenir au décours du geste, pour lesquels des médicaments antalgiques peuvent vous être prescrits. Il vous sera également préconisé de bien vous hydrater après la ponction lombaire afin de les éviter. </p>
                        <p>Nous vous remercions également d’informer votre neurologue avant l’examen de tout traitement fluidifiant le sang, si vous souffrez d’une anomalie de la coagulation sanguine ou si vous avez subi une chirurgie lombaire.</p>
                        <img className="lombaire" src={pl} alt="pl"></img>

                    <h3>Bilans biologiques</h3>
                        <p>diverses analyses biologiques pourront vous êtes prescrites dans le cadre du diagnostic ou du suivi des pathologies neurologiques.</p>
                        <img src={blood} alt="blood"></img>
                
                    <h2>Examens cardiologiques</h2>
                        <p>Nous travaillons conjointement avec nos Confrères cardiologues, principalement dans le cadre du bilan d’AVC. Plusieurs examens pourront être réalisés par les cardiologues, tels que des échographies cardiaques, des électrocardiogrammes (ECG) ou des enregistrements cardiaques longue durée (Holter ECG).</p>

                <p>En conclusion, les examens complémentaires en neurologie, couplés à un examen clinique rigoureux, jouent un rôle primordial dans le diagnostic et le suivi des affections du système nerveux. Si vous avez des interrogations concernant les différents examens qui ont pu vous être proposés, n’hésitez pas à en discuter avec votre neurologue.</p>

            </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Exams