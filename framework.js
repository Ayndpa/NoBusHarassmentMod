maplebirch.tool.onInit(() => {
  V.options ??= {};
  V.options.noBusHarassment ??= {};
  if (V.options.noBusHarassment.normal === undefined) {
    V.options.noBusHarassment.normal = true;
  }
  if (V.options.noBusHarassment.pregnancy === undefined) {
    V.options.noBusHarassment.pregnancy = true;
  }
  if (V.options.noBusHarassment.passout === undefined) {
    V.options.noBusHarassment.passout = true;
  }
});

maplebirch.tool.addTo('Options', 'NoBusHarassmentSettings');
