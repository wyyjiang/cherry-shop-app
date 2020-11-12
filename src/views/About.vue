<template>
  <div class="about">
    <div class="header">
      <van-nav-bar
        class="detail_main"
        title="关于我们"
        left-arrow
        @click-left="returnRef"
      >
      </van-nav-bar>
    </div>
    <div class="content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="商城简介" name="first">
          <div class="">
            <h1>商城简介</h1>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image
                  src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3072953998,3488690558&fm=26&gp=0.jpg"
                />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3914356193,3475081666&fm=26&gp=0.jpg"
                />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3132771058,3223861604&fm=26&gp=0.jpg"
                />
              </van-grid-item>
              <div class="">
                <strong>介绍 Cherry集团</strong>
                <hr />
                <p>
                  姜氏集团，集团老总注册资金10亿，董事声明本集团须按照诚信的原则及遵循适合的管治方法经营业务。致力于通过产品和服务，助力企业向数字化转型升级，通过科技驱动商业革新，让商业变得更智慧!
                </p>
              </div>
            </van-grid>
            <p>
              <b>Cherry商城 </b
              >是国内领先的会员制电商，专注于全球知名营养与品牌，致力于以接近成本的价格.
              目前在香港、深圳、湖南有三个分仓，一家香港公司和一个大陆转运中心。
              为保证商品品质，我们始终坚持自营模式，海外商品均从原产地直采，每个订单均从自有仓库发货；不接受任何第三方商家入驻。
            </p>
            <van-grid :border="false" :column-num="3">
              <van-grid-item>
                <van-image
                  src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3243009215,2274707566&fm=26&gp=0.jpg"
                />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3861040930,171058170&fm=26&gp=0.jpg"
                />
              </van-grid-item>
              <van-grid-item>
                <van-image
                  src="data:image/jpeg;base64,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"
                />
              </van-grid-item>
            </van-grid>
            <p>
              2011年上线伊始，我们就在国内电商中率先承诺“30天无理由退货”，不设附加条件，拆封了也可以退。时至今日，绝大部分电商都还只承诺7天无理由退货，且仅限于国产商品，进口商品不适用7天无理由退货条款。
              未来我们将始终坚持正品低价，真诚服务，以获得每位顾客的信赖。因为我们深信——只有信赖，才会回头！
              <strong> 不忘初心，不负信任！期待与您一路同行！</strong>
            </p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">
          <h1>企业管制</h1>
          <p>
            Cherry集团，连同其附属公司及为会计目的而综合入账的公司合共称为「本集团」)为中国领军的中小企业云端商业及营销解决方案提供商。本公司的股份将在香港联交所主板上市。
          </p>
          <br />
          <br />
          <p>
            微盟董事声明本集团须按照诚信的原则及遵循适合的管治方法经营业务。
          </p>
          <ul>
            <li>微盟建立了单一的董事会</li>
            <li>董事会成立以下小组委员会</li>
            <li>· 审核委员会</li>
            <li>· 薪酬委员会</li>
            <li>· 提名委员会</li>
            <li>各委员会均按已同意的职权范围行事。</li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="品牌动态" name="third">
          <van-card
            desc="因此要真正从流量思维转变成留量思维，而留量思维的背后，则有一套很强大的用户数据支持体系，有一套很精益的数据增长体系。不管是处于哪个发展阶段的公司，如果想基于数据做运营增长体系，至少要实现3个点：业务数据化、数据资产化、资产（数据）应用化。 ..."
            title="友盟+数据传承官：留量思维折射出新的增长体系"
            thumb="https://img.alicdn.com/tfs/TB1ZrTT1QL0gK0jSZFAXXcA9pXa-1150-664.jpg"
          />
          <van-card
            desc="小游戏数据运营公开课来啦！直播间告诉你小游戏增长的 7 个核心要素"
            title="友盟+数据传承官：留量思维折射出新的增长体系"
            thumb="https://img.alicdn.com/tfs/TB1khs20WL7gK0jSZFBXXXZZpXa-1062-531.png"
          />
          <van-card
            desc="这里有U-App 9-10月份的更新进展～"
            title="U-App 9-10月更新介绍"
            thumb="https://img.alicdn.com/tfs/TB1YetHqlBh1e4jSZFhXXcC9VXa-1120-664.jpg"
          />
          <van-card
            desc="冲刺吧，双十一！13篇增长干货请查收！"
            title="必看！双十一增长秘籍独家公开！"
            thumb="https://img.alicdn.com/tfs/TB1IXUFSpP7gK0jSZFjXXc5aXXa-1120-664.jpg"
          />
          <van-card
            desc="这里有U-App 9-10月份的更新进展～"
            title="友盟+小程序服务商扶优计划首批种子标杆案例热烈分享"
            thumb="https://img.alicdn.com/tfs/TB1lsn3o_M11u4jSZPxXXahcXXa-900-383.png"
          />
          <van-card
            desc="
从日均几十单到日均几千单，附近家政小程序如何携手友盟+造就增长神话！"
            title="必看！双十一增长秘籍独家公开！"
            thumb="https://img.alicdn.com/tfs/TB11I1RWfb2gK0jSZK9XXaEgFXa-1024-681.jpg"
          />
        </el-tab-pane>
        <el-tab-pane label="联系我们" name="fourth">
          <div class="pro">
            若您遇到产品使用问题，可随时与我们联系。 工作时间：
            <br />
            <strong> 工作日 早9：00—晚18：00</strong>
          </div>
          <div class="pho">
            联系方式 :
            <p>电话：86-66981358</p>
            <p>联系人：施先生</p>
            <p>手机：12345678951</p>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "second",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    returnRef() {
      history.back(-1);
    },
  },
};
</script>

<style scoped>
.detail_main {
  background-color: #ffc7c7;
}
.about {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.el-tabs {
  overflow-y: auto;
}
h1 {
  font-size: 20px;
  text-align: center;
}
p {
  font-size: 16px;
  text-indent: 16px;
  margin: 2px 5px;
  color: #615f5f;
}
b {
  color: red;
}
.pro {
  margin: 5px;
  padding: 5px;
  line-height: 30px;
}
.pho {
  border: 1px solid #cecece;
  padding: 25px;
}
.pho p {
  border: solid 1px #cecece;
  padding: 5px;
  margin: 15px;
}
.el-tab-pane p {
  padding: 9px;
  color: #584848;
  /* margin: 9px; */
  line-height: 30px;
}
ul {
  margin-top: 20px;
  background: #faf7f7;
  border-radius: 10px;
}
ul li {
  font-size: 16px;
  margin: 10px;
  color: #584848;
  margin: 5px;
  padding: 10px;
}
</style>