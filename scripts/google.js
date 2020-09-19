var googleuser = {
email : user.getBasicProfile().getEmail(),
username : user.getBasicProfile().getBasicProfile().getName(),
image : user.getBasicProfile().getImageUrl()
}
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
    });
  }
if (user.getBasicProfile().getEmail() == null) {
  document.getElementById("GoogleUserStatus").innerHTML = "User not signed in. such sad."
}else {
  document.getElementById("GoogleUserStatus").innerHTML = "Signed in as " + googleuser.username + ". <a onClick='signOut()'>Sign out?</a>"
}
