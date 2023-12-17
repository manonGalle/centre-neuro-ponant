import "./Team.css"
import team from "../../assets/images/avengers.jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Team = () => {
  return (
    <div className="Super-team">
      <Header/>
      <div className='Team'>

      <h1>Notre équipe</h1>

          <div className="Team-introduction">
            <p>Nous tenons à proposer à l’ensemble des patients une prise en charge des troubles neurologiques de qualité, basée sur l’écoute et la rigueur. Cela pour proposer les thérapeutiques les plus adaptées, innovantes, médicamenteuses ou non et ainsi soulager les malades. </p>
          </div>

            <div className="Team-paragraphe">

                <p>L’équipe médicale est composée de 6 médecins neurologue :

                  <h2>Dr. Julia CHENOT, conventionnée secteur 1</h2>
                  <ul>
                      <li>Ancienne interne des hôpitaux de Brest</li>
                      <li>Ancienne praticien hospitalier des hôpitaux de Morlaix</li>
                    </ul>
                  <h2>Dr. Sabine PRUD’HON, conventionnée secteur 2 avec OPTAM*</h2>
                  <ul>
                      <li>Ancienne interne des hôpitaux de Paris</li>
                      <li>Ancienne chef de clinique des universités – assistante hospitalière des hôpitaux de Paris</li>
                      <li>Ancienne praticienne hospitalière des hôpitaux de Brest</li>
                      </ul>
                  <h2>Dr. Victor QUERE, conventionné secteur 2 avec OPTAM*</h2>
                  <ul>
                      <li>Ancien interne des hôpitaux de Brest</li>
                      <li>Ancien assistant hospitalier des hôpitaux de Brest</li>
                  </ul>
                  <h2>Dr. Elise RETHO, conventionnée secteur 2 avec OPTAM*</h2>
                  <ul>
                      <li>Ancienne interne des hôpitaux de Brest</li>
                      <li>Ancienne assistante hospitalière des hôpitaux de Brest et Landerneau</li>
                  </ul>
                  <h2>Dr. Pierre-Yves ROUSSEAU, conventionné secteur 2 avec OPTAM*</h2>
                  <ul>
                      <li>Ancien interne des hôpitaux de Brest</li>
                      <li>Ancien chef de clinique des universités – assistant hospitalier des hôpitaux de Brest</li>
                  </ul>
                  <h2>Dr. Amélie TABORE, conventionnée secteur 2 avec OPTAM*</h2>
                  <ul>
                      <li>Ancienne interne des hôpitaux de Brest</li>
                      <li>Ancienne assistante hospitalière des hôpitaux de Brest et de Morlaix</li>
                  </ul>

                <br/>*pas de dépassement d’honoraires en dehors des ponctions lombaires</p>

                <p>L’équipe de secrétariat est composée de <span>Mme Gwénaëlle CONTY</span> et <span>Mme Juliette GUILLOU</span>. Elles seront à votre écoute pour fixer les rendez-vous en présentiel ou par téléphone au 02.52.32.38.18. Elles vous accueilleront au centre de consultations et vous remettront les documents nécessaires à votre prise en charge au décours de la consultation médicale. Elles participent pleinement au bon déroulé de la prise en charge des patients.</p>

            </div>
            
            <img src={team} alt="équipe"></img>
                <p>Image de <a href="https://fr.freepik.com/vecteurs-libre/theme-equipe-professionnels-sante_7771987.htm#query=%C3%A9quipe%20m%C3%A9decins&position=4&from_view=search&track=ais&uuid=2e0de45a-9d69-4134-9f44-9a2625fd057e">Freepik</a></p>
      </div>
      <Footer/>
    </div>

  )
}

export default Team