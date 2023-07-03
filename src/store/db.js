export default function createStores() {
  const request = window.indexedDB.open('slideseen', 1);

  request.onupgradeneeded = (event) => {
    const db = event.target.result;

    if (!db.objectStoreNames.contains('wells')) {
      const wellStore = db.createObjectStore('wells', { keyPath: 'id', autoIncrement: true });
        wellStore.createIndex('id', 'id', { unique: true });
        wellStore.createIndex('wname', 'wname', { unique: false });
        wellStore.createIndex('wvs', 'wvs', { unique: false });
        wellStore.createIndex('wstb', 'wstb', { unique: false });
        wellStore.createIndex('wdls', 'wdls', { unique: false });
        wellStore.createIndex('wns', 'wns', { unique: false });
        wellStore.createIndex('wew', 'wew', { unique: false });
        wellStore.createIndex('tmd', 'tmd', { unique: false });
        wellStore.createIndex('tinc', 'tinc', { unique: false });
        wellStore.createIndex('tazi', 'tazi', { unique: false });
        wellStore.createIndex('ttvd', 'ttvd', { unique: false });
        wellStore.createIndex('tns', 'tns', { unique: false });
        wellStore.createIndex('tew', 'tew', { unique: false });
        wellStore.createIndex('tvs', 'tvs', { unique: false });
        wellStore.createIndex('trad', 'trad', { unique: false });
    }

    if (!db.objectStoreNames.contains('tyends')) {
      const tyendStore = db.createObjectStore('tyends', { keyPath: 'wellId' });
        tyendStore.createIndex('tymd', 'tymd', { unique: false });
        tyendStore.createIndex('tyinc', 'tyinc', { unique: false });
        tyendStore.createIndex('tyazi', 'tyazi', { unique: false });
        tyendStore.createIndex('tytvd', 'tytvd', { unique: false });
        tyendStore.createIndex('tyns', 'tyns', { unique: false });
        tyendStore.createIndex('tyew', 'tyew', { unique: false });
        tyendStore.createIndex('tyvs', 'tyvs', { unique: false });

        tyendStore.createIndex('wellIdRef', 'wellId', { unique: false });
    }
  }
}