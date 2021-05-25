# Gulp Based WordPress Development Starter KIT

<p>This guide helps you to implement the Gulp starter to your WordPress project. Just follow the step by step instructions below:</p>

<h3>Step 1</h3>

<p>Install WordPress on a web host or on the locally.</p>

<h3>Step 2</h3>

<p> Clone <code>git clone  https://github.com/vicso-name/wordpress_starter.git</code> the Gulp starter to a wp-content folder of your project.</p>

<h3>Step 3</h3>

<p>Go to the starter folder, and run the command line from this folder. Use the <code>npm i</code> for initializing a node_modules.</p>

<h3>Step 4</h3>

<p>While node_modules library are being installed let's create the starter WordPress template. You can use the <a href="https://underscores.me/" rel="nofollow"></a> for this purpose.</p>
<p>In this step, we need to create an extra folder in our starter theme: named css and inside the css folder we need to create the sass folder with main.sass inside. And in the js folder (no need to to create it, the underscores generator created it already for us) we have to create the app.js file.</p>

<h4>For example:</h4>

<code>css -> sass -> main.sass</code>
<code>js -> app.j</code>

<p>These are the main JavaScript and CSS files for your project. But pay atantion. On first launch Gulp will create minified copies of these files: <strong>app.min.js</strong> and <strong>app.min.css</strong>. Don't forget to plug them into function.php</p>

<h3>Step 5</h3>

<p>Turn into our Gulp starter folder. There are the gulpfile.js open it. In the paths to files and folders you will notice <strong>themename</strong> we used this world for example. You need to replace it with your own theme name.</p>
<p>And the last thing. On the 22nd line of the gulpfile.js enter the address of your local server.</p>

