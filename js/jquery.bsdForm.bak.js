// Utility
if ( typeof Object.create !== 'function' ) {
	Object.create = function(obj) {
		function F() {};
		F.prototype = obj;
		return new F();
	};
}

(function($, window, document, undefined) {
	var obj = {},
	buildFormFields = function(input, dropdown,checkbox, list, textarea, radio) {
		if (input || textarea) {
			for (var i in arguments) {
				if (arguments[i].length > 0	) {

					var validationMessage = (arguments[i][0]['validation-message'] !== undefined)
						? arguments[i][0]['validation-message'] : '';

					var validation = (arguments[i][0]['validation'] !== null)
						? '<div class="' + arguments[i][0]['validation'] + '-validator">' + validationMessage + '</div>' : '';

					$('#form').append(
						'<div class="' + arguments[i][0]['div-class'] + '">' +
							'<label for="' + arguments[i][0]['input-id'] + '">' + arguments[i][0]['label'] + '</label>' +
							'<div class="input-container">' +
								'<input type="text" id="' + arguments[i][0]['input-id'] + '">' +
							'</div>' +
							validation +
						'</div>'
					);
				}
			}
		}
	},
	parseFormSchema = function(schema) {
		var input 		= [],
			dropdown 	= [],
			checkbox	= [],
			list		= [],
			textarea	= [],
			radio		= [];
		$.each(schema[0], function(k, v) {
			if (v.fieldtype === 'input') {
				input.push(v);
			} else if (v.fieldtype === 'dropdown') {
				dropdown.push(v);
			} else if (v.fieldtype === 'checkbox') {
				checkbox.push(v);
			} else if (v.fieldtype === 'list') {
				list.push(v);
			} else if (v.fieldtype === 'textarea') {
				textarea.push(v);
			} else if (v.fieldtype === 'radio') {
				radio.push(v);
			}
		});
		buildFormFields(input, dropdown, checkbox, list, textarea, radio);
	},
	formDescription = function(k, v) {
		var descriptors = [];
		for (var i in k) {
			if (k[i] === 'title') {
				$('#form').append('<div class="' + k[i] + '">Title: ' + v[i] + '</div>');
			} else if (k[i] === 'about') {
				$('#form').append('<div class="' + k[i] + '">About: ' + v[i] + '</div>');
			} else if (k[i] === 'descriptors') {
				descriptors.push(v[i]);
			}
		}
		if (typeof descriptors !== null) {
			parseFormSchema.call(this, descriptors);
		}
	};
		
	$.extend($, {
		bsdForm: {
			methods: {
				scan: function(options, error) {
					var self = this,
						headers = [],
						description = [];
					$.each(options.schema, function(k, v) {
						headers.push(k);
						description.push(v);
					});
					formDescription.call(this, headers, description);
				},
				ajax: function() {
					//
				}
			}
		}
	});

	$.fn.bsdForm = function(options, error) {
		var self = $(this);
		if (typeof options === 'object') {
			$.bsdForm.methods.scan.call(self, options, error);
		} else {
			alert(error);
		}
	}
})(jQuery, window, document);