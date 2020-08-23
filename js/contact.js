$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                'entry.2005620554': {
                    required: true,
                    minlength: 2
                },
                'entry.259119146': {
                    required: false,
                    minlength: 2
                },
                'entry.1166974658': {
                    required: true,
                    minlength: 9
                },
                'entry.1045781291': {
                    required: true,
                    email: true
                },
                'entry.839337160': {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                'entry.2005620554': {
                    required: "This field is required",
                    minlength: "Your name must consist of at least 2 characters"
                },
                'entry.259119146': {
                    required: "This field is optional",
                    minlength: "Your subject must consist of at least 2 characters"
                },
                'entry.1166974658': {
                    required: "This field is required",
                    minlength: "Phone Numbers consist of at least 9 characters"
                },
                'entry.1045781291': {
                    required: "An email is required"
                },
                'entry.839337160': {
                    required: "A message is required",
                    minlength: "Your Message must consist of at least 10 characters"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"https://docs.google.com/forms/u/0/d/e/1FAIpQLScSaA9VzJnHKjJjUuf5tHRSSWed6JuNBDN4v9-byrzKBD9yiA/formResponse",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})