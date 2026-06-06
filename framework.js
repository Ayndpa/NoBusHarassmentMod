maplebirch.tool.onInit(() => {
  V.options ??= {};
  V.options.maplebirch ??= {};
  V.options.maplebirch.noBusHarassment ??= {};
  if (V.options.maplebirch.noBusHarassment.normal === undefined) {
    V.options.maplebirch.noBusHarassment.normal = true;
  }
  if (V.options.maplebirch.noBusHarassment.pregnancy === undefined) {
    V.options.maplebirch.noBusHarassment.pregnancy = true;
  }
  if (V.options.maplebirch.noBusHarassment.passout === undefined) {
    V.options.maplebirch.noBusHarassment.passout = true;
  }
});

maplebirch.tool.addTo('Options', 'NoBusHarassmentSettings');
