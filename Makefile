all: dev

clean:
	@test -d build && rm -r build || true

deps:
	@npm install

dev: deps
	./node_modules/.bin/webpack-dev-server --host 0.0.0.0 --config webpack-dev.config.js --inline --hot --content-base .

prod: deps
	./node_modules/.bin/webpack --config webpack-prod.config.js
	# babel src --out-dir lib
	# node prerender.js

# docs: clean deps
# 	./node_modules/.bin/webpack --config webpack-docs.config.js
# 	./node_modules/.bin/webpack --config webpack-prerender.config.js
# 	node prerender.js

deploy:
	git checkout gh-pages
	git pull
	git merge master
	git push
	git checkout master