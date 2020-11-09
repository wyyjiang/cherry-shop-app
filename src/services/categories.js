import { get } from "@/utils/request";

export function allCategories() {
  return get("/api/public/v1/goods/search");
}
