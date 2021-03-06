module.exports = (navigationViewToInsert)=>{
   const {Page,ScrollView,TextView} = require('tabris');
   localStorage.setItem('viewForPreventBackNavigation','displayBilanAllOperations');
   require('../modules/preventBackNavigation.js')(navigationViewToInsert);
   const userInfos = JSON.parse(localStorage.getItem('storeMctUserInfos'));
   const capedWeight = require('../modules/calculCapedWeight.js')();
   const montantCape = require('../modules/calculMontantCape.js')(userInfos.withRemontage,userInfos.remontageLevel);
   const montantCoupe = require('../modules/calculMontantCoupe.js')();
   const primeSechoirProvisoire = require('../modules/calculPrimeSechoirProvisoire.js')();
   const primeTriage = require('../modules/calculPrimeTriage.js')();
   const primeTotale = require('../modules/sumOfAllPrimes.js')();
   const liveredWeight = require('../modules/calculLiveredWeight')();
   const buyedWeight = require('../modules/calculBuyedWeight.js')();
   const montantAchat = require('../modules/calculMontantAchat.js')(userInfos.withRemontage,userInfos.remontageLevel);
   const themeColor = "#00c853";
   const displayAllDetailsPage = new Page({title:"Récapitulatif",background:`#eeeeee`}).on("disappear", function(){this.dispose();}).appendTo(navigationViewToInsert);
    const scrollView = new ScrollView({left:0,right:0,top:0,bottom:0,background:'#fafafafa'}).appendTo(displayAllDetailsPage);
    const capedWeightText = new TextView({left:15,right:15,top:15,text:"POIDS CAPE",textColor:'#757575',font:"20px roboto"}).appendTo(scrollView);
    const capedWeightValue = new TextView({left:15,right:15,top:['prev()',5],text:capedWeight,textColor:themeColor,font:"18px roboto"}).appendTo(scrollView);
    const coupeWeightText = new TextView({left:15,right:15,top:['prev()',15],text:"POIDS COUPE",textColor:'#757575',font:"20px roboto"}).appendTo(scrollView);
    const coupeWeightValue = new TextView({left:15,right:15,top:['prev()',5],text:userInfos.weightCutLeaf,textColor:themeColor,font:"18px roboto"}).appendTo(scrollView);
    const liveredWeightText = new TextView({left:15,right:15,top:['prev()',15],text:"POIDS LIVRE",textColor:'#757575',font:"20px roboto"}).appendTo(scrollView);
    const liveredWeightValue = new TextView({left:15,right:15,top:['prev()',5],text:liveredWeight,textColor:themeColor,font:"18px roboto"}).appendTo(scrollView);
    const buyedWeightText = new TextView({left:15,right:15,top:['prev()',15],text:"POIDS PAYE",textColor:'#757575',font:"20px roboto"}).appendTo(scrollView);
    const buyedWeightValue = new TextView({left:15,right:15,top:['prev()',5],text:buyedWeight,textColor:themeColor,font:"18px roboto"}).appendTo(scrollView);
    const montantCapeText = new TextView({left:15,right:15,top:['prev()',15],text:"MONTANT CAPE",textColor:'#757575',font:"20px roboto"}).appendTo(scrollView);
    const montantCapeValue = new TextView({left:15,right:15,top:['prev()',5],text:`${montantCape} Fcfa`,textColor:themeColor,font:"18px roboto"}).appendTo(scrollView);
    const montantCoupeText = new TextView({left:15,right:15,top:['prev()',15],text:"MONTANT COUPE",textColor:'#757575',font:"20px roboto"}).appendTo(scrollView);
    const montantCoupeValue = new TextView({left:15,right:15,top:['prev()',5],text:`${montantCoupe} Fcfa`,textColor:themeColor,font:"18px roboto"}).appendTo(scrollView);
    const primeSechoirProvisoireText = new TextView({left:15,right:15,top:['prev()',15],text:"PRIME SECHOIR PROVISOIRE",textColor:'#757575',font:"20px roboto"}).appendTo(scrollView);
    const primeSechoirProvisoireValue = new TextView({left:15,right:15,top:['prev()',5],text:`${primeSechoirProvisoire} Fcfa`,textColor:themeColor,font:"18px roboto"}).appendTo(scrollView);
    const primeTriageText = new TextView({left:15,right:15,top:['prev()',15],text:"PRIME TRIAGE",textColor:'#757575',font:"20px roboto"}).appendTo(scrollView);
    const primeTriageValue = new TextView({left:15,right:15,top:['prev()',5],text:`${primeTriage} Fcfa`,textColor:themeColor,font:"18px roboto"}).appendTo(scrollView);
    const totalPrimeText = new TextView({left:15,right:15,top:['prev()',15],text:"PRIME TOTALE",textColor:'#757575',font:"20px roboto"}).appendTo(scrollView);
    const totalPrimeValue = new TextView({left:15,right:15,top:['prev()',5],text:`${primeTotale} Fcfa`,textColor:themeColor,font:"18px roboto"}).appendTo(scrollView);
    const montantAchatText = new TextView({left:15,right:15,top:['prev()',15],text:"MONTANT ACHAT",textColor:'#757575',font:"20px roboto"}).appendTo(scrollView);
    const montantAchatValue = new TextView({left:15,right:15,top:['prev()',5],text:`${montantAchat} Fcfa`,textColor:themeColor,font:"18px roboto"}).appendTo(scrollView);
};