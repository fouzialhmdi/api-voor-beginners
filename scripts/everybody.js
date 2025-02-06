const fallbackWebsite = "https://youtu.be/dQw4w9WgXcQ";

const endpointSquad = 'items/person/?filter={"squads":{"squad_id":15}}';

const everbodyURL = baseURL + endpointSquad;

getData (everbodyURL).then(dataIedereen => {
    // console.log(dataIedereen);

    let everybodySection = document.querySelector("section:nth-of-type(2)")
    let persoon = dataIedereen.data;
    
    persoon.forEach( persoon => {
        
    let naamPersoon = persoon.name; 
    let persoonIMG = persoon.avatar;
    let websitePersoon = persoon.website;

    let randomGetal = Math.random;

if (persoonIMG) {
    // do nothing
} else {
    // gebruik default image
    persoonIMG = "images/placeholder2.svg"
}

if (websitePersoon) {
    // do nothing
} else {
    // gebruik fallback website
    websitePersoon = "fallbackWebsite"
}

      let persoonHTML =
         `<article>
      <h3>${naamPersoon}</h3>
      <img src="${persoonIMG}" alt="${naamPersoon}">
      <a href="${websitePersoon}" aria-label="${naamPersoon}">website</a>
    </article>`;

    everybodySection.insertAdjacentHTML('beforeend', persoonHTML)

    });

});















/**************/
/* SPIEKBRIEF */
/**************/

// const urlSquad = baseURL + endpointSquad;

// const list = document.querySelector('section:nth-of-type(2)');

// getEverybody();

// function getEverybody() {
// 	getData(urlSquad).then( data => { 

// 		const persons = data.data;

// 		persons.forEach(person => {

// 			let personName = person.name;
// 			let personImgSrc = person.avatar;
// 			let personWebsite = person.website;
	
// 			if (!personImgSrc) {
// 				let randomNr =  Math.floor( Math.random() * 5 ) + 1;
// 				personImgSrc = `images/placeholder${randomNr}.svg`;
// 			}

// 			if (!personWebsite) {
// 				personWebsite = fallbackWebsite;
// 			}

// 			personHTML = 
// 				`<article>
// 					<h3>${personName}</h3>
// 					<img src="${personImgSrc}" alt="${personName}">
// 					<a href="${personWebsite}" aria-label="de website van ${personName}">website</a>
// 				</article>`;

// 				list.insertAdjacentHTML('beforeend', personHTML);
// 		});
// 	});
// }