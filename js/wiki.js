 $(document).ready(function() {

    $("#getMessage").on("click", function() {
  		var searchString = $("#inputSearch").val();
  	var wikiUrl = 'https://en.wikipedia.org//w/api.php' +
   	  '?callback=?' +
      '&action=opensearch' +
      '&format=json' +
      '&profile=fuzzy' +
      '&limit=10' +
      '&prop=imageinfo&format=json&iiprop=urll' +
      '&search=' +
      encodeURI(searchString);
	$.getJSON(wikiUrl, function(data) {
    	var html = "<div class='firstResult'><h1>'"+data[0]+"'</h1></div><br>";
    	var i;
    	for (i = 0; i <10; i++) {
    		html+="<div class='resultArea'><h2>"+
    		data[1][i]+
    		"</h2><br><h4>"
    		+data[2][i]+
    		"</h4><br><a href="+data[3][i]+" class='randomLink'><h6>"
    		+data[3][i]+"</a></h6></div>";
    }
    html += "</div>";
    var x = document.createElement("STYLE");
    var t = document.createTextNode(".content {"+
 									"grid-template-rows:36px ;"+
										"}"+
									".container{"+
									"grid-template-rows: 50px 1fr;"	+
										"}");
    x.appendChild(t);
    document.head.appendChild(x);
    $(".searchResult").html(html);
  	});
    });
  });