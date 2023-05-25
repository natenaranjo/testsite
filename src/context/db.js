import React, { useState } from 'react';
import Dexie from 'dexie';
import { useLiveQuery } from 'dexie-react-hooks';

export const db = new Dexie('myDatabase');
db.version(1).stores({
  friends: '++id, name, age', // Primary key and indexed props
});

export function AddFriendForm({defaultAge} = {defaultAge: 21}) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(defaultAge);
  const [status, setStatus] = useState("");

  async function addFriend() {
    try {

      // Add the new friend!
      const id = await db.friends.add({
        name,
        age
      });

      setStatus(`Friend ${name} successfully added. Got id ${id}`);
      setName("");
      setAge(defaultAge);
    } catch (error) {
      setStatus(`Failed to add ${name}: ${error}`);
    }
  }

  return <>
    <p>
      {status}
    </p>
    Name:
    <input
      type="text"
      value={name}
      onChange={ev => setName(ev.target.value)}
    />
    Age:
    <input
      type="number"
      value={age}
      onChange={ev => setAge(Number(ev.target.value))}
    />
    
    <button onClick={addFriend}>
      Add
    </button>
  </>
}

export function FriendList({minAge, maxAge}) {
  const friends = useLiveQuery(
    async () => {
      //
      // Query Dexie's API
      //
      const friends = await db.friends
        .where('age')
        .between(minAge, maxAge)
        .toArray();

      // Return result
      return friends;
    },
    // specify vars that affect query:
    [minAge, maxAge] 
  );

  return <ul>
    {friends?.map(friend => <li key={friend.id}>
      {friend.name}, {friend.age}
    </li>)}
  </ul>;
}