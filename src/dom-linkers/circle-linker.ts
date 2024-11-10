import CircleService from "../service/CircleService";

let radiusInputEl: HTMLInputElement | null;
let outputEl: HTMLElement | null;
let inputUnitsEl: HTMLSelectElement | null;
let outputUnitsEl: HTMLElement | null;

const circleService: CircleService = new CircleService();

document.addEventListener("DOMContentLoaded", () => {
	radiusInputEl = document.querySelector("#radius-input");
	outputEl = document.querySelector("#result-element");
	inputUnitsEl = document.querySelector("#units-input");
	outputUnitsEl = document.querySelector("#units-element");

	// set the default units
	if (outputUnitsEl && inputUnitsEl)
		outputUnitsEl.textContent = inputUnitsEl.value as string;

	let circleForm: HTMLElement | null = document.querySelector("#circle-form");
	if (circleForm) {
		circleForm.addEventListener("submit", async (e: Event) => {
			// prevent form submission from reloading view
			e.preventDefault();

			// invoke rust's backend logic
			if (outputEl) {
				outputEl.textContent =
					await circleService.invokeAreaCalculation(
						Number(radiusInputEl?.value)
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
