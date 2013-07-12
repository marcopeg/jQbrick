# jQbrick

`jQbrick` is a **components library for Web/Mobile Apps developement**.

It is build over `jQuery` and `BackboneJS`, it uses RequireJS for dependencies and optimization and `jQueryMobile` as _first implemented UI toolkit_ to produce well structured MobileApps.

> I like to call `jQbrick` as _"Bricks for Mobile App Directors"_.


## Where `jQbrick` comes from?
`jQbrick` comes from a `jQMBR` (repo) reengineering process.  
The name is a mix of "bricks" - to highlight the **components library** nature of this project - and "jQ" to remember what's behind!

You speak `jQbrick` as **"jay" + "Kubrick"** (_the American film director_).  
I like to refer to a very important film director because - in my intention - **you will use
`jQbrick` components as actors in you Web/Mobile Application**.




## What's Included?

Forking or downloading `jQbrick` will provide you a fully functional test application
- a "kitchen sink" - where I put all provided features into a real Web/Mobile App.  
(by now - early developement - you got running tests...)

Dependencies are also included into the repo (by now).



## For the Web, For Mobile
`jQbrick` is not only for Mobile developement!  
**It isn't tied up to jQueryMobile!**

`jQbrick` should be used as a simple _jQuery+Backbone+RequireJs_ boilerplate who provides
some useful Backbone extension objects to implement _Component Architecture_ in your application.

By now i'm implementing it with `jQM` because I think `jQM` as the easiest Mobile App Framework available on the web.  
In future I wish to implement `AppFramew` UI components too and - why not - other UI Kits!


## Documentation:
**To create documentation it is a real challenge for a non-profit project!**  
For the moment all documentation is provieded through comments into source files and demonstrational code blocks
but I hope to find the time to write down a wiki here on GitHub!

Contributors are welcome!


## Targets:
- full AMD support
- no static HTML, JS templates are welcome
- declarative code! <small>I want you to read your sources as books on your Kindle!</small>
- run apps on iOS and Android browser (may be other platforms)
- run apps on GoogleChrome, Safari, Firefox (IE? What that s**t?)
- wrap project with PhoneGap, deploy on iOS and Android (may be other platforms)





## Born To Be Optimized!
`jQbrick` comes with a built-in _RequireJS_ optimization script you can find under `/js` folder.

**NOTE:** You need _node.js_ running on your machine to perform following actions!

How To Run Optimizer:
- open a console window 
- navigate to the `/.../jQbrickProject/js/` folder
- `node r.js -o require.build.js`

a new folder named **"AppDeploy"** will be created under your app's root:  
`/.../jQbrickProject/AppDeploy/`

In that folder you can completely remove `/js` and `/less` directory obtaining a **optimized
production version** of you App!
