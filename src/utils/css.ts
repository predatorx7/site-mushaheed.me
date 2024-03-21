export const cx = (...classes: (string | Record<string, boolean>)[]) => {
  return classes
    .map((it) => {
      if (typeof it === "string") return it;
      return Object.keys(it)
        .filter((key) => it[key])
        .join(" ");
    })
    .filter(Boolean)
    .join(" ");
};
