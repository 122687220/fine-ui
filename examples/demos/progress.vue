<template>
  <div>
    <div class="list">
      <zv-progress :percentage="50"></zv-progress>
      <zv-progress :percentage="100" :format="format"></zv-progress>
      <zv-progress :percentage="100" status="success"></zv-progress>
      <zv-progress :percentage="100" status="warning"></zv-progress>
      <zv-progress :percentage="50" status="exception"></zv-progress>
    </div>

    <div class="list">
      <zv-progress
        :text-inside="true"
        :stroke-width="26"
        :percentage="70"
      ></zv-progress>
      <zv-progress
        :text-inside="true"
        :stroke-width="24"
        :percentage="100"
        status="success"
      ></zv-progress>
      <zv-progress
        :text-inside="true"
        :stroke-width="22"
        :percentage="80"
        status="warning"
      ></zv-progress>
      <zv-progress
        :text-inside="true"
        :stroke-width="20"
        :percentage="50"
        status="exception"
      ></zv-progress>
    </div>

    <div class="list">
      <zv-progress :percentage="percentage" :color="customColor"></zv-progress>

      <zv-progress
        :percentage="percentage"
        :color="customColorMethod"
      ></zv-progress>

      <zv-progress :percentage="percentage" :color="customColors"></zv-progress>
    </div>

    <div class="lists">
      <zv-progress type="circle" :percentage="0"></zv-progress>
      <zv-progress type="circle" :percentage="25"></zv-progress>
      <zv-progress
        type="circle"
        :percentage="100"
        status="success"
      ></zv-progress>
      <zv-progress
        type="circle"
        :percentage="70"
        status="warning"
      ></zv-progress>
      <zv-progress
        type="circle"
        :percentage="50"
        status="exception"
      ></zv-progress>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressDemo',
  data() {
    return {
      percentage: 20,
      customColor: '#409eff',
      customColors: [
        { color: '#f56c6c', percentage: 20 },
        { color: '#e6a23c', percentage: 40 },
        { color: '#5cb87a', percentage: 60 },
        { color: '#1989fa', percentage: 80 },
        { color: '#6f7ad3', percentage: 100 }
      ]
    }
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? '满' : `${percentage}%`
    },
    customColorMethod(percentage) {
      if (percentage < 30) {
        return '#909399'
      } else if (percentage < 70) {
        return '#e6a23c'
      } else {
        return '#67c23a'
      }
    },
    increase() {
      this.percentage += 10
      if (this.percentage > 100) {
        this.percentage = 100
      }
    },
    decrease() {
      this.percentage -= 10
      if (this.percentage < 0) {
        this.percentage = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-rows: repeat(5, 50px);
}
.lists {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
</style>
