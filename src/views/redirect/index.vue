<!--
 * @Date: 2020-12-15 10:57:42
 * @LastEditTime: 2020-12-15 11:29:49
 * @Description:
-->
<script>
  export default {
    created() {
      const { params, query } = this.$route
      const { path } = params
      this.$router.replace({ path: '/' + path, query })
    },
    render: function(h) {
      return h() // avoid warning message
    },
  }
</script>
