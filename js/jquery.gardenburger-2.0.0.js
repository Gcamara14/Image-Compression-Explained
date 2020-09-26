/*
** A mobile-first navigation jQuery plugin.
** 
** Gardenburger turns navigation lists into dynamic dropdowns and
** flyouts. These menus are all keyboard accessible. Gardenburger
** is mobile friendly and will transmogrify in mobile mode (at
** < 800px by default) into a set of stacked, indented lists that
** are hidden beneath a "hamburger" icon. Buttons are injected in
** mobile mode for expanding and collapsing menus, as the "hover"
** event can't be relied upon in touch screen environments.
*/

// Keep track of our instantiated gardenburgers in case we need
// to manipulate them later
window.gardenburgers = [];

var Gardenburger = function ($e, options) {

    options = options || {};

    // If options is a string (as it is when taken from
    // an HTML attribute), parse it into an object
    typeof options == "string" && (options = $.parseJSON(options));

    this.settings = $.extend(
        {
            breakpoint              : 800
        },
        options
    );

    window.gardenburgers.push(this);

    var root = this;
    this.i = $(window.gardenburgers).index(this);
    this.e = $e;

    this.init();
    
}



Gardenburger.prototype.init = function () {
    var root = this;

    this.e
    

            // Since the focus event doesn't bubble
            // up to the LI tags, use event delegation
            // to apply a class for the CSS to target
            // instead. Also, trigger a custom event
            // for the JS side of things.

            .on(
                "focus",
                "a, input",
                function (e) {
                    $(e.target).parents("li").addClass("focus");
                    $(e.target).trigger("bubblyfocus");
                }
            )
            .on(
                "blur",
                "a, input",
                function(e){
                    $(e.target).parents("li").removeClass("focus");
                }
            )


            // Since a parent selector (:has()?) in CSS
            // is currently a distant fantasy, apply a
            // class to LIs that contain submenus. Close
            // them for initial state unless they're set
            // to be visible on the surface in mobile with
            // the respective class.

            .find("li:has(ul), li:has(.dropdown)")
                    .addClass("hasChildMenu")
                    .not($(".surface-visible-in-mobile"))
                            .addClass("closed")
                            .end()
                    .end() // Back to context


            // Inject togglers for hiding/showing sub
            // menus in mobile mode.

            .find("li.hasChildMenu:not(.surface-visible-in-mobile)")
                    .each(
                        function (i, el) {
                            var parentGroupText = $(this).children("a, .linkless-nav-item").first().text();
                            $(this).children("a, .linkless-nav-item").after("<button aria-expanded=\"false\" class=\"submenuTogglers\"><i></i><span class=\"exp-btn sr-only\">Toggle Dropdown Navigation </span><span class=\"inject-title-button sr-only\"></span></button>");
                            $(this).find(".inject-title-button").text("for " + parentGroupText); // This adds text to the button from the parent tag.
                        }
                    )
                    .end() // Back to context


            // Touch handling
            // If the link of a menu item with a dropdown
            // is tapped (touch), the first tap will open
            // the menu (via .focus). It will require a
            // second tap to follow the href.
            
            .on(
                "touchend",
                "li.hasChildMenu > a",
                function (e) {
                    if (!$(e.target).data("tappedOnce") && $(window).width() >= root.settings.breakpoint) {
                        e.preventDefault();

                        $(e.target).data("tappedOnce",true);

                        $(document).on(
                            "touchstart.tapCountReset" + root.i,
                            function (e2) {
                                if ( !$(e2.target).is($(e.target)) && !$(e2.target).closest($(e.target)).length ) {
                                    $(e.target).data("tappedOnce",false).blur();
                                    root.e.off("touchstart.tapCountReset" + root.i);
                                }
                            }
                        );

                    }
                }
            )
            
            
            // If there's a custom click handler on the
            // nav item or it is linkless, trigger the
            // corresponding behavior and opening the
            // submenu on click.
            
            .on(
                "click",
                "[data-click-handler], .linkless-nav-item",
                function (e) {
                    e.preventDefault();
                    $(window).width() < root.settings.breakpoint && $(e.target).closest("li").children(".submenuTogglers").click();
                    if ($(e.target).data("click-handler") == "focus-child") {
                        $(e.target).closest("li").find("ul, .dropdown").find("a, input").eq(0).focus();
                    }
                }
            )
            
            
            // If a nav item is clicked that isn't hoverable,
            // we must apply a class to lock the submenu's
            // visibility.
            
            .on(
                "click",
                "li.hasChildMenu.not-hoverable > a, li.hasChildMenu.not-hoverable > .linkless-nav-item",
                function (e) {
                    $(window).width() >= root.settings.breakpoint && $(e.target).closest("li").addClass("locked-active");
                }
            )


            // Apply click event handling to the mobile
            // menu button to handle visibility of
            // navigation.

            .on(
                "click",
                ".burger a",
                function (e) {
                    e.preventDefault();
                    var $burgerLink = $(e.target).closest("a");
                    root.e.is(".mobileHide") ? root.showMenuMobileInline.apply(root) : root.hideMenuMobileInline.apply(root);
                    // root.e.is(".mobileHide") ? $burgerLink.attr("aria-expanded", "false") : $burgerLink.attr("aria-expanded", "true");
                    
                    
                }
            )

            .on(
                "click",
                ".submenuTogglers",
                function (e) {
                    var $li = $(e.target).closest("li");
                    var $liBtn = $(e.target).closest("button");
                    var $submenu = $li.children("ul, .dropdown").eq(0);
                    e.preventDefault();

                    $li.is(".closed") ? root.showSubmenuMobile($submenu) : root.hideSubmenuMobile($submenu);
                    $li.is(".closed") ? $liBtn.attr("aria-expanded","false") : $liBtn.attr("aria-expanded","true");
                    $li.is(".opening") ? $liBtn.attr("aria-expanded","true") : $liBtn.attr("aria-expanded","false");
                }
            )
    ;


    // Position the menus now and on resize.

    root.positionMenus();
    $(window).on(
        "resize",
        function () {
            root.positionMenus()
        }
    );
    
    // Start the nav hidden in mobile.
    
    root.e.addClass("mobileHide");
    root.e.removeClass("mobileShow");


    // Remove focus from menu items so the dropdowns
    // close if user taps on document outside of
    // said menu.

    $(document).on(
        "touchstart",
        function (e) {
            root.e.find(".locked-active").not($(e.target).parents()).removeClass("locked-active");
            root.e.find(":focus").blur();
        }
    );


    // Remove the visibility-locking classes when
    // clicking on the document outside the locked
    // menu. These classes are applied when a menu
    // is not "hoverable" but has been activated
    // with a click.
    
    $(document).on(
        "click",
        function (e) {
            root.e.find(".locked-active").not($(e.target).parents()).removeClass("locked-active");
        }
    )
    
}



Gardenburger.prototype.showSubmenuMobile = function ($menu) {
    var
        root = this,
        visHeight = $menu.outerHeight(),
        animationEvent = whichAnimationEvent()
    ;

    if (!$menu.data("animating")) {
        $menu
                // Turn on the flag that prevents animations
                // from interrupting each other or queuing up.
                // This ensures this animation will complete.
                .data("animating", true)

                // Set a fixed height equal to its current height
                // so the transition has a "to" point.
                .css("height", visHeight)

                // Add the class that styles the opening
                // section so its transition will start and
                // take place at the same time as the opening
                // animation below. (This class controls the
                // shading of the submenu and the flipping
                // of the submenu indicator arrow.)
                .closest("li")
                        .addClass("opening")
                        .removeClass("closed")
                        .end()

                                        

                // Animates the height from 0 to the inline
                // height we specified above.
                .addClass("animateHeightToInline")

                // Once the animation finishes...
                .one(
                    animationEvent,
                    function () {
                        $menu
                                // Remove the fixed inline
                                // height that was added to
                                // give the transition a "to"
                                // point. If we need it later
                                // we'll measure anew since we
                                // always want the current height
                                // anyway (it might change if
                                // submenus are expanded/closed).
                                .attr("style","")
                                
                                // We don't need the class that
                                // animates it anymore.
                                .removeClass("animateHeightToInline")

                                // Turn off the flag that prevents
                                // animations from interrupting
                                // each other or queuing up.
                                .data("animating", false)
                        ;
                    }
                )
        ;
    }
}



