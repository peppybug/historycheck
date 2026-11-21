import type { EventSeed } from "../types";
import { ancientEvents } from "./ancient";
import { medievalEvents } from "./medieval";
import { earlyModernEvents } from "./early-modern";
import { revolutionEvents } from "./revolutions";
import { industryEmpireEvents } from "./industry-empire";
import { worldWarEvents } from "./world-wars";
import { coldWarEvents } from "./cold-war";
import { contemporaryEvents } from "./contemporary";

export const allEvents: EventSeed[] = [
  ...ancientEvents,
  ...medievalEvents,
  ...earlyModernEvents,
  ...revolutionEvents,
  ...industryEmpireEvents,
  ...worldWarEvents,
  ...coldWarEvents,
  ...contemporaryEvents,
];
