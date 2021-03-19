import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons, IonImg, IonText} from '@ionic/react';
import './commande.css';



const Home: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />

                    </IonButtons>
                    <IonTitle>Delivecrous</IonTitle>
                   
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton />

                        </IonButtons>

                        
                        <IonTitle size="large">Delivecrous</IonTitle>
                    </IonToolbar>
                </IonHeader>
             
                <IonImg src="./assets/commandeValider.jpeg"></IonImg>
                <IonText><h2>Commande envoyée !</h2></IonText>
            <IonText><h6>Elle vous attendra à la fin de votre cours !</h6></IonText>
                
            </IonContent>
           
        </IonPage>
    );
};

export default Home;