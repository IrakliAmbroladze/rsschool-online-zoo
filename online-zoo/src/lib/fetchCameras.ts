import type { Camera } from "../types/Camera";
import { fetchData } from "./fetchData";

export const fetchCameras = () =>
  fetchData<Camera[]>(
    "https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/cameras",
  );
