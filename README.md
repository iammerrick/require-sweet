# require-sweet

require-sweet is a [Require.js](http://requirejs.org) plugin that allows you to require [sweet.js](http://sweetjs.org/) dependencies into your project. This means you can leverage macros in your JavaScript on the fly, and later during your build!

## Download

- [sweeten.js](http://raw.github.com/iammerrick/require-sweet/master/build/sweeten.js)
- [sweeten.min.js](http://raw.github.com/iammerrick/require-sweet/master/build/sweeten.min.js)

## Usage

You leverage require-sweeten like any other require.js plugin! Simply place "sweeten!" before your dependency path, make sure to leave off the file extension.

```javascript
define(['sweeten!a/javascript/dep-with-macros'], function(dep) {
  // dep is compiled to JS at this point.
});
```

You can also see the "example" folder, where require-sweet is being used to run a few macros.

## Build

`npm install && grunt build`

## Implementation Details

This project leverages git submodules to embed the sweet.js project. This allows us to automate the build for a new version of the plugin as the sweet.js project moves forward. We leverage [grunt](http://gruntjs.com) to build the plugin.

## Author

- Name: Merrick Christensen
- Twitter: [@iammerrick](http://twitter.com/iammerrick)

## Credits

The text loading mechanisms is extracted from [require-cs](https://github.com/jrburke/require-cs), the work done by [James Burke](http://jrburke.com/).

## License

Available via the MIT or new BSD license.