import { fetchPets } from "../lib/fetchPets";

export const MeetPets = async (): Promise<void> => {
  const container = document.getElementById("pets-container");
  if (!container) return;

  try {
    const pets = await fetchPets();

    console.log("pets are:", pets);
  } catch (err) {
    if (err instanceof Error) {
      console.error("Caught an Error object:", err.message);
    } else {
      console.error("Caught an unknown error type:", err);
    }

    container.innerHTML = `
      <div class="pets-error">
        <p>Something went wrong. Please, refresh the page</p>
      </div>
    `;
  }
};
