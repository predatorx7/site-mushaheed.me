import type { Preset, UserConfig } from "https://esm.sh/@unocss/core@0.41.0";
import presetWind from "https://esm.sh/@unocss/preset-wind@0.41.0?bundle&no-check";

export const unocss_opts: UserConfig = {
  presets: [presetWind() as unknown as Preset],
};