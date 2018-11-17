<template>
  <div class="register">
    <div class="form-element">
      <div class="label">姓名</div>
      <input class="input" placeholder="姓名"/>
    </div>
    <div class="form-element">
      <div class="label">用户名</div>
      <input class="input" placeholder="用户名"/>
    </div>
    <div class="form-element" style="margin-bottom: 10px">
      <div class="label">密码</div>
      <input class="input" type="password" placeholder="密码"/>
    </div>

    <div class="form-element">
      <div class="label">选择地区</div>
      <div class="input" placeholder="地区信息">地区信息</div>
      <div class="icon">&gt;</div>
    </div>
    <div class="form-element">
      <div class="label">详细地址</div>
      <input class="input" placeholder="请填写详细信息"/>
    </div>
    <div class="form-element">
      <div class="label">手机号码</div>
      <input class="input" type="number" maxlength="11" placeholder="请填写11位手机号码"/>
    </div>
    <div class="form-element">
      <div class="label">验证码</div>
      <input class="input" placeholder="请填写短信验证码"/>
      <div class="btn">获取验证码</div>
    </div>

    <label class="category">选择技能</label>

    <ul class="skills">
      <li class="skill" @click="skill.selected=!skill.selected" v-for="skill in skills" :key="skill.key">
        <span class="label">{{skill.value}}</span>
        <span class="icon" :style="isSelect(skill)"></span>
      </li>
    </ul>

    <div class="agreement" @click="changeAgreement">
      <span class="checkbox" :style="agreementBg()"></span>
      <label>已阅读并同意<span style="color:#f00;">《授权协议》</span></label>
    </div>

    <div class="button">立即注册</div>
    <br/>
  </div>
</template>

<script>
export default {
  name: 'register',
  data() {
    return {
      title: "我要加入",
      skills: [
        {key: "1", value: "歌舞", selected: false},
        {key: "2", value: "活动组织", selected: false},
        {key: "3", value: "厨艺", selected: false}
      ],
      agreement: false
    }
  },
  methods: {
    isSelect(skill) {
      const img = skill.selected ? "/img/icon_register_succeed@3x.png" : "/img/check_box_unselect1@3x.png";
      return {
        "background-image": `url(${img})`
      }
    },
    changeAgreement() {
      this.agreement = !this.agreement;
    },
    agreementBg() {
      const img = this.agreement ? "/img/check_box_selected2@3x.png" : "/img/check_box_unselect2@3x.png";
      return {
        "background-image": `url(${img})`
      }
    }
  }
}
</script>

<style lang="sass" scoped src="./Register.sass"></style>
