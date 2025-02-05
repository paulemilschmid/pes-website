import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        paul emil schmid
      </h1>
      <p className="mb-4">
        {`Environmental engineer (M.Sc. TUM & ETH) with strong interests for remote sensing, earth observation, ML, and natural hazards. Enthusiastic about geospatial data for real-world challenges. Deep appreciation for mountains, skiing, books, and cooking.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
