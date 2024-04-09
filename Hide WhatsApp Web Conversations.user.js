// ==UserScript==
// @name         Hide WhatsApp Web Conversations
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  Hide WhatsApp conversations panel on WhatsApp Web
// @author       Pedro Neto
// @match        https://web.whatsapp.com/
// @icon         https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://web.whatsapp.com/&size=128
// @grant        none
// @require https://code.jquery.com/jquery-3.6.4.min.js
// @website https://github.com/pedropamn/WhatsAppWebChatsHider
// @updateURL https://github.com/pedropamn/WhatsAppWebChatsHider/raw/main/Hide%20WhatsApp%20Web%20Conversations.user.js
// @downloadURL https://github.com/pedropamn/WhatsAppWebChatsHider/raw/main/Hide%20WhatsApp%20Web%20Conversations.user.js
// ==/UserScript==

(function() {
    'use strict';


    //Wait the pane side became visible (page loaded)
    var interval = setInterval(function(){
        var panel = $('#pane-side').is(":visible");

        //When visible, insert the icon
        if(panel){
            var html = '<img class="hide_conversations" src="https://cdn-icons-png.flaticon.com/512/2767/2767146.png" style=" width: 26px;    padding-right: 8px;    padding-top: 1px;    vertical-align: middle;    margin: auto; cursor:pointer;">';
            $('._ajv2').last().append(html);

            //Starts hided
            $('#pane-side').hide();

            //Exit loop
            clearInterval(interval);
        }
    },500)



    //Handle click to the icon
    $('body').on('click', 'img.hide_conversations', function() {

        //Check state of panel to hide or show
        if($('#pane-side').is(":visible") == true){
            $('#pane-side').hide();
        }
        else{
            $('#pane-side').show();
        }
    })



})();