Gardenburger.prototype.hideSubmenuMobile = function ($menu) {
    var
        root = this,
        visHeight = $menu.outerHeight(),
        transitionEvent = whichTransitionEvent()
    ;

    if (!$menu.data("animating")) {
        $menu
                // Turn on the flag that prevents animations
                // from interrupting each other or queuing up.
                // This ensures this animation will complete.
                .data("animating", true)

                // Remove the class that styles the open
                // section so its transition will start and
                // take place at the same time as the closing
                // animation below. (This class controls the
                // shading of the submenu and the flipping
                // of the submenu indicator arrow.)
                .closest("li")
                        .removeClass("opening")
                        .end()
                
                // Set a fixed height equal to its current height
                // so the transition has a "from" point, since we
                // can't tell it to transition from "whatever the
                // current unknown value is."
                .css("height", visHeight)
        ;

        // Removing this breaks the transition. Whyyyyyy???
        var boop = $menu.css("height");

        $menu
                // Begin the transition to 0 height
                .addClass("height0")

                // Once the transition finishes...
                .one(
                    transitionEvent,
                    function () {
                        $menu
                                // Remove the fixed inline
                                // height that was added to
                                // give the transition a "from"
                                // point. If we need it later
                                // we'll measure anew since we
                                // always want the current height
                                // anyway (it might change if
                                // submenus are expanded/closed).
                                .attr("style","")

                                // Hide the menu offscreen now
                                // that it's done animating
                                .closest("li")
                                        .addClass("closed")
                                        .end()
                                
                                // Now that the menu is offscreen
                                // we can get rid of the class
                                // that set the height to 0. We
                                // want it to have an accurate
                                // open state height so that it
                                // will be measurable next time.
                                .removeClass("height0")
                                
                                // Turn off the flag that prevents
                                // animations from interrupting
                                // each other or queuing up.
                                .data("animating", false)
                        ;
                    }
                )
        ;
    }
}



Gardenburger.prototype.showMenuMobileInline = function () {
    var
        root = this,
        $nav = this.e.children("ul:last"),
        visHeight = $nav.outerHeight(),
        animationEvent = whichAnimationEvent()
    ;
    
    if (!$nav.data("animating")) {
        
        // Begin the burger's animation to an X
        root.e.find(".burger").addClass("ex");
        root.e.find(".burger a").attr({
                "aria-expanded":"true",
                "aria-label": "Expanded Navigation — Click to Close"
            });
        
        $nav
                // Turn on the flag that prevents animations
                // from interrupting each other or queuing up.
                // This ensures this animation will complete.
                .data("animating", true)

                // Set a fixed height equal to its current height
                // so the transition has a "to" point.
                .css("height", visHeight)

                // Bring the nav onscreen.
                .closest(root.e)
                        .removeClass("mobileHide")
                        .addClass("mobileShow")
                        .end()

                // Animates the height from 0 to the inline
                // height we specified above.               
                .addClass("animateHeightToInline")
                
                // Once the animation finishes...
                .one(
                    animationEvent,
                    function () {
                        $nav
                                // Remove the fixed inline
                                // height that was added to
                                // give the transition a "to"
                                // point. If we need it later
                                // we'll measure anew since we
                                // always want the current height
                                // anyway (it might change if
                                // submenus are expanded/closed).
                                .attr("style","")

                                // We don't need the class that
                                // animates it anymore.
                                .removeClass("animateHeightToInline")

                                // Turn off the flag that prevents
                                // animations from interrupting
                                // each other or queuing up.
                                .data("animating", false)
                        ;
                    }
                )
        ;       
    }
}



Gardenburger.prototype.hideMenuMobileInline = function () {
    var
        root = this,
        $nav = this.e.children("ul:last"),
        visHeight = $nav.outerHeight(),
        transitionEvent = whichTransitionEvent()
    ;

    if (!$nav.data("animating")) {

        // Begin the burger's animation from an X
        root.e.find(".burger").removeClass("ex");
                root.e.find(".burger a").attr({
                "aria-expanded":"false",
                "aria-label": "Closed Navigation — Click to Expand"
            });
        
        $nav
                // Turn on the flag that prevents animations
                // from interrupting each other or queuing up.
                // This ensures this animation will complete.
                .data("animating", true)
                
                // Set a fixed height equal to its current height
                // so the transition has a "from" point, since we
                // can't tell it to transition from "whatever the
                // current unknown value is."
                .css("height", visHeight)
        ;
        
        // Removing this breaks the transition. Whyyyyyy???
        console.log($nav.css("height"));

        $nav
                // Begin the transition to 0 height
                .addClass("height0")

                // Once the transition finishes...
                .one(
                    transitionEvent,
                    function () {
                        
                        // Hide the nav offscreen now
                        // that it's done animating.
                        root.e.addClass("mobileHide");
                        root.e.removeClass("mobileShow");
                        $nav
                                // Remove the fixed inline
                                // height that was added to
                                // give the transition a "from"
                                // point. If we need it later
                                // we'll measure anew since we
                                // always want the current height
                                // anyway (it might change if
                                // submenus are expanded/closed).
                                .attr("style","")

                                // Now that the nav is offscreen
                                // we can get rid of the class
                                // that set the height to 0. We
                                // want it to have an accurate
                                // open state height so that it
                                // will be measurable next time.
                                .removeClass("height0")
                                
                                // Turn off the flag that prevents
                                // animations from interrupting
                                // each other or queuing up.
                                .data("animating", false)
                        ;
                    }
                )
        ;
    }
}



