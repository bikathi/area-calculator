import RectangleService from "../service/RectangleService";

let lengthInputEl: HTMLInputElement | null;
let widthInputEl: HTMLInputElement | null;
let inputUnitsEl: HTMLSelectElement | null;
let outputUnitsEl: HTMLElement | null;
let outputEl: HTMLElement | null;

const rectangleService: RectangleService = new RectangleService();

document.addEventListener("DOMContentLoaded", () => {
	lengthInputEl = document.querySelector("#length-input");
	widthInputEl = document.querySelector("#width-input");
	outputEl = document.querySelector("#result-element");
	inputUnitsEl = document.querySelector("#units-input");
	outputUnitsEl = document.querySelector("#units-element");

	// set the default units
	if (outputUnitsEl && inputUnitsEl)
		outputUnitsEl.textContent = inputUnitsEl.value as string;

	let rectangleForm: HTMLFormElement | null =
		document.querySelector("#rectangle-form");
	if (rectangleForm) {
		rectangleForm.addEventListener("submit", async (e: Event) => {
			e.preventDefault();

			if (outputEl) {
				outputEl.textContent =
					await rectangleService.invokeAreaCalculation(
						Number(lengthInputEl?.value.trim()),
						Number(widthInputEl?.value.trim())
					);
			}
		});
	}

	// listen for a change in the units and render it on the screen
	if (inputUnitsEl) {
		inputUnitsEl.addEventListener("change", () => {
			if (outputUnitsEl)
				outputUnitsEl.textContent = inputUnitsEl?.value as string;
		});
	}
});
