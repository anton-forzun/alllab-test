import { API_KEY } from "./key";
import { ref } from "vue";

const postsApi = ref(null);
const loader = ref(true);

export async function GetPosts() {
  const data = await fetch(
    "https://api.json-generator.com/templates/ZM1r0eic3XEy/data",
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: API_KEY,
      },
    }
  );
  loader;
  const res = await data.json();
  loader.value = false;
  postsApi.value = res;
  console.log(res);
}
export { postsApi, loader };
