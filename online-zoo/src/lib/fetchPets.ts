import type { ApiResponse } from "../types/ApiResponse";
import type { Pet } from "../types/Pet";

export const fetchPets = async (): Promise<Pet[]> => {
  const URL =
    "https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/pets";
  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  const result: ApiResponse<Pet[]> = await response.json();
  return result.data;
};
