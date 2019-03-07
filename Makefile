build:
	clojure -Assr

deploy:
	git checkout master
	sudo cp /resources/public/* /
	git commit -m "build"
	git push
	git checkout develop
