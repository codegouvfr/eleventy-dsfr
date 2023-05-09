/*
* Mesure d'audience avec exemption CNIL 
*/
var tag = new ATInternet.Tracker.Tag({ sendHitWhenOptOut: false });
        
if (!isOptout()) {
    tag.privacy.setVisitorMode('cnil', 'exempt');
    tag.page.set({ name: document.title });
    tag.dispatch();
}

function isOptout() {
    var visitorMode = tag.privacy.getVisitorMode();

    if (null === visitorMode) {
        return false;
    }

    return 'optout' === visitorMode.name;
}