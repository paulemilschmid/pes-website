import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'blog',
  description: 'read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">blog</h1>
      <p className="mb-4">
        {"Welcome to the blog. Sharing snapshots and impressions from recent trips or work here, updated whenever inspiration hits."}
      </p>
      <BlogPosts />
    </section>
  )
}
