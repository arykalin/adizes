unzip:
	unzip -o Adizes.zip &&  git checkout package.json
deploy:
	expo build:web && netlify deploy -d web-build
