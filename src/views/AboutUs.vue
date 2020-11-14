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
      <div class="content-main">
        <el-tabs v-model="activeName">
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
                    Cherry集团，注册资金10亿，董事声明本集团须按照诚信的原则及遵循适合的管治方法经营业务。致力于通过产品和服务，助力企业向数字化转型升级，通过科技驱动商业革新，让商业变得更智慧!
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
                    src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3914356193,3475081666&fm=26&gp=0.jpg"
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
              若您遇到产品使用问题，可随时与我们联系。
              <br />
              工作时间：
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
.content-main {
  padding: 3px 10px 2px;
}
</style>