import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSDate,
} from "microcms-js-sdk";

//ブログの型定義
export type Blog = {
  id: string;
  title: string;
  description: string;
  eyecatch?: MicroCMSImage;
} & MicroCMSDate;

export type Category = {
  id: string,
  name : string
}

if (!import.meta.env.PUBLIC_MICROCMS_SERVICE_DOMAIN) {
  throw new Error("PUBLIC_MICROCMS_SERVICE_DOMAIN is required");
}

if (!import.meta.env.PUBLIC_MICROCMS_API_KEY) {
  throw new Error("PUBLIC_MICROCMS_API_KEY is required");
}

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: import.meta.env.PUBLIC_MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.PUBLIC_MICROCMS_API_KEY,
});

// カテゴリ覧を取得
export const getCategories = async (queries?: MicroCMSQueries) => {
  const categoryData = await client.getList<Category>({
    endpoint: "categories",
    queries,
  });
  return categoryData;
};

// ブログ一覧を取得
export const getBlog = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
    endpoint: "blogs",
    queries,
  });
  return listData;
};

// ブログの詳細を取得
export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });

  return detailData;
};