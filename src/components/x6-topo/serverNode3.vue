<template>
  <div class="root">
    <img class="image" src="@/assets/img/cloud-province.png" alt="" @click="handleClick" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showInfo: true,
      form: {
        name: "",
      },
    };
  },
  methods: {
    handleClick() {
      this.showInfo = !this.showInfo;
    },
  },
};
</script>

<style lang="less" scoped>
#nodeInfo {
  width: 300px;
  height: 100%;
  position: absolute;
  right: 0;
}
.root {
  width: 100px;
  height: 100px;
  position: relative;
  .image {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;

  }
}
</style>
