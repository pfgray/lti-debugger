chrome.devtools.panels.create(
  'LTI Debugger',
  '/icons/lti-debugger-icon16.png',
  '/devtool-panel.html',
  function (panel) {
    panel.onShown.addListener(handleShown)
    panel.onHidden.addListener(handleHidden)
    panel.onSearch.addListener((action, queryString) => {
      console.log('searching? ', action, queryString)
    })
  }
)

function handleShown() {
  console.log('panel is being shown')
  // chrome.devtools.network.getHAR((harLog) => {
  //   console.log('got har entries')
  //   // harLog.entries[0].cache
  //   console.log(harLog)
  // })
}

function handleHidden() {
  console.log('panel is being hidden')
}
