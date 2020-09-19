var user = googleUser.getBasicProfile();
var googleuser = {
email : user.getEmail,
username : user.getName,
image : user.getImageUrl
}
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
    });
  }
if (googleuser.email == null) {
  document.getElementById("GoogleUserStatus").innerHTML = "User not signed in. such sad."
}else {
  document.getElementById("GoogleUserStatus").innerHTML = "Signed in as " + googleuser.username + ". <a onClick='signOut()'>Sign out?</a>"
}
