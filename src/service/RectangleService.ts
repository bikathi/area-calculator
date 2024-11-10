import { invoke } from "@tauri-apps/api/core";

export default class RectangleService {
	public async invokeAreaCalculation(
		len: number,
		width: number
	): Promise<string> {
		const result: number = await invoke("rectangle_area", {
			len,
			width,
		});

		return result.toString();
	}
}
