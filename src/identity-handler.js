
function IdentityHandler(common) {
    this.common = common || {};
}
IdentityHandler.prototype.onUserIdentified = function (mParticleUser) { };
IdentityHandler.prototype.onIdentifyComplete = function (
    mParticleUser,
    identityApiRequest
) { };
IdentityHandler.prototype.onLoginComplete = function (
    mParticleUser,
    identityApiRequest
) { };
IdentityHandler.prototype.onLogoutComplete = function (
    mParticleUser,
    identityApiRequest
) { };
IdentityHandler.prototype.onModifyComplete = function (
    mParticleUser,
    identityApiRequest
) { };

IdentityHandler.prototype.onSetUserIdentity = function (
    forwarderSettings,
    id,
    type
) { };

module.exports = IdentityHandler;
