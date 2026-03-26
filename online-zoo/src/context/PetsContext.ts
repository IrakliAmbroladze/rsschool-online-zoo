import { createContext } from "react";
import type { Pet } from "../types/Pet";
import type { Status } from "../types/Status";

type PetsContextType = {
  pets: Pet[];
  status: Status;
  petImageSource: (pet: Pet) => string;
};

export const PetsContext = createContext<PetsContextType | undefined>(
  undefined,
);
