<template>
  <div class="addressedit">
    <div class="top">
      <van-nav-bar
        class="addressedit_main"
        title="地址修改"
        left-arrow
        @click-left="returnRef"
      ></van-nav-bar>
    </div>
    <div class="addressedit_content">
      <van-address-edit
        :area-list="areaList"
        show-delete
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { areaList } from "../utils/areaList";
import { addAddressAPI } from "../services/user";
import { getToken } from "../utils/tools";
export default {
  data() {
    return {
      areaList,
      searchResult: [],
    };
  },
  methods: {
    returnRef() {
      history.back(-1);
    },
    onSave(save) {
      Toast.success("保存成功");
      const uid = getToken();
      addAddressAPI(
        uid,
        save.name,
        save.tel,
        save.addressDetail,
        save.province,
        save.city,
        save.county,
        save.isDefault
      );
      this.$router.go(-1);
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "枫杨街道",
            address: "郑州市中原区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
};
</script>

<style scoped>
.addressedit_main {
  background-color: #ffc7c7;
}
</style>