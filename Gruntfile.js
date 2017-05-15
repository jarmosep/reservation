module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            files: ['src/style/*', '!src/style/bourbon', '!src/style/neat'],
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none',
                    noCache: true
                },
                files: {
                    'build/style.css':'src/style/style.scss'
                }
            }
        },
        concat: {
            files: ['src/scripts/app.js', 'src/scripts/services/*.js', 'src/scripts/controllers/*.js', 'src/scripts/directives/*.js'],
            options: {
                separator: '\n',
            },
            dist: {
                src: ['src/scripts/app.js', 'src/scripts/services/*.js', 'src/scripts/controllers/*.js', 'src/scripts/directives/*.js'],
                dest: 'build/code.js',
            },
        },
        uglify: {
            target: {
                files: {
                    'build/code.min.js': 'build/code.js'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            files: ['<%= sass.files %>', '<%= concat.files %>', '**/*.html'],
            tasks: ['sass', 'concat', 'uglify'],
        },
        connect: {
            server: {
                options: {
                    port: 4000,
                    hostname: 'localhost',
                    base: 'C:/Users/Puliukkeli/development/ilves', // Project folder root, put your own
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('server', "Serving the app", [
        'connect:server', 'watch' ]);

};
