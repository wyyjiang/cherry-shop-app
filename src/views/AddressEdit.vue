<template>
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
    onSave(save) {
      Toast("保存成功");
      console.log(save);
      const uid = getToken();
      console.log(uid);
      addAddressAPI(
        uid,
        save.name,
        save.tel,
        save.addressDetail,
        save.province,
        save.city,
        save.county
      );
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
};
</script>

<style>
</style>