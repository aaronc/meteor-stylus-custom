Package.describe({
  summary: 'Expressive, dynamic, robust CSS'
});

Package._transitional_registerBuildPlugin({
  name: "compileStylus",
  use: [],
  sources: [
    'plugin/compile-stylus.js'
  ],
  npmDependencies: {
    stylus: "0.45.1",
    nib: "1.0.2",
    jeet: "5.2.10",
    rupture: "0.1.0",
    "axis-css": "0.1.8",
    typographic:"0.0.4"
  }
});

Package.on_test(function (api) {
  api.use(['tinytest', 'my-stylus', 'test-helpers', 'templating']);
  api.add_files([
    'stylus_tests.html',
    'stylus_tests.styl',
    'stylus_tests.import.styl',
    'stylus_tests.js'
  ],'client');
});

Package.on_use(function (api, where) {
  api.add_files('stylus.js', 'server');
  if(api.export){
    api.export('Stylus');
  }
});

