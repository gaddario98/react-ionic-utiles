import { isPlatform } from "@ionic/react";

export const isWeb =
  (isPlatform('desktop') && !isPlatform('ios') && !isPlatform('android')) ||
  isPlatform('mobileweb');
  
  export const isIosDevice = () => {
    return isPlatform('ios') && !isWeb;
  };
  