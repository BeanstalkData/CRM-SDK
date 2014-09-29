$(function() {
	$('#form').bsdForm({
		'schema': {
			'title': 'Beanstalk Data Form',
			'about': 'Fill out the form below',
			'descriptors': [
				{
					'label'					: 'First Name',
					'div-class'				: 'bsd-form',
					'input-id'				: 'first-name',
					'fieldtype'				: 'input',
					'placeholder'			: 'some placeholder',
					'validation'			: 'name',
					'validation-message' 	: 'Please enter a name'
				},
				{
					'label'					: 'Last Name',
					'div-class'				: 'bsd-form',
					'input-id'				: 'last-name',
					'fieldtype'				: 'input',
					'placeholder'			: 'some placeholder',
					'validation'			: 'name'
				},
				{
					'label'					: 'Email Address',
					'div-class'				: 'bsd-form',
					'input-id'				: 'email',
					'fieldtype'				: 'input',
					'placeholder'			: 'some placeholder',
					'validation'			: 'email'
				},
				{
					'label'					: 'State',
					'div-class'				: 'bsd-form',
					'input-id'				: 'state',
					'fieldtype'				: 'dropdown',
					'value'					: 'states',
					'placeholder'			: 'some placeholder',
					'validation'			: 'zipcode'
				},
				{
					'label'					: 'Zip Code',
					'div-class'				: 'bsd-form',
					'input-id'				: 'zip-code',
					'fieldtype'				: 'input',
					'placeholder'			: 'some placeholder',
					'validation'			: 'zipcode'
				},
				{
					'label'					: 'Nom Checkbox',
					'div-class'				: 'bsd-form',
					'input-id'				: 'nom-checkbox',
					'fieldtype'				: 'checkbox',
					'placeholder'			: 'some placeholder',
					'validation'			: null
				},
				{
					'label'					: 'Favorites',
					'div-class'				: 'bsd-form',
					'input-id'				: 'favorites',
					'fieldtype'				: 'list',
					'values'				: ['red', 'white', 'blue'],
					'placeholder'			: 'some placeholder',
					'validation'			: null
				},
				{
					'label'					: 'Comments',
					'div-class'				: 'bsd-form',
					'input-id'				: 'comments',
					'fieldtype'				: 'textarea',
					'placeholder'			: 'some placeholder',
					'validation'			: null
				}
			]
		}
	}, 'Error, check schema.');
});