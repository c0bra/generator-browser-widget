<div class="hello">Hello, {{ msg }}!</div>

<style lang="less">
.hello {
  font-size: 3em;
}
</style>

<script>
export default {
  data() {
    return {
      msg: 'world'
    }
  }
}
</script>
