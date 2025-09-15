/* global TrelloPowerUp */

TrelloPowerUp.initialize({
  "board-buttons": function(t, options){
    return [{
      text: "Sort This Week Cards",
      callback: function(t){
        return sortThisWeekCards(t);
      }
    }];
  }
});

function sortThisWeekCards(t){
  // 1. "Bu Hafta" listesindeki tüm kartları çek
  // 2. Her kartın due date'ini kontrol et
  // 3. Gün listesine taşı (Pzt, Sal, Çar, ...)
  console.log("Sort işlemi başlatıldı!"); // şimdilik test için
  return t.alert({message: "Sort işlemi başlatıldı!"});
}
