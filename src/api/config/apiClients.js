import { v3, v4 } from "@leonardocabeza/the-movie-db";

const { VUE_APP_API_KEY_V3, VUE_APP_API_TOKEN_V4 } = process.env;

const v3Client = v3(VUE_APP_API_KEY_V3);
const v4Client = v4(VUE_APP_API_TOKEN_V4);

export { v3Client, v4Client };
