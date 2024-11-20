export const metadata = {
  title: 'Posts',
  description: 'This is the posts page',
};

export default async function Posts() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>this is a posts page</div>;
}
