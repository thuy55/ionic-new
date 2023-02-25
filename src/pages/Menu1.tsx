import React from 'react';
import { 
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { IonItem, IonLabel } from '@ionic/react';
import { caretForwardOutline } from 'ionicons/icons';
function Menu1() {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        <IonItem detail={true}>
        <IonLabel>
          <h3>Text Item</h3>
          <p>Detail set to true - detail arrow displays on both modes</p>
        </IonLabel>
      </IonItem>

      <IonItem button>
        <IonLabel>
          <h3>Button Item</h3>
          <p>Default detail - detail arrow displays on iOS only</p>
        </IonLabel>
      </IonItem>

      <IonItem button detail={true}>
        <IonLabel>
          <h3>Button Item</h3>
          <p>Detail set to true - detail arrow displays on both modes</p>
        </IonLabel>
      </IonItem>

      <IonItem button detail={false}>
        <IonLabel>
          <h3>Button Item</h3>
          <p>Detail set to false - detail arrow hidden on both modes</p>
        </IonLabel>
      </IonItem>

      <IonItem button detail={true} detailIcon={caretForwardOutline}>
        <IonLabel>
          <h3>Button Item</h3>
          <p>Detail set to true - detail arrow displays on both modes</p>
          <p>Detail icon set to caret-forward-outline</p>
        </IonLabel>
      </IonItem>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            {/* <IonTitle>Menu</IonTitle> */}
          </IonToolbar>
        </IonHeader>
        {/* <IonContent className="ion-padding">
          Tap the button in the toolbar to open the menu.
        </IonContent> */}
      </IonPage>
    </>
  );
}
export default Menu1;