const pageTitle = `"STRINGBAG"`;
const mainImage = "img/swordfish.jpg";
const altText = "The Fairey Swordfish";
const figCaptionText = "Photo By Tony Hisgett - Birmingham, UK";
const figCaptionHref = "https://www.flickr.com/photos/hisgett/";

document.title = `Week 4 Homework`;
document.querySelector(".pageTitle").textContent = pageTitle;
document.querySelector(".mainImage").setAttribute("src", mainImage);
document.querySelector(".mainImage").setAttribute("alt", altText);
document.querySelector("#mainImageCaption").innerHTML = `<a href=${figCaptionHref} target="_blank">${figCaptionText}</a>`;

const mainContent = {
    title: `The Fairey Swordfish`,
    text:[`The Fairey Swordfish is a biplane torpedo bomber, designed by the Fairey Aviation Company. Originating in the early 1930s, the Swordfish, nicknamed "Stringbag", was principally operated by the Fleet Air Arm of the Royal Navy.`, 
    
    `Despite being outmoded by 1939, the Swordfish achieved some spectacular successes during the war. Notable events included sinking one battleship and damaging two others of the Regia Marina (the Italian navy) during the Battle of Taranto, and the famous attack on the German battleship Bismarck, which contributed to her eventual demise. Swordfish sank a greater tonnage of Axis shipping than any other Allied aircraft during the war. The Swordfish remained in front-line service until V-E Day, having outlived some of the aircraft intended to replace it.`],

    cite: `This information, and more, can be found at <cite><a href="https://en.wikipedia.org/wiki/Fairey_Swordfish" target="_blank" >Wikipedia.org/wiki/Fairey_Swordfish</a></cite>`
};

const article = document.querySelector("article");
article.innerHTML = `<h2>${mainContent.title}</h2><hr>`;

for (const item of mainContent.text) {

        article.innerHTML += `<p>${item}</p>`;
}

article.innerHTML += `<p id="cite">${mainContent.cite}</p>`;

const listOne = {
    Title: `General Characteristics`,
    Length: `35' 8"`,
    Wingspan: `45' 6/"`,
    GrossWeight: `7,580 lbs`,
    Powerplant: `690 hp, Bristol Pegasus IIIM.3`
};

const leftListTitle = document.querySelector("#leftListTitle");
leftListTitle.textContent = listOne.Title;

const leftListDiv = document.querySelector("#leftListDiv > ul");
for (const key in listOne) {

    if(key !== "Title"){

        leftListDiv.innerHTML += `<li>${key}: ${listOne[key]}</li>`;
    }
}

const listTwo = {
    Title: `Principal Operators`,
    operators:[
        "Royal Navy",
        "Royal Air Force",
        "Royal Canadian Air Force",
        "Royal Netherlands Navy"
    ]
};

const rightListTitle = document.querySelector("#rightListTitle");
rightListTitle.textContent = listTwo.Title;

const rightListDiv = document.querySelector("#rightListDiv > ul");
for (const operator of listTwo.operators) {

        rightListDiv.innerHTML += `<li>${operator}</li>`;
}

const date = new Date();
const year = date.getFullYear();
document.getElementById("date").innerHTML = year;
