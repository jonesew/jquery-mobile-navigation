//Problem: Menu is not responsive on smaller mobile devices
//Solution: Hide text links and replace with more appropriate navigation

//Create a select box
var $select = $("<select></select>");
//and append to #menu
$("#menu").append($select);

//Cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);
   //Create an option
  var $option = $("<option></option>");
  //Deal with selected options depending on current page
  if($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true);
    }
  
//Options value is the href of the link
  $option.val($anchor.attr("href"));
  
//Option's text is the text of link
  var anchorText = $anchor.text();
  $option.text(anchorText);
  //Append option to select
  $select.append($option);
   
});
  
//Bind change listener to the select
$select.change(function(){
//Go to select's location
  window.location = $select.val();
});



