$('#flashMessage').hide();
$('#flashMessage').fadeIn();

$('#previewButton').click(()=>{
 const title = $('#blogTitleInput').val();
 const content = $('#blogContentInput').val();
  $('#blogTitlePreview').text(title);
  $('#blogContentPreview').text(content);
});
  
