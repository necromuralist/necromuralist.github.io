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
      };var element = document.getElementById("99045dff-710a-4c8e-8565-6fd31b538349");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '99045dff-710a-4c8e-8565-6fd31b538349' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"99649b1a-8c14-49b7-a6ef-c61b3ec6dbae":{"roots":{"references":[{"attributes":{},"id":"bec8d491-cdca-48d3-8ccf-39fb91b4785e","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":"Random Example"},"id":"fb2b596f-cf2e-40fe-8e6f-80b68ff3d1a1","type":"Title"},{"attributes":{"below":[{"id":"b04a6c73-c404-40e5-a78e-6da6952b13fa","type":"LinearAxis"}],"left":[{"id":"8479f11c-2ef5-48a1-a715-b26a390a8da4","type":"LinearAxis"}],"renderers":[{"id":"b04a6c73-c404-40e5-a78e-6da6952b13fa","type":"LinearAxis"},{"id":"cbb46010-40fe-40f7-ab8f-8c723673fbd3","type":"Grid"},{"id":"8479f11c-2ef5-48a1-a715-b26a390a8da4","type":"LinearAxis"},{"id":"2f79b78f-37fa-43e0-86f3-166b924ba78a","type":"Grid"},{"id":"ae81d6a7-5ec4-4c09-8079-ac6cf5e1588f","type":"GlyphRenderer"},{"id":"f56d4548-1072-465c-b230-ef29702697b4","type":"GlyphRenderer"}],"title":{"id":"fb2b596f-cf2e-40fe-8e6f-80b68ff3d1a1","type":"Title"},"toolbar":{"id":"33bc9cc7-52d3-4182-b2ab-b2c2b93a15d1","type":"Toolbar"},"x_range":{"id":"f35c2cbf-ec36-4802-a772-40db8132d478","type":"DataRange1d"},"x_scale":{"id":"3e12cb44-dd42-420e-859e-e7b12276020f","type":"LinearScale"},"y_range":{"id":"04ab1945-6a7b-4cdf-af22-2a53bbc34919","type":"DataRange1d"},"y_scale":{"id":"a14d8661-aa5e-4f6d-a7c2-688e30c13a98","type":"LinearScale"}},"id":"f46a6fe0-7aab-47d9-aae0-d14718763236","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"e5168a12-777c-4b7f-b758-43da8c63e2e3","type":"ColumnDataSource"},"glyph":{"id":"28d1235f-30af-4164-8152-05bd2617b720","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"13ff7373-8438-4d39-ae85-a374c68959af","type":"Line"},"selection_glyph":null,"view":{"id":"a14defd4-bbc8-4a63-9bf0-2dcc861696c2","type":"CDSView"}},"id":"ae81d6a7-5ec4-4c09-8079-ac6cf5e1588f","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["x","y","desc"],"data":{"desc":["a","b","c","d","e","f","g","h","i","j"],"x":[0,1,2,3,4,5,6,7,8,9],"y":[9,7,4,7,7,0,5,3,8,8]},"selected":null,"selection_policy":null},"id":"e5168a12-777c-4b7f-b758-43da8c63e2e3","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"13ff7373-8438-4d39-ae85-a374c68959af","type":"Line"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"28d1235f-30af-4164-8152-05bd2617b720","type":"Line"},{"attributes":{},"id":"7bec51c7-e5ff-47aa-8916-31bd532925a9","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"f35c2cbf-ec36-4802-a772-40db8132d478","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"408a1225-eecc-49e5-848c-fbbdc0c5236c","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e40e0f10-0a22-4f69-9ca8-3d7ca18ad060","type":"HoverTool"}]},"id":"33bc9cc7-52d3-4182-b2ab-b2c2b93a15d1","type":"Toolbar"},{"attributes":{"data_source":{"id":"e5168a12-777c-4b7f-b758-43da8c63e2e3","type":"ColumnDataSource"},"glyph":{"id":"408a1225-eecc-49e5-848c-fbbdc0c5236c","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"78de4296-b86b-4e67-a928-87478ed429db","type":"Circle"},"selection_glyph":null,"view":{"id":"3bd71255-3f5e-4f77-ab73-9905333f3305","type":"CDSView"}},"id":"f56d4548-1072-465c-b230-ef29702697b4","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"04ab1945-6a7b-4cdf-af22-2a53bbc34919","type":"DataRange1d"},{"attributes":{"source":{"id":"e5168a12-777c-4b7f-b758-43da8c63e2e3","type":"ColumnDataSource"}},"id":"3bd71255-3f5e-4f77-ab73-9905333f3305","type":"CDSView"},{"attributes":{},"id":"3e12cb44-dd42-420e-859e-e7b12276020f","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"78de4296-b86b-4e67-a928-87478ed429db","type":"Circle"},{"attributes":{},"id":"a14d8661-aa5e-4f6d-a7c2-688e30c13a98","type":"LinearScale"},{"attributes":{"axis_label":"x","formatter":{"id":"bec8d491-cdca-48d3-8ccf-39fb91b4785e","type":"BasicTickFormatter"},"plot":{"id":"f46a6fe0-7aab-47d9-aae0-d14718763236","subtype":"Figure","type":"Plot"},"ticker":{"id":"5ff96d03-ab0d-4294-9968-fe2b482f89d3","type":"BasicTicker"}},"id":"b04a6c73-c404-40e5-a78e-6da6952b13fa","type":"LinearAxis"},{"attributes":{},"id":"5ff96d03-ab0d-4294-9968-fe2b482f89d3","type":"BasicTicker"},{"attributes":{"plot":{"id":"f46a6fe0-7aab-47d9-aae0-d14718763236","subtype":"Figure","type":"Plot"},"ticker":{"id":"5ff96d03-ab0d-4294-9968-fe2b482f89d3","type":"BasicTicker"}},"id":"cbb46010-40fe-40f7-ab8f-8c723673fbd3","type":"Grid"},{"attributes":{"callback":null,"tooltips":[["index","$index"],["(x, y)","($x, $y)"],["desc","@desc"]]},"id":"e40e0f10-0a22-4f69-9ca8-3d7ca18ad060","type":"HoverTool"},{"attributes":{"axis_label":"y","formatter":{"id":"7bec51c7-e5ff-47aa-8916-31bd532925a9","type":"BasicTickFormatter"},"plot":{"id":"f46a6fe0-7aab-47d9-aae0-d14718763236","subtype":"Figure","type":"Plot"},"ticker":{"id":"3a9d92e0-66f3-4bb8-bb95-63c797b951ff","type":"BasicTicker"}},"id":"8479f11c-2ef5-48a1-a715-b26a390a8da4","type":"LinearAxis"},{"attributes":{},"id":"3a9d92e0-66f3-4bb8-bb95-63c797b951ff","type":"BasicTicker"},{"attributes":{"source":{"id":"e5168a12-777c-4b7f-b758-43da8c63e2e3","type":"ColumnDataSource"}},"id":"a14defd4-bbc8-4a63-9bf0-2dcc861696c2","type":"CDSView"},{"attributes":{"dimension":1,"plot":{"id":"f46a6fe0-7aab-47d9-aae0-d14718763236","subtype":"Figure","type":"Plot"},"ticker":{"id":"3a9d92e0-66f3-4bb8-bb95-63c797b951ff","type":"BasicTicker"}},"id":"2f79b78f-37fa-43e0-86f3-166b924ba78a","type":"Grid"}],"root_ids":["f46a6fe0-7aab-47d9-aae0-d14718763236"]},"title":"Bokeh Application","version":"0.12.15"}}';
                  var render_items = [{"docid":"99649b1a-8c14-49b7-a6ef-c61b3ec6dbae","elementid":"99045dff-710a-4c8e-8565-6fd31b538349","modelid":"f46a6fe0-7aab-47d9-aae0-d14718763236"}];
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