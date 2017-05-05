var urlSelector = $("#url-input");
var optionalnameSelector = $("#optionalname-input");
var submitButtonSelector = $("#submit-button");

urlSelector.focusout(function() {
	var url = $(this).val().trim();

	if (url.length == 0) {
		hideTooltip(urlSelector);
		return;
	}

	if (!isValidURL(url)) {
		showTooltip(urlSelector, "left", "This URL is not valid!");
	} else {
		hideTooltip(urlSelector);
	}
});

optionalnameSelector.focusout(function() {
	var optionalname = $(this).val();
	//Check if optionalname is available or taken
});

submitButtonSelector.click(function() {
	var url = urlSelector.val().trim();
	var optionalname = optionalnameSelector.val().trim();

	if (url.length == 0) {
		sweetAlert("Ooops!", "The URL is empty!", "error");
		return;
	}

	//Check if the URL is a valid URL
	if (!isValidURL(url)) {
		sweetAlert("Ooops!", "The URL is not valid!", "error");
		return;
	}

	if (!name) {
		//Without optional name

	} else {
		//With optional name

	}
});

function showTooltip(selector, side, text) {
	selector.tooltip({
		"title": text,
		"placement": side,
		"trigger": "manual"
	}).tooltip("show");
}

function hideTooltip(selector) {
	selector.tooltip("destroy");
}

function isValidURL(url) {
	var regex = /\(?(?:(http|https|ftp):\/\/)?(?:((?:[^\W\s]|\.|-|[:]{1})+)@{1})?((?:www.)?(?:[^\W\s]|\.|-)+[\.][^\W\s]{2,4}|localhost(?=\/)|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::(\d*))?([\/]?[^\s\?]*[\/]{1})*(?:\/?([^\s\n\?\[\]\{\}\#]*(?:(?=\.)){1}|[^\s\n\?\[\]\{\}\.\#]*)?([\.]{1}[^\s\?\#]*)?)?(?:\?{1}([^\s\n\#\[\]]*))?([\#][^\s\n]*)?\)?/gi;
	return regex.test(url);
}
