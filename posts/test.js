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
      };var element = document.getElementById("bbdd7700-25b3-4398-a09b-dc097aff2aff");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bbdd7700-25b3-4398-a09b-dc097aff2aff' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"a3763a3b-0a6c-485e-9278-01e1a31d5613":{"roots":{"references":[{"attributes":{"plot":{"id":"9ade0edf-80c3-492e-bef5-33dda45d4fdd","subtype":"Figure","type":"Plot"},"ticker":{"id":"254a8b52-2e14-46a6-986b-77ecf38b095d","type":"BasicTicker"}},"id":"7803c4ce-e8ec-462a-8ff2-c184ad3623d0","type":"Grid"},{"attributes":{"plot":null,"text":"Random Example"},"id":"44b118c2-4137-4f08-a8c0-4499ca786337","type":"Title"},{"attributes":{"axis_label":"x","formatter":{"id":"818d6727-be08-4c7d-959d-4261cbcbcba5","type":"BasicTickFormatter"},"plot":{"id":"9ade0edf-80c3-492e-bef5-33dda45d4fdd","subtype":"Figure","type":"Plot"},"ticker":{"id":"254a8b52-2e14-46a6-986b-77ecf38b095d","type":"BasicTicker"}},"id":"feacf8f7-ee59-4f66-bb6d-e32a12b61d23","type":"LinearAxis"},{"attributes":{"items":[{"id":"cdb43a9e-53cb-43fb-863b-049e7e0c7120","type":"LegendItem"}],"plot":{"id":"9ade0edf-80c3-492e-bef5-33dda45d4fdd","subtype":"Figure","type":"Plot"}},"id":"094e34e5-fbef-404b-99aa-d4e4015b886d","type":"Legend"},{"attributes":{},"id":"1931a4d2-c702-4deb-ba86-ac6c82f5b9c9","type":"LinearScale"},{"attributes":{},"id":"787600d6-3e0f-4125-97cc-ff8e51d63072","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"9ade0edf-80c3-492e-bef5-33dda45d4fdd","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ed25730-fd0f-4fac-8ff2-0b4314e8553b","type":"BasicTicker"}},"id":"f1ccf53e-3830-4752-b63b-5eeb38116fa2","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"a3fa3310-6b29-4f6f-a205-82b286a55f4d","type":"PanTool"},{"id":"787600d6-3e0f-4125-97cc-ff8e51d63072","type":"WheelZoomTool"},{"id":"0780dc34-17fc-4a6c-9abf-da6605c2b754","type":"BoxZoomTool"},{"id":"8248c417-1e00-4044-a1cf-66cc7b3fab88","type":"SaveTool"},{"id":"e1d1c501-2b18-4397-87dd-98528a661ab3","type":"ResetTool"},{"id":"396e854e-7723-4296-8cc8-56b715143395","type":"HelpTool"}]},"id":"68be344e-d646-4421-a185-be0a4e02d3ba","type":"Toolbar"},{"attributes":{"callback":null},"id":"c670f08a-9f71-458c-be97-3976ec865eb1","type":"DataRange1d"},{"attributes":{"overlay":{"id":"3254be55-d48f-4ec5-a7ac-2c487a990e9f","type":"BoxAnnotation"}},"id":"0780dc34-17fc-4a6c-9abf-da6605c2b754","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"d6ec9f64-e188-4478-bc44-8a0483a1c6ed","type":"DataRange1d"},{"attributes":{},"id":"a3fa3310-6b29-4f6f-a205-82b286a55f4d","type":"PanTool"},{"attributes":{},"id":"818d6727-be08-4c7d-959d-4261cbcbcba5","type":"BasicTickFormatter"},{"attributes":{},"id":"3ed25730-fd0f-4fac-8ff2-0b4314e8553b","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3254be55-d48f-4ec5-a7ac-2c487a990e9f","type":"BoxAnnotation"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"181fe60f-2e21-4973-ae19-290a4ee094ea","type":"Line"},{"attributes":{"below":[{"id":"feacf8f7-ee59-4f66-bb6d-e32a12b61d23","type":"LinearAxis"}],"left":[{"id":"17b110b0-3fb5-4c64-b6ea-e95f17dbfae5","type":"LinearAxis"}],"renderers":[{"id":"feacf8f7-ee59-4f66-bb6d-e32a12b61d23","type":"LinearAxis"},{"id":"7803c4ce-e8ec-462a-8ff2-c184ad3623d0","type":"Grid"},{"id":"17b110b0-3fb5-4c64-b6ea-e95f17dbfae5","type":"LinearAxis"},{"id":"f1ccf53e-3830-4752-b63b-5eeb38116fa2","type":"Grid"},{"id":"3254be55-d48f-4ec5-a7ac-2c487a990e9f","type":"BoxAnnotation"},{"id":"094e34e5-fbef-404b-99aa-d4e4015b886d","type":"Legend"},{"id":"8ab52673-6212-4941-b334-acdc1f587c63","type":"GlyphRenderer"}],"title":{"id":"44b118c2-4137-4f08-a8c0-4499ca786337","type":"Title"},"toolbar":{"id":"68be344e-d646-4421-a185-be0a4e02d3ba","type":"Toolbar"},"x_range":{"id":"c670f08a-9f71-458c-be97-3976ec865eb1","type":"DataRange1d"},"x_scale":{"id":"1931a4d2-c702-4deb-ba86-ac6c82f5b9c9","type":"LinearScale"},"y_range":{"id":"d6ec9f64-e188-4478-bc44-8a0483a1c6ed","type":"DataRange1d"},"y_scale":{"id":"8ec48544-7dc8-4b88-b58f-335638e09341","type":"LinearScale"}},"id":"9ade0edf-80c3-492e-bef5-33dda45d4fdd","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"396e854e-7723-4296-8cc8-56b715143395","type":"HelpTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"900a8930-2cc7-4e87-b0a6-a4d02c115401","type":"Line"},{"attributes":{},"id":"c1ae6f75-515c-4d19-889d-8bfaccc1f779","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"516f4a26-cf49-4669-867d-fe2506c4d819","type":"ColumnDataSource"}},"id":"b67246f4-37b4-4550-aa75-e698ec7b406a","type":"CDSView"},{"attributes":{},"id":"8ec48544-7dc8-4b88-b58f-335638e09341","type":"LinearScale"},{"attributes":{"label":{"value":"Random"},"renderers":[{"id":"8ab52673-6212-4941-b334-acdc1f587c63","type":"GlyphRenderer"}]},"id":"cdb43a9e-53cb-43fb-863b-049e7e0c7120","type":"LegendItem"},{"attributes":{"axis_label":"y","formatter":{"id":"c1ae6f75-515c-4d19-889d-8bfaccc1f779","type":"BasicTickFormatter"},"plot":{"id":"9ade0edf-80c3-492e-bef5-33dda45d4fdd","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ed25730-fd0f-4fac-8ff2-0b4314e8553b","type":"BasicTicker"}},"id":"17b110b0-3fb5-4c64-b6ea-e95f17dbfae5","type":"LinearAxis"},{"attributes":{},"id":"e1d1c501-2b18-4397-87dd-98528a661ab3","type":"ResetTool"},{"attributes":{"data_source":{"id":"516f4a26-cf49-4669-867d-fe2506c4d819","type":"ColumnDataSource"},"glyph":{"id":"181fe60f-2e21-4973-ae19-290a4ee094ea","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"900a8930-2cc7-4e87-b0a6-a4d02c115401","type":"Line"},"selection_glyph":null,"view":{"id":"b67246f4-37b4-4550-aa75-e698ec7b406a","type":"CDSView"}},"id":"8ab52673-6212-4941-b334-acdc1f587c63","type":"GlyphRenderer"},{"attributes":{},"id":"254a8b52-2e14-46a6-986b-77ecf38b095d","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9],"y":[1,1,8,3,0,8,9,9,4,0]},"selected":null,"selection_policy":null},"id":"516f4a26-cf49-4669-867d-fe2506c4d819","type":"ColumnDataSource"},{"attributes":{},"id":"8248c417-1e00-4044-a1cf-66cc7b3fab88","type":"SaveTool"}],"root_ids":["9ade0edf-80c3-492e-bef5-33dda45d4fdd"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"a3763a3b-0a6c-485e-9278-01e1a31d5613","elementid":"bbdd7700-25b3-4398-a09b-dc097aff2aff","modelid":"9ade0edf-80c3-492e-bef5-33dda45d4fdd"}];
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