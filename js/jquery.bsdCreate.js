if ( typeof Object.create !== 'function' ) {
	Object.create = function(obj) {
		function F() {};
		F.prototype = obj;
		return new F();
	};
}

(function($, window, document, undefined) {
	var buildField = {
		init: function(options, elem) {
			var self = this;
			self.elem = elem;
			self.$elem = $(elem);

			if (typeof options === 'string') {
				self.autoCreate = options;
				self.options = $.extend({}, $.fn.bsdCreate.options[options], {autoCreate: options});
			} else {
				self.fieldType = options.fieldName;
				self.options = $.extend({}, $.fn.bsdCreate.options[options.fieldName], options);
			}
			
			console.log(self.options);
			self.createForm(self.options);
		},

		firstname: function(options) {
			var required = '<span class="required">*</span>';
			var validation = '<div class="' + options.validation + '" id="' + options.validation + '-validator">' + options.validationMessage + '</div>';

			var firstname =
				'	<div class="' + options.divClass + '">' +
				'		<label for="' + options.formLabel + '">' + options.formLabel + '</label>' +
				'		<div class="bsd-input-container">' +
				'			<input type="text" id="' + options.inputId + '" placeholder="' + options.placeholder + '">' +
				'		</div><!-- .bsd-input-container -->' +
				'	</div>';

			return firstname;
		},

		lastname: function(options) {
			var required = '<span class="required">*</span>';
			var validation = '<div class="' + options.validation + '" id="' + options.validation + '-validator">' + options.validationMessage + '</div>';

			var lastname =
				'	<div class="' + options.divClass + '">' +
				'		<label for="' + options.formLabel + '">' + options.formLabel + '</label>' +
				'		<div class="bsd-input-container">' +
				'			<input type="text" id="' + options.inputId + '" placeholder="' + options.placeholder + '">' +
				'		</div><!-- .bsd-input-container -->' +
				'	</div>';

			return lastname;
		},

		createForm: function(options)  {
			var self = this,
				field = self.fieldType;

			switch (self.options.fieldName) {
				case 'firstname':
					self.display(self.firstname(options))
					break;
				case 'lastname':
					self.display(self.lastname(options))
				default:
					console.log('Nothing to see');
			}
		},

		display: function(val) {
			this.$elem.append(val);
		}
	};

	$.fn.bsdCreate = function(options) {
		return this.each(function() {
			var fieldObject = Object.create(buildField);
			fieldObject.init(options, this);
		});
	};

	$.fn.bsdCreate.options = {
		firstname: {
			autoCreate			: '',
			fieldName			: 'firstname',
			divClass			: 'bsd-form',
			inputId				: 'firstname-input',
			fieldType	 		: 'text',
			formLabel			: 'First Name',
			placeholder			: 'Enter your first name',
			validation 			: 'firstname',
			validationMessage	: 'Please enter a valid name'
		},
		lastname: {
			autoCreate			: '',
			fieldName			: 'lastname',
			divClass			: 'bsd-form',
			inputId				: 'lastname-input',
			fieldType	 		: 'text',
			formLabel			: 'Last Name',
			placeholder			: 'Enter your last name',
			validation 			: 'lastname',
			validationMessage	: 'Please enter a valid name'
		}
	};

})(jQuery, window, document);