import SquareService from "../service/SquareService";

let lengthInputEl: HTMLInputElement | null;
let outputEl: HTMLElement | null;
let inputUnitsEl: HTMLSelectElement | null;
let outputUnitsEl: HTMLElement | null;

const squareService: SquareService = new SquareService();

document.addEventListener("DOMContentLoaded", () => {
	lengthInputEl = document.querySelector("#length-input");
	outputEl = document.querySelector("#result-element");
	inputUnitsEl = document.querySelector("#units-input");
	outputUnitsEl = document.querySelector("#units-element");

	// set the default units
	if (outputUnitsEl && inputUnitsEl)
		outputUnitsEl.textContent = inputUnitsEl.value as string;

	let squareForm: HTMLElement | null = document.querySelector("#square-form");
	if (squareForm) {
		squareForm.addEventListener("submit", async (e: Event) => {
			// prevent form submission from reloading view
			e.preventDefault();

			// invoke rust's backend logic
			if (outputEl) {
				outputEl.textContent =
					await squareService.invokeAreaCalculation(
						Number(lengthInputEl?.value)
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
