build:
	clojure -Assr

deploy: build
	git checkout master
	git merge develop
	sudo cp -R -f /resources/public/. /
	git add --all
	git commit -m "build"
	git push
	git checkout develop
