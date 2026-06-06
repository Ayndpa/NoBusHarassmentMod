maplebirch.tool.onInit(() => {
  // 使用普通 $options 变量，随游戏存档自动保存，无需依赖框架 LocalStorage
  V.options ??= {};
  if (V.options.noBusHarassmentNormal === undefined) {
    V.options.noBusHarassmentNormal = true;
  }
  if (V.options.noBusHarassmentPregnancy === undefined) {
    V.options.noBusHarassmentPregnancy = true;
  }
  if (V.options.noBusHarassmentPassout === undefined) {
    V.options.noBusHarassmentPassout = true;
  }
});

maplebirch.tool.addTo('Options', 'NoBusHarassmentSettings');
