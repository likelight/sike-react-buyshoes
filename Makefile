.PHONY: css
css:
	mkdir -p bundle
	postcss --watch --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

.PHONY: server
server:
	browser-sync start --server --files='index.html,bundle/app.css,js/app.js,build/app.js'


.PHONY: clean
clean:
	rm -r bundle

.PHONY: js
js:
	webpack --watch -d --progress js/app.jsx build/app.js --module-bind "js=babel" 

.PHONY: minjs
minjs:
   webpack   -p --progress js/app.jsx bundle/app.js --module-bind "js=babel"

.PHONY: all
all:
	(make css & make js & make webpack & make server & wait)
