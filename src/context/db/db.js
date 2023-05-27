import Dexie from 'dexie';
// import { useLiveQuery } from 'dexie-react-hooks';

export const db = new Dexie('slideseen');

db.version(1).stores({
  wells: '++id, wname, wstb, wdls, wns, wew, tmd, tinc, tazi, ttvd, tns, tew, tvs, trad',
});

// export function FriendList({minAge, maxAge}) {
//   const friends = useLiveQuery(
//     async () => {
//       //
//       // Query Dexie's API
//       //
//       const friends = await db.friends
//         .where('age')
//         .between(minAge, maxAge)
//         .toArray();

//       // Return result
//       return friends;
//     },
//     // specify vars that affect query:
//     [minAge, maxAge] 
//   );

//   return <ul>
//     {friends?.map(friend => <li key={friend.id}>
//       {friend.name}, {friend.age}
//     </li>)}
//   </ul>;
// }