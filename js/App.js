var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  	'X-Client-Id': '2846',
  	'X-Auth-Token': 'd55cee2306fb3ffeb2e2ee395a58cb5f'
	};

$.ajaxSetup({
	headers: myHeaders
});

$.ajax({
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {
      	setupColumns(response.columns);
    }
});

function setupColumns(columns) {
    columns.forEach(function (column) {
    	var col = new Column(column.id, column.name);
        board.createColumn(col);
        setupCards(col, column.cards);
    });
};

function setupCards(col, cards) {
	cards.forEach(function (card) {
        var cardObj = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
    	col.createCard(cardObj);
  	})
};
