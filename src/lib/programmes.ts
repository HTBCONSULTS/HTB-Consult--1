export const programmeSlug = (name: string) =>
  name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** Registration form link for a programme (cybersecurity keeps its own page). */
export const programmeRegisterHref = (name: string) =>
  name === "Cybersecurity Bootcamp" ? "/cybersecurity#register" : `/programmes/${programmeSlug(name)}/register#register`;
