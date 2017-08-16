$(function() {
  $.getJSON("src/book.json", function(json) {
    $.each(json, function(i, item) {
      var $tr = $('table').append(
        $('<tr>').append(
          `<td style="font-weight: bold;text-align: center;">${item.idioma}</td>
             <td><a href="${item.download}">${item.livro}</a></td>
             <td>${item.genero}</td>`
        ));
    });
  });
});
