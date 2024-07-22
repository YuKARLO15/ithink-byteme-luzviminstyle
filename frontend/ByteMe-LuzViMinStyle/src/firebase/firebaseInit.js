import { initializeApp } from 'firebase/app'
import { getDatabase, ref, child, get } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyCQT-w4iKv3MuivCPdtB6LYHWlm9IucJKI',
  authDomain: 'luzvimin-4a51e.firebaseapp.com',
  databaseURL: 'https://luzvimin-4a51e-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'luzvimin-4a51e',
  storageBucket: 'luzvimin-4a51e.appspot.com',
  messagingSenderId: '137799781399',
  appId: '1:137799781399:web:2010b8cafe6b06453ae052',
  measurementId: 'G-MKJT7NXH71'
}

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

export { db }
