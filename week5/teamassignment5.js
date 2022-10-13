import hikeList from "./hikes.js";

//Object Class- Hikes
class Hikes {
    constructor(elementId) {
        this.parentElement = document.getElementById(elementId);
    }

    hideDetailedView() {
        const div = document.getElementById('detailedView');
        div.innerHTML = '';
    }

    // Show Detailed View
    showDetailedView(hike) {
        this.hideAllHikes();

        const div = document.getElementById('detailedView');

        div.innerHTML = `
        <button id="backButton" type="button">Back</button>
        <h2 class="hikeName">${hike.name}</h2>
        <img class="image" src="${hike.imgSrc}" alt="${hike.imgAlt}">
        <div class="info">
            <div>
                <h3>Distance</h3>
                <p>${hike.distance}</p>
            </div>
            <div>
                <h3>Difficulty</h3>
                <p>${hike.difficulty}</p>
            </div>
            <div>
                <h3>Description</h3>
                <p>${hike.description}</p>
            </div>
            <div>
                <h3>Directions</h3>
                <p>${hike.directions}</p>
            </div>
        </div>
        `;
        const backButton = document.getElementById('backButton');
        backButton.addEventListener("touchend", e => {
            this.showAllHikes(hike);
        });
    }

    // Show the HTML for each Hike. 
    showOneHike(hike) {
        const li = document.createElement('li');
        li.innerHTML = `
        <h2 class="hikeName">${hike.name}</h2>
        <img class="image" src="${hike.imgSrc}" alt="${hike.imgAlt}">
        <div class="info">
            <div>
                <h3>Distance</h3>
                <p>${hike.distance}</p>
            </div>
            <div>
                <h3>Difficulty</h3>
                <p>${hike.difficulty}</p>
            </div>
        </div>
      `;
        li.addEventListener("touchend", e => {
            this.showDetailedView(hike);
        });
        return li;
    }

    // Hide All Hikes
    hideAllHikes() {
        const ul = document.getElementById('hikes');
        ul.innerHTML = '';
    }

    //Getting the ul and creating the li for each hike. 
    showAllHikes() {
        this.hideDetailedView();
        const ul = document.getElementById('hikes');

        for (let i = 0; i < hikeList.length; i++) {
            const li = this.showOneHike(hikeList[i]);
            ul.appendChild(li);
        }
    }

}

//When page loads, show all hikes. 
window.addEventListener("load", () => {
    const hikes = new Hikes('hikes');
    hikes.showAllHikes();
});