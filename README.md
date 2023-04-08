# Parallax effect
_Copy from my [Codepen.io](https://codepen.io/karasev/pen/OgZwdr)_

**Parallax effect in VanillaJS**

### Adding new layer

just add a block/element with class `.layer` as a layer in `#parallaxBox` block and set `data-layer-speed` attribute as parameter for movement speed. JS will do all other magic.

```html
<div id="parallaxBox">
  ...
  <div
    class="layer [...]"
    data-layer-speed='0.2'
    ...
  ><!-- all content moves as sinlge layer --></div>
  ...
</div>
```

### Set layer speed

set `data-layer-speed` attribute as parameter for movement speed as you want. Default is `0.5`

```html
...
<img
  class="layer [...]"
  data-layer-speed='1'
  ...
>
<img
  class="layer [...]"
  <!-- Without attribute it still valid and works. Default speed = 0.5 -->
  ...
>
...
```

Have fun!
