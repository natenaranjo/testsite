import React from 'react';
import { useLiveQuery } from 'dexie-react-hooks';

export function FriendList() {
  const friends = useLiveQuery(
    () => db.friends.toArray()
  );

  return <ul>
    {friends?.map(friend => <li key={friend.id}>
      {friend.name}, {friend.age}
    </li>)}
  </ul>;
}