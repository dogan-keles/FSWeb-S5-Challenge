import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  const div21 = document.createElement("div");
  div21.classList.add("card");
  const div22 = document.createElement("div");
  div22.classList.add("headline");
  div22.textContent = makale["anabaslik"];
  const div23 = document.createElement("div");
  div23.classList.add("author");
  const div24 = document.createElement("div");
  div24.classList.add("img-container");
  const img21 = document.createElement("img");
  img21.setAttribute("src", `${makale["yazarFoto"]}`);
  const span21 = document.createElement("span");
  span21.textContent = makale["yazarAdi"] + " tarafından";
  div24.append(img21);
  div23.append(div24, span21);
  div21.append(div22, div23);
  div21.addEventListener("click", (e) => {
    console.log(makale["anabaslik"]);
  });

  return div21;
};

const cardEkleyici = (secici) => {
  const myTarget22 = document.querySelector(secici);
  async function kartCalistir() {
    await axios.get("http://localhost:5001/api/makaleler").then((response) => {
      console.log(response.data["makaleler"]["javascript"]);
      const array1 = Object.keys(response.data["makaleler"]);
      console.log("array1 is here " + array1);
      for (let i = 0; i < array1.length; i++) {
        const array2 = response.data["makaleler"][`${array1[i]}`];
        array2.forEach((element) => {
          myTarget22.append(Card(element));
        });
      }
    });
  }
  return kartCalistir();

  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
};

export { Card, cardEkleyici };
// response["data"]["makaleler"]["javascript"][i]["anabaslik"]
