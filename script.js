

document.getElementById("furst-formation").style.display = 'none';

document.getElementById("furst-btn-formation").addEventListener("click", function () {

    document.getElementById("furst-formation").style.display = 'block'
});

document.getElementById("second-btn-formation").addEventListener("click", function () {

    document.getElementById("forward-center").style.left = "385px";
    document.getElementById("forward-center").style.top = "122px";
    document.getElementById("forward-center").style.transition = "all 0.8s ease";

    document.getElementById("center-center").style.left = "190px";
    document.getElementById("center-center").style.top = "-120px";
    document.getElementById("center-center").style.transition = "all 0.8s ease";

});

document.getElementById("furst-btn-formation").addEventListener("click", function () {

    document.getElementById("forward-center").style.left = "289px";
    document.getElementById("forward-center").style.top = "-60px";
    document.getElementById("forward-center").style.transition = "all 0.8s ease";

    document.getElementById("center-center").style.left = "290px";
    document.getElementById("center-center").style.top = "-120px";
    document.getElementById("center-center").style.transition = "all 0.8s ease";

});



// document.getElementById("add-player-btn").addEventListener("click", function () {
//     const name = document.getElementById("player-name").value;
//     const position = document.getElementById("player-position").value;
//     const stats = document.getElementById("player-stats").value;

//     const playerList = document.getElementById("player-list");
//     const currentPlayers = playerList.children.length;

//     if (currentPlayers >= 11) {
//         alert("vous ne pouvez pas ajouter plus de 11 joueurs ")
//     }

//     if (name && position && stats) {

//         const playerDiv = document.createElement("div");
//         playerDiv.innerHTML = `${name} - ${position} - ${stats} <button classe="remove-player-btn">supprimer</button> `;
//         playerList.appendChild(playerDiv);


//         const playerCard = document.createElement("div");
//         playerCard.className = "player-card";
//         playerCard.innerHTML = `
//         <img src='carte.png' alt='carte'/>
//         <div class="card-info">
//              <h3>${name}</h3>
//              <p>${position}</p>
//              <p>stats:${stats}</p>
//         </div>` ;

//         document.getElementById("player-cards").appendChild(playerCard);

//         document.getElementById("player-name").value="";
//         document.getElementById("player-position").value="";
//         document.getElementById("player-stats").value="";

//         playerDiv.querySelector(".remove-player-btn").addEventListener("click",function(){
//             playerList.removeChild(playerDiv);

//             document.getElementById("player-cards").removeChild(playerCard);

//         });

//     }else {
//         alert("veuillez remplir tous les champs.");
//     }



// });


document.getElementById("add-player-btn").addEventListener("click", function () {
    const name = document.getElementById("player-name").value;
    const position = document.getElementById("player-position").value;
    const stats = document.getElementById("player-stats").value;


    // Vérifiez le nombre de joueurs déjà ajoutés
    const playerList = document.getElementById("player-list");
    const currentPlayers = playerList.children.length;

    if (currentPlayers >= 11) {
        alert("Vous ne pouvez pas ajouter plus de 11 joueurs.");
        return;
    }

    if (name && position && stats) {
        const playerDiv = document.createElement("div");
        playerDiv.innerHTML = `${name} - ${position} - ${stats} <button class="remove-player-btn">Supprimer</button>`;
        playerList.appendChild(playerDiv);



        // nsan3o carte dyal joueur
        const playerCard = document.createElement("div");
        playerCard.className = "player-card";
        playerCard.innerHTML = `
            <img src="carte.png" alt="Carte du joueur" />
            <div class="card-info">
                <h3>${name}</h3>
                <p>${position}</p>
                <p>Stats: ${stats}</p>
            </div>
        `;


        document.getElementById("player-cards").appendChild(playerCard);

        // nmasho linput 
        document.getElementById("player-name").value = '';
        document.getElementById("player-position").value = '';
        document.getElementById("player-stats").value = '';

        // Add event listener to remove button
        playerDiv.querySelector(".remove-player-btn").addEventListener("click", function () {
            playerList.removeChild(playerDiv);
            // Supprimer la carte correspondante
            document.getElementById("player-cards").removeChild(playerCard);
        });
    } else {
        alert("Veuillez remplir tous les champs.");
    }
});

// document.getElementById("aaaa").addEventListener("click",function(){
//     document.getElementById("forward-left").innerHTML= Image
// })
