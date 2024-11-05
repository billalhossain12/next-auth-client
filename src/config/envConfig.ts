// const type:string = "PROD";
const type:string = "DEV";

let baseApi: string | undefined = "";

if (type === "PROD") {
  baseApi = process.env.API_PRODUCTTION_URL;
} else {
  baseApi = process.env.API_LOCAL_URL;
}

export const envConfig = {
  baseApi,
};
