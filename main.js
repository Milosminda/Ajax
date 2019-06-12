var text = '';
var tRow = $('#tRow');

$('#mainNav').on('click', 'a', function (e) {
	var link = $(this).attr('id');
	$('.remClass').removeClass('active');
	$(this).parent().addClass('active');
	$('#title').html(link);
	if (link === 'books') {
		text = 'newberrybooks';
	}
	if (link === 'nobels') {
		text = 'nobelwinnerschemistry';
	}
	if (link === 'actors') {
		text = 'bestactors1';
	}
	$.ajax({
	url : 'https://mysafeinfo.com/api/data?list='+ text +'&format=json&abbreviate=false&case=default&token=nYts01vIgjlqGiFGZSKJsnws2smBmXiL',
	type : 'GET',
	dataType : 'json'
})
.done(function (res) {
	 var first = res[0];
	 var textHead = ``;
	 for(prop in first) {
	 	textHead += `<th>${prop}</th>`;
	 }
	 $('#tRow').html(textHead);
	 var textBody = '';
	res.forEach(function(e) {
		text += '<tr>';
		for(prop in e) {
			text += '<td>'+e[prop]+'</td>';
		}
		text += '</tr>';
	});
	$('#tBody').html(text);
});
});
function displayTable(e) {
}