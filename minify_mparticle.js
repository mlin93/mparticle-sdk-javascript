var UglifyJS = require('uglify-js');
var fs = require('fs');

var result = UglifyJS.minify('mparticle.js', {
    mangle: true,
    compress: {
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true,
        passes: 2
    }
});

fs.writeFileSync('mparticle.min.js', result.code);
