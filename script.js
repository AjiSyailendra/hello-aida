
var x = document.getElementById("myAudio");


Swal.fire({
  title: "Selamat Malam...",
  text: "Kita Dengerin Lagu yuk sambil aku mau bilang kalo...",
  imageUrl: "./assets/pentolawal.gif",
  imageHeight: 200,
}).then((res) => {
  if (res.isConfirmed) {
    x.play();

  }
  Swal.fire({
    title: "Hallo :D kamu yang namanya Aida yak...",
    imageUrl: "./assets/pentolhai.gif",
    imageHeight: 200,
  }).then((res) => {
    Swal.fire({
      title: "Kenalin aku Endri, robot asisten Kak Endraaa",
      text: "Aku diciptakan oleh kak endraa buat ditugasin untuk buat kamu ter-aksjdahfasdasdasd",
      imageUrl: "./assets/pentol1.gif",
      imageWidth: 150,
      imageHeight: 150,
    }).then(() => {
      Swal.fire({
        title: "Apakah kamu sudah siappp?",
        text: "Aida bisa klik tombol dibawah yaaa",
      }).then((result) => {
        Swal.fire({
          title: "Lelah ya hari ini?",
          timer: 5000,
          imageUrl: "./assets/turu.gif",
          imageWidth: 250,
          imageHeight: 250,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then(() => {
          Swal.fire({
            title: "Its okay, selamat ya udah bisa lewatin semua hal dihari ini",
            timer: 5000,
            imageUrl: "./assets/pelukan.gif",
            imageWidth: 250,
            timerProgressBar: true,
            showConfirmButton: false,
          }).then(() => {
            Swal.fire({
              title: "Jangan lupa minum...",
              timer: 5000,
              imageUrl: "./assets/plis.gif",
              imageWidth: 250,
              imageHeight: 250,
              timerProgressBar: true,
              showConfirmButton: false,
            }).then(() => {
              Swal.fire({
                title: "Maaf aku hanya bisa support kamu aja 🥺",
                timer: 5000,
                imageUrl: "./assets/lope2.gif",
                imageWidth: 250,
                imageHeight: 250,
                timerProgressBar: true,
                showConfirmButton: false,
              })
                .then(() => {
                  Swal.fire({
                    title: "You always be my sweetheart ❤.",
                    text: "Jaga diri baik-baik... Jangan sedih, kita ketemu nanti :) ❤",
                    imageUrl: "./assets/hug.gif",
                    width: 600,
                    imageWidth: 250,
                    imageHeight: 250,
                    padding: "3em",
                    color: "#716add",
                    backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `,
                  });
                })
                .then(() => {
                  Swal.fire({
                    title: "Gud Nite Manis <3",
                    text: "Sambil dengerin lagu yukkk",
                    imageUrl: "./assets/lope2.gif",
                    imageWidth: 250,
                    imageHeight: 250,
                    color: "#716add",
                    backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `,
                  });
                });
            });
          });
        });
      });
    });
  });
})

