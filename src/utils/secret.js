import md5 from 'js-md5'
import sha256 from 'js-sha256'
import base64 from 'js-base64'
import CryptoJS from 'crypto-js'

const AES_KEY = CryptoJS.enc.Utf8.parse('1234567856789012')
const AES_IV = CryptoJS.enc.Utf8.parse('1234567856789012')

export const Md5Encode = (val) => {
  return md5(val)
}

export const SHA256Encode = (val) => {
  return sha256(val)
}

export const Base64Encode = (val) => {
  return base64.Base64.encode(val)
}

export const Base64Decode = (val) => {
  return base64.Base64.decode(val)
}

export const AESEncode = (val, key, iv) => {
  key = key ? CryptoJS.enc.Utf8.parse(key) : AES_KEY
  iv = iv ? CryptoJS.enc.Utf8.parse(iv) : AES_IV

  key = CryptoJS.enc.Base64.stringify(key)
  iv = CryptoJS.enc.Base64.stringify(iv)

  console.log('AESEncode', key, iv)

  let src = CryptoJS.enc.Utf8.parse(val)
  src = CryptoJS.enc.Base64.stringify(src)

  let encrypt = CryptoJS.AES.encrypt(src, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  return encrypt.toString()
}

export const AESDecode = (val, key, iv) => {
  key = key ? CryptoJS.enc.Utf8.parse(key) : AES_KEY
  iv = iv ? CryptoJS.enc.Utf8.parse(iv) : AES_IV

  key = CryptoJS.enc.Base64.stringify(key)
  iv = CryptoJS.enc.Base64.stringify(iv)

  let decrypt = CryptoJS.AES.decrypt(val, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  return base64.Base64.decode(CryptoJS.enc.Utf8.stringify(decrypt))
}

export const WeiXinDecode = (encryptedData, key, iv) => {
  key = CryptoJS.enc.Base64.parse(key)
  iv = CryptoJS.enc.Base64.parse(iv)

  let decrypt = CryptoJS.AES.decrypt(encryptedData, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
  return base64.Base64.decode(CryptoJS.enc.Base64.stringify(decrypt))
}
