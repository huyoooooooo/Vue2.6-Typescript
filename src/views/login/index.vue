<template>
  <div>
    登录画面
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Login'
})

export default class Login extends Vue {
  created() {
    console.dir(this.$http)
  }
}
</script>