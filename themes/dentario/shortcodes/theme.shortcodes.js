function dentario_sc_animation(){jQuery('[data-animation^="animated"]:not(.animated)').each(function(){"use strict";jQuery(this).offset().top<jQuery(window).scrollTop()+jQuery(window).height()&&jQuery(this).addClass(jQuery(this).data("animation"))})}function dentario_sc_init(a){a.find(".sc_accordion:not(.inited)").length>0&&a.find(".sc_accordion:not(.inited)").each(function(){"use strict";var a=jQuery(this).data("active");a=isNaN(a)?0:Math.max(0,a),jQuery(this).addClass("inited").accordion({active:a,heightStyle:"content",header:"> .sc_accordion_item > .sc_accordion_title",create:function(a,b){dentario_init_shortcodes(b.panel),window.dentario_init_hidden_elements&&dentario_init_hidden_elements(b.panel),b.header.each(function(){jQuery(this).parent().addClass("sc_active")})},activate:function(a,b){dentario_init_shortcodes(b.newPanel),window.dentario_init_hidden_elements&&dentario_init_hidden_elements(b.newPanel),b.newHeader.each(function(){jQuery(this).parent().addClass("sc_active")}),b.oldHeader.each(function(){jQuery(this).parent().removeClass("sc_active")})}})}),a.find(".sc_blogger.layout_polaroid .photostack:not(.inited)").length>0&&a.find(".sc_blogger.layout_polaroid .photostack:not(.inited)").each(function(){"use strict";var a=jQuery(this),b=a.attr("id");void 0==b&&(b="photostack_"+Math.random(),b=b.replace(".",""),a.attr("id",b)),setTimeout(function(){a.addClass("inited").parent().height("auto"),new Photostack(a.get(0),{callback:function(a){}})},10)}),a.find(".sc_blogger .sc_scroll_horizontal .sc_scroll_wrapper:not(.inited)").length>0&&a.find(".sc_blogger .sc_scroll_horizontal .sc_scroll_wrapper:not(.inited)").each(function(){"use strict";var a=jQuery(this),b=0;a.find(".isotope_item").each(function(){b+=jQuery(this).outerWidth()}),a.addClass("inited").width(b)}),a.find(".sc_form:not(.inited) form").length>0&&a.find(".sc_form:not(.inited) form").each(function(){"use strict";jQuery(this).addClass("inited"),jQuery(this).submit(function(a){return dentario_sc_form_validate(jQuery(this)),a.preventDefault(),!1}),jQuery(this).find(".js__datepicker").length>0&&jQuery(this).find(".js__datepicker").pickadate({onOpen:function(){jQuery("pre").css("overflow","hidden")},onClose:function(){jQuery("pre").css("overflow","")},monthsShort:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],showMonthsShort:!0,format:"dd.mm.yyyy",formatSubmit:"yyyy-mm-dd",min:!0}),jQuery(this).find(".js__timepicker").length>0&&jQuery(this).find(".js__timepicker").pickatime()}),a.find(".sc_countdown:not(.inited)").length>0&&a.find(".sc_countdown:not(.inited)").each(function(){"use strict";jQuery(this).addClass("inited");var b=(jQuery(this).attr("id"),new Date),c=b.getFullYear()+"-"+(b.getMonth()<9?"0":"")+(b.getMonth()+1)+"-"+(b.getDate()<10?"0":"")+b.getDate()+" "+(b.getHours()<10?"0":"")+b.getHours()+":"+(b.getMinutes()<10?"0":"")+b.getMinutes()+":"+(b.getSeconds()<10?"0":"")+b.getSeconds(),d=1,e=jQuery(this).data("date"),f=e.split("-"),g=jQuery(this).data("time"),h=g.split(":");h.length<3&&(h[2]="00"),c<e+" "+g?jQuery(this).find(".sc_countdown_placeholder").countdown({until:new Date(f[0],f[1]-1,f[2],h[0],h[1],h[2]),tickInterval:d,onTick:dentario_countdown}):jQuery(this).find(".sc_countdown_placeholder").countdown({since:new Date(f[0],f[1]-1,f[2],h[0],h[1],h[2]),tickInterval:d,onTick:dentario_countdown})}),a.find(".sc_emailer:not(.inited)").length>0&&a.find(".sc_emailer:not(.inited)").addClass("inited").on("click",".sc_emailer_button",function(a){"use strict";var b=jQuery(this).parents("form"),c=jQuery(this).parents(".sc_emailer");if(c.hasClass("sc_emailer_opened"))if(b.length>0&&""!=b.find("input").val()){var d=jQuery(this).data("group"),e=b.find("input").val(),f=new RegExp(DENTARIO_STORAGE.email_mask);f.test(e)?jQuery.post(DENTARIO_STORAGE.ajax_url,{action:"emailer_submit",nonce:DENTARIO_STORAGE.ajax_nonce,group:d,email:e}).done(function(a){var c={};try{c=JSON.parse(a)}catch(b){c={error:DENTARIO_STORAGE.ajax_error},console.log(a)}""===c.error?(dentario_message_info(DENTARIO_STORAGE.strings.email_confirm.replace("%s",e)),b.find("input").val("")):dentario_message_warning(c.error)}):(b.find("input").get(0).focus(),dentario_message_warning(DENTARIO_STORAGE.strings.email_not_valid))}else b.get(0).submit();else c.addClass("sc_emailer_opened");return a.preventDefault(),!1}),a.find(".sc_googlemap:not(.inited)").length>0&&a.find(".sc_googlemap:not(.inited)").each(function(){"use strict";if(!(jQuery(this).parents("div:hidden,article:hidden").length>0)){var a=jQuery(this).addClass("inited"),b=a.attr("id"),c=a.data("zoom"),d=a.data("style"),e=[];a.find(".sc_googlemap_marker").each(function(){var a=jQuery(this);e.push({point:a.data("point"),address:a.data("address"),latlng:a.data("latlng"),description:a.data("description"),title:a.data("title")})}),dentario_googlemap_init(jQuery("#"+b).get(0),{style:d,zoom:c,markers:e})}}),a.find(".sc_infobox.sc_infobox_closeable:not(.inited)").length>0&&a.find(".sc_infobox.sc_infobox_closeable:not(.inited)").addClass("inited").on("click",function(){"use strict";jQuery(this).slideUp()}),a.find(".sc_popup_link:not(.inited)").length>0&&a.find(".sc_popup_link:not(.inited)").each(function(){var a=jQuery(this).attr("href");jQuery(this).addClass("inited").magnificPopup({type:"inline",removalDelay:500,midClick:!0,callbacks:{beforeOpen:function(){this.st.mainClass="mfp-zoom-in"},open:function(){"use strict";dentario_init_shortcodes(jQuery(a)),window.dentario_init_hidden_elements&&dentario_init_hidden_elements(jQuery(a))},close:function(){}}})}),a.find(".sc_recent_news_header_category_item_more:not(.inited)").length>0&&a.find(".sc_recent_news_header_category_item_more:not(.inited)").each(function(){"use strict";jQuery(this).addClass("inited").on("click",function(a){return jQuery(this).toggleClass("opened").find(".sc_recent_news_header_more_categories").slideToggle(),a.preventDefault(),!1})}),a.find(".search_wrap:not(.inited)").length>0&&a.find(".search_wrap:not(.inited)").each(function(){"use strict";if(jQuery(this).addClass("inited").on("click",".search_submit",function(a){var b=jQuery(this).parents(".search_wrap");return b.hasClass("search_state_fixed")?""!=b.find(".search_field").val()?b.find("form").get(0).submit():(b.find(".search_field").val(""),b.find(".search_results").fadeOut()):b.hasClass("search_state_opened")?""!=b.find(".search_field").val()?b.find("form").get(0).submit():b.removeClass("search_state_opened").addClass("search_state_closed").find(".search_results").fadeOut():b.removeClass("search_state_closed").addClass("search_state_opened").find(".search_field").get(0).focus(),a.preventDefault(),!1}).on("click",".search_results_close",function(a){return jQuery(this).parent().fadeOut(),a.preventDefault(),!1}).on("click",".search_more",function(a){return""!=jQuery(this).parents(".search_wrap").find(".search_field").val()&&jQuery(this).parents(".search_wrap").find("form").get(0).submit(),a.preventDefault(),!1}),jQuery(this).hasClass("search_ajax")){var a=null;jQuery(this).find(".search_field").keyup(function(b){var c=jQuery(this),d=c.val();a&&(clearTimeout(a),a=null),d.length>=DENTARIO_STORAGE.ajax_search_min_length&&(a=setTimeout(function(){jQuery.post(DENTARIO_STORAGE.ajax_url,{action:"ajax_search",nonce:DENTARIO_STORAGE.ajax_nonce,text:d}).done(function(b){clearTimeout(a),a=null;var d={};try{d=JSON.parse(b)}catch(a){d={error:DENTARIO_STORAGE.ajax_error},console.log(b)}""===d.error?(c.parents(".search_ajax").find(".search_results_content").empty().append(d.data),c.parents(".search_ajax").find(".search_results").fadeIn()):dentario_message_warning(DENTARIO_STORAGE.strings.search_error)})},DENTARIO_STORAGE.ajax_search_delay))})}}),a.find(".sc_pan:not(.inited_pan)").length>0&&a.find(".sc_pan:not(.inited_pan)").each(function(){"use strict";if(!(jQuery(this).parents("div:hidden,article:hidden").length>0)){var a=jQuery(this).addClass("inited_pan"),b=a.parent();b.mousemove(function(c){var f=a.width(),g=a.height(),h=b.width(),i=b.height(),j=b.offset();a.hasClass("sc_pan_vertical")&&a.css("top",-Math.floor((c.pageY-j.top)/i*(g-i))),a.hasClass("sc_pan_horizontal")&&a.css("left",-Math.floor((c.pageX-j.left)/h*(f-h)))}),b.mouseout(function(b){a.css({left:0,top:0})})}}),a.find(".sc_scroll:not(.inited)").length>0&&a.find(".sc_scroll:not(.inited)").each(function(){"use strict";jQuery(this).parents("div:hidden,article:hidden").length>0||(DENTARIO_STORAGE.scroll_init_counter=0,dentario_sc_init_scroll_area(jQuery(this)))}),a.find(".sc_slider_swiper:not(.inited)").length>0&&(a.find(".sc_slider_swiper:not(.inited)").each(function(){"use strict";if(!(jQuery(this).parents("div:hidden,article:hidden").length>0)){jQuery(this).addClass("inited"),dentario_sc_slider_autoheight(jQuery(this)),jQuery(this).parents(".sc_slider_pagination_area").length>0&&jQuery(this).parents(".sc_slider_pagination_area").find(".sc_slider_pagination .post_item").eq(0).addClass("active");var a=jQuery(this).attr("id");void 0==a&&(a="swiper_"+Math.random(),a=a.replace(".",""),jQuery(this).attr("id",a)),jQuery(this).addClass(a),jQuery(this).find(".slides .swiper-slide").css("position","relative");var b=jQuery(this).width();0==b&&(b=jQuery(this).parent().width());var c=jQuery(this).data("slides-per-view");void 0==c&&(c=1);var d=jQuery(this).data("slides-min-width");void 0==d&&(d=50),b/c<d&&(c=Math.max(1,Math.floor(b/d)));var e=jQuery(this).data("slides-space");void 0==e&&(e=0),void 0===DENTARIO_STORAGE.swipers&&(DENTARIO_STORAGE.swipers={}),DENTARIO_STORAGE.swipers[a]=new Swiper("."+a,{calculateHeight:!jQuery(this).hasClass("sc_slider_height_fixed"),resizeReInit:!0,autoResize:!0,loop:!0,grabCursor:!0,nextButton:!!jQuery(this).hasClass("sc_slider_controls")&&"#"+a+" .sc_slider_next",prevButton:!!jQuery(this).hasClass("sc_slider_controls")&&"#"+a+" .sc_slider_prev",pagination:!!jQuery(this).hasClass("sc_slider_pagination")&&"#"+a+" .sc_slider_pagination_wrap",paginationClickable:!0,autoplay:!jQuery(this).hasClass("sc_slider_noautoplay")&&(isNaN(jQuery(this).data("interval"))?7e3:jQuery(this).data("interval")),autoplayDisableOnInteraction:!1,initialSlide:0,slidesPerView:c,loopedSlides:c,spaceBetween:e,speed:600,onFirstInit:function(a){var b=jQuery(a.container);if(b.hasClass("sc_slider_height_auto")){var c=b.find(".swiper-slide").eq(1),d=c.data("height_auto");if(d>0){var e=parseInt(c.css("paddingTop")),f=parseInt(c.css("paddingBottom"));c.height(d),b.height(d+(isNaN(e)?0:e)+(isNaN(f)?0:f)),b.find(".swiper-wrapper").height(d+(isNaN(e)?0:e)+(isNaN(f)?0:f))}}},onSlideChangeStart:function(a){var b=jQuery(a.container);if(b.hasClass("sc_slider_height_auto")){var c=a.activeIndex,d=b.find(".swiper-slide").eq(c),e=d.data("height_auto");if(e>0){var f=parseInt(d.css("paddingTop")),g=parseInt(d.css("paddingBottom"));d.height(e),b.height(e+(isNaN(f)?0:f)+(isNaN(g)?0:g)),b.find(".swiper-wrapper").height(e+(isNaN(f)?0:f)+(isNaN(g)?0:g))}}},onSlideChangeEnd:function(a,b){var c=jQuery(a.container);if(c.parents(".sc_slider_pagination_area").length>0){var d=c.parents(".sc_slider_pagination_area").find(".sc_slider_pagination .post_item");dentario_sc_change_active_pagination_in_slider(c,a.activeIndex>d.length?0:a.activeIndex-1)}}}),jQuery(this).data("settings",{mode:"horizontal"});var f=jQuery(this).find(".slides").data("current-slide");f>0&&DENTARIO_STORAGE.swipers[a].slideTo(f-1),dentario_sc_prepare_slider_navi(jQuery(this))}}),dentario_sc_sliders_resize()),a.find(".sc_skills_item:not(.inited)").length>0&&(dentario_sc_init_skills(a),jQuery(window).scroll(function(){dentario_sc_init_skills(a)})),a.find(".sc_skills_arc:not(.inited)").length>0&&(dentario_sc_init_skills_arc(a),jQuery(window).scroll(function(){dentario_sc_init_skills_arc(a)})),a.find(".sc_tabs:not(.inited):not(.no_jquery_ui),.tabs_area:not(.inited)").length>0&&a.find(".sc_tabs:not(.inited):not(.no_jquery_ui),.tabs_area:not(.inited)").each(function(){"use strict";var a=jQuery(this).data("active");a=isNaN(a)?0:Math.max(0,a),jQuery(this).addClass("inited").tabs({active:a,show:{effect:"fadeIn",duration:300},hide:{effect:"fadeOut",duration:300},create:function(a,b){dentario_init_shortcodes(b.panel),window.dentario_init_hidden_elements&&dentario_init_hidden_elements(b.panel)},activate:function(a,b){dentario_init_shortcodes(b.newPanel),window.dentario_init_hidden_elements&&dentario_init_hidden_elements(b.newPanel)}})}),a.find(".sc_tabs.no_jquery_ui:not(.inited)").length>0&&a.find(".sc_tabs.no_jquery_ui:not(.inited)").each(function(){"use strict";jQuery(this).addClass("inited").on("click",".sc_tabs_titles li a",function(a){if(!jQuery(this).parent().hasClass("sc_tabs_active")){var b=jQuery(this).parent().siblings(".sc_tabs_active").find("a").attr("href"),c=jQuery(this).attr("href");jQuery(this).parent().addClass("sc_tabs_active").siblings().removeClass("sc_tabs_active"),jQuery(b).fadeOut(function(){jQuery(c).fadeIn(function(){dentario_init_shortcodes(jQuery(this)),window.dentario_init_hidden_elements&&dentario_init_hidden_elements(jQuery(this))})})}return a.preventDefault(),!1}),jQuery(this).find(".sc_tabs_titles li").eq(0).addClass("sc_tabs_active"),jQuery(this).find(".sc_tabs_content").eq(0).fadeIn(function(){dentario_init_shortcodes(jQuery(this)),window.dentario_init_hidden_elements&&dentario_init_hidden_elements(jQuery(this))})}),a.find(".sc_toggles .sc_toggles_title:not(.inited)").length>0&&a.find(".sc_toggles .sc_toggles_title:not(.inited)").addClass("inited").on("click",function(){"use strict";jQuery(this).toggleClass("ui-state-active").parent().toggleClass("sc_active"),jQuery(this).parent().find(".sc_toggles_content").slideToggle(300,function(){dentario_init_shortcodes(jQuery(this).parent().find(".sc_toggles_content")),window.dentario_init_hidden_elements&&dentario_init_hidden_elements(jQuery(this).parent().find(".sc_toggles_content"))})}),a.find(".sc_zoom:not(.inited)").length>0&&a.find(".sc_zoom:not(.inited)").each(function(){"use strict";jQuery(this).parents("div:hidden,article:hidden").length>0||(jQuery(this).addClass("inited"),jQuery(this).find("img").elevateZoom({zoomType:"lens",lensShape:"round",lensSize:200,lensBorderSize:4,lensBorderColour:"#ccc"}))})}function dentario_sc_init_scroll_area(a){"use strict";if(!dentario_check_images_complete(a)&&DENTARIO_STORAGE.scroll_init_counter++<30)return void setTimeout(function(){dentario_sc_init_scroll_area(a)},200);a.addClass("inited");var b=a.attr("id");void 0==b&&(b="scroll_"+Math.random(),b=b.replace(".",""),a.attr("id",b)),a.addClass(b);var c=a.parent(),d=c.attr("id");void 0==d&&(d="scroll_wrap_"+Math.random(),d=d.replace(".",""),c.attr("id",d)),c.addClass(d);var e=a.find("#"+b+"_bar");e.length>0&&!e.hasClass(b+"_bar")&&e.addClass(b+"_bar"),a.hasClass("sc_scroll_horizontal")&&(a.find(".sc_scroll_wrapper > .sc_scroll_slide").css("width","auto"),a.find(".sc_scroll_wrapper").css("width",a.find(".sc_scroll_wrapper > .sc_scroll_slide").width()+10),a.find(".sc_scroll_wrapper > .sc_scroll_slide").css("width","100%")),void 0===DENTARIO_STORAGE.swipers&&(DENTARIO_STORAGE.swipers={}),DENTARIO_STORAGE.swipers[b]=new Swiper("."+b,{calculateHeight:!1,resizeReInit:!0,autoResize:!0,freeMode:!0,freeModeFluid:!0,grabCursor:!0,mode:a.hasClass("sc_scroll_vertical")?"vertical":"horizontal",direction:a.hasClass("sc_scroll_vertical")?"vertical":"horizontal",slidesPerView:a.hasClass("sc_scroll")?"auto":1,nextButton:!!c.hasClass("sc_scroll_controls")&&"#"+d+" .sc_scroll_next",prevButton:!!c.hasClass("sc_scroll_controls")&&"#"+d+" .sc_scroll_prev",scrollbar:"."+b+"_bar",scrollbarHide:!0}),a.data("settings",{mode:"horizontal"})}function dentario_sc_prepare_slider_navi(a){"use strict";var b=null;b=a.siblings(".sc_slider_pagination"),b.length>0&&b.on("click",".post_item",function(a){var b=jQuery(this).parents(".sc_slider_pagination_area").find(".swiper-slider-container"),c=b.attr("id");return DENTARIO_STORAGE.swipers[c].slideTo(jQuery(this).index()+1),a.preventDefault(),!1})}function dentario_sc_change_active_pagination_in_slider(a,b){"use strict";var c=a.parents(".sc_slider_pagination_area").find(".sc_slider_pagination");if(0!=c.length){c.find(".post_item").removeClass("active").eq(b).addClass("active");var d=c.height(),e=c.find(".active").offset().top-c.offset().top,f=c.find(".sc_scroll_wrapper").offset().top-c.offset().top,g=c.find(".active").height();e<0?c.find(".sc_scroll_wrapper").css({transform:"translate3d(0px, 0px, 0px)","transition-duration":"0.3s"}):d<=e+g&&c.find(".sc_scroll_wrapper").css({transform:"translate3d(0px, -"+(Math.abs(f)+e-d/4)+"px, 0px)","transition-duration":"0.3s"})}}function dentario_sc_slider_autoheight(a){"use strict";a.hasClass(".sc_slider_height_auto")&&a.find(".swiper-slide").each(function(){void 0==jQuery(this).data("height_auto")&&jQuery(this).attr("data-height_auto",jQuery(this).height())})}function dentario_sc_sliders_resize(){"use strict";var a=void 0!==arguments[0]?arguments[0]:".sc_slider_swiper.inited",b=void 0===arguments[1]||arguments[1];jQuery(a).each(function(){var a=jQuery(this).attr("id"),c=jQuery(this).width(),d=jQuery(this).data("last-width");if(isNaN(d)&&(d=0),0==d||d!=c){var e=jQuery(this).data("slides-per-view");void 0==e&&(e=1);var f=jQuery(this).data("slides-min-width");void 0==f&&(f=50),c/e<f&&(e=Math.max(1,Math.floor(c/f))),jQuery(this).data("last-width",c),DENTARIO_STORAGE.swipers[a].params.slidesPerView!=e&&(DENTARIO_STORAGE.swipers[a].params.slidesPerView=e,DENTARIO_STORAGE.swipers[a].params.loopedSlides=e)}if(b&&!jQuery(this).hasClass("sc_slider_height_fixed")){var g=0;jQuery(this).find(".swiper-slide > img").length>0?(jQuery(this).find(".swiper-slide > img").each(function(){jQuery(this).height()>g&&(g=jQuery(this).height())}),jQuery(this).height(g)):"none"!=jQuery(this).find(".swiper-slide").css("backgroundImage")&&(g=Math.floor(c/16*9),jQuery(this).height(g).find(".swiper-slide").height(g))}}),jQuery(".sc_slider_pagination_area").each(function(){var a=jQuery(this).find(".sc_slider").height();a&&(jQuery(this).height(a),jQuery(this).find(".sc_slider_pagination").height(a),jQuery(this).find(".sc_slider_pagination .sc_scroll_vertical").height(a))})}function dentario_sc_init_skills(a){"use strict";if(0==arguments.length)var a=jQuery("body");var b=jQuery(window).scrollTop()+jQuery(window).height();a.find(".sc_skills_item:not(.inited)").each(function(){var a=jQuery(this),c=a.offset().top;if(b>c){a.addClass("inited");var d=a.parents(".sc_skills").eq(0),e=d.data("type"),f="pie"==e&&d.hasClass("sc_skills_compact_on")?a.find(".sc_skills_data .pie"):a.find(".sc_skills_total").eq(0),g=parseInt(f.data("start")),h=parseInt(f.data("stop")),i=parseInt(f.data("max")),j=Math.round(g/i*100),k=Math.round(h/i*100),l=f.data("ed"),m=parseInt(f.data("duration")),n=parseInt(f.data("speed")),o=parseInt(f.data("step"));if("bar"==e){var p=d.data("dir"),q=a.find(".sc_skills_count").eq(0);"horizontal"==p?q.css("width",j+"%").animate({width:k+"%"},m):"vertical"==p&&q.css("height",j+"%").animate({height:k+"%"},m),dentario_sc_animate_skills_counter(g,h,n-("unknown"!=p?5:0),o,l,f)}else if("counter"==e)dentario_sc_animate_skills_counter(g,h,n-5,o,l,f);else if("pie"==e){var r=parseInt(f.data("steps")),s=f.data("bg_color"),t=f.data("border_color"),u=parseInt(f.data("cutout")),v=f.data("easing"),w={segmentShowStroke:!0,segmentStrokeColor:t,segmentStrokeWidth:1,percentageInnerCutout:u,animationSteps:r,animationEasing:v,animateRotate:!0,animateScale:!1},x=[];f.each(function(){var a=jQuery(this).data("color"),b=parseInt(jQuery(this).data("stop")),c=Math.round(b/i*100);x.push({value:c,color:a})}),1==f.length&&(dentario_sc_animate_skills_counter(g,h,Math.round(1500/r),o,l,f),x.push({value:100-k,color:s}));var y=a.find("canvas");y.attr({width:a.width(),height:a.width()}).css({width:a.width(),height:a.height()}),new Chart(y.get(0).getContext("2d")).Doughnut(x,w)}}})}function dentario_sc_animate_skills_counter(a,b,c,d,e,f){"use strict";a=Math.min(b,a+d),f.text(a+e),a<b&&setTimeout(function(){dentario_sc_animate_skills_counter(a,b,c,d,e,f)},c)}function dentario_sc_init_skills_arc(a){"use strict";if(0==arguments.length)var a=jQuery("body");a.find(".sc_skills_arc:not(.inited)").each(function(){var a=jQuery(this);a.addClass("inited");var b=a.find(".sc_skills_data .arc"),c=a.find(".sc_skills_arc_canvas").eq(0),d=a.find(".sc_skills_legend").eq(0),e=Math.round(a.width()-d.width()),f=Math.floor(e/2),g={random:function(a,b){return Math.floor(Math.random()*(b-a+1)+a)},diagram:function(){var d=Raphael(c.attr("id"),e,e),h=Math.round(e/2/b.length),i=h,j=Math.round(((e-20)/2-i)/b.length),k=Math.round(e/9/b.length),l=400;d.circle(f,f,Math.round(e/2)).attr({stroke:"none",fill:DENTARIO_STORAGE.theme_skin_bg_color?DENTARIO_STORAGE.theme_skin_bg_color:"#ffffff"});var m=d.text(f,f,a.data("caption")).attr({font:Math.round(.75*i)+'px "'+DENTARIO_STORAGE.theme_font+'"',fill:DENTARIO_STORAGE.theme_skin_color?DENTARIO_STORAGE.theme_skin_color:"#909090"}).toFront();i-=Math.round(j/2),d.customAttributes.arc=function(a,b,c){var d=3.6*a,e=360==d?359.99:d,h=g.random(91,240),i=(h-e)*Math.PI/180,j=h*Math.PI/180;return{path:[["M",f+c*Math.cos(j),f-c*Math.sin(j)],["A",c,c,0,+(e>180),1,f+c*Math.cos(i),f-c*Math.sin(i)]],stroke:b}},b.each(function(b){var c=jQuery(this),e=c.find(".color").val(),f=c.find(".percent").val(),g=c.find(".text").text();i+=j,d.path().attr({arc:[f,e,i],"stroke-width":k}).mouseover(function(){this.animate({"stroke-width":h,opacity:.75},1e3,"elastic"),"VML"!=Raphael.type&&this.toFront(),m.stop().animate({opacity:0},l,">",function(){this.attr({text:(g?g+"\n":"")+f+"%"}).animate({opacity:1},l,"<")})}).mouseout(function(){this.stop().animate({"stroke-width":k,opacity:1},4*l,"elastic"),m.stop().animate({opacity:0},l,">",function(){m.attr({text:a.data("caption")}).animate({opacity:1},l,"<")})})})}};g.diagram()})}function dentario_countdown(a){"use strict";for(var b=jQuery(this).parent(),c=3;c<a.length;c++){var d=(a[c]<10?"0":"")+a[c];b.find(".sc_countdown_item").eq(c-3).find(".sc_countdown_digits span").addClass("hide");for(var e=d.length-1;e>=0;e--)b.find(".sc_countdown_item").eq(c-3).find(".sc_countdown_digits span").eq(e+(3==c&&d.length<3?1:0)).removeClass("hide").text(d.substr(e,1))}}function dentario_sc_form_validate(a){"use strict";var b=a.attr("action");if(""==b)return!1;a.find("input").removeClass("error_fields_class");var c=!1,d="form_custom"==a.data("formtype"),e="form_2"==a.data("formtype");return d||(c=dentario_form_validate(a,{error_message_show:!0,error_message_time:4e3,error_message_class:"sc_infobox sc_infobox_style_error",error_fields_class:"error_fields_class",exit_after_first_error:!1,rules:[{field:"username",min_length:{value:1,message:DENTARIO_STORAGE.strings.name_empty},max_length:{value:60,message:DENTARIO_STORAGE.strings.name_long}},{field:"email",min_length:{value:7,message:DENTARIO_STORAGE.strings.email_empty},max_length:{value:60,message:DENTARIO_STORAGE.strings.email_long},mask:{value:DENTARIO_STORAGE.email_mask,message:DENTARIO_STORAGE.strings.email_not_valid}},{field:"message",min_length:{value:1,message:DENTARIO_STORAGE.strings.text_empty},max_length:{value:DENTARIO_STORAGE.contacts_maxlength,message:DENTARIO_STORAGE.strings.text_long}}]})),e&&(c=dentario_form_validate(a,{error_message_show:!0,error_message_time:4e3,error_message_class:"sc_infobox sc_infobox_style_error",error_fields_class:"error_fields_class",exit_after_first_error:!1,rules:[{field:"username",min_length:{value:1,message:DENTARIO_STORAGE.strings.name_empty},max_length:{value:60,message:DENTARIO_STORAGE.strings.name_long}},{field:"email",min_length:{value:7,message:DENTARIO_STORAGE.strings.email_empty},max_length:{value:60,message:DENTARIO_STORAGE.strings.email_long},mask:{value:DENTARIO_STORAGE.email_mask,message:DENTARIO_STORAGE.strings.email_not_valid}},{field:"phone",min_length:{value:5,message:DENTARIO_STORAGE.strings.phone_empty},max_length:{value:20,message:DENTARIO_STORAGE.strings.phone_wrong},mask:{value:DENTARIO_STORAGE.phone_mask,message:DENTARIO_STORAGE.strings.phone_not_valid}},{field:"doctor",min_length:{value:1,message:DENTARIO_STORAGE.strings.doctor_empty},max_length:{value:100,message:DENTARIO_STORAGE.strings.doctor_long}},{field:"message",min_length:{value:1,message:DENTARIO_STORAGE.strings.text_empty},max_length:{value:DENTARIO_STORAGE.contacts_maxlength,message:DENTARIO_STORAGE.strings.text_long}}]})),c||"#"==b||jQuery.post(b,{action:"send_form",nonce:DENTARIO_STORAGE.ajax_nonce,type:a.data("formtype"),data:a.serialize()}).done(function(b){var c={};try{c=JSON.parse(b)}catch(a){c={error:DENTARIO_STORAGE.ajax_error},console.log(b)}var d=a.find(".result").toggleClass("sc_infobox_style_error",!1).toggleClass("sc_infobox_style_success",!1);if(""===c.error){a.get(0).reset(),d.addClass("sc_infobox_style_success").html(DENTARIO_STORAGE.strings.send_complete);var e=a.find('input[name="return_url"]');e.length>0&&""!=e.val()&&setTimeout(function(){window.location.href=e.val()},3300)}else d.addClass("sc_infobox_style_error").html(DENTARIO_STORAGE.strings.send_error+" "+c.error);d.fadeIn().delay(3e3).fadeOut()}),!c}jQuery(document).ready(function(){"use strict";setTimeout(function(){dentario_sc_animation()},600)}),jQuery(window).resize(function(){"use strict";dentario_sc_sliders_resize()});