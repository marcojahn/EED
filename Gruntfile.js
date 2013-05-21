module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-zip');

    grunt.initConfig({
        createworkspace: '{' + grunt.util.linefeed + '    "folder": "your intellij settings folder/config/templates/",' + grunt.util.linefeed + '    "filename": "Dialog PD.xml"' + grunt.util.linefeed +'}',
        unzip: {
            './': 'doc/dialog.zip'
        },
        copytemplates: {
            fromintellij: {
                src: '<%= workspaceSettings.folder %><%= workspaceSettings.filename %>',
                dest: 'doc/<%= workspaceSettings.filename %>'
            },
            tointellij: {
                src: 'doc/<%= workspaceSettings.filename %>',
                dest: '<%= workspaceSettings.folder %><%= workspaceSettings.filename %>'
            }
        }
    });

    if (!grunt.file.exists('workspace.json')) {
        grunt.log.ok('Please provide workspace settings in workspace.json, create with task `createworkspace`');
    }

    grunt.registerTask('init', 'Reads workspace settings', function () {
        var workspaceSettings = grunt.file.readJSON('workspace.json');
        
        grunt.config.set('workspaceSettings', workspaceSettings);
    });

    grunt.registerTask('savetemplates', ['init', 'copytemplates:fromintellij']);

    grunt.registerTask('loadtemplates', ['init', 'copytemplates:tointellij']);

    grunt.registerMultiTask('copytemplates', 'Copies templates from and to IntelliJ', function () {
        grunt.file.copy(this.data.src, this.data.dest);
    });

    grunt.registerTask('createworkspace', 'Creates workspace.json file', function () {
        grunt.file.write('workspace.json', grunt.config.get(this.name));
    });

    grunt.registerTask('clean', 'Cleans project', function () {
        if (grunt.file.exists('dialog')) {
            grunt.file.delete('dialog');
        }
    });

    grunt.registerTask('dialog', ['clean', 'unzip']);
};