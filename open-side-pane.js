
var RRK = RRK || {};
// Add a function to the namespace
RRK.openSidePaneWR = function (paneId, paneTitle, canClosePane, webResourceName, recordId, imageSrc) {

    var pageInput = {
        pageType: "webresource",
        webresourceName: webResourceName,
        data: encodeURIComponent(`recordId=${recordId}`)
    };

    var sidePane = Xrm.App.sidePanes.getPane(paneId);
    if (sidePane) {//If the pane is already open, just navigate to the page
        sidePane.navigate(pageInput);
        return;
    }


    var paneOptions = {
        paneId: paneId,
        title: paneTitle,
        imageSrc:imageSrc,
        canClose: canClosePane
    };

    Xrm.App.sidePanes.createPane(paneOptions).then((pane) => {
        pane.navigate(pageInput);
    });

}


