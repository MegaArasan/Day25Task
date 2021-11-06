fetch(
  "https://raw.githubusercontent.com/tk120404/thirukkural/master/thirukkural.json"
)
  .then((data) => data.json())

  // fetch data from api and upload in html tag
  //   there is 1330 kural so it takes much time to load
  .then((kurals) =>
    kurals.kural.forEach((data) => {
      const flags = document.querySelector(".row");
      flags.innerHTML += `
                 <div class="col-12">
                        <div class="kural">
                            <p><b>${data.Line1}</b></p>
                            <p><b>${data.Line2}</b></p>
                           </div>        
                            <div class="kural-detail">
                                <p><b>Number:</b>${data.Number}</p>
                                <p><b>Translation:</b>${data.Translation}</p>
                                <p><b>explanation:</b>${data.explanation}</p>
                                <p><b>couplet:</b>${data.couplet}</p>
                                <p><b>mk:</b>${data.mk}</p>
                                <p><b>mv:</b>${data.mv}</p>
                                <p><b>sp:</b>${data.sp}</p>
                            </div>
                 </div>`;
    })
  )
  .catch((err) => console.log(err));
