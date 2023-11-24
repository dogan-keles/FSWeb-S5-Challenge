import axios from "axios";

const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //
  const div11 = document.createElement("div");
  div11.classList.add("topics");
  for (let i = 0; i < konu.length; i++) {
    let div12 = document.createElement("div");
    div12.classList.add("tab");
    div12.textContent = konu[i];
    div11.append(div12);
  }
  return div11;
};

const tabEkleyici = (secici) => {
  const myTarget11 = document.querySelector(secici);
  async function tabCalistir() {
    await axios.get("http://localhost:5001/api/konular").then((response) => {
      myTarget11.append(Tablar(response.data["konular"]));
    });
  }
  return tabCalistir();
};

// async function dataAl() {
//   await ipAdresimiAl();
//   axios
//     .get(`https://apis.ergineer.com/ipgeoapi/${benimIP}`)
//     .then((response) => {
//       cardsHtml.append(ipControl(response.data));
//     });
// }
// dataAl();

// GÖREV 4
// ---------------------
// Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
// Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
// Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
// Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
//
export { Tablar, tabEkleyici };
