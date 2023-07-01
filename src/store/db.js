// import Dexie from 'dexie';

// export const db = new Dexie('slideseen');

// db.version(1).stores({
//   wells: '++id, wname, wstb, wdls, wns, wew, tmd, tinc, tazi, ttvd, tns, tew, tvs, trad',
//   tends: 'wellId, tymd, tyinc, tyazi, tytvd, tyns, tyew, tyvs',
// });

const request = window.indexedDB.open('slideseen', 10);

request.onupgradeneeded = (event) => {
  const db = event.target.result;
  const objectStore = db.createObjectStore('wells', { keyPath: 'id', autoIncrement: true });
  // Add any additional object store configuration, such as indexes, if needed
};