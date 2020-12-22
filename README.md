# harmony-demos-handlebars
Demo for using Handlebars with Bit Harmony.

In this demo, handlebars are being compiled by the handlebars-loader webpack plugin, and then converted to a js component which is then called with the desired input context/data.

The output is then an html string, which is currently displayed as is. The project consuming these handlebarjs bit components will then decide how to render the html on the page.
