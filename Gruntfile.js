module.exports = function(grunt) {
    grunt.initConfig({
        htmlmin: {
            options: {
                collapseWhitespace: true
            },
            files: {
                src: "./index.html",
                dest: "dist/index.html"
            }
        },
        cssmin:{
            'dist/baidu.css':'./baidu.css'
        },
        uglify:{
            release:{
                files:{
                    'dist/baidu.js':'./baidu.js'
                }
            }
        },
        copy: {
            html: {
                src: "./index.html", 
                dest: "./dist/index.html"
            },
            css: {
                src: "./index.css",
                dest: "./dist/index.css"
            }
        }
    })

    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-copy");

    grunt.registerTask('default', ['htmlmin', 'cssmin', 'uglify']);
    grunt.registerTask("release", ['copy', 'htmlmin']);
}