<template>
  <div class="ranking">
    <template v-if="ranking">
      <ul class="bars">
        <li class="bar" v-for="(r,i) in ranking" :key="i">
          <router-link :to="'/view/' + r.userID">
            <div class="bg" :style="bgStyle(r, i)"></div>
            <div class="text">
              {{r.name}}
              <i>({{r.location}})</i>
            </div>
          </router-link>
        </li>
      </ul>
      <div class="more">查看更多排名</div>
    </template>
    <div class="loading" v-else>拼命加载中...</div>
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
      this.httpGet('http://18.188.89.12:3000/api/v1/volunteers?limit=10&sort=serviveTotalTime')
        .then(data => {
          const ranking = _.sortBy(data.list, (x) => {
            return -x.serviveTotalTime;
          });
          const max = ranking[0].serviveTotalTime;
          _.forEach(ranking, r => {
            r.percent = 100 * r.serviveTotalTime / max;
          });
          this.ranking = ranking;
        })
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

<style lang="sass" scoped src="./Ranking.sass"></style>
