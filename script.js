document.getElementById("furst-formation").style.display = 'none';

document.getElementById("furst-btn-formation").addEventListener("click", function () {

    document.getElementById("furst-formation").style.display = 'block';
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

document.getElementById("add-player-btn").addEventListener("click", function () {
    const name = document.getElementById("player-name").value.toUpperCase(0);
    const position = document.getElementById("player-position").value;
    const image = document.getElementById("player-image").value;
    const cf = document.getElementById("player-cf").value;
    const pac = document.getElementById("player-pac").value;
    const sho = document.getElementById("player-sho").value;
    const pas = document.getElementById("player-pas").value;
    const dri = document.getElementById("player-dri").value;
    const def = document.getElementById("player-def").value;
    const phy = document.getElementById("player-phy").value;
    const country = document.getElementById("player-country").value;
    const club = document.getElementById("player-club").value;

    const playerList = document.getElementById("player-list");
    const currentPlayers = playerList.children.length;

    if (currentPlayers >= 11) {
        alert(" Vous ne pouvez pas ajouter plus de 11 joueurs ");
        return;
    }

    if (name && position && cf && pac && sho && pas && dri && def && phy && image && club && country) {
        const playerDiv = document.createElement("div");
        playerDiv.innerHTML = `${name} - ${position} - CF: ${cf} - PAC: ${pac} - SHO: ${sho} - PAS: ${pas} - DRI: ${dri} - DEF: ${def} - PHY: ${phy} <button class="remove-player-btn">Supprimer</button>`;
        playerList.appendChild(playerDiv);

        const playerCard = document.createElement("div");
        playerCard.className = "player-card";
        playerCard.innerHTML = `
            <img class='image-pl formaton-carte-position' src="carte.png" alt="Carte du joueur" />
            <div class="card-info">
                <h3>${name}</h3>
                <div class="stat positionPosition">
                    <p>${position}</p>
                </div>
                <div class="stat imagePosition">
                    <img src="${image}" alt="img">
                </div>
                <div class="stat cfPosition">
                    <p>CF</p>
                    <p>${cf}</p>
                </div>
                <div class="stat pacPosition">
                    <p>PAC</p>
                    <p>${pac}</p>
                </div>
                <div class="stat shoPosition">
                    <p>SHO</p>
                    <p>${sho}</p>
                </div>
                <div class="stat pasPosition">
                    <p>PAS</p>
                    <p>${pas}</p>
                </div>
                <div class="stat driPosition">
                    <p>DRI</p>
                    <p>${dri}</p>
                </div>
                <div class="stat defPosition">
                    <p>DEF</p>
                    <p>${def}</p>
                </div>
                <div class="stat phyPosition">
                    <p>PHY</p>
                    <p>${phy}</p>
                </div>
                <div class="stat countryPosition">
                    <img src="${country}" alt="img">
                </div>
                <div class="stat clubPosition">
                    <img src="${club}" alt="img">
                </div>

            </div>
        `;

        document.getElementById("player-cards").appendChild(playerCard);

        document.getElementById("player-name").value = '';
        document.getElementById("player-position").value = '';
        document.getElementById("player-image").value = '';
        document.getElementById("player-cf").value = '';
        document.getElementById("player-pac").value = '';
        document.getElementById("player-sho").value = '';
        document.getElementById("player-pas").value = '';
        document.getElementById("player-dri").value = '';
        document.getElementById("player-def").value = '';
        document.getElementById("player-phy").value = '';
        document.getElementById("player-country").value = '';
        document.getElementById("player-club").value = '';

        playerDiv.querySelector(".remove-player-btn").addEventListener("click", function () {
            playerList.removeChild(playerDiv);
            document.getElementById("player-cards").removeChild(playerCard);
        });
    } else {
        alert("Veuillez remplir tous les champs.");
    }
});



let joueurs = document.querySelectorAll(".joueur");
let selectionJoueur = null;
// syntax: array.foreach(function(element,index,array))
joueurs.forEach(function (joueur) {
    joueur.addEventListener("click", function () {
        joueur.style.backgroundColor = "yellow";
        selectionJoueur = joueur;
    })

})



let cards = document.getElementById("player-cards");

cards.addEventListener("click", function () {

    const card = event.target.closest(".player-card");
    if (!card)
        return;
    else if (selectionJoueur) {
        selectionJoueur.appendChild(card);
        selectionJoueur = null;
    }

})
