import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Menu1 from './Menu1';
import './Home.css';
import React from 'react';
import { IonItem, IonLabel, IonList, IonRadio, IonRadioGroup, IonSelectOption, IonSelect } from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonThumbnail } from '@ionic/react';

const Home: React.FC = () => {
  return (
    <>
      <Menu1 />

      <IonCard className='cardHome' color="secondary">
        {/* <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader> */}
        <IonCardContent>
          Card
          <IonList>
            <IonItem>
              {/* <IonLabel>
                <p>Họ và tên</p>
                
              </IonLabel> */}
              <IonSelect interface="popover" placeholder="Select fruit">
                <IonSelectOption value="apples">Apples</IonSelectOption>
                <IonSelectOption value="oranges">Oranges</IonSelectOption>
                <IonSelectOption value="bananas">Bananas</IonSelectOption>
              </IonSelect>

            </IonItem>
            {/* <IonItem>
              <IonThumbnail slot="start">
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
              </IonThumbnail>
              <IonLabel>Item</IonLabel>
            </IonItem>

            <IonItem>
              <IonThumbnail slot="start">
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
              </IonThumbnail>
              <IonLabel>Item</IonLabel>
            </IonItem>

            <IonItem>
              <IonThumbnail slot="start">
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
              </IonThumbnail>
              <IonLabel>Item</IonLabel>
            </IonItem>

            <IonItem lines="none">
              <IonThumbnail slot="start">
                <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
              </IonThumbnail>
              <IonLabel>Item</IonLabel>
            </IonItem> */}
          </IonList>
        </IonCardContent>
      </IonCard>


    </>
  );
};

export default Home;
