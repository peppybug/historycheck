import type { RelationKind } from "./types";

/**
 * Cross-cutting connections kept outside individual event files:
 * mostly containment ("part of", "occurred during") and thematic links,
 * plus a few contributing causes that span eras.
 * Format: [from, relation, to, explanation]
 */
export const extraRelations: [string, RelationKind, string, string][] = [
  ["fall-of-the-berlin-wall", "part_of", "cold-war", "The opening of the Wall was the defining moment of the Cold War's end in Europe."],
  ["vostok-1", "occurred_during", "cold-war", "Human spaceflight was a central arena of superpower competition."],
  ["cuban-revolution", "occurred_during", "cold-war", "The revolution brought the Cold War to the Caribbean."],
  ["bandung-conference", "occurred_during", "cold-war", "Asian and African states met to chart a course outside the two blocs."],
  ["tiananmen-square-protests", "occurred_during", "cold-war", "The protests took place in the final years of the Cold War."],
  ["chernobyl-disaster", "occurred_during", "cold-war", "The disaster struck during Gorbachev's reforms."],
  ["iranian-revolution", "occurred_during", "cold-war", "The revolution removed a key US ally in the region."],
  ["invasion-of-poland", "part_of", "world-war-ii", "The opening campaign of the war in Europe."],
  ["october-revolution", "occurred_during", "world-war-i", "The Bolsheviks seized power while Russia was still at war."],
  ["columbus-first-voyage", "contributed_to", "fall-of-tenochtitlan", "Spanish colonies in the Caribbean became the base for expeditions to the mainland."],
  ["columbus-first-voyage", "contributed_to", "battle-of-cajamarca", "Spanish colonisation of the Americas led to expeditions into the Andes."],
  ["treaty-of-tordesillas", "contributed_to", "magellan-circumnavigation", "Spain sought a western route to the Spice Islands, which it hoped lay in its zone."],
  ["industrial-revolution", "contributed_to", "berlin-conference", "Industrial economies sought raw materials and markets in Africa."],
  ["italian-unification", "related_to", "unification-of-germany", "Two national unifications completed within a decade of each other."],
  ["viking-raid-on-lindisfarne", "related_to", "battle-of-hastings", "The Normans who conquered England descended from Viking settlers in Normandy."],
  ["indus-valley-cities", "related_to", "invention-of-cuneiform", "Indus seals found in Mesopotamia show trade between the two civilisations."],
  ["higgs-boson-discovery", "related_to", "world-wide-web", "Both were developed at CERN."],
  ["late-bronze-age-collapse", "followed_by", "first-olympic-games", "Greece re-emerged from the post-collapse dark age in the eighth century BCE."],
  ["peloponnesian-war", "followed_by", "battle-of-gaugamela", "Weakened by their own wars, the Greek city-states fell under Macedonian leadership."],
  ["spanish-flu", "related_to", "world-war-i", "The pandemic spread in the war's final year, carried by troop movements."],
];
