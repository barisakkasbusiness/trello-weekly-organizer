/* global TrelloPowerUp */

TrelloPowerUp.initialize({
  'board-buttons': function(t, options){
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/61/61456.png', // istediğin icon
      text: 'Sort This Week',
      callback: function(t){
        return sortThisWeekCards(t);
      }
    }];
  }
});

// Bu Hafta listesindeki kartları günlerine göre taşıma fonksiyonu
function sortThisWeekCards(t) {
  return t.board('cards', 'lists')
    .then(board => {
      const thisWeekList = board.lists.find(l => l.name === 'Bu Hafta');
      if(!thisWeekList) return t.alert({message: '"Bu Hafta" listesi bulunamadı!'});

      thisWeekList.cards.forEach(card => {
        if(!card.due) return;

        const dueDate = new Date(card.due);
        const day = dueDate.getDay(); // 0=Pazar, 1=Pazartesi, ...

        let targetListName = '';
        switch(day){
          case 1: targetListName = 'Pzt'; break;
          case 2: targetListName = 'Sal'; break;
          case 3: targetListName = 'Çar'; break;
          case 4: targetListName = 'Per'; break;
          case 5: targetListName = 'Cum'; break;
          case 6: targetListName = 'Cmt'; break;
          case 0: targetListName = 'Paz'; break;
        }

        if(targetListName){
          const targetList = board.lists.find(l => l.name === targetListName);
          if(targetList){
            t.moveCard(card.id, targetList.id);
          }
        }
      });

      return t.alert({message: 'Sort işlemi başlatıldı!'});
    });
}

