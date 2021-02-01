$(function() {
  $(".SendEmail").click(function(event) {
    var email = "info@aecan.in";
    var subject = "Aecan Query";
    var emailBody = "Type your message here";
    // var attach = "path";
    document.location =
      "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
    //   "?attach=" +
    //   attach;
  });
});
