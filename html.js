44: [function(e, t, i) {
        e("gd-jquery/wrappers/overlay-box"),
        t.exports = {
            initToggleGroups: function(e) {
                var t = $("div.toggleGroup")
                  , i = $("div[data-role=collapsible]", t)
                  , n = $.extend({
                    selector: "h5"
                }, e);
                function o(e, t) {
                    var i = e.next()
                      , n = "none" === i.css("display");
                    n || (t = !1),
                    s(e, n, t)
                }
                function r() {
                    o($(this))
                }
                if (i.each(function() {
                    var e = $(this)
                      , t = $(n.selector + ":first", e)
                      , i = e.children().not(t);
                    t.addClass("toggle link"),
                    t.on("click", r),
                    i.wrapAll("<div class='toggleBody'>")
                }),
                t.show(),
                window.location.hash && !n.disableAutoToggle) {
                    var a = $(window.location.hash);
                    a.length && GD.util.wait(1e3).then(function() {
                        o(a, !0)
                    })
                }
            },
            closeAllToggleItems: function() {
                $("dl.toggleItems dt").each(function() {
                    s($(this), !1)
                })
            },
            initContextHelp: function(e) {
                function r(e, t, i, n) {
                    try {
                        $(".gdPanelContents").length || function(e, t, i, n) {
                            var o = "GDContextHelpPanel";
                            if (!e.length && !(e = $("#PageContent")))
                                return e = $("body:first");
                            if (!t.length)
                                return alert("Sorry, help cannot be displayed...");
                            void 0 === i && (i = 250);
                            var r = t.html().trim();
                            $(".gdPanelContents").length && ($("#" + o).overlayBox("close"),
                            document.onclick = null);
                            n && (n = $(n));
                            var a = -5;
                            if (n && n.length) {
                                var s = n.offset()
                                  , l = s.left
                                  , c = n.width()
                                  , d = l + c
                                  , u = e.offset()
                                  , p = i;
                                c < p ? (a = 0 === l ? -u.left : -(u.left - l) - 5,
                                i = Math.min(i, c)) : u.left + p > d && (a = -(u.left + p - d) - 5,
                                a = d - p - 5 - u.left)
                            }
                            e.overlayBox({
                                dialogId: o,
                                content: r,
                                dlgParent: e,
                                width: i,
                                top: 17,
                                left: a,
                                showClose: !1,
                                clickAwayClose: !0,
                                tooltip: !0
                            }),
                            e.overlayBox("show")
                        }(e, t, i, n)
                    } catch (e) {
                        Logger.fatal("contextHelpToggle", e)
                    }
                }
                var t;
                t = e ? $(e).not("." + n) : $(".contextHelpLink").not("." + n);
                t.each(function() {
                    var e = $(this)
                      , t = e.find("span[href]");
                    !t.length && e.data("tooltip") && (t = $(this)),
                    t.each(function() {
                        var e = $(this)
                          , i = e.attr("constrainTo")
                          , t = e.attr("href");
                        t || (t = e.data("tooltip"));
                        var n = t.split("#")[1];
                        if (n) {
                            var o = e.attr("helpWidth") || 400;
                            o -= 0,
                            e.removeAttr("href").addClass("link"),
                            e.click(function(e) {
                                var t = $(e.target);
                                t.is(".contextHelpLink") || t.data("tooltip") || (t = t.closest(".contextHelpLink")),
                                t.length && r(t, $("#" + n), o, i)
                            })
                        }
                    })
                }),
                t.addClass(n)
            }
        };
        var r = "#ffffcc"
          , a = 1;
        function s(t, e, i) {
            "boolean" != typeof i && (i = !1);
            var n, o = t.next();
            o.css("background-color", "transparent"),
            i && (n = function() {
                var e;
                (e = t).next().css("background-color", "#fff").animate({
                    backgroundColor: r
                }, 1e3 * a, null, function() {
                    GD.util.wait(1e3 * a).then(function() {
                        e.next().animate({
                            backgroundColor: "transparent"
                        }, 3e3)
                    })
                })
            }
            ),
            e ? (o.css("display", "none"),
            o.slideDown("normal", n),
            t.addClass("opened")) : (o.slideUp("normal", n),
            t.removeClass("opened"))
        }
        var n = "ready"
    }
    , {
        "gd-jquery/wrappers/overlay-box": 46
    }],