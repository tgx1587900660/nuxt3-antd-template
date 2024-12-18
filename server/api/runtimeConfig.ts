export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  console.log('config :>> ', config);

  const repo = await $fetch('https://api.github.com/repos/tgx1587900660/problem-solving', {
    headers: {
      Authorization: `token ${config.githubToken}`,
    },
  });

  return repo;
});
