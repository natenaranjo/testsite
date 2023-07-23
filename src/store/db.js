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
        wellStore.createIndex('createdDate', 'createdDate', { unique: false });
        wellStore.createIndex('modifiedDate', 'modifiedDate', { unique: false });
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
        tyendStore.createIndex('createdDate', 'createdDate', { unique: false });
        tyendStore.createIndex('modifiedDate', 'modifiedDate', { unique: false });

        tyendStore.createIndex('wellIdRef', 'wellId', { unique: false });
    }

    if (!db.objectStoreNames.contains('surveys')) {
      const surveyStore = db.createObjectStore('surveys', { keyPath: 'id', autoIncrement: true });
        surveyStore.createIndex('wellIdRef','wellId', { unique: false });
        
        surveyStore.createIndex('svmd','svmd', { unique: false });
        surveyStore.createIndex('svinc','svinc', { unique: false });
        surveyStore.createIndex('svazi','svazi', { unique: false });
        surveyStore.createIndex('svmy','svmy', { unique: false });
        surveyStore.createIndex('svcl','svcl', { unique: false });
        surveyStore.createIndex('svtvd','svtvd', { unique: false });
        surveyStore.createIndex('svns','svns', { unique: false });
        surveyStore.createIndex('svew','svew', { unique: false });
        surveyStore.createIndex('svchd','svchd', { unique: false });
        surveyStore.createIndex('svbear','svbear', { unique: false });
        surveyStore.createIndex('svvs','svvs', { unique: false });
        surveyStore.createIndex('svbur','svbur', { unique: false });
        surveyStore.createIndex('svrot','svrot', { unique: false });
        surveyStore.createIndex('svdls','svdls', { unique: false });
        surveyStore.createIndex('svrtf','svrtf', { unique: false });
        surveyStore.createIndex('svmbur','svmbur', { unique: false });
        surveyStore.createIndex('svburstrg','svburstrg', { unique: false });
        surveyStore.createIndex('svbitdepth','svbitdepth', { unique: false });
        surveyStore.createIndex('svprojinc','svprojinc', { unique: false });
        surveyStore.createIndex('svprojazi','svprojazi', { unique: false });
        surveyStore.createIndex('svprojtvd','svprojtvd', { unique: false });
        surveyStore.createIndex('createdDate','createdDate', { unique: false });
        surveyStore.createIndex('modifiedDate','modifiedDate', { unique: false });
    }

    if (!db.objectStoreNames.contains('slides')) {
      const slideStore = db.createObjectStore('slides', { keyPath: 'id', autoIncrement: true });
        slideStore.createIndex('surveyIdRef','surveyId', { unique: false });

        slideStore.createIndex('sdmd', 'sdmd', { unique: false });
        slideStore.createIndex('sdfrom', 'sdfrom', { unique: false });
        slideStore.createIndex('sdto', 'sdto', { unique: false });
        slideStore.createIndex('sdseen', 'sdseen', { unique: false });
        slideStore.createIndex('rtfrom', 'rtfrom', { unique: false });
        slideStore.createIndex('rtto', 'rtto', { unique: false });
        slideStore.createIndex('rtunseen', 'rtunseen', { unique: false });
        slideStore.createIndex('cl', 'cl', { unique: false });
        slideStore.createIndex('createdDate', 'createdDate', { unique: false });
        slideStore.createIndex('modifiedDate', 'modifedDate', { unique: false });
    }

    if (!db.objectStoreNames.contains('activityLog')) {
      const activityLogStore = db.createObjectStore('activityLog', { keyPath: 'id', autoIncrement: true });
      activityLogStore.createIndex('timestamp', 'timestamp', { unique: false });
      activityLogStore.createIndex('storeName', 'storeName', { unique: false });
      activityLogStore.createIndex('action', 'action', { unique: false });
      activityLogStore.createIndex('recordId', 'recordId', { unique: false });
      activityLogStore.createIndex('previousData', 'previousData', { unique: false });
      activityLogStore.createIndex('newData', 'newData', { unique: false });
    }
  }
}