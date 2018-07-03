module.exports = (tablePlantersData,tableCampaignData,tableAreasData)=>{
  return new Promise((resolve,reject)=>{
     function success(){console.log("database opened");}
     function failure(error){console.log(error);}
     let db = null;
         db = window.sqlitePlugin.openDatabase({name: 'MctDataBase', location: 'default'},success,failure);
         const j = tablePlantersData.length;
         const k = tableCampaignData.length;
         const l = tableAreasData.length;
         
         for(let i=0; i<j; i++){
           db.executeSql('INSERT INTO planteurs VALUES (?,?,?,?,?,?,?,?,?)', [tablePlantersData[i].id,tablePlantersData[i].name,tablePlantersData[i].telephone,tablePlantersData[i].section,tablePlantersData[i].commission,tablePlantersData[i].matricule,tablePlantersData[i].longSechoir,tablePlantersData[i].images,tablePlantersData[i].groupeplanteur],(resultSet)=>{
             console.log(resultSet);
             console.log('resultSet.insertId: ' + resultSet.insertId);
             console.log('resultSet.rowsAffected: ' + resultSet.rowsAffected);
           },(error)=>{
              console.log('SELECT error: ' + error.message);
           }); 
         }
        
         for(let i=0; i<k; i++){
           db.executeSql('INSERT INTO campagnes VALUES (?,?,?,?,?,?,?,?,?,?)', [tableCampaignData[i].id,tableCampaignData[i].name,tableCampaignData[i].passwordPlan,tableCampaignData[i].prixFeuille1,tableCampaignData[i].prixFeuille2,tableCampaignData[i].prixFeuille3,tableCampaignData[i].prixFeuilleX,tableCampaignData[i].prixCoupe,tableCampaignData[i].tauxRefraction,tableCampaignData[i].prixTriage],(resultSet)=>{
             console.log('resultSet.insertId: ' + resultSet.insertId);
             console.log('resultSet.rowsAffected: ' + resultSet.rowsAffected);
           },(error)=>{
              console.log('SELECT error: ' + error.message);
           }); 
         }
      
         for(let i=0; i<l; i++){
           db.executeSql('INSERT INTO zones VALUES (?,?)', [tableAreasData[i].id,tableAreasData[i].name],(resultSet)=>{
             console.log('resultSet.insertId: ' + resultSet.insertId);
             console.log('resultSet.rowsAffected: ' + resultSet.rowsAffected);
           },(error)=>{
              console.log('SELECT error: ' + error.message);
           }); 
         }
       resolve("All insertions are a success"); 
  });
};