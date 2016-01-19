#jquery.tide.js

##About

jquery tide aims to make strings of text appear like they are floating on the surface of water

##Usage

Say you have an element like
```
<h1 class="make-tidal">Riverside</h1>
```
simply select it like you would anyother jquery element and apply the tide() method to it

```
$('.make-tidal').tide();
```

##Todo

the next version of the plugin will allow you to pass in a configuration object which will control the way the letters react when a wave hits them

later versions will allow you to set a default 
behaviour for letters that are not currently under the wave and will also allow you to control the frequency and modulation of the wave.

