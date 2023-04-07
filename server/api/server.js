export default defineEventHandler(async (event) => {
  // handle query parameters
  const { name } = getQuery(event);

  // handle post data
  const { age } = await readBody(event);

  const { currencyKey } = useRuntimeConfig();

  // API call with private key
  const { data } = await $fetch(
    `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`
  );

  return data;
});
