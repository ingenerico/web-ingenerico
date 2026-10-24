import "./styles/tokens.css";
import "./styles/styles.css";

const app: HTMLElement | null = document.querySelector("#app");

if (app === null) {
	throw new Error("Missing #app mount point");
}

console.info("Ingenerico base ready");
