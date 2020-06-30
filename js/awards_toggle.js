jQuery(function() {
	jQuery('#div2,#div3,#div4').hide();
  jQuery('.showSingle').click(function() {
    jQuery('.targetDiv').hide();
    jQuery('#div' + $(this).attr('target')).show();
  });
});
