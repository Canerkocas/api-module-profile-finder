class UI {
    constructor() {
        this.profileContainer = document.querySelector('#profileContainer')
        this.alert = document.querySelector('#alert')
    }
    showProfile(profile) {
        this.profileContainer.innerHTML = `
        
        <div class="card card-body">
        <div class="row">
            <div class="col-md-3">
                 <a href="https://placeholder.com"><img src="https://via.placeholder.com/350x150" class="img-thumbnail"></a>
            </div>
            <div class="col-md-9">
                <h4>Contact</h4>
                <ul class="list-group">

                     <li class="list-group-item">
                        <strong>Name</strong> = ${profile.name}
                     </li>

                     <li class="list-group-item">
                     <strong>Username</strong> = ${profile.username}
                     </li>

                     <li class="list-group-item">
                     <strong>Email</strong> = ${profile.email}
                     </li>

                     <li class="list-group-item">
                     <strong>Adress</strong> = ${profile.address.street}
                       ${profile.address.city}
                       ${profile.address.zipcode}
                       ${profile.address.suite}
                     </li>

                     <li class="list-group-item">
                     <strong>Phone</strong> = ${profile.phone}
                      </li>

                      <li class="list-group-item">
                      <strong>Website</strong> = ${profile.website}
                     </li>

                     <li class="list-group-item">
                     <strong>Company</strong> = ${profile.company.name}
                    </li>
                </ul>
            </div>
        </div>

    </div>
        `;
    }

    showAlert(text){
        this.alert.innerHTML = `${text} is not found.`
    }

    clear(){
        this.profileContainer.innerHTML = "";
        this.alert.innerHTML = "";
    }
}