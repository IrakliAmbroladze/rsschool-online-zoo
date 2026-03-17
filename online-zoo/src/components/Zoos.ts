import { fetchCameras } from "../lib/fetchCameras";
import type { Camera } from "../types/Camera";

export default async function Zoos() {
  try {
    const cameras: Camera[] = await fetchCameras();
    console.log(cameras);
  } catch (error) {
    console.log(error);
  }
  console.log("start creating zoos page");
}
