var libQ = require('kew');
var libNet = require('net');
var libFast = require('fast.js');
var libLevel = require('level');
var fs=require('fs-extra');
var exec = require('child_process').exec;

// Define the UpnpInterface class
module.exports = UpnpInterface;


function UpnpInterface(commandRouter) {
	var self = this;
    // Save a reference to the parent commandRouter
    self.commandRouter = commandRouter;
}



UpnpInterface.prototype.onVolumioStart = function() {
    var self = this;
    //TODO Launch upmpdcli with name as system wide variable
    exec("upmpdcli -c /volumio/app/plugins/audio_interfaces/upnp_interface/upmpdcli.conf -f 'Volumio'", function (error, stdout, stderr) {
        if (error !== null) {
            self.commandRouter.pushConsoleMessage('Upmpcli error: ' + error);
        }
        else {
            self.commandRouter.pushConsoleMessage('Upmpdcli Daemon Started');
        }
    });
}

UpnpInterface.prototype.onStart = function() {
    var self = this;
    //Perform startup tasks here
}

UpnpInterface.prototype.onStop = function() {
    var self = this;
    //Perform startup tasks here
}

UpnpInterface.prototype.onRestart = function() {
    var self = this;
    //Perform startup tasks here
}

UpnpInterface.prototype.onInstall = function()
{
    var self = this;
    //Perform your installation tasks here
}

UpnpInterface.prototype.onUninstall = function()
{
    var self = this;
    //Perform your installation tasks here
}

UpnpInterface.prototype.getUIConfig = function()
{
    var self = this;


}

UpnpInterface.prototype.setUIConfig = function(data)
{
    var self = this;
    //Perform your installation tasks here
}

UpnpInterface.prototype.getConf = function(varName)
{
    var self = this;
    //Perform your installation tasks here
}

UpnpInterface.prototype.setConf = function(varName, varValue)
{
    var self = this;
    //Perform your installation tasks here
}

//Optional functions exposed for making development easier and more clear
UpnpInterface.prototype.getSystemConf = function(pluginName,varName)
{
    var self = this;
    //Perform your installation tasks here
}

UpnpInterface.prototype.setSystemConf = function(pluginName,varName)
{
    var self = this;
    //Perform your installation tasks here
}

UpnpInterface.prototype.getAdditionalConf = function()
{
    var self = this;
    //Perform your installation tasks here
}

UpnpInterface.prototype.setAdditionalConf = function()
{
    var self = this;
    //Perform your installation tasks here
}
