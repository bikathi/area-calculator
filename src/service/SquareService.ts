import { invoke } from "@tauri-apps/api/core";

export default class SquareService {
	public async invokeAreaCalculation(len: number): Promise<string> {
		const result: number = await invoke("square_area", { len });

		return result.toString();
	}
}
