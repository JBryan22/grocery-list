var groceryList = [];
var itemList = ["#item-1", "#item-2", "#item-3"];

$(function(){
  $("#grocery-list").submit(function(event){
    event.preventDefault();
    itemList.forEach(function(item){
      groceryList.push($(item).val().toUpperCase());
    });
    groceryList.sort();
    groceryList.forEach(function(item){
      $(".output").append("<li>" + item + "</li>");
    });
    $("form").hide();
  });
});
