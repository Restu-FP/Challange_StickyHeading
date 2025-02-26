export default function Bab1Content() {
  return (
    <div
      id="bab1"
      className="mt-20 p-8 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-md">
      {/* Judul Bab 1 */}
      <h2 className="text-4xl font-extrabold text-blue-900 mb-8 text-center border-b-4 border-blue-600 pb-2">
        BAB 1: Pendahuluan
      </h2>

      {/* Latar Belakang */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">
          1.1 Latar Belakang
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          Dalam era digital saat ini, penggunaan teknologi informasi dalam
          pendidikan semakin meningkat. Salah satu inovasi yang signifikan
          adalah pengembangan platform pembelajaran online yang memungkinkan
          akses materi ajar secara fleksibel dan interaktif.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mt-4">
          Meskipun banyak platform yang tersedia, masih terdapat tantangan dalam
          hal keterlibatan siswa dan efektivitas pembelajaran. Oleh karena itu,
          penelitian ini bertujuan untuk mengeksplorasi bagaimana teknologi
          dapat digunakan untuk meningkatkan pengalaman belajar siswa di
          lingkungan pendidikan.
        </p>
      </section>

      {/* Rumusan Masalah */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">
          1.2 Rumusan Masalah
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          Berdasarkan latar belakang yang telah dijelaskan, maka rumusan masalah
          dalam penelitian ini adalah:
        </p>
        <ul className="list-disc ml-6 mt-4 space-y-3 text-lg text-gray-800">
          <li className="hover:text-blue-700 transition">
            Bagaimana merancang platform pembelajaran online yang interaktif dan
            menarik?
          </li>
          <li className="hover:text-blue-700 transition">
            Apa saja fitur yang dapat meningkatkan keterlibatan siswa dalam
            pembelajaran online?
          </li>
          <li className="hover:text-blue-700 transition">
            Bagaimana mengukur efektivitas platform dalam meningkatkan hasil
            belajar siswa?
          </li>
        </ul>
      </section>

      {/* Tujuan Penelitian */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">
          1.3 Tujuan Penelitian
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          Adapun tujuan dari penelitian ini adalah:
        </p>
        <ul className="list-disc ml-6 mt-4 space-y-3 text-lg text-gray-800">
          <li className="hover:text-blue-700 transition">
            Membangun platform pembelajaran online yang interaktif dan
            user-friendly.
          </li>
          <li className="hover:text-blue-700 transition">
            Meningkatkan keterlibatan siswa melalui fitur-fitur inovatif.
          </li>
          <li className="hover:text-blue-700 transition">
            Mengevaluasi dampak penggunaan platform terhadap hasil belajar
            siswa.
          </li>
        </ul>
      </section>

      {/* Manfaat Penelitian */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">
          1.4 Manfaat Penelitian
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          Penelitian ini diharapkan dapat memberikan manfaat sebagai berikut:
        </p>
        <ul className="list-disc ml-6 mt-4 space-y-3 text-lg text-gray-800">
          <li className="hover:text-blue-700 transition">
            <strong>Bagi Siswa:</strong> Memudahkan akses ke materi pembelajaran
            yang interaktif dan menarik.
          </li>
          <li className="hover:text-blue-700 transition">
            <strong>Bagi Pengajar:</strong> Menyediakan alat untuk meningkatkan
            metode pengajaran dan keterlibatan siswa.
          </li>
          <li className="hover:text-blue-700 transition">
            <strong>Bagi Peneliti:</strong> Menjadi referensi untuk penelitian
            lebih lanjut dalam bidang pendidikan dan teknologi.
          </li>
        </ul>
      </section>

      {/* Sistematika Penulisan */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">
          1.5 Sistematika Penulisan
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          Sistematika penulisan dalam penelitian ini terdiri dari lima bab,
          yaitu:
        </p>
        <ul className="list-decimal ml-6 mt-4 space-y-3 text-lg text-gray-800">
          <li className="hover:text-blue-700 transition">
            <strong>Bab 1:</strong> Pendahuluan, yang menjelaskan latar
            belakang, rumusan masalah, tujuan, manfaat, dan sistematika
            penulisan.
          </li>
          <li className="hover:text-blue-700 transition">
            <strong>Bab 2:</strong> Tinjauan Pustaka, yang berisi teori-teori
            dan penelitian sebelumnya yang relevan dengan topik penelitian.
          </li>
          <li className="hover:text-blue-700 transition">
            <strong>Bab 3:</strong> Metodologi Penelitian, yang menjelaskan
            metode yang digunakan dalam pengembangan platform dan pengumpulan
            data.
          </li>
          <li className="hover:text-blue-700 transition">
            <strong>Bab 4:</strong> Hasil dan Pembahasan, yang berisi analisis
            hasil implementasi platform dan evaluasi efektivitasnya.
          </li>
          <li className="hover:text-blue-700 transition">
            <strong>Bab 5:</strong> Kesimpulan dan Saran, yang menyajikan
            ringkasan hasil penelitian serta rekomendasi untuk pengembangan
            lebih lanjut.
          </li>
        </ul>
      </section>
    </div>
  );
}
