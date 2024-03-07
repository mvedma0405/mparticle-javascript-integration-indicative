/*
A non-ecommerce event has the following schema:

{
    DeviceId: "a80eea1c-57f5-4f84-815e-06fe971b6ef2",
    EventAttributes: {test: "Error", t: 'stack trace in string form'},
    EventName: "Error",
    MPID: "123123123123",
    UserAttributes: {userAttr1: 'value1', userAttr2: 'value2'},
    UserIdentities: [{Identity: 'email@gmail.com', Type: 7}]
    User Identity Types can be found here:
}

*/

function EventHandler(common) {
    this.common = common || {};
}
EventHandler.prototype.logEvent = function (event) {
    if (event.EventName === this.common.mPAnalyticsEventName) {
        try {
            var anonymousUserMPID = mParticle.Identity.getUsers()[1].getMPID();
            var currentUserMPID = mParticle.Identity.getCurrentUser().getMPID();
            mParticle.logEvent('$User Authentication', mParticle.EventType.Other, {
                anonymous_mpid: anonymousUserMPID,
                known_mpid: currentUserMPID,
            });
        } catch (error) {
            console.error("Error Logging User Authentication", error)
        }



    }
};
EventHandler.prototype.logError = function (event) {
};
EventHandler.prototype.logPageView = function (event) {
};

module.exports = EventHandler;
