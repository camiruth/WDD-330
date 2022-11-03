
let defaultUrl = 'https://swapi.dev/api/people';
let previousLink = null;
let nextLink = null;

const tableView = document.getElementById('tableView');
const detailedView = document.getElementById('detailedView');

const hideTableView = () => {
    tableView.style.display = 'none';
    detailedView.style.display = 'unset';
};
const hideDetailedView = () => {
    tableView.style.display = 'unset';
    detailedView.style.display = 'none';
};

const showDetailedView = (person) => {
    hideTableView();
    console.log('person', person);

    const div = document.getElementById('detailedView');
    div.innerHTML = `
        <button id="backButton" type="button">Back</button>
        <h2 class="personName">${person.name}</h2>
        <div class="info">
            <div>
                <p>
                  <span class="label">Eye Color:</span>
                  <span>${person.eye_color}</span>
                </p>
            </div>
            <div>
                <p>
                    <span class="label">Mass:</span>
                    <span>${person.mass}</span>
                </p>
            </div>
            <div>
                <p>
                    <span class="label">Birth Year:</span>
                    <span>${person.birth_year}</span>
                </p>
            </div>
            <div>
                <p>
                    <span class="label">Hair Color:</span>
                    <span>${person.hair_color}</span>
                </p>
            </div>
            <div>
                <p>
                    <span class="label">Height:</span>
                    <span>${person.height}</span>
                </p>
            </div>
            <div>
                <p>
                    <span class="label">Skin Color:</span>
                    <span>${person.skin_color}</span>
                </p>
            </div>
        </div>
    `;
    const backButton = document.getElementById('backButton');
    backButton.addEventListener("click", e => {
        fetchPeople();
    });
};

const generateTable = (response) => {
    const data = response.results;

    previousLink = response.previous;
    nextLink = response.next;

    const tbody = document.getElementById('peopleListTbody');
    tbody.innerHTML = '';
    for (let i = 0; i< data.length; i++) {
        const tr = document.createElement('tr');
        tr.addEventListener("click", e => {
            showDetailedView(data[i]);
        });
        const tdName = document.createElement('td');
        tdName.innerHTML = data[i].name;
        const tdGender = document.createElement('td');
        tdGender.innerHTML = data[i].gender;
        tr.appendChild(tdName);
        tr.appendChild(tdGender);
        tbody.appendChild(tr);
    }
};

const fetchPeople = async(url) => {
    hideDetailedView();
    let fetchUrl = defaultUrl;
    if (url) {
        fetchUrl = url;
    }
    const fetchPeople = await fetch(fetchUrl);
    const response = await fetchPeople.json();
    generateTable(response);
};

const prevButton =  document.getElementById('prev');
prevButton.addEventListener("click", function() {
    fetchPeople(previousLink);
});

const nextButton =  document.getElementById('next');
nextButton.addEventListener("click", function() {
    fetchPeople(nextLink);
});

window.addEventListener("load", async() => {
    fetchPeople();
});