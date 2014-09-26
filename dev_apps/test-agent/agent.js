(function(window){
  var Loader = window.CommonResourceLoader = {},
      domain = document.location.host;

  Loader.domain = document.location.protocol + '//' + domain;
  Loader.url = function(url){
    return this.domain + url;
  }

  Loader.script = function(url, doc){
    doc = doc || document;
    doc.write('<script type="application/javascript;version=1.8" src="' + this.url(url) + '"><\/script>');
    return this;
  };

  Loader.stylesheet = function(url, doc){
    doc = doc || document;
    doc.write('<link rel="stylesheet" type="text/css" href="' + this.url(url) + '">');
    return this;
    };
}(this));
