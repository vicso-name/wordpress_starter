# Gulp Based WordPress Development Starter KIT

<p>This guide helps you implement the Gulp starter to your WordPress project. Just follow step by step instructions below:</p>

<h3>Step 1</h3>
<hr>
<p>Install WordPress locally.</p>

<h3>Step 2</h3>
<hr>
<p>Clone <code>git clone  https://github.com/vicso-name/wordpress_starter.git</code> the Gulp starter to a wp-content folder of your project.</p>

<h3>Step 3</h3>
<hr>
<p>Go to the starter folder, and run the command line from this folder. Use the <code>npm i</code> to initialize a node_modules.</p>

<h3>Step 4</h3>
<hr>
<p>While node_modules library is being installed, create the starter WordPress template. You can use the <a href="https://underscores.me/" rel="nofollow"></a> for this purpose.</p>
<p>After you created the starter theme, you need to create an extra folder in this one: named css and inside the css folder you need to create the sass folder with main.sass file inside. And in the js folder (no need to create it, the underscores generator already created it) you have to create the app.js file.</p>

<h4>For example:</h4>

<ul>
    <li><strong>css -> sass -> main.sass</strong></li>
    <li><strong>js -> app.j</strong></li>
</ul>


<p>There are the main JavaScript and CSS files for your project. But pay attention. While launching Gulp for the first time, Gulp creates minified copies of these files: <strong>app.min.js</strong> and <strong>app.min.css</strong>. Don't forget to plug them into function.php</p>

<h3>Step 5</h3>
<hr>
<p>Get back to our Gulp starter folder. There is the gulpfile.js - open it. In the paths to files and folders you will notice <strong>themename</strong> we used this world for sample. You need to replace it with your own theme name.</p>
<p>And the last thing. On the 22nd line of the gulpfile.js enter the address of your local server.</p>

