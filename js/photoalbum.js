const photo = document.querySelectorAll(".album__photo");
const album = document.querySelector(".album");
const URL = "https://dog.ceo/api/breeds/image/random";
const fullScreenPhoto = document.querySelector(".fullscreenphoto");
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
let siblingBefore;
let siblingAfter;
let currentPhoto;

photo.forEach((photo) => {
	fetch(URL)
		.then((res) => res.json())
		.then((data) => {
			photo.setAttribute("src", `${data.message}`);
		})
		.catch((err) => err.log("API ERROR"));

	photo.addEventListener("click", showPhotoOnFullScreen);
});

function showPhotoOnFullScreen() {
	const img = fullScreenPhoto.firstElementChild;
	fullScreenPhoto.classList.remove("hidden");

	img.addEventListener("click", () => {
		fullScreenPhoto.classList.add("hidden");
	});

	img.setAttribute("src", `${this.getAttribute("src")}`);

	siblingAfter = this.nextElementSibling;
	siblingBefore = this.previousElementSibling;
	currentPhoto = this;
	console.log(siblingAfter, siblingBefore, currentPhoto);
}

const updateSibling = (before, after) => {
	const img = fullScreenPhoto.firstElementChild;
	const lastPhoto = album.lastElementChild.getAttribute("src");
	const firstPhoto = album.firstElementChild.getAttribute("src");

	// if (siblingAfter === null) {
	// 	img.setAttribute("src", `${firstPhoto}`);
	// } else if (siblingBefore === null) {
	// 	img.setAttribute("src", `${lastPhoto}`);
	// } else {
	siblingAfter = currentPhoto.nextElementSibling;
	siblingBefore = currentPhoto.previousElementSibling;
	// }
};

const switchToLeftPhoto = () => {
	const img = fullScreenPhoto.firstElementChild;
	img.setAttribute("src", `${siblingBefore.getAttribute("src")}`);
	currentPhoto = currentPhoto.previousElementSibling;

	updateSibling();
};

const switchToRightPhoto = () => {
	const img = fullScreenPhoto.firstElementChild;
	img.setAttribute("src", `${siblingAfter.getAttribute("src")}`);
	currentPhoto = currentPhoto.nextElementSibling;

	updateSibling();
};

leftBtn.addEventListener("click", switchToLeftPhoto);
rightBtn.addEventListener("click", switchToRightPhoto);
