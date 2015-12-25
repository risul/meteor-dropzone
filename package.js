Package.describe({
    name: 'risul:dropzone',
    summary: "Dropzone.js - easy to use drag'n'drop library with image previews and progress bars",
    version: "4.2.0",
    git: "https://github.com/risul/meteor-dropzone"
});

Package.on_use(function (api) {
    api.versionsFrom("METEOR@1.0");
    api.use('jquery', 'client');

    api.addFiles([
        "lib/dropzone.js"
    ], "client");

});