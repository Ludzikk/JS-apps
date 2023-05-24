const photo = document.querySelectorAll(".album__photo");
const album = document.querySelector(".album");
const URL = "https://dog.ceo/api/breeds/image/random";
const fullScreenPhoto = document.querySelector(".fullscreenphoto");
const fullScreenPhotoBg = document.querySelector(".fullscreenphoto__bg")
const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
let siblingBefore;
let siblingAfter;
let currentPhoto;
let lastPhoto;
let firstPhoto;

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

	img.setAttribute("src", `${this.getAttribute("src")}`);

	siblingAfter = this.nextElementSibling;
	siblingBefore = this.previousElementSibling;
	currentPhoto = this;

	lastPhoto = album.lastElementChild;
	firstPhoto = album.firstElementChild;
}

const updateSibling = () => {
	siblingAfter = currentPhoto.nextElementSibling;
	siblingBefore = currentPhoto.previousElementSibling;
};

const switchToLeftPhoto = () => {
	const img = fullScreenPhoto.firstElementChild;

	if (siblingBefore === null) {
		img.setAttribute("src", `${lastPhoto.getAttribute("src")}`);
		currentPhoto = lastPhoto;
	} else {
		img.setAttribute("src", `${siblingBefore.getAttribute("src")}`);
		currentPhoto = currentPhoto.previousElementSibling;
	}

	updateSibling();
};

const switchToRightPhoto = () => {
	const img = fullScreenPhoto.firstElementChild;

	if (siblingAfter === null) {
		img.setAttribute("src", `${firstPhoto.getAttribute("src")}`);
		currentPhoto = firstPhoto;
	} else {
		img.setAttribute("src", `${siblingAfter.getAttribute("src")}`);
		currentPhoto = currentPhoto.nextElementSibling;
	}

	updateSibling();
};

leftBtn.addEventListener("click", switchToLeftPhoto);
rightBtn.addEventListener("click", switchToRightPhoto);
document.addEventListener("keydown", (e) => {
	if (e.keyCode === 37) {
		switchToLeftPhoto();
	} else if (e.keyCode === 39) {
		switchToRightPhoto();
	} else if (e.keyCode === 27) {
		fullScreenPhoto.classList.add("hidden")
	}
});
fullScreenPhotoBg.addEventListener("click", () => {
	fullScreenPhoto.classList.add("hidden")
})