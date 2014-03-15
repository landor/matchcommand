matchcommand
============

A rough chrome extension to look for text on pages and a php native messaging host to run commands based on matches.

Currently this just looks for file:line output in kint and opens the file to the line number in sublime text.
If anyone cares it could easily be generalized to do custom matching and different local commands.

Here are the changes to kint that it expects:
'''
<span class="krumo-callee-file" data-filename="/path/to/file" data-linenumber="linenumber">kint shortened filename</span>
'''
