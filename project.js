
let boxers = [
    {
    id: 1,
    name: "Ippo",
    caractéristiques: { 
        strength: 1300,  
        defense: 900,   
        stamina: 25000,  
        speed: 180      
    },
    techniques: [ 
    { name: "Smash", power: 1300 },             
    { name: "Uppercut", power: 1330 },          
    { name: "Gazelle Punch", power: 1320 },     
    { name: "Dempsey Roll", power: 1350 }       
    ]
    },
    {
    id: 2,
    name: "Challenger",
    caractéristiques: { 
        strength: 1250,  
        defense: 900,    
        stamina: 26000,  
        speed: 190       
    },
    techniques: [ 
        { name: "Jab", power: 1250 },                
        { name: "Uppercut", power: 1280 },          
        { name: "Crochet", power: 1265 },            
        { name: "Enchaînement", power: 1290 }        
    ]
    }
];

// tirer une technique aleatoirement
function tirerTechnique(combattant){
    let i = Math.floor(Math.random() * combattant.techniques.length);
    return combattant.techniques[i]
}

// function pour l'attaque et calcul de degat
function attaque(attaquant, defenseur){
    let technique = tirerTechnique(attaquant);
    let degatEnvoyer = technique.power;
    defenseur.caractéristiques.stamina -= degatEnvoyer;
    let coupCritique = Math.random() < 10/100

    if(coupCritique){
        console.log(`${attaquant.name} vient de mettre ${defenseur.name} KO!`);
        return "KO"
    }

    if(defenseur.caractéristiques.stamina <= 0 ){
        defenseur.caractéristiques.stamina = 0
    }

    console.log(`${attaquant.name} utilise ${technique.name} ! ${defenseur.name} perd ${degatEnvoyer} de stamina.`);
    console.log(`${defenseur.name} a maintenant ${defenseur.caractéristiques.stamina} stamina.`);


}

function round(boxer1, boxer2){
    console.log(`Debut du grand combat de ${boxer1.name} contre ${boxer2.name} !\n`);

    for (let n = 1; n <=10; n++){
        console.log(`==== Debut du round ${n} ====`);

        // decider de celui qui commence
        let premier;
        let second;
        if (boxer1.caractéristiques.speed > boxer2.caractéristiques.speed){
            console.log(`${boxer1.name} attaque en premier`);
            premier = boxer1;
            second = boxer2;
        } else {
            console.log(`${boxer2.name} attaque en premier`)
            premier = boxer2;
            second = boxer1;
        }


        // premiere attaque 
        let result1 = attaque(premier, second);

        if(result1 === "KO"){
            console.log(`${premier.name} gagne par KO au round ${n}`);
            return;
        }

        // deuxieme attaque
        if (second.caractéristiques.stamina > 0 ){
            let result2 = attaque(second, premier);
            if(result2 === "KO"){
                console.log(`${second.name} gagne par KO au round ${n}`);
            }
        }
    }

            // fin du combat au dixieme round et decider du vainqueur
            console.log(`==== Fin du combat ====`);
        if(boxer1.caractéristiques.stamina > boxer2.caractéristiques.stamina){
            console.log(`${boxer1.name} est le vainqueur du combat !!`);
        } else if (boxer2.caractéristiques.stamina > boxer1.caractéristiques.stamina){
            console.log(`${boxer2.name} est le vainqueur du combat !!`);
        } else {
            console.log("Il n'y a pas de vainqueur c'est match nulle")
        }

}




// initialiser le combat
round(boxers[0], boxers[1]);