Gardenburger.prototype.positionMenus = function () {
    var root = this;
    
    this.e

            // Reset previously flipped menus.
            .find(".flip")
                    .removeClass("flip")
                    .end()

            // Remove previous positional adjustments
            .find("ul[style*=transform], .dropdown[style*=transform]")
                    .css("transform","")
                    .end()

            // Go through second-level menus and figure out their
            // positioning first, since it's a little different
            // (they get nudged to the sides by the needed number
            // of pixels to keep them fully on-screen) and
            // because lower menus' positions depend on how we
            // adjust these higher ones'.
            // We're storing the horizontal position at which
            // menus would be if they were visible in the
            // "visiblePosX" data key.
            .find("ul:first > li > ul, ul:first > li > .dropdown")
                    .each(
                        function () {
                            var $siblingLink = $(this).prevAll("a, .linkless-nav-item"),
                                siblingLinkOffsetLeft = $siblingLink.offset().left,
                                siblingLinkOuterWidth = $siblingLink.outerWidth(),
                                overflow = siblingLinkOffsetLeft + $(this).outerWidth() - $(window).width()
                            ;

                            $(this).data("visiblePosX", siblingLinkOffsetLeft);

                            if (overflow > 0) {

                                $(this)
                                        .addClass("flip")
                                        .data("visiblePosX", siblingLinkOffsetLeft + siblingLinkOuterWidth - $(this).outerWidth());
                                ;
                            }

                            if ($(this).data("visiblePosX") < 0) {
                                $(this)
                                        .css(
                                            {
                                                "transform" : "translateX(" + Math.abs($(this).data("visiblePosX")) + "px)"
                                            }
                                        )
                                        .data("visiblePosX", 0)
                                ;
                            }

                        }
            )

            // Go through third-and-deeper-level menus.
            // They just get flipped if there isn't 
            // enough room for them.
            .find("ul, .dropdown")
                    .each(
                        function () {
                            var $parentMenu = $(this).parents("ul, .dropdown").first();

                            // Set the visiblePosX to be the parent's + its width
                            $(this).data("visiblePosX", $parentMenu.data("visiblePosX") + $parentMenu.outerWidth());

                            // If the menu will pass beyond the horizontal viewport fold, flip it,
                            // then recalculate the visiblePosX based on the new position
                            if ($(this).data("visiblePosX") + $(this).outerWidth() > $(window).width()) {
                                $(this).addClass("flip");
                                $(this).data("visiblePosX", $parentMenu.data("visiblePosX") - $(this).outerWidth());
                            }

                            if ($(this).data("visiblePosX") < 0) {
                                $(this)
                                        .css(
                                            {
                                                "transform" : "translateX(" + Math.abs($(this).data("visiblePosX")) + "px)"
                                            }
                                        )
                                        .data("visiblePosX", 0)
                                ;
                            }

                        }
                    )
    ;
}



/* From Modernizr */
function whichAnimationEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var animations = {
        'animation':'animationend',
        'OAnimation':'oAnimationEnd',
        'MozAnimation':'animationend',
        'WebkitAnimation':'webkitAnimationEnd'
    }

    for (t in animations) {
        if ( el.style[t] !== undefined ) {
            return animations[t];
        }
    }
}
function whichTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
        'transition':'transitionend',
        'OTransition':'oTransitionEnd',
        'MozTransition':'transitionend',
        'WebkitTransition':'webkitTransitionEnd'
    }

    for (t in transitions) {
        if ( el.style[t] !== undefined ) {
            return transitions[t];
        }
    }
}




// Plugin for ease of instantiation.
// Priority is on options passed in
// argument followed by those in HTML
// attribute.
$.fn.gardenburger = function (options) {

    return this.each(
        function() {

            new Gardenburger(
                $(this),
                options || $(this).data("gardenburger-options")
            );

        }
    );

};




// Auto-instantiation based on HTML attributes
$(
    function () {
        $("[data-gardenburger]").each(
            function () {
                $(this).gardenburger();
            }
        );      
    }
);