build:
	clojure -m site.ssr

deploy:
	git checkout master
	cp /resources/public/* /
	git commit -m "build"
	git checkout develop
