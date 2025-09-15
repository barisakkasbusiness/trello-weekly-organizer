/* global TrelloPowerUp */

// Power-Up özelliklerini başlatıyoruz
TrelloPowerUp.initialize({

  // Kart arkasına eklenecek buton
  'card-buttons': function(t, options){
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/25/25694.png', // İkon
      text: 'Görev Detay', // Buton adı
      callback: function(t){
        // Butona tıklandığında popup açılır
        return t.popup({
          title: 'Görev Detayları',
          url: 'popup.html', // Popup içeriği
          height: 150
        });
      }
    }];
  },

});

