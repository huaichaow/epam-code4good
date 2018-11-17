<template>
  <div class="ranking">
    <ul class="bars" v-if="ranking">
      <li class="bar" v-for="(r,i) in ranking" :key="i">
        <div class="bg" :style="bgStyle(r, i)"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import _ from 'lodash';

const colors = [
  "#f10",
  "#f30",
  "#f50",
  "#f70",
  "#f70",
  "#f70",
  "#f70",
  "#f70",
  "#f70",
  "#f70",
];

export default {
  name: 'ranking',
  data() {
    return {
      title: "排行榜",
      colors,
      ranking: null
    }
  },
  mounted() {
    this.getRankingData();
  },
  methods: {
    getRankingData() {
      this.ranking = [];
      for (let i = 0; i < 10; i++) {
        this.ranking.push({
          name: `name ${i}`,
          percent: (10 - i) * 100 / 10
        });
      }
    },
    bgStyle(rank, i) {
      return {
        width: rank.percent + '%',
        "background-color": colors[i]
      }
    }
  }
}
</script>

<style lang="sass" src="./Ranking.sass"></style>
