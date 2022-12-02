#!/bin/bash


DIR=$(dirname "$0")
DIST=$(realpath "$DIR/../dist")
PKG=$(realpath "$DIR/../pkg")
BROWSER="${1:-firefox}"

function build {
  rm -rf $DIST
  mkdir -p $DIST
  MANIFEST_VERSION=$1
  export MANIFEST_VERSION
  echo "using manifest version: $MANIFEST_VERSION"
  cat "$DIR/../manifest.tmpl.json" | envsubst '${MANIFEST_VERSION}' > "$DIST/manifest.json"
  yarn build
}

if [ "$BROWSER" = "firefox" ]
then
  build "2"
  web-ext build -s $DIST -a "$PKG/firefox/"
  echo "built $PKG/firefox/"
elif [ "$BROWSER" = "chrome" ]
then
  build "3"
  pushd $DIST
  rm -rf $PKG/chrome
  mkdir -p $PKG/chrome
  zip -r "$PKG/chrome/lti-debugger.zip" .
  popd
  echo "built $PKG/chrome/lti-debugger.zip"
else
  echo "target browser \"$BROWSER\" is not supported, supported browsers are: \"firefox\" or \"chrome\""
  return 1
fi