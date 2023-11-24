const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
  const div1 = document.createElement("div");
  div1.classList.add("header");
  const span1 = document.createElement("span");
  span1.classList.add("date");
  span1.textContent = tarih;
  const title1 = document.createElement("h1");
  title1.textContent = baslik;
  const span2 = document.createElement("span");
  span2.classList.add("temp");
  span2.textContent = yazi;
  div1.append(span1, title1, span2);
  return div1;
};

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
  const myHeader = Header("GALATASARAY ZAMANI", "29.07.2023", "AŞKIN OLAYIM");
  const myTarget = document.querySelector(secici);
  return myTarget.append(myHeader);
};

export { Header, headerEkleyici };
