import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  render(){
    return html`
      <div>
      <li>${this.user.uname}</li>
      <li>${this.user.pwd}</li>
      <li>${this.user.firstName}</li>
      <li>${this.user.lastName}</li>

      </div>
      <form action="../../api/updateUser.php" method="POST">
      <label for="uname">Username:</label><br>
      <input type="text" id="uname" name="uname"><br>
      <label for="fname">First name:</label><br>
      <input type="text" id="firstName" name="firstName"><br>
      <label for="lname">Last name:</label><br>
      <input type="text" id="lastName" name="lastName"><br>
      <label for="pwd">Password</label><br>
      <input type="text" id="pwd" name="pwd"><br>
      <label for="oldPwd">Old Password</label><br>
      <input type="text" id="oldPwd" name="oldPwd"><br>
      <input type="submit" id="submitForm" name="editUser" class="btn btn-info mt-4 ml-2" value="Edit User"></input>
      </form> 
      `;
  }

}
customElements.define('edit-user', EditUser);
