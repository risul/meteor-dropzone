# Meteor-Dropzone

Latest version of [DropzoneJS](http://www.dropzonejs.com/) packaged for Meteor.
DropzoneJS is an open source library that provides drag'n'drop file uploads with image previews.

## Installing

```bash
    meteor add risul:dropzone
```

## Usage

Template:

```html
<template name="hello">
  <form action="/file-upload" class="dropzone">
  <div class="fallback">
    <input name="file" type="file" multiple />
  </div>
</form>
</template>
```

OR create dropzone after your template is rendered:

```js
Template.hello.rendered = function() {
  $("div#myId").dropzone({ url: "/file/post" });
}
```

## Documentaion

See the installation guide: http://www.dropzonejs.com/#installation