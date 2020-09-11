# EditorJS-LaTeX
LaTeX block support for EditorJS<br/>
Created By: MD Gaziur Rahman Noor

<h2>Setting Up</h2>
Add the following code inside the <code>&#x3C;head&#x3E;</code> tag.<br/>
<pre>
&#x3C;script src=&#x22;https://cdn.jsdelivr.net/gh/mdgaziur/EditorJS-LaTeX@1.0.0/editorjs-latex.min.js&#x22;&#x3E;&#x3C;/script&#x3E;
&#x3C;link rel=&#x22;stylesheet&#x22; href=&#x22;https://cdn.jsdelivr.net/gh/mdgaziur/EditorJS-LaTeX@1.0.0/editorjs-latex.min.css&#x22;&#x3E;
&#x3C;script src=&#x22;https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.12.0/katex.min.js&#x22;&#x3E;&#x3C;/script&#x3E;
</pre>
To add this library to EditorJS, simply add the follwing code:<br/>
<pre>
tools: {
    Math: {
    class: EJLaTeX,
    shortcut: 'CMD+SHIFT+M'
}
</pre>
<br/>
<h2>Getting data</h2>
The output data of this plugin will look like bellow:
<pre>
{
    "type" : "Math",
    "data" : {
        "math" : "\\frac{a \\pm b}{(a+b)^2}"
    }
}
</pre>
The "math" item contains the expression. You can use KaTeX to render that in your document.
<br/>
<br/>
<h2>Conclusion</h2>
If there is any problem or bugs, create an issue in this repository. I'll try my best to help you.