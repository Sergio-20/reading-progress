# Let users see their reading progress!

A Javascript progress bar that enlarges or contracts according to your scroll position.

Users can grow frustrated or become distracted with longer articles online. With a horizontal scrollbar, readers will be able to get an idea of how much longer they have to read in order to finish reading an article.

This helps keep readers motivated to finish reading an article in its entirety.

## How To Use:

First, import the javascript file into your HTML file.
```HTML
<script defer src="./position-tracker.min.js" type="module"></script>  
```

Second, import the Javascript library into your own Javascript file and call the progress( height, color ) function.
```javascript
import progress from "./position-tracker.min.js";

/*The first argument is the height(converted to rems) 
The second is the desired background color of the progress bar.*/  
progress( 0.6, "#ff7a59" );
```

Third, add your javascript file to your desired HTML file.
```HTML
<script defer src="./myscript.js" type="module"></script>
```

Lastly, the end result should be something like so on your HTML file:
```HTML
<script defer src="./position-tracker.min.js" type="module"></script>  
<script defer src="./myscript.js" type="module"></script>
```
