function initNavRollovers(){$("#nav").find("div:not(.selected)").hover((function(){$(this).css("background-color","#cccccc")}),(function(){$(this).css("background-color","#d7d6d4")}))}function createNoSpaceRule(){jQuery.validator.addMethod("noSpace",(function(t){return t.indexOf(" ")<0&&""!=t}))}function forceMaxLengthOnTextAreas(){$("textarea[maxlength]").bind("input propertychange",(function(){var t=$(this).attr("maxlength");$(this).val().length>t&&$(this).val($(this).val().substring(0,t))}))}function initPoll(){var t=$(".poll_button");t.length&&t.click((function(t){votePoll($(this).attr("poll_id"),$(this).attr("answer_id")),t.preventDefault()}))}function votePoll(t,n){var e=$.post(POLL_POST,{poll_id:t,answer_id:n,action:"poll_vote"});e.fail((function(){alert("There was an unexpected error. Please try again later.")})),e.done((function(){window.location.reload(!0)}))}$(document).ready((function(){initNavRollovers(),createNoSpaceRule(),forceMaxLengthOnTextAreas(),initPoll()}));var POLL_POST="/poll.hw";