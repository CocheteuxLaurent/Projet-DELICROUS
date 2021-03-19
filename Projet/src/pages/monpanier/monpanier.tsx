import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonBackButton, IonButtons, IonIcon, IonText,IonInput, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCheckbox, IonImg, IonItem } from '@ionic/react';
import './monpanier.css';
import { cart } from "ionicons/icons";
import React from 'react';
import { CartContext } from '../../App';

const items = [
    {
      id: 1,
      name: "Burger",
      description: "Burger plus des frites",
      price: 10,
      imageUrl: "./assets/Burger.jpeg",
    },
    {
      id: 2,
      name: "Pizza",
      description: "Pizza au chorizo",
      price: 10,
      imageUrl: "./assets/Pizza.jpeg",
    },
    {
      id: 3,
      name: "Spaghetti",
      description: "Spaguetti bolognaise",
      price: 10,
      imageUrl: "./assets/Spaghetti.jpeg",
    },
    {
      id: 4,
      name: "Crepe",
      description: "Crepe au nutella, banane et speculos",
      price: 10,
      imageUrl: "./assets/Crepe.jpeg",
    },
    {
      id: 5,
      name: "Gaufre",
      description: "Gaufre au sucre",
      price: 10,
      imageUrl: "./assets/Gaufre.jpeg",
    },
  ];



const Home: React.FC = () => {
    const [cart, setCart] = React.useContext(CartContext);
    console.log(cart);
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton />

                    </IonButtons>
                    <IonTitle>Delivecrous
                    <IonIcon icon={cart} ></IonIcon>
                    
                    </IonTitle>
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
                <h3>Panier</h3>
                <div style={{
            textAlign : "left",
          }}>
             {items.filter((e)=>{
                 console.log(e);
                 const found=cart.find(i=>i.itemId==e.id)
                 return found;
             }).map((item:any) => {
            const isEnabled =
            cart.length && cart.find((i:any) => i.itemId === item.id);
          console.log(isEnabled);
          const getCartItemIndex = (id:any) =>
            cart.findIndex((e:any) => e.itemId === id);
            return (
              <IonCard key={item.id}>
                <IonCardHeader>
                  <IonImg src={item.imageUrl}></IonImg>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <IonCardTitle>{item.name}</IonCardTitle>
                    <IonText>
                      <h5>{item.price} €</h5>
                    </IonText>
                  </div>
                </IonCardHeader>
                <IonCardContent>
                  <h6>{item.description}</h6>
                </IonCardContent>

                <IonItem>
                  <IonCheckbox checked={isEnabled} onClick={(e)=>{
                    if (!isEnabled) {
                      const updatedCard = [...cart];
                      updatedCard.push({ itemId: item.id, quantity: 1 });
                      console.log(updatedCard);
                      setCart(updatedCard);
                    } else {
                      const updatedCard = cart.filter(
                        (e) => e.itemId !== item.id
                      );
                      setCart(updatedCard);
                    }
                  }}></IonCheckbox>
                </IonItem>
              </IonCard>
            );
          })}       
                <IonText><h5>Ou veux-tu te faire livrer ?</h5></IonText>
                <IonText><h5>En salle de TD ?</h5></IonText>
                </div>
                <IonInput placeholder="Rue" clearInput></IonInput>
                <IonInput placeholder="Ville" clearInput></IonInput>
                <IonInput placeholder="Code Postal" clearInput></IonInput>
            </IonContent>
           
            <IonButton routerLink={'Commande'}>Commande</IonButton>
            
        </IonPage>
    );
};

export default Home;