## Rundiv.
  You can use it for your personal gallery and focus picture.
  
  Create for moblie pages.
  
  Without jQuery.Less than 6KB.
  
  Enjoy it!

  This is a [Demo](http://1.rundiv.sinaapp.com/index.html).
  
## Usage
Rundiv only needs to follow a simple pattern. Here is an example:

``` html
<div id='rundiv'>
  <div class='wrap'>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
<!--alternative-->
<div>
  <ol id="rundivNav">  
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ol>
</div>
```

Above is the initial required structure– a series of elements wrapped in two containers. Place any content you want within the items. The containing div will need to be passed to the Rundiv function like so:

``` js

var elem = document.getElementById('rundiv');
window.rundiv = Rundiv(elem, {
   hasNav:true,
   startSlide: 1,
   auto: 4000,
   continuous: true,
  // disableScroll: true,
  // stopPropagation: true,
  // callback: function(index, element) {},
  // transitionEnd: function(index, element) {}
});
rundiv.linkNav("rundivNav");    //the id of the ol or ul (if you use this,please make sure hasNav:true) 

});
```

I always place this at the bottom of the page, externally, to verify the page is ready.

Also Rundiv needs just a few styles added to your stylesheet:

``` css
#rundiv {
  overflow: hidden;
  visibility: hidden;
  position: relative;
}
.wrap {
  overflow: hidden;
  position: relative;
}
.wrap > div {
  float:left;
  width:100%;
  position: relative;
}
```

## Config Options

Rundiv can take an optional second parameter– an object of key/value settings:

- **havNav** Boolean *(defaule:false)* - must be true if you want a Nav

- **startSlide** Integer *(default:0)* - index position Swipe should start at

-	**speed** Integer *(default:300)* - speed of prev and next transitions in milliseconds.

- **auto** Integer - begin with auto slideshow (time in milliseconds between slides)

- **continuous** Boolean *(default:true)* - create an infinite feel with no endpoints

- **disableScroll** Boolean *(default:false)* - stop any touches on this container from scrolling the page

- **stopPropagation** Boolean *(default:false)* - stop event propagation
 
-	**callback** Function - runs at slide change.

- **transitionEnd** Function - runs at the end slide transition.


## Rundiv API

Rundiv exposes a few functions that can be useful for script control of your slider.

`prev()` slide to prev

`next()` slide to next

`getPage()` returns current slide index position

`getNumSlides()` returns the total amount of slides

`slide(index, duration)` slide to set index position (duration: speed of transition in milliseconds)

## Browser Support
Rundiv is now compatible with all browsers, including IE7+. Swipe works best on devices that support CSS transforms and touch, but can be used without these as well. A few helper methods determine touch and CSS transition support and choose the proper animation methods accordingly.

