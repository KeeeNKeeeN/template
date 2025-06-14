import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== DynamoDB テーブル定義：基本型をすべて使用 ================================
このテンプレートは Amplify Gen 2 の schema builder において
デプロイ時に安定して利用できる以下の型を利用しています。
  - string：文字列
  - integer：整数
  - float：浮動小数
  - boolean：真偽値
  - date：ISO8601形式の日付
===============================================================================*/

const schema = a.schema({
  SampleTable: a
    .model({
      stringValue: a.string(),       // 文字列
      intValue: a.integer(),         // 整数
      floatValue: a.float(),         // 浮動小数点数
      booleanValue: a.boolean(),     // ブール値
      dateValue: a.date(),           // 日付（ISO8601）
    })
    .authorization((allow) => [allow.publicApiKey()]), // 認証なしでAPIキーアクセス
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
