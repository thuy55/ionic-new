import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Menu1 from './Menu1';
import './Tab2.css';
import React from 'react';
import { IonItem, IonLabel, IonList, IonRadio, IonRadioGroup } from '@ionic/react';

const Tab2: React.FC = () => {
  return (
    
    <>
    
    <Menu1/>
    <IonList>
      <IonRadioGroup value="strawberries">
        <IonItem>
          <IonLabel>Grapes</IonLabel>
          <IonRadio slot="end" value="grapes"></IonRadio>
        </IonItem>

        <IonItem>
          <IonLabel>Strawberries</IonLabel>
          <IonRadio slot="end" value="strawberries"></IonRadio>
        </IonItem>

        <IonItem>
          <IonLabel>Pineapple</IonLabel>
          <IonRadio slot="end" value="pineapple"></IonRadio>
        </IonItem>

        <IonItem>
          <IonLabel>Cherries (Disabled)</IonLabel>
          <IonRadio slot="end" value="cherries" disabled={true}></IonRadio>
        </IonItem>
      </IonRadioGroup>
    </IonList>

    </>
  );
};

export default Tab2;
