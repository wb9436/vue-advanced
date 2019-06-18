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
      console.log('Md5: ' + SecretUtils.Md5Encode(val))
      console.log('SHA256: ' + SecretUtils.SHA256Encode(val))

      let aesVal = SecretUtils.AESEncode(val)
      console.log('AES Encode: ' + aesVal)
      console.log('AES Decode: ' + SecretUtils.AESDecode(aesVal))

      let base64Val = SecretUtils.Base64Encode(val)
      console.log('Base64 Encode: ' + base64Val)
      console.log('Base64 Decode: ' + SecretUtils.Base64Decode(base64Val))

      console.log('微信 AES Decode: ', SecretUtils.WeiXinDecode('YhCsjoVWW86N6vPJdckI06auSLCiBgHA+pn5QIuekglnY0M0gJXLqAAG6ZRiff0LtDvG2wFu9KOFZqR0YclsdBGtGXDzCbiCjSjIM9W3Pw291K/tD3dN/RpY3qZ/3HkFgnfCsAB6AgPPQtbBBKRr7IZFeYFlLM3J1MxvJ1Y62CcBkPlwFXtcno8fcrbbkJSA3LQ4IgrOfUfI3I8hmzhMIoMXw0pZsmC0KviWsdyTOykpC9aTang/4HqPkougezbc9dSUe6C9SvE8DHcNtaTmzlUIdNYQ/AuCJLxOfkRuWE2vvtrdjt/2PtX03ENIthNLMYj8lZ+PT8mx1shxWvt5C/+TqjfVKlcV7M3Bkw8ORb/HM7KgE89Kb448dNRcYE+aYv/zQ4eBWaxQpkggKLJd6A/Dxmk9z1dpMx4vbYWxobEtlecI8SlbbgJmOxmxUmrBx5LUIbYf45ZPSRRgxnxbri+/ofuRL+Yxuw2kpPMxCFtIUnDjcSIlxGF7SBywKPWQfJjbxcmf3g9AhPTNOMHY18mSA10ZTWXcGTJt8CRIZVo=', 'QIpx19G0eoFYYfw3+Ssz5A==', 'bBY4NNZJfVqTn80PmFko/Q=='))
      // console.log('微信 AES Decode: ', SecretUtils.WeiXinDecode('U2FsdGVkX186lvaDUuO0flY50+mJJORlr5EC/ieN0ig=', 'MTIzNDU2Nzg1Njc4OTAxMg==', 'MTIzNDU2Nzg1Njc4OTAxMg=='))

    }
  }
</script>

<style scoped>

</style>
