export default function About() {
  return (
    <>
      <section className="bg-[url('/src/assets/images/bg-about.jpg')] h-screen bg-cover bg-center bg-no-repeat">
        <div className="flex justify-center items-center h-full w-full px-4">
          <div className="text-white text-center w-full md:w-3xl">
            <h1 className="text-4xl sm:text-6xl uppercase font-bold">Siapa Kami Sebenarnya</h1>
            <p className="text-sm md:text-xl mt-4">Mengenal lebih dalam visi, misi, nilai-nilai inti, dan komitmen kami terhadap kualitas dalam setiap aspek pendidikan yang kami tawarkan.</p>
          </div>
        </div>
      </section>
    </>
  );
}
