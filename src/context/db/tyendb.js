import { db } from "./db";

export function Tyends() {

  async function addTyends() {
    try {
      await db.tends.add({})
    } catch (e) {
      console.error(e);
    }
  }

  async function updateTyends() {
    try {
      await db.tends.put({
        id: '1',
        name: 'test',
      })
    } catch (e) {
      console.error(e);
    }
  }

  async function deleteTyends() {
    try {
      await db.tends.delete(
        4
      )
    } catch (e) {
      console.error(e);
    }
  }
}