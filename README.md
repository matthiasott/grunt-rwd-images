# grunt-rwd-images

A boilerplate for automated responsive image generation with Grunt.js and ImageOptim

## Getting Started

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.

Once you are familiar with Grunt, download and unzip or clone this repository into a new project directory and install the dependencies with

```shell
npm install
```

## Usage

Start the watch process with the command

```shell
grunt watch
```

By default, all images in the `src/img` folder starting with the prefix `img-` will be transformed to the following widths:

- 1600px
- 1024px
- 960px
- 800px
- 640px
- 480px
- 320px

The images are saved to `dist/original`. After the image transformations are done, the images get copied to `dist/optimized` and are further optimized with [ImageOptim](https://imageoptim.com/command-line.html) via [grunt-imageoptim](https://github.com/JamieMason/grunt-imageoptim).

You can adjust the `Gruntfile.js` to your needs to add more prefixes or sizes.
Also have a look at the options of the Grunt plugins this project uses:

- [grunt-responsive-images](https://github.com/andismith/grunt-responsive-images)
- [grunt-imageoptim](https://github.com/JamieMason/grunt-imageoptim)

## Todo
- documentation


## Changelog

### 0.1.0
- First version

## License 

Code released under [the MIT license](https://github.com/matthiasott/grunt-rwd-images/blob/master/LICENSE).

## Author

Matthias Ott   
<mail@matthiasott.com>  
<https://matthiasott.com>  
<https://twitter.com/m_ott>

Copyright (c) 2017 [Matthias Ott](https://matthiasott.com)