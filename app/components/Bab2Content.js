export default function Bab2Content() {
  return (
    <div
      id="bab2"
      className="mt-20 p-8 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-md">
      {/* Judul Bab 2 */}
      <h2 className="text-4xl font-extrabold text-blue-900 mb-8 text-center border-b-4 border-blue-600 pb-2">
        BAB 2: Kajian Pustaka
      </h2>

      {/* Pengertian Pembelajaran Online */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">
          2.1 Pengertian Pembelajaran Online
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          Pembelajaran online adalah metode pendidikan yang menggunakan
          teknologi informasi dan komunikasi untuk menyampaikan materi ajar
          kepada siswa. Metode ini memungkinkan siswa untuk belajar secara
          fleksibel, kapan saja dan di mana saja, dengan akses ke berbagai
          sumber daya pendidikan.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed mt-4">
          Menurut beberapa ahli, pembelajaran online tidak hanya mengandalkan
          materi yang disajikan, tetapi juga interaksi antara pengajar dan siswa
          yang dapat meningkatkan pemahaman dan keterlibatan.
        </p>
      </section>

      {/* Landasan Teori */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">
          2.2 Landasan Teori
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          Landasan teori merupakan konsep dan teori yang mendukung penelitian
          ini. Beberapa teori yang digunakan dalam penelitian ini meliputi:
        </p>
        <ul className="list-disc ml-6 mt-4 space-y-3 text-lg text-gray-800">
          <li className="hover:text-blue-700 transition">
            <strong>Teori Konstruktivisme:</strong> Menjelaskan bagaimana siswa
            membangun pengetahuan melalui pengalaman dan interaksi.
          </li>
          <li className="hover:text-blue-700 transition">
            <strong>Teori Pembelajaran Sosial:</strong> Menganalisis bagaimana
            interaksi sosial dapat mempengaruhi proses belajar.
          </li>
          <li className="hover:text-blue-700 transition">
            <strong>Teori Motivasi Pembelajaran:</strong> Membahas faktor-faktor
            yang mempengaruhi motivasi siswa dalam pembelajaran online.
          </li>
        </ul>
      </section>

      {/* Penelitian Terdahulu */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">
          2.3 Penelitian Terdahulu
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          Beberapa penelitian terdahulu yang menjadi referensi dalam
          pengembangan platform ini adalah:
        </p>
        <ul className="list-decimal ml-6 mt-4 space-y-3 text-lg text-gray-800">
          <li className="hover:text-blue-700 transition">
            <strong>Studi Efektivitas Pembelajaran Online</strong> – Penelitian
            ini membahas bagaimana pembelajaran online dapat meningkatkan hasil
            belajar siswa dibandingkan dengan metode tradisional.
          </li>
          <li className="hover:text-blue-700 transition">
            <strong>
              Penerapan Teori Konstruktivisme dalam Pembelajaran Online
            </strong>{" "}
            – Menjelaskan pentingnya interaksi dan kolaborasi dalam meningkatkan
            pemahaman siswa.
          </li>
          <li className="hover:text-blue-700 transition">
            <strong>
              Pengaruh Desain Antarmuka terhadap Keterlibatan Siswa
            </strong>{" "}
            – Menguji bagaimana desain antarmuka yang baik dapat meningkatkan
            keterlibatan siswa dalam pembelajaran online.
          </li>
        </ul>
      </section>

      {/* Kerangka Pemikiran */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">
          2.4 Kerangka Pemikiran
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          Kerangka pemikiran dalam penelitian ini digambarkan dalam diagram
          berikut:
        </p>
        <div className="flex justify-center mt-6">
          <img
            src="/image/Foto.jpg"
            alt="Kerangka Pemikiran"
            className="rounded-lg shadow-md w-3/4"
          />
        </div>
        <p className="text-lg text-gray-800 leading-relaxed mt-4">
          Diagram tersebut menunjukkan alur penelitian dari perumusan masalah
          hingga pengujian aplikasi, serta bagaimana teori-teori yang ada saling
          berhubungan dalam konteks pembelajaran online.
        </p>
      </section>

      {/* Hipotesis Penelitian */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">
          2.5 Hipotesis Penelitian
        </h3>
        <p className="text-lg text-gray-800 leading-relaxed">
          Berdasarkan kajian pustaka yang telah dijelaskan, hipotesis dalam
          penelitian ini adalah:
        </p>
        <ul className="list-disc ml-6 mt-4 space-y-3 text-lg text-gray-800">
          <li className="hover:text-blue-700 transition">
            Aplikasi pembelajaran online yang dirancang dengan baik akan
            meningkatkan keterlibatan dan motivasi siswa dalam proses belajar.
          </li>
          <li className="hover:text-blue-700 transition">
            Implementasi fitur interaktif dalam platform pembelajaran online
            akan meningkatkan pemahaman siswa terhadap materi ajar.
          </li>
          <li className="hover:text-blue-700 transition">
            Penggunaan desain antarmuka yang intuitif akan meningkatkan kepuasan
            pengguna dan efektivitas pembelajaran.
          </li>
        </ul>
      </section>
    </div>
  );
}
