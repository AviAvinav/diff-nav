import "./style.css";

const burButton = document.getElementById("bur") as HTMLButtonElement;
const crossButton = document.getElementById("cross") as HTMLButtonElement;
const ele = document.getElementById("ele") as HTMLDivElement;

burButton.onclick = () => {
	if (burButton.style.display === "none") {
		burButton.style.display = "block";
		crossButton.style.display = "none";
		ele.style.display = "none";
	} else {
		burButton.style.display = "none";
		crossButton.style.display = "block";
		ele.style.display = "flex";
	}
};
crossButton.onclick = () => {
	if (crossButton.style.display === "none") {
		crossButton.style.display = "block";
		burButton.style.display = "none";
		ele.style.display = "flex";
	} else {
		crossButton.style.display = "none";
		burButton.style.display = "block";
		ele.style.display = "none";
	}
};
