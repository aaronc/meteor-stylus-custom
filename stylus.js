Stylus = {
  plugins: []
};

Stylus.registerPlugins =  function(plist) {
  for (var i = 0; i < plist.length; ++i) {
    Stylus.plugins.push(plist[i]);
  }
};
