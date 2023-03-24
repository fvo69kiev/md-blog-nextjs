import Layout from '@/components/Layout'

export default function AboutPage() {
  return (
    <Layout title='About DogBlog'>
      <h1 className='text-5xl border-b-4 pb-5 font-bold'>About</h1>

      <div className='bg-white shadow-md rounded-lg px-10 py-6 mt-6'>
        <h3 className='text-2xl mb-5'>DogBlog</h3>
        <p>Ми зібрали цікаві статті за темою грумінгу домашніх тварин.</p>
        <p className='mb-3'>Цей блог побудований за новітніми технологіями Next.js та Markdown</p>
      </div>
    </Layout>
  )
}
