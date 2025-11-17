import { atom } from "nanostores";
import type { Mode } from "./type";

export const $mode = atom<Mode>("light");
