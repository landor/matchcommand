MatchCommand
============

A chrome extension to make links out of matching text on pages and a php native messaging host to run commands when links are clicked.

All the behavior is currently hard coded. It could easily be generalized to do custom matching and local commands so **I'm open to feature requests**.

This will currently match:
 * [modified kint output](#modifications-to-kint)
 * xdebug output

Filenames are turned into links which open the file to the indicated line in Sublime Text 3.

## Install

### Register the native messaging host with Chrome

Copy `host/org.aught.matchcommand.json` to the [appropriate chrome directory](https://developer.chrome.com/extensions/nativeMessaging#native-messaging-host-location).
Example for linux using Chromium:
```
mkdir -p ~/.config/chromium/NativeMessagingHosts
cp host/org.aught.matchcommand.json ~/.config/chromium/NativeMessagingHosts/
```
Set the correct **path** value in the new `org.aught.matchcommand.json`. It should be the absolute path to `host/host.php`.


### Modifications to Kint

The filename and line number are needed as data attributes.

```html
<span class="krumo-callee-file" data-filename="/path/to/file" data-linenumber="linenumber">kint shortened filename</span>
```
