export const SMOG_SHEET = {
  src: "/smog/smog-sprite_sheet.png",
  frameWidth: 340,
  frameHeight: 280,
  cols: 3,
  rows: 2,
  blendMode: "screen" as const
};

export const SMOG_INTENTS = {
  heroToMenu: 0,
  menuToStory: 1,
  storyToAmbience: 1,
  ambienceToBook: 0
} as const;

export type SmogIntent = keyof typeof SMOG_INTENTS;
