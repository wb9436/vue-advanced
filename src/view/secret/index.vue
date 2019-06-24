<template>
  <div class="page">
    {{message}}
  </div>
</template>

<script>
  import * as SecretUtils from '../../utils/secret'

  export default {
    name: 'Secret',
    data () {
      return {
        message: '数据加密测试'
      }
    },
    created () {
      const val = '依凡123'
      // console.log('Md5: ' + SecretUtils.Md5Encode(val))
      // console.log('SHA256: ' + SecretUtils.SHA256Encode(val))

      // let base64Val = SecretUtils.Base64Encode(val)
      // console.log('Base64 Encode: ' + base64Val)
      // console.log('Base64 Decode: ' + SecretUtils.Base64Decode(base64Val))

      // console.log('微信 AES Decode: ', SecretUtils.AESDecode('YhCsjoVWW86N6vPJdckI06auSLCiBgHA+pn5QIuekglnY0M0gJXLqAAG6ZRiff0LtDvG2wFu9KOFZqR0YclsdBGtGXDzCbiCjSjIM9W3Pw291K/tD3dN/RpY3qZ/3HkFgnfCsAB6AgPPQtbBBKRr7IZFeYFlLM3J1MxvJ1Y62CcBkPlwFXtcno8fcrbbkJSA3LQ4IgrOfUfI3I8hmzhMIoMXw0pZsmC0KviWsdyTOykpC9aTang/4HqPkougezbc9dSUe6C9SvE8DHcNtaTmzlUIdNYQ/AuCJLxOfkRuWE2vvtrdjt/2PtX03ENIthNLMYj8lZ+PT8mx1shxWvt5C/+TqjfVKlcV7M3Bkw8ORb/HM7KgE89Kb448dNRcYE+aYv/zQ4eBWaxQpkggKLJd6A/Dxmk9z1dpMx4vbYWxobEtlecI8SlbbgJmOxmxUmrBx5LUIbYf45ZPSRRgxnxbri+/ofuRL+Yxuw2kpPMxCFtIUnDjcSIlxGF7SBywKPWQfJjbxcmf3g9AhPTNOMHY18mSA10ZTWXcGTJt8CRIZVo=', 'QIpx19G0eoFYYfw3+Ssz5A==', 'bBY4NNZJfVqTn80PmFko/Q=='))

      // let userInfo = { 'openId': 'o3DRs5SafuprF9Nqsq8ls8cd4z9w', 'nickName': '依凡', 'gender': 1, 'language': 'zh_CN', 'city': 'Pudong New District', 'province': 'Shanghai', 'country': 'China', 'avatarUrl': 'https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eroIXY4hLVAsACuQj7pClLIKjoLx5HJ8tVgDeusLqBMV3bFp14PzejTgw0TgGbt156Wqp4J2Wzyibw/132', 'unionId': 'oOTnV0jqeLXW2NJ3LWwRlFRRCNN0', 'watermark': { 'timestamp': 1560328058, 'appid': 'wxef810c89d728cc72' } }
      // console.log('微信 AES Encode: ', SecretUtils.AESEncode(JSON.stringify(userInfo), SecretUtils.AES_KEY, SecretUtils.AES_IV))
      // console.log('微信 AES Decode: ', SecretUtils.AESDecode('hM3LKlo8h5UE322fCVbyaG6tdX6nK9FBVLhTC56muOxfQythUuPkAoYCLixPsTIud4Vu5wsqnkchd9Sdue0q8FV9qcIyVZEpbhZktzbfCAbgRF9c2KRk4j5l8R0FqGRNsbXXo2AI7DdFO0CH4ik8qvurfLk4mMayyD6YTCX5zMwqozDnSlbI4ND1Hw5FdlzYwSdK1moEEOQ76tjvfC5IrSdD0RgCa8rg08AeN0LCwQl/3RUiBH+eQyUNKcF6gedJtIBRc8J3OIrnicvJHeY9BvaLJ27dx6uwwFwJzjb1N8L68a0KFRQvgW9Ud4ITHT0E4o4bEHrBcqx8MBHkVrPeitxTjGp93LlDdn0BzH5uMwEmRc5tBPXK1GmrWzaSJ+SN18D3txJ5GS36y0YoDjOs1R6dSpyTVuvKqiP086+uLsq3L+BMkRp5RNDcKW6lccqZIyfWRlH95720smWV1ijZQyDwS1qmkykZg+QdSH8UNIDGmO3Swu/DNzmZyUUrg0rLxRAOyDWK6nu/idAkcmjDGsWeFox/aI7TeDbWeEWi01w=', SecretUtils.AES_KEY, SecretUtils.AES_IV))

      console.log('微信 AES Encode: ', SecretUtils.AESEncode(val, SecretUtils.AES_KEY, SecretUtils.AES_IV))
      console.log('微信 AES Decode: ', SecretUtils.AESDecode('pXx+2p26pT1a6+l5W0+ksQ==', SecretUtils.AES_KEY, SecretUtils.AES_IV))
    }
  }
</script>

<style scoped>

</style>
