const apiurl = "https://pixabay.com/api/?key=45343881-3bcd954244611abd63f1a2733&q=yellow+flowers&image_type=photo&pretty=true";
const apikey = "45343881-3bcd954244611abd63f1a2733";

let input = document.getElementById("searchInput");
let button = document.getElementById("button");
let show = document.getElementById("showimgs");  // Assuming there's an element with id 'Show'

let searchimgs = async () => {
    let keyword = input.value;
    let page = 1;

    try {
        let response = await fetch(`https://pixabay.com/api/?key=${apikey}&q=${keyword}&image_type=photo&pretty=true&page=${page}`);
        let data = await response.json();
        let images = data.hits;

        images.forEach((e) => {
            let photo = document.createElement("img");
            photo.src = e.largeImageURL;
            console.log(e.largeImageURL);
            show.appendChild(photo);
        });
    } catch (error) {
        console.error("Error fetching images:", error);
    }
};

button.addEventListener("click", () => {
    searchimgs();
});
