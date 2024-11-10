import { invoke } from "@tauri-apps/api/core";

export default class CircleService {
	public async invokeAreaCalculation(radius: number): Promise<string> {
		const result: number = await invoke("circle_area", { radius });

		return result.toFixed(4).toString();
	}
}
