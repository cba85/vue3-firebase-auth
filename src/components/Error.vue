<template>
<div>
  <div class="alert alert-danger text-center" v-if="error">
             {{ error.message }}
      </div>

<!--
      <div class="alert alert-danger"
  v-for="(error, index) of errors"
  :key="index"
> {{ error.$property }}: {{ error.$message }}
</div>
-->
</div>
</template>

<script>
export default {
    name: "Error",
    props: [
        "errors", "error"
    ]
}
</script>