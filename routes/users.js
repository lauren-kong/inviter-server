import express from 'express'
import mysql from 'mysql2'
import dotenv from 'dotenv'
import 'dotenv/config'
import bcrypt from 'bcrypt'

dotenv.config()

const router = express.Router()

const userPool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
})

router.post('/register', async (req, res) => {
  const { email, password, firstname, lastname, kakao, facebook, mobile } = req.body
  try {
    const authId = await bcrypt.hash(`${firstname}${Date.now()}`, 10)
    console.log(authId)
    const insertQuery =
    //   'INSERT INTO users (email, password, firstname, lastname, kakao, facebook, authId, mobile) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    // userPool.query(insertQuery, [email, password, firstname, lastname, kakao, facebook, authId, mobile])
  } catch (error) {}
})

export default router
