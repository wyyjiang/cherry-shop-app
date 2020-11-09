<template>
  <div class="address">
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
    <van-area
      title="标题"
      :area-list="areaList"
      :columns-placeholder="['请选择', '请选择', '请选择']"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
import {areaList} from "./areaList"
export default {
  data() {
    return {
      areaList,

      searchResult: [],
    };
  },
  methods: {
    onSave() {
      Toast("save");
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