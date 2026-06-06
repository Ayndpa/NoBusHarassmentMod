maplebirch.tool.onInit(() => {
  V.noBusHarassment ??= {};
  if (V.noBusHarassment.normal === undefined) {
    V.noBusHarassment.normal = true;
  }
  if (V.noBusHarassment.pregnancy === undefined) {
    V.noBusHarassment.pregnancy = true;
  }
  if (V.noBusHarassment.passout === undefined) {
    V.noBusHarassment.passout = true;
  }
});

maplebirch.tool.addTo('Options', 'NoBusHarassmentSettings');
