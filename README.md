## Rundiv.
  You can use it for your personal gallery and focus picture.
  
  Create for moblie pages.
  
  Without jQuery.Less than 6KB.
  
  Enjoy!

  This is a [Demo](http://1.rundiv.sinaapp.com/index.html).
  
  你可以将它用在个人相册或者焦点图上面。
  
  请注意，这是针对手机端页面设计的。（当然，也可以用在桌面端，不过不兼容旧版本的ie）
  
  这是一个不使用jQuery小巧的框架，不到6KB。
  
  
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
<!--alternative-->
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

## 设置

- **havNav** Boolean *(defaule:false)* - 如果你要使用导航栏 那么必须为true

- **startSlide** Integer *(default:0)* - 从第几张开始

- **speed** Integer *(default:300)* - 切换速度

- **auto** Integer - 设置自动播放（数值为轮播速度，单位毫秒）

- **continuous** Boolean *(default:true)* - 是否循环播放

- **disableScroll** Boolean *(default:false)* -是否允许触摸滑动

- **stopPropagation** Boolean *(default:false)* - 是否阻止事件冒泡

- **callback** Function - 滚动开始时的回调函数

- **transitionEnd** Function - 滚动结束后的回调函数

## Rundiv API

Rundiv exposes a few functions that can be useful for script control of your slider.

`linkNav("id")` Create a closely connected with your div navigation (id:id of your Nav)

`prev()` slide to prev

`next()` slide to next

`getPage()` returns current slide index position

`getNumSlides()` returns the total amount of slides

`slide(index, duration)` slide to set index position (duration: speed of transition in milliseconds)


## 接口

Rundiv也提供了一些借口供使用此插件的开发者调用：

`linkNav("id")` 创建一个与你的轮播图相连的导航。（id为导航ol/ul的‘id’）

`prev()`  直接滑向前一个

`next()`  直接滑入下一个

`getPage()` 返回当前滑动块的页码

`getNumSlides()` 返回总共有多少个滑动块

`slide(index, duration)` 直接滑到第index个块，所用的时间是duration(ms).
