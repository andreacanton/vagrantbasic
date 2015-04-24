module.exports = function(grunt) {
    'use strict';
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({


        watch: {
            options: {
                livereload: true
            },
            compass: {
                files: ['src/scss/**/*.{scss,sass}'],
                tasks: ['compass:devMain']
            },
            js: {
                files: '<%= jshint.all %>',
                tasks: ['jshint', 'uglify:dev']
            },
            livereload: {
                files: ['*.html', '*.php', 'assets/images/**/*.{png,jpg,jpeg,gif,webp,svg}', '<%= jshint.all %>']
            }
        },

        compass: {
            dev: {
                options: {
                    basePath: './',
                    config: 'config.rb'
                }
            },
            prod:{
                options:{
                    basePath: './',
                    config: 'prod-config.rb',
                    force:true
                }
            }
        },

        jshint: {
            options: {
                "globals": {
                    "jQuery": true,
                    "module": true,
                    "require":true
                },
                "force": true
            },
            all: [
                'Gruntfile.js',
                'src/js/*.js'
            ]
        },

        uglify: {

            options: {
                sourceMap: 'assets/js/source-map.js'
            },
            files: {
                'assets/js/scripts.min.js': [
                    'src/js/scripts.js'
                ]
            }

        },

        rsync: {
            options:{
                src: "./",
                exclude: [
                    '.sass-cache',
                    '.DS_Store',
                    '.git*',
                    'Gruntfile.js',
                    'src'
                ]
            },
            stage: {
                options:{
                    dest: "~/domains/test/public_html/",
                    host: "",
                    recursive: true,
                    syncDest: true,
                    deleteAll: false
                }

            },
            production: {
                options:{
                    dest: "~/public_html/",
                    host: "",
                    recursive: true,
                    syncDest: true,
                    deleteAll: false
                }

            }
        }
    });

    // register task
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('stage', ['compass:prod','uglify:compile', 'rsync:stage']);
    grunt.registerTask('deploy', ['compass:prod','uglify:compile', 'rsync:production']);

};