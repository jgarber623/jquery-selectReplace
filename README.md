# jquery-selectReplace
A jQuery plugin that provides the ability to creatively style `<select>` input types.

This plugin was originally developed by [Blake Walters](http://github.com/markupboy). I'm totally borrowing it and storing it here for posterity and further development. I've posted it here with his expressed, non-written permission.


## Requirements
* [jQuery](http://jquery.com/) (1.4.2 or greater is recommended)


## Usage
In your HTML:

	<label for="superheroes">Who is your favorite hero?</label>
	<select name="superheroes" id="superheroes">
		<option value="Batman">Batman</option>
		<option value="Superman">Superman</option>
		<option value="Spiderman">Spiderman</option>
		<option value="Professor X">Professor X</option>
		<option value="Optimus Prime">Optimus Prime</option>
		<option value="Gumby">Gumby</option>
	</select>

In your JavaScript:

	$().ready( function() {
		$( "select" ).selectReplace({ focusClassName: "focus" });
	});

`focusClassName` is an optional string (default is "focus") that is added to the `class` attribute of the `<select>` element.