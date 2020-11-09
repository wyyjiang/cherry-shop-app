<template>
  <div class="address">
    <van-nav-bar  left-arrow @click-left="onClickLeft" />
    <van-address-edit
      :area-list="areaList"
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
import { areaList } from "../utils/areaList";
import {list} from "../utils/list"
export default {
  data() {
    return {
      areaList,
      searchResult: [],
      list,
    };
  },
  methods: {
    onSave(e) {
      Toast("save");
      console.log(e);
      
    },
    onDelete() {
      Toast("delete");
    },
    onClickLeft() {
      history.back(-1);
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