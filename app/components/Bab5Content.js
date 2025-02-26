export default function Bab5Content() {
  return (
    <div
      id="bab5"
      className="mt-20 p-8 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-md">
      {/* Judul Bab */}
      <h2 className="text-4xl font-extrabold text-blue-900 mb-8 text-center border-b-4 border-blue-600 pb-2">
        BAB 5: Kesimpulan dan Saran
      </h2>

      {/* Pengantar */}
      <p className="text-lg text-gray-800 leading-relaxed mb-8">
        Bab ini menyajikan kesimpulan dari hasil penelitian yang telah dilakukan
        serta beberapa saran untuk penelitian selanjutnya. Kesimpulan diambil
        berdasarkan hasil analisis data dan temuan penelitian.
      </p>

      {/* 5.1 Kesimpulan */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">
          5.1 Kesimpulan
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          Berdasarkan hasil penelitian, dapat disimpulkan bahwa metode yang
          diterapkan berhasil mencapai tujuan yang diharapkan. Analisis data
          menunjukkan bahwa pendekatan yang digunakan memberikan hasil yang
          valid dan dapat dijadikan acuan dalam penelitian selanjutnya. Selain
          itu, implementasi platform pembelajaran online dengan fitur interaktif
          terbukti meningkatkan keterlibatan dan kepuasan pengguna.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mt-4">
          Penelitian ini juga menunjukkan bahwa faktor desain antarmuka dan
          kemudahan navigasi berkontribusi signifikan terhadap efektivitas
          pembelajaran online. Oleh karena itu, penting untuk terus
          mengembangkan dan memperbaiki platform pembelajaran agar dapat
          memenuhi kebutuhan pengguna.
        </p>
      </section>

      {/* 5.2 Saran */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">5.2 Saran</h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          Berdasarkan hasil penelitian, berikut beberapa saran yang dapat
          diberikan untuk penelitian mendatang:
        </p>
        <ul className="list-disc ml-6 mt-4 space-y-3 text-lg text-gray-800">
          <li className="hover:text-blue-700 transition">
            🔍 Mengembangkan cakupan penelitian agar lebih luas dan mendalam,
            termasuk variasi demografis yang lebih beragam.
          </li>
          <li className="hover:text-blue-700 transition">
            📊 Menggunakan metode analisis tambahan, seperti analisis
            kualitatif, untuk mendapatkan wawasan yang lebih mendalam tentang
            pengalaman pengguna.
          </li>
          <li className="hover:text-blue-700 transition">
            🖥️ Memanfaatkan teknologi terbaru, seperti kecerdasan buatan, untuk
            meningkatkan efisiensi pengolahan data dan personalisasi pengalaman
            belajar.
          </li>
          <li className="hover:text-blue-700 transition">
            📚 Melakukan penelitian longitudinal untuk mengevaluasi dampak
            jangka panjang dari penggunaan platform pembelajaran online terhadap
            hasil belajar siswa.
          </li>
        </ul>
        <p className="text-lg text-gray-800 leading-relaxed mt-4">
          Dengan mengikuti saran-saran ini, diharapkan penelitian di masa depan
          dapat memberikan kontribusi yang lebih besar terhadap pengembangan
          pendidikan online dan meningkatkan kualitas pengalaman belajar bagi
          siswa.
        </p>
      </section>
    </div>
  );
}
