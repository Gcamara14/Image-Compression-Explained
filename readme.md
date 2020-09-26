Accessible Starter Kit
======================

Date: January 22nd, 2020

## Dependencies

- [Grunt & Stylus](#grunt-and-stylus)
- [Gardenburger](#gardenburger-quickstart)
- [Flying Focus](#flying-focus)
- [Bootstrap](#bootstrap)
- [Aria Accordions](#ariaaccordions-plugin)
- [Font Awesome](#font-awesome)
- [Modaal](#modaal-accessible-modal)
- [Humans.Txt](#humanstxt)


## Grunt and Stylus

1\.  Ensure Gruntfile.js, package.json, and node modules are installed.

2\.  Create the src folder under CSS. For example:

```
 css/src/client.styl
 css/src/gardenburger-2.0.0.styl
```

When compiled using the commands via the next step you should get this:

```
 css/client.css
 css/gardenburger-2.0.0.css
```

3\.  Key Commands

```
- Grunt Watch (Compiles Stylus everytime you hit save)
- Grunt (Compiles Stylus)
- Grunt Production (Compiles stylus, concatenates css, minifies css, minifies js)
```

Please note that for grunt production, you must manually set the files in the grunt file.

You can read more about grunt or stylus via the online documentation.


## Gardenburger Quickstart

1\.  Ensure jQuery and Gardenburger CSS/JS are installed.

```html
<link rel="stylesheet" href="/css/gardenburger-2.0.0.css">
<script src="/js/jquery-1.12.4.min.js"></script>
<script src="/js/jquery-migrate-1.4.1.min.js"></script>
<script src="/js/jquery.gardenburger-2.0.0.js"></script>
```

2\.  Create The HTML

```html
<nav data-gardenburger>
    <div class="burger"><a aria-label="Toggle Navigation" href="#"><i></i><i></i><i></i></a></div>
    <ul>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Parent with link</a>
            <ul>
                <li><a href="#">Child Nav</a></li>
                <li><a href="#">Child Nav</a></li>
                <li><a href="#">Child Nav</a></li>
                <li><a href="#">Child Nav</a></li>
                <li><a href="#">Superchild</a>

                    <ul>
                        <li><a href="#">Child Child Nav</a></li>
                        <li><a href="#">Child Child Nav</a></li>
                        <li><a href="#">Child Child Nav</a></li>
                    </ul>

                </li>
            </ul>

        </li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
        <li><a href="#">Link</a></li>
    </ul>
</nav>
    
```

## Flying Focus

Flying Focus is a UI concept. It adds a transition to the focus outline when you tab around inputs, buttons, and links.

This is a standalone script. Simply include the file into the webpage or in the minification bundle.


```html
<script src="/js/flying-focus.js"></script>
```

## Bootstrap

Why Bootstrap? Bootstrap includes a grid system, multiple components, and Reboot. Reboot provides us with an improved cross-browser rendering. It's a slightly more opinionated reset to common HTML elements.

Simply put the following into the appropriate locations.

```html
<link rel="stylesheet" href="/css/bootstrap.min.css">
<script src="/js/bootstrap.bundle.min.js"></script>
```

## Aria.Accordions Plugin

An accessible accordion Plugin. Requires these dependencies.

```html
<link rel="stylesheet" href="/css/aria.accordion.css">
<script src="/js/aria.accordion.min.js"></script>
```

Markup to instantiate

```html
    <section>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div data-aria-accordion>
                        <p data-aria-accordion-heading>
                            How can I make my website accessible?
                        </p>
                        <div data-aria-accordion-panel>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tortor urna, dapibus eget arcu nec, egestas accumsan mi. Cras blandit aliquet finibus. Sed leo odio, lacinia sed feugiat quis, faucibus et velit. Donec ac eros est. Phasellus varius elementum viverra. Ut posuere ornare nisi id iaculis. Fusce auctor velit dolor, sed volutpat metus
                                efficitur sed. Curabitur sollicitudin ac ipsum id volutpat.
                            </p>
                        </div>
                    </div>
                    <div data-aria-accordion>
                        <p data-aria-accordion-heading>
                            Is WCAG a legal requirement?
                        </p>
                        <div data-aria-accordion-panel>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tortor urna, dapibus eget arcu nec, egestas accumsan mi. Cras blandit aliquet finibus. Sed leo odio, lacinia sed feugiat quis, faucibus et velit. Donec ac eros est. Phasellus varius elementum viverra. Ut posuere ornare nisi id iaculis. Fusce auctor velit dolor, sed volutpat metus
                                efficitur sed. Curabitur sollicitudin ac ipsum id volutpat.
                            </p>
                        </div>
                    </div>
                    <div data-aria-accordion>
                        <p data-aria-accordion-heading>
                            What is WCAG?
                        </p>
                        <div data-aria-accordion-panel>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tortor urna, dapibus eget arcu nec, egestas accumsan mi. Cras blandit aliquet finibus. Sed leo odio, lacinia sed feugiat quis, faucibus et velit. Donec ac eros est. Phasellus varius elementum viverra. Ut posuere ornare nisi id iaculis. Fusce auctor velit dolor, sed volutpat metus
                                efficitur sed. Curabitur sollicitudin ac ipsum id volutpat.
                            </p>
                        </div>
                    </div>
                    <div data-aria-accordion>
                        <p data-aria-accordion-heading>
                            What is the difference between WCAG 2.0 and 2.1?
                        </p>
                        <div data-aria-accordion-panel>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tortor urna, dapibus eget arcu nec, egestas accumsan mi. Cras blandit aliquet finibus. Sed leo odio, lacinia sed feugiat quis, faucibus et velit. Donec ac eros est. Phasellus varius elementum viverra. Ut posuere ornare nisi id iaculis. Fusce auctor velit dolor, sed volutpat metus
                                efficitur sed. Curabitur sollicitudin ac ipsum id volutpat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
```

## Font Awesome

Vector icons and social logos with Font Awesome, the web's most popular icon set and toolkit.

CSS

```html
<link rel="stylesheet" href="/css/fontawesome.min.css">
```

Fonts(required for the css file). You can find the fonts in the folder below (FA = Font Awesome).

```
/fonts/webfonts/
```
You can find the HTML and more details via the font awesome website.



## Modaal (Accessible Modal)

An accessible modal plugin. Requires these dependencies.

```html
<link rel="stylesheet" href="/css/modaal.css">
<script src="/js/modaal.js"></script>
```

You can view the documentation for the [Modaal Plugin Here](https://github.com/humaan/Modaal). However, here is some sample markup to preview.

**Why did I choose this plugin?**

I found a better user experience with the image sliders compared to other plugins. I liked that as the user navigates the screanreader uses the aria-live feature to pronounce the alt tag. 

Here's a sample use

```html
    <a href="#inline" data-modaal-type="inline" data-modaal-animation="fade" class="modaal">Show</a>

    <div id="inline" style="display:none;">
        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
        <a href="#" class="btn btn-primary">Visit Budbreak</a>
    </div>
```

Here's another example:

```html
    <a href="https://www.youtube.com/embed/WGunLM4_lSo" class="video">Show Youtube</a>
    <a href="https://player.vimeo.com/video/142216434" class="video">Show vimeo</a>

    <script>
        $('.video').modaal({
            type: 'video'
        });     
    </script>
```

## BB-Accessibility

A collection of usefull accessibility CSS classes & Javascript Functions

```html
<link rel="stylesheet" href="/css/bb-accessibility.css">
<script src="/js/bb-accessibility.js"></script>
```

Sample HTML Markup for skiplinks

```html
    <div class="skiplinks">
        <a href="#content">Skip to Main Content</a>
        <a href="#search">Skip to Search</a>
        <a href="#footer">Skip to Footer</a>
    </div>
```

Details can be found inside the JS/CSS file(s).

## Humans.txt

**Why?** 

You don't have to if you don't want. The only aim of this initiative is to know who the authors of the sites we visit are.