	function getData(search){
		return $.ajax({
			url: 'https://en.wikipedia.org/w/api.php',
			data: {
				action: 'query',
				format: 'json',
				list: 'search',
				srsearch: query,
			},
			dataType: 'jsonp',
		});
	}

	
	function fetch(query){
		return $.ajax({
			url: 'https://en.wikipedia.org/w/api.php',
			data: {
				action: 'query',
				format: 'json',
				list: 'search',
				srsearch: query,
			},
			dataType: 'jsonp',
		});
	}

	function render(results) {
  		var $output = $(".output");
  		var html = results.map(function(result) {
    								return '<a class="result"' +
											'   href="https://en.wikipedia.org/wiki/'+result.title+'">' +
        	   								'  <h2>'+result.title+'</h2>' +
        	   								'  <div>'+result.snippet+'</div>' +
        	   								'</a><hr>';
  								}).join("\n\n");
  		$output.html("");
  		$(html).appendTo($output);
	}

	$("#forma").on("submit", function(event) {
  		event.preventDefault();
  		if ($("#bloque").hasClass("actions-init")){
  			 $('#bloque').addClass('actions-transform');
  		}

  		}
  		var query = $("#search").val();
  		fetch(query)
    		.done(function(data) {
      		render(data.query.search);
    		});
	});
