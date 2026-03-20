const assetModules = import.meta.glob(
  ["../**/*.{png,jpg,jpeg,avif,svg}", "../../Img/*.{png,jpg,jpeg,avif,svg}"],
  {
    eager: true,
    import: "default",
  }
);

const assetMap = new Map(
  Object.entries(assetModules).map(([path, url]) => {
    const normalizedPath = path.replace(/\\/g, "/");

    if (normalizedPath.startsWith("../")) {
      return [`src/${normalizedPath.slice(3)}`, url];
    }

    return [normalizedPath.slice(6), url];
  })
);

export function resolveAsset(assetPath) {
  if (!assetPath) {
    return "";
  }

  if (/^(https?:)?\/\//.test(assetPath) || assetPath.startsWith("data:")) {
    return assetPath;
  }

  const normalizedPath = assetPath.trim().replace(/^\/+/, "");

  return assetMap.get(normalizedPath) ?? normalizedPath;
}
