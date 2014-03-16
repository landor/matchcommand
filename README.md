matchcommand
============

A rough chrome extension to look for text on pages and a php native messaging host to run commands based on matches.

All the behavior is hard coded. If anyone cares it could easily be generalized to do custom matching and local commands.

This will currently match:
 * modified kint output
 * xdebug output
 It turns filenames into links which open the file to the indicated line in my editor, Sublime Text.

Here are the changes to kint that it expects:
```html
<span class="krumo-callee-file" data-filename="/path/to/file" data-linenumber="linenumber">kint shortened filename</span>
```
