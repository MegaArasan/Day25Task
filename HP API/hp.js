fetch("http://hp-api.herokuapp.com/api/characters")
    .then(data=>data.json())
    // upload the data to html

    // there is no images for some data in api
    .then((hp) =>
      hp.forEach((data) => {
        const flags = document.querySelector(".row");
                     flags.innerHTML += `
                              <div class="box col-sm-6 col-md-3 col-xl-3">
                              <div class="image">
                              <img src="${data.image}" class="img img-responsive img-thumbnail">
                              <p><b>${data.name}</b></p>
                              </div>
                                <div class="details">
                              <div class="image-contain">
                              <img src="${data.image}" class="img img-responsive img-thumbnail">
                              <p><b>${data.name}</b></p>
                              </div>
                                <p>Alive:${data.alive}</p>
                                <p>Ancestry:${data.ancestry}</p>
                                <p>Date of Birth:${data.dateOfBirth}</p>
                                <p>House:${data.house}</p>
                                <p>Name:${data.actor}</p>
                                <p>Gender:${data.gender}</p>
                                <p>Hogwarts Staff:${data.hogwartsStaff}
                                <p>hogwarts Student:${data.hogwartsStudent}</p>
                                <p>House:${data.house}</p>
                                <p>Species:${data.species}</p>
                                <p>Wizard:${data.wizard}</p>
                                </div>
                              </div>`;
      })
    );