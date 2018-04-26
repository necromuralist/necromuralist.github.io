(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("92464b9d-bad4-4212-b079-cec6605e3cde");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '92464b9d-bad4-4212-b079-cec6605e3cde' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-0.12.15.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.15.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.15.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-0.12.15.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"65f673a7-446f-4cb0-82f7-b56f9f8ae354":{"roots":{"references":[{"attributes":{},"id":"433c53a7-f2e2-449f-bc95-638eceabe479","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"814f33bb-4904-4011-ad3a-8cd97d10add8","type":"Circle"},{"attributes":{"callback":null},"id":"21795eee-9b69-4353-89fc-78fbed1755ce","type":"DataRange1d"},{"attributes":{},"id":"1feaf0a5-2cbc-40e9-8844-335c4e3f47bb","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"bb032cd0-2384-4847-bef9-38d626405746","type":"ColumnDataSource"},"glyph":{"id":"2acc0ca8-1d12-417b-8235-5c8015af9c48","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"814f33bb-4904-4011-ad3a-8cd97d10add8","type":"Circle"},"selection_glyph":null,"view":{"id":"123f262e-dfc9-46c2-b6e7-44fc64f46301","type":"CDSView"}},"id":"ace2f88d-e4ce-4ccd-a440-c59126c8658a","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e0badac9-3e9d-4a97-ad1b-98178abec2d2","type":"HoverTool"}]},"id":"7c483591-a807-4166-b7e6-f4779f80f1ab","type":"Toolbar"},{"attributes":{"plot":null,"text":"Random Example"},"id":"d45abeaa-89d5-4476-97c2-0de93226213c","type":"Title"},{"attributes":{"dimension":1,"plot":{"id":"2cde034d-b5f6-4907-9a46-1c1c760c6823","subtype":"Figure","type":"Plot"},"ticker":{"id":"7b414bf2-340f-461d-ad5e-eaed14d36830","type":"BasicTicker"}},"id":"b007cf34-719f-4c2f-b7a0-f42b58c394fb","type":"Grid"},{"attributes":{"source":{"id":"bb032cd0-2384-4847-bef9-38d626405746","type":"ColumnDataSource"}},"id":"123f262e-dfc9-46c2-b6e7-44fc64f46301","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"1ed2f5f9-6f52-4110-b385-b0449b245b6c","type":"Line"},{"attributes":{},"id":"7b414bf2-340f-461d-ad5e-eaed14d36830","type":"BasicTicker"},{"attributes":{"data_source":{"id":"bb032cd0-2384-4847-bef9-38d626405746","type":"ColumnDataSource"},"glyph":{"id":"974d8ccc-659e-4b43-a818-bbdc66ea8770","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1ed2f5f9-6f52-4110-b385-b0449b245b6c","type":"Line"},"selection_glyph":null,"view":{"id":"e8b868e4-db0b-47db-bb10-3b0b67b44231","type":"CDSView"}},"id":"b771a4f3-5dd0-4fc4-bf85-34a8b7e22717","type":"GlyphRenderer"},{"attributes":{},"id":"86ff0e39-24c5-4062-9fce-a1515759f421","type":"BasicTickFormatter"},{"attributes":{"axis_label":"x","formatter":{"id":"1feaf0a5-2cbc-40e9-8844-335c4e3f47bb","type":"BasicTickFormatter"},"plot":{"id":"2cde034d-b5f6-4907-9a46-1c1c760c6823","subtype":"Figure","type":"Plot"},"ticker":{"id":"b12fe041-aaf9-4529-b179-5d8471ce3531","type":"BasicTicker"}},"id":"ff09e9a2-5d48-49c9-bb45-2d30a02fa219","type":"LinearAxis"},{"attributes":{"callback":null,"tooltips":[["index","$index"],["(x, y)","($x, $y)"],["desc","@desc"]]},"id":"e0badac9-3e9d-4a97-ad1b-98178abec2d2","type":"HoverTool"},{"attributes":{"below":[{"id":"ff09e9a2-5d48-49c9-bb45-2d30a02fa219","type":"LinearAxis"}],"left":[{"id":"602ab379-0fa9-4bbc-92bc-60b37e5b3784","type":"LinearAxis"}],"renderers":[{"id":"ff09e9a2-5d48-49c9-bb45-2d30a02fa219","type":"LinearAxis"},{"id":"700d3fb0-cc96-4a0c-bc31-2f28ec8bebc5","type":"Grid"},{"id":"602ab379-0fa9-4bbc-92bc-60b37e5b3784","type":"LinearAxis"},{"id":"b007cf34-719f-4c2f-b7a0-f42b58c394fb","type":"Grid"},{"id":"b771a4f3-5dd0-4fc4-bf85-34a8b7e22717","type":"GlyphRenderer"},{"id":"ace2f88d-e4ce-4ccd-a440-c59126c8658a","type":"GlyphRenderer"}],"title":{"id":"d45abeaa-89d5-4476-97c2-0de93226213c","type":"Title"},"toolbar":{"id":"7c483591-a807-4166-b7e6-f4779f80f1ab","type":"Toolbar"},"x_range":{"id":"ce61eb20-59ed-4f55-a3fa-afba2de9d556","type":"DataRange1d"},"x_scale":{"id":"433c53a7-f2e2-449f-bc95-638eceabe479","type":"LinearScale"},"y_range":{"id":"21795eee-9b69-4353-89fc-78fbed1755ce","type":"DataRange1d"},"y_scale":{"id":"6e8bb6ac-fa45-41bb-aca9-c7f2f8ae257b","type":"LinearScale"}},"id":"2cde034d-b5f6-4907-9a46-1c1c760c6823","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"b12fe041-aaf9-4529-b179-5d8471ce3531","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y","desc"],"data":{"desc":["a","b","c","d","e","f","g","h","i","j"],"x":[0,1,2,3,4,5,6,7,8,9],"y":[1,0,4,4,6,3,4,2,3,8]},"selected":null,"selection_policy":null},"id":"bb032cd0-2384-4847-bef9-38d626405746","type":"ColumnDataSource"},{"attributes":{},"id":"6e8bb6ac-fa45-41bb-aca9-c7f2f8ae257b","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"2acc0ca8-1d12-417b-8235-5c8015af9c48","type":"Circle"},{"attributes":{"source":{"id":"bb032cd0-2384-4847-bef9-38d626405746","type":"ColumnDataSource"}},"id":"e8b868e4-db0b-47db-bb10-3b0b67b44231","type":"CDSView"},{"attributes":{"callback":null},"id":"ce61eb20-59ed-4f55-a3fa-afba2de9d556","type":"DataRange1d"},{"attributes":{"plot":{"id":"2cde034d-b5f6-4907-9a46-1c1c760c6823","subtype":"Figure","type":"Plot"},"ticker":{"id":"b12fe041-aaf9-4529-b179-5d8471ce3531","type":"BasicTicker"}},"id":"700d3fb0-cc96-4a0c-bc31-2f28ec8bebc5","type":"Grid"},{"attributes":{"axis_label":"y","formatter":{"id":"86ff0e39-24c5-4062-9fce-a1515759f421","type":"BasicTickFormatter"},"plot":{"id":"2cde034d-b5f6-4907-9a46-1c1c760c6823","subtype":"Figure","type":"Plot"},"ticker":{"id":"7b414bf2-340f-461d-ad5e-eaed14d36830","type":"BasicTicker"}},"id":"602ab379-0fa9-4bbc-92bc-60b37e5b3784","type":"LinearAxis"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"974d8ccc-659e-4b43-a818-bbdc66ea8770","type":"Line"}],"root_ids":["2cde034d-b5f6-4907-9a46-1c1c760c6823"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"65f673a7-446f-4cb0-82f7-b56f9f8ae354","elementid":"92464b9d-bad4-4212-b079-cec6605e3cde","modelid":"2cde034d-b5f6-4907-9a46-1c1c760c6823"}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.15.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.15.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-tables-0.12.15.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();