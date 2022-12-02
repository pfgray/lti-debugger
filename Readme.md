## View & debug LTI requests from within the developer tools

This plugin adds a "Lti Debugger" pane in the developer tools which listens for LTI requests, and displays them as they resolve. It also parses JWT parameters, and displays them as navigable JSON.

[![Get the Firefox add on](https://blog.mozilla.org/addons/files/2015/11/get-the-addon-small.png)](https://addons.mozilla.org/en-US/firefox/addon/lti-debugger/)

![screenshot of the LTI Debugger extension](./lti-debugger.png)

### Local Development

```
yarn install
yarn build
yarn start
```

### Local manual installation

1. Use `scripts/build.sh` to build the archive for your browser:

```
./scripts/build.sh "firefox" # for firefox
./scripts/build.sh "chrome" # for chrome
```

2. Install the plugin:

For chrome:
A. Navigate to chrome://extensions/ in chrome
B. Enable "Developer Mode"
C. Click "Load Unpacked" and navigate to `lti-debugger/dist`

For Firefox
A. Navigate to about:debugging in firefox
B. Click "This Firefox" -> "Load Temporary Add-on"
C. Choose lti-debugger/pkg/firefox/lti-debugger-{version}.zip
