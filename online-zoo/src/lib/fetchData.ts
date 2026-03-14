import type { ApiResponse } from "../types/ApiResponse";

export const fetchData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  const result: ApiResponse<T> = await response.json();
  return result.data;
};
