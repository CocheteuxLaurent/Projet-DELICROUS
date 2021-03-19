import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Panier from './pages/monpanier/monpanier';
import Commande from './pages/commande/commande';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import React from "react";

/* Theme variables */
import './theme/variables.css';

export const CartContext = React.createContext<any>(null);

const App: React.FC = () => {
  const [cart, setCart] = React.useState([]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
        
          <Redirect to="/home" />
          <Redirect to="monpanier/commande/home" />
          
        </Route>
        <Route exact path="/Panier" component={Panier}></Route>
        <Route exact path="/Commande" component={Commande}></Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
</CartContext.Provider>)};

export default App;
