require.config({
    paths: {
        react: '../bower_components/react/react',
        text: '../bower_components/requirejs-text/text',
        JSXTransformer: '../bower_components/jsx-requirejs-plugin/js/JSXTransformer',
        jsx: '../bower_components/jsx-requirejs-plugin/js/jsx'
    }
});

define(['react', 'jsx!components/app'], function (React, APP) {
    React.render(React.createElement(APP), document.body);
});
