//realtime lister
db.collection('workorders').orderBy('date').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
      if (change.type == 'added') {
        renderWorkorder(change.doc);
      } else if (change.type == 'removed') {
        let li = workorderList.querySelector('[data-id=' + change.doc.id + ']');
        workorderList.removeChild(li);
      }
    })
  })