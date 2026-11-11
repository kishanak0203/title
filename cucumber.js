module.exports = {
    default: {
        paths: ['features/**/*.feature'],
        require: [
            //'features/support/hooks.js',
            'features/step-definitions/**/*.js'
        ],
        format: ['progress']
    }
};