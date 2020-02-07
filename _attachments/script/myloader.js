
function couchapp_load(scripts) {
  for (var i=0; i < scripts.length; i++) {
    document.write('<script src="'+scripts[i]+'"><\/script>')
  };
};

couchapp_load([
  "../script/sha1.js",
  "../script/json2.js",
  "../script/jquery.js",
  "../script/jquery.couch.js",
  "../vendor/couchapp/jquery.couch.app.js",
  "../vendor/couchapp/jquery.couch.app.util.js",
  "../vendor/couchapp/jquery.mustache.js",
  "../vendor/couchapp/jquery.pathbinder.js",
  "../vendor/couchapp/jquery.evently.js"
]);
