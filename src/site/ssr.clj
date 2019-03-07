(ns site.ssr
  (:require [hiccup2.core :as hiccup]))

(def page
  (hiccup/html
   (hiccup/raw "<!DOCTYPE html>")
   [:html
    [:head
     [:meta {:charset "utf-8"}]
     [:meta {:http-equiv "X-UA-Compatible"
             :content    "IE=edge"}]
     [:meta {:name    "viewport"
             :content "width=device-width, initial-scale=1"}]
     ]
    [:body
     "Testing"
     ]]))

(defn -main
  [& args]
  (spit "/index.html" page))
