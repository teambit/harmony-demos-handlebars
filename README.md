# harmony-demos-handlebars
Demo for using Handlebars with Bit Harmony.

In this demo, handlebars are being compiled by the handlebars-loader webpack plugin, and then converted to a js component which is then called with the desired input context/data.

The output is then an html string, which is currently displayed as is. The project consuming these handlebarjs bit components will then decide how to render the html on the page.


To see the components in action, please install bit's new version (we call it Harmony) on your PC. FYI - Harmony will be going GA a few weeks into 2021.
npm install -g @teambit/bit

Once that's installed (it could take a few minutes), please run `bbit start` in a terminal from the root of the repo, wait until the local UI boots up and open your browser to localhost:3000 (or the relevant port, listed in the terminal, if 3000 was taken when you ran the command above)

That's it, feel free to play with the UI and see how the handlebars template components behave