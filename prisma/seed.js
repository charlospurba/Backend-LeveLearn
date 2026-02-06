// prisma/seed.js
const { PrismaClient, Role, QuestType, BadgeType } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function main() {
  try {

    // Create Users
    const hashedPassword = await bcrypt.hash('password', 10);
    const userPassword = await bcrypt.hash('123', 10);
    
   const administrator = await prisma.user.create({
      data: {
        username: 'admin',
        password: hashedPassword,
        name: 'Admin',
        role: Role.ADMIN,
        image: '',
      },
    });


    const administrator2 = await prisma.user.create({
      data: {
        username: 'archico',
        password: hashedPassword,
        name: 'Archico',
        role: Role.ADMIN,
        image: '',
      },
    });

    const instructor = await prisma.user.create({
      data: {
        username: 'rafael',
        password: hashedPassword,
        name: 'Rafael',
        role: Role.INSTRUCTOR,
        instructorId: '11S21028',
        instructorCourses: 0,
        image: '',
      },
    });     
    
    const student = await prisma.user.create({
      data: {
        username: 'benhard',
        password: hashedPassword,
        name: 'Benhard',
        role: Role.STUDENT,
        studentId: '11S21003',
        points: 0,
        totalCourses: 0,
        badges: 0,
        image: '',
      },
    });
    
    const emely = await prisma.user.create({
      data: {
        username: 'emely',
        password: hashedPassword,
        name: 'Emely',
        role: Role.STUDENT,
        studentId: '11S21052',
        points: 0,
        totalCourses: 0,
        badges: 0,
        image: '',
      },
    });
    
    const boy = await prisma.user.create({
      data: {
        username: 'boy',
        password: hashedPassword,
        name: 'Boy',
        role: Role.STUDENT,
        studentId: '11S21025',
        points: 0,
        totalCourses: 0,
        badges: 0,
        image: '',
      },
    });
    
    const enrico = await prisma.user.create({
      data: {
        username: 'enrico',
        password: hashedPassword,
        name: 'Enrico',
        role: Role.STUDENT,
        studentId: '11S21034',
        points: 0,
        totalCourses: 0,
        badges: 0,
        image: '',
      },
    });
    
    const gerry = await prisma.user.create({
      data: {
        username: 'gerry',
        password: hashedPassword,
        name: 'Gerry',
        role: Role.STUDENT,
        studentId: '11S21055',
        points: 0,
        totalCourses: 0,
        badges: 0,
        image: '',
      },
    });
    
    const tabitha = await prisma.user.create({
      data: {
        username: 'tabitha',
        password: hashedPassword,
        name: 'Tabitha',
        role: Role.STUDENT,
        studentId: '11S21042',
        points: 0,
        totalCourses: 0,
        badges: 0,
        image: '',
      },
    });
    
    const tesalonika = await prisma.user.create({
      data: {
        username: 'tesalonika',
        password: hashedPassword,
        name: 'Tesalonika',
        role: Role.STUDENT,
        studentId: '11S21005',
        points: 0,
        totalCourses: 0,
        badges: 0,
        image: '',
      },
    });
    
    const dedi = await prisma.user.create({
      data: {
        username: 'dedi',
        password: hashedPassword,
        name: 'Dedi',
        role: Role.STUDENT,
        studentId: '11S21014',
        points: 0,
        totalCourses: 0,
        badges: 0,
        image: '',
      },
    });
    
    const gerald = await prisma.user.create({
      data: {
        username: 'gerald',
        password: hashedPassword,
        name: 'Gerald',
        role: Role.STUDENT,
        studentId: '11S21015',
        points: 0,
        totalCourses: 0,
        badges: 0,
        image: '',
      },
    });
    
    const user1 = await prisma.user.create({
      data: {
        username: 'User 1',
        password: userPassword,
        name: 'User 1',
        role: Role.STUDENT,
        studentId: '11S23000',
        points: 0,
        totalCourses: 0,
        badges: 0,
        image: '',
      },
    });
    
    const user2 = await prisma.user.create({
      data: {
        username: 'User 2',
        password: userPassword,
        name: 'User 2',
        role: Role.STUDENT,
        studentId: '11S23000',
        points: 0,
        totalCourses: 0,
        badges: 0,
        image: '',
      },
    });
    
    const user3 = await prisma.user.create({
      data: {
        username: 'User 3',
        password: userPassword,
        name: 'User 3',
        role: Role.STUDENT,
        studentId: '11S23000',
        points: 0,
        totalCourses: 0,
        badges: 0,
        image: '',
      },
    });
    
    const user4 = await prisma.user.create({
      data: {
        username: 'User 4',
        password: userPassword,
        name: 'User 4',
        role: Role.STUDENT,
        studentId: '11S23000',
        points: 0,
        totalCourses: 0,
        badges: 0,
        image: '',
      },
    });
    
    const user5 = await prisma.user.create({
      data: {
        username: 'User 5',
        password: userPassword,
        name: 'User 5',
        role: Role.STUDENT,
        studentId: '11S23000',
        points: 0,
        totalCourses: 0,
        badges: 0,
        image: '',
      },
    });

    const user6 = await prisma.user.create({
      data: {
        username: 'User 6',
        password: userPassword,
        name: 'User 6',
        role: Role.STUDENT,
        studentId: '11S23000',
        points: 0,
        totalCourses: 0,
        badges: 0,
        image: '',
      },
    });
    
    const user7 = await prisma.user.create({
      data: {
        username: 'User 7',
        password: userPassword,
        name: 'User 7',
        role: Role.STUDENT,
        studentId: '11S23000',
        points: 0,
        totalCourses: 0,
        badges: 0,
        image: '',
      },
    });
    
    const user8 = await prisma.user.create({
      data: {
        username: 'User 8',
        password: userPassword,
        name: 'User 8',
        role: Role.STUDENT,
        studentId: '11S23000',
        points: 0,
        totalCourses: 0,
        badges: 0,
        image: '',
      },
    });
    
    const user9 = await prisma.user.create({
      data: {
        username: 'User 9',
        password: userPassword,
        name: 'User 9',
        role: Role.STUDENT,
        studentId: '11S23000',
        points: 0,
        totalCourses: 0,
        badges: 0,
        image: '',
      },
    });
    
    const user10 = await prisma.user.create({
      data: {
        username: 'User 10',
        password: userPassword,
        name: 'User 10',
        role: Role.STUDENT,
        studentId: '11S23000',
        points: 0,
        totalCourses: 0,
        badges: 0,
        image: '',
      },
    });

    const rds = await prisma.user.create({
      data: {
        username: 'ranty',
        password: hashedPassword,
        name: 'Ranty',
        role: Role.INSTRUCTOR,
        instructorId: 'RDS',
        instructorCourses: 0,
        image: '',
      },
    }); 

    // Create Courses
    const course1 = await prisma.course.create({
      data: {
        code: 'IMK',
        name: 'Interaksi Manusia Komputer',
        description: 'Human Computer Interaction',
      },
    });

    const course2 = await prisma.course.create({
      data: {
        code: 'UI/UX',
        name: 'UI/UX',
        description: 'Learn the fundamentals of UI/UX Design',
      },
    });

    const course3 = await prisma.course.create({
      data: {
        code: 'RPL',
        name: 'Rekayasa Perangkat Lunak',
        description: 'Learn basic of software engineering',
      },
    });

    // Create Chapters for Course IMK
    const chapter1 = await prisma.chapter.create({
      data: {
        name: 'Introduction to Human-computer Interaction',
        description: 'Konsep dasar IMK, ruang lingkup, sejarah perkembangan, dan peran human centered',
        level: 1,
        courseId: course1.id,
      },
    });

    const chapter2 = await prisma.chapter.create({
      data: {
        name: 'Human Factors and Ergonomic Principles in Design Interaction',
        description: 'Human factors: persepsi, kognisi, motorik, serta prinsip ergonomi dalam desain interaksi',
        level: 2,
        courseId: course1.id,
      },
    });

    const chapter3 = await prisma.chapter.create({
      data: {
        name: 'Usability',
        description: 'Prinsip usability (efektivitas, efisiensi, kepuasan) dan 10 Usability Heuristics',
        level: 3,
        courseId: course1.id,
        isCheckpoint: 1
      },
    });

    const chapter4 = await prisma.chapter.create({
      data: {
        name: 'Heuristic Evaluation: Nielsen’s 10 Principles',
        description: 'Heuristic Evaluation: Nielsen’s 10 Principles',
        level: 4,
        courseId: course1.id,
      },
    });

    const chapter5 = await prisma.chapter.create({
      data: {
        name: 'Visual Elements, Information Hierarchy, Consistency, and Interface Readability',
        description: 'Elemen visual, hierarki informasi, konsistensi, dan keterbacaan antarmuka',
        level: 5,
        courseId: course1.id,
      },
    });

    const chapter6 = await prisma.chapter.create({
      data: {
        name: 'User Centered Design',
        description: 'Tahapan user centered design, identifikasi kebutuhan pengguna, pembuatan persona, dan user journey map',
        level: 6,
        courseId: course1.id,
        isCheckpoint: 2
      },
    });

    const chapter7 = await prisma.chapter.create({
      data: {
        name: 'Implementation of User Centered Design',
        description: 'Materi tentang penerapan prinsip User Centered Design',
        level: 7,
        courseId: course1.id,
      },
    });

    const chapter8 = await prisma.chapter.create({
      data: {
        name: 'UTS',
        description: 'Ujian Tengah Semester',
        level: 8,
        courseId: course1.id,
        isCheckpoint: 3
      },
    });

    const chapter9 = await prisma.chapter.create({
      data: {
        name: 'USABILITY EVALUATION TECHNIQUES',
        description: 'Materi tentang USABILITY EVALUATION TECHNIQUES',
        level: 9,
        courseId: course1.id,
      },
    });

    const chapter10 = await prisma.chapter.create({
      data: {
        name: 'HEDONIC MOTIVATION SYSTEM ADOPTION MODEL (HMSAM) DALAM PEMBELAJARAN BERBASIS GAMIFIKASI',
        description: 'Materi tentang Hedonic Motivation System Adoption Model (HMSAM) dalam pembelajaran berbasis gamifikasi',
        level: 10,
        courseId: course1.id,
      },
    });

    const chapter11 = await prisma.chapter.create({
      data: {
        name: 'USER PSYCHOLOGY PRINCIPLES IN INTUITIVE DESIGN',
        description: 'Materi tentang prinsip-prinsip psikologi pengguna dalam desain intuitif',
        level: 11,
        courseId: course1.id,
      },
    });

    const chapter12 = await prisma.chapter.create({
      data: {
        name: 'EMOTIONAL DESIGN AND AFFORDANCE IN INTUITIVE INTERFACE DESIGN',
        description: 'Materi tentang emotional design dan affordance dalam desain antarmuka intuitif',
        level: 12,
        courseId: course1.id,
      },
    });

    const chapter13 = await prisma.chapter.create({
      data: {
        name: 'VOICE-BASED INTERACTION (VOICE UI), GESTURE, AND TOUCH',
        description: 'Materi tentang voice-based interaction (voice UI), gesture, dan touch',
        level: 13,
        courseId: course1.id,
      },
    });

    const chapter14 = await prisma.chapter.create({
      data: {
        name: 'CURRENT TRENDS IN INTERACTION DESIGN INCLUDING THE IMPACT OF AI AND ETHICAL DESIGN',
        description: 'Materi tentang tren terkini dalam desain interaksi termasuk dampak AI dan desain etis',
        level: 14,
        courseId: course1.id,
      },
    });

    const chapter15 = await prisma.chapter.create({
      data: {
        name: 'Design Thinking Method',
        description: 'Materi tentang Design Thinking Method',
        level: 15,
        courseId: course1.id,
      },
    });

    const chapter16 = await prisma.chapter.create({
      data: {
        name: 'UAS (Final Exam)',
        description: 'Ujian Akhir Semester Human Computer Interaction',
        level: 16,
        courseId: course1.id,
      },
    });

    // Content for Chapter 1
    const material1 = await prisma.material.create({
      data: {
        chapterId: chapter1.id,
        name: 'Pengantar',
        content: `
          <p>HCI adalah bidang studi yang mulai 
          berkembang pada tahun 1980-an, tetapi 
          konsep interaksi manusia dan mesin 
          sudah ada sebelumnya dengan berbagai 
          istilah seperti Man-Machine Interaction 
          (MMI) pada 1970-an, Computer and Human 
          Interaction (CHI), dan Human-Machine 
          Interaction (HMI). HCI mempelajari 
          cara manusia dan komputer bekerja 
          bersama untuk menyelesaikan tugas 
          tertentu. Fokus utama HCI adalah 
          perancangan, evaluasi, dan implementasi 
          sistem interaktif yang digunakan manusia. 
          HCI juga berhubungan dengan usability 
          (daya guna), yang berarti sistem harus 
          mudah digunakan, dipelajari, dan memberikan 
          keamanan bagi pengguna.</p>
          <p>HCI terdiri dari tiga elemen utama, 
          yaitu <strong>manusia, komputer, dan interaksi</strong></p>
          <ul>
            <li><strong>Manusia</strong> sebagai pengguna memiliki 
            kebutuhan dan keterbatasan yang harus 
            dipertimbangkan dalam desain sistem. </li>
            <li><strong>Komputer </strong> mencakup 
            perangkat keras dan lunak yang digunakan 
            untuk berinteraksi dengan manusia.  </li>
            <li><strong>Interaksi </strong>terjadi 
            melalui antarmuka yang harus dirancang 
            agar nyaman dan efisien. </li>
          </ul>
          <p>
            Fokus utama HCI adalah perancangan dan 
            evaluasi user interface (UI), yaitu bagian 
            dari sistem komputer yang memungkinkan manusia 
            berinteraksi dengan komputer. 
          </p>
          <p><img src="asset:lib/assets/alurHCI.png"></p>
          <p>
            UI harus dirancang dengan mempertimbangkan <strong>human factors</strong>, seperti kognisi dan ergonomi, agar pengguna dapat berinteraksi dengan nyaman dan efektif.
          </p>
          <p>
            Dalam desain sistem interaktif, sering 
            kali desainer atau programmer tidak memahami 
            dengan tepat kebutuhan dan lingkungan kerja 
            pengguna. Masalah lain yang sering terjadi 
            adalah sistem komputer yang mengharuskan 
            pengguna mengingat terlalu banyak informasi, 
            kurang toleran terhadap kesalahan pengguna, 
            serta tidak mempertimbangkan variasi 
            pengguna yang berbeda-beda. Kesalahan 
            utama dalam desain HCI adalah mengasumsikan 
            bahwa <strong>semua pengguna itu sama</strong> 
            dan bahwa <strong>pengguna memiliki cara berpikir 
            yang sama dengan desainer</strong>. Untuk menciptakan 
            sistem yang baik, penting untuk mempertanyakan 
            desain yang buruk dan memastikan bahwa 
            sistem memungkinkan pengguna menyelesaikan 
            tugas dengan aman, efektif, efisien, dan 
            menyenangkan.
          </p>
          <p>
            Tujuan utama HCI adalah meningkatkan <strong>kualitas hidup pengguna</strong> dengan membuat sistem interaktif yang baik dan mudah digunakan. Sebuah sistem yang baik memiliki beberapa karakteristik <strong>user-friendly</strong>, seperti tampilan yang menarik, kemudahan penggunaan, cepat dipelajari, memberikan pengalaman positif, dan direkomendasikan oleh pengguna lain. Tujuan dalam rekayasa sistem meliputi beberapa aspek penting:
          </p>
          <ol>
            <li><strong>Fungsionalitas yang sesuai</strong>, yaitu memastikan sistem memiliki fitur yang benar-benar dibutuhkan pengguna.</li>
            <li><strong>Keandalan, ketersediaan, keamanan, dan integritas data</strong>, sehingga sistem dapat digunakan kapan saja tanpa risiko kehilangan atau pencurian data.</li>
            <li><strong>Standardisasi, integrasi, konsistensi, dan portabilitas</strong>, yang memastikan antarmuka mudah dipahami dan data dapat digunakan di berbagai perangkat.</li>
            <li><strong>Penjadwalan dan anggaran</strong>, agar proyek selesai tepat waktu dan sesuai dengan biaya yang telah direncanakan.</li>
          </ol>
          <p>
            HCI adalah bidang multidisipliner yang dipengaruhi oleh berbagai bidang ilmu, termasuk:
          </p>
          <ul>
            <li><strong>Psikologi dan ilmu kognitif </strong> untuk memahami persepsi dan pemrosesan informasi oleh manusia. </li>
            <li><strong>Ergonomi </strong>untuk mempertimbangkan aspek fisik pengguna.</li>
            <li><strong>Sosiologi </strong>untuk memahami interaksi sosial dalam penggunaan teknologi.</li>
            <li><strong>Ilmu komputer dan teknik </strong>untuk mengembangkan sistem teknologi.</li>
            <li><strong>Bisnis dan pemasaran </strong>untuk memahami kebutuhan pasar.</li>
            <li><strong>Desain grafis </strong>untuk menciptakan antarmuka yang menarik dan fungsional.</li>
          </ul>
          <p>
            HCI telah berkembang sejak 1960-an, dimulai dengan komputer mainframe dan interaksi berbasis teks. Pada 1970-an, muncul konsep Graphical User Interface (GUI) yang lebih visual dan intuitif. Pada 1990-an, perhatian lebih difokuskan pada usability dan pendekatan desain yang berpusat pada pengguna (user-centered design). Hingga kini, HCI terus berkembang dengan kemajuan teknologi seperti mobile computing, AI, dan interaksi berbasis sensor. Human-centered design adalah pendekatan dalam HCI yang menempatkan manusia sebagai fokus utama dalam pengembangan sistem. Prinsip utama dalam pendekatan ini meliputi memahami kebutuhan pengguna, melibatkan pengguna dalam proses desain, dan mengevaluasi sistem berdasarkan pengalaman pengguna.
          </p>
        `,
      },
    });

    const material2 = await prisma.material.create({
      data: {
        chapterId: chapter2.id,
        name: 'Human Factors and Ergonomic Principles in Design Interaction',
        content: `
          <p><strong><i>Human Factor</i></strong> dalam desain interaksi mencakup pemahaman tentang manusia sebagai pengguna sistem interaktif, meliputi <strong>Fisiologi, Kognisi, Psikologi, Sosial, dan Budaya </strong>. Adapun Tujuan utama dari <strong><i>Human Factor</i></strong> yaitu:
    <ul> 
        <li>Usability (Mudah Dipahami)</li>
        <li>Efektivitas dalam Penggunaan</li>
        <li>Memenuhi Kebutuhan Pengguna</li>
    
    </ul>
    <p>
        Penerapan <i>Human Factor</i> dalam desain interaksi sangat penting karena dapat <strong>meningkatkan efisiensi</strong> pengguna dalam menyelesaikan tugas. Sistem yang dirancang dengan mempertimbangkan Human Factors juga dapat <strong>mengurangi kesalahan</strong>, karena pengguna akan lebih mudah memahami cara kerja sistem, sehingga mengurangi kemungkinan melakukan kesalahan operasional. Selain itu, sistem yang ramah pengguna dapat <strong>meningkatkan kepuasan pengguna</strong>, yang pada akhirnya dapat meningkatkan loyalitas terhadap produk atau layanan. Aspek lainnya adalah <strong>aksesibilitas</strong>, di mana sistem harus dapat digunakan oleh semua orang, termasuk mereka yang memiliki keterbatasan fisik atau kognitif.
    </p>
    
    <h2>Konsep Dasar Human Factors dalam Desain Interaksi</h2>
    <h3>A. Kognisi Manusia</h3>
    <p>Faktor kognitif dalam desain interaksi mencakup <strong>perhatian</strong>, <strong>memori</strong>, dan <strong>pengambilan keputusan</strong>. Desain antarmuka yang baik harus <strong>membantu pengguna memusatkan perhatian pada elemen-elemen penting</strong>, misalnya dengan menggunakan warna kontras untuk tombol utama. Selain itu, sistem sebaiknya <strong>tidak terlalu membebani memori jangka pendek pengguna</strong>. Misalnya, ikon dan label yang mudah dikenali dapat membantu pengguna memahami fungsi suatu elemen tanpa harus mengingat terlalu banyak informasi. Dalam aspek pengambilan keputusan, <strong>sistem harus menyajikan opsi yang jelas dan tidak membingungkan</strong>, sehingga pengguna dapat dengan cepat memilih tindakan yang sesuai.</p>
    
    <h3>B. Fisiologi Pengguna</h3>
    <p>Faktor fisiologi berkaitan dengan <strong>ergonomi</strong> dan <strong>kemampuan motorik</strong>. Pengguna dalam berinteraksi dengan sistem. Ergonomi mencakup aspek seperti ukuran tombol, posisi layar, dan desain perangkat keras agar sesuai dengan karakteristik pengguna. Elemen interaktif seperti tombol dan menu navigasi harus cukup besar dan mudah diakses untuk mengakomodasi pengguna dengan berbagai kemampuan motorik. Jika desain tidak mempertimbangkan faktor ini, pengguna dapat mengalami kesulitan dalam mengoperasikan sistem, yang pada akhirnya mengurangi efektivitas interaksi.</p>
    
    <h3>C. Aspek Sosial dan Budaya</h3>
    <p>Interaksi manusia dengan teknologi juga dipengaruhi oleh faktor sosial dan budaya. Misalnya, <strong>konvensi budaya</strong> dapat mempengaruhi pemahaman terhadap warna dan simbol. Warna merah di beberapa budaya dapat berarti bahaya, sementara di budaya lain dapat melambangkan keberuntungan. Oleh karena itu, desainer harus mempertimbangkan konteks budaya dalam memilih elemen desain. Selain itu, sistem interaktif harus mendukung <strong>kolaborasi antar pengguna</strong>, misalnya dengan menyediakan fitur berbagi dokumen atau komunikasi dalam aplikasi.</p>
    
    <h2>Komponen <i>Human Factors</i></h2>
    <h3>A. Persepsi</h3>
    <p>Persepsi adalah bagaimana pengguna menangkap informasi dari lingkungan melalui indra. Prinsip utama dalam desain antarmuka yang baik meliputi <strong>visibilitas, kontras,</strong> dan <strong>hierarki visual</strong>. Elemen-elemen penting harus ditampilkan dengan jelas agar pengguna dapat dengan cepat mengidentifikasi informasi yang mereka butuhkan.</p>
    
    <h3>B. Kognisi</h3>
    <p>Kognisi mencakup cara pengguna memahami dan memproses informasi. <strong>Konsistensi desain</strong> sangat penting untuk memudahkan pengguna mengenali pola antarmuka. Selain itu, <strong>beban kognitif</strong> harus diminimalkan dengan menyajikan informasi secara bertahap, sehingga pengguna tidak merasa kewalahan.</p>
    
    <h3>C. Motorik</h3>
    <p>Interaksi pengguna dengan sistem juga dipengaruhi oleh faktor motorik, seperti <strong>gerakan tangan</strong> dan <strong>gerakan mata</strong>. Desain sistem harus memastikan bahwa pengguna dapat berinteraksi dengan mudah tanpa harus melakukan gerakan yang tidak perlu. Elemen penting, seperti tombol aksi, sebaiknya ditempatkan di lokasi yang mudah dijangkau, terutama dalam desain aplikasi mobile.</p>
    
    <h2>Prinsip Desain Human-centered</h2>
    <p>Prinsip desain yang berpusat pada pengguna (Human-Centered Design) menekankan pentingnya <strong>konsistensi, pencegahan kesalahan, fleksibilitas, dan feedback yang cepat</strong>. Konsistensi dalam desain membantu pengguna merasa familiar dengan antarmuka, sementara pencegahan kesalahan dapat dilakukan dengan menampilkan dialog konfirmasi sebelum tindakan yang bersifat kritis. Selain itu, sistem harus fleksibel agar dapat disesuaikan dengan preferensi pengguna, misalnya dengan menyediakan mode terang dan mode gelap.</p>
    
    <h2>Model Mental dan Desain Interaksi</h2>
    <p>Model mental adalah cara pengguna memahami cara kerja sebuah sistem. Jika desain sistem sesuai dengan ekspektasi pengguna, maka interaksi akan lebih mudah dan intuitif. <strong>Affordances</strong> dalam desain antarmuka membantu memberikan petunjuk visual, misalnya tombol yang terlihat bisa ditekan atau ikon yang menunjukkan fungsinya dengan jelas.</p>
    
    <h2>Penerapan Human Factors dalam Proyek UX dan Kaitan dengan Usability</h2>
    <p>Dalam proyek UX, proses desain harus melibatkan riset pengguna, pembuatan prototipe, dan pengujian usability untuk memastikan bahwa sistem dapat digunakan dengan optimal. Human Factors berperan penting dalam usability, di mana faktor persepsi, kognisi, dan motorik harus diperhitungkan dalam mendesain sistem yang mudah dipahami, efisien, dan nyaman digunakan.</p>
    
    <h2>Panduan Aksesibilitas</h2>
    <p>Panduan aksesibilitas bertujuan untuk memastikan bahwa sistem dapat digunakan oleh semua orang, termasuk pengguna dengan keterbatasan fisik atau kognitif. Web Content Accessibility Guidelines (WCAG) dari W3C mengidentifikasi empat prinsip utama aksesibilitas:</p>
    <ul>
    <li><strong>Perceivable</strong> – Informasi harus dapat dirasakan oleh semua pengguna, misalnya dengan menyediakan teks alternatif untuk gambar atau memungkinkan penyesuaian ukuran font.</li>
    <li><strong>Operable</strong> – Navigasi harus dapat dilakukan dengan berbagai metode, seperti menggunakan keyboard atau perangkat bantu bagi penyandang disabilitas.</li>
    <li><strong>Understandable</strong> – Konten harus mudah dipahami, dengan penggunaan bahasa yang sederhana dan struktur yang jelas.</li>
    <li><strong>Robust</strong> – Sistem harus kompatibel dengan berbagai perangkat dan teknologi bantu seperti pembaca layar (screen reader).</li>
    <li><strong>Aksesibilitas</strong> sangat penting dalam desain sistem agar tidak ada kelompok pengguna yang terpinggirkan akibat keterbatasan teknologi yang mereka gunakan.</li>
    </ul>
    
    <h2>Prinsip Ergonomi</h2>
    <p>Ergonomi adalah ilmu yang memastikan bahwa desain sistem sesuai dengan <strong>kebutuhan fisik dan psikologis pengguna</strong>. Dalam konteks desain interaksi, ergonomi bertujuan untuk <strong>mengurangi kelelahan, meningkatkan kenyamanan, dan mengoptimalkan produktivitas</strong> pengguna dalam menggunakan sistem. Dengan menerapkan prinsip ergonomi, sistem dapat memberikan pengalaman yang lebih baik dan mengurangi potensi gangguan kesehatan akibat penggunaan jangka panjang.</p>
    
    <h3>A. Fokus Ergonomi dalam Desain Interaksi – Kenyamanan Fisik</h2>
    <p>Kenyamanan fisik dalam desain interaksi berkaitan dengan <strong>pengaturan tampilan, posisi elemen UI, dan postur pengguna saat berinteraksi dengan sistem</strong>. Salah satu faktor penting adalah menghindari desain yang menyebabkan kelelahan, seperti ukuran teks yang terlalu kecil atau tombol yang sulit dijangkau. Contoh penerapan ergonomi dalam desain adalah <strong>keyboard ergonomis</strong>, yang dirancang untuk mencegah cedera pada pergelangan tangan akibat penggunaan komputer dalam waktu lama.</p>
    
    <h2>Fokus Ergonomi dalam Desain Interaksi – Kenyamanan Psikologis</h2>
    <p>Selain aspek fisik, desain sistem juga harus mempertimbangkan <strong>kenyamanan psikologis pengguna</strong>. Sistem yang buruk dapat menyebabkan frustrasi dan stres, yang akhirnya mengurangi produktivitas dan kepuasan pengguna. Untuk menghindari hal ini, desain harus memberikan <strong>feedback visual yang jelas</strong>, misalnya tombol yang berubah warna saat ditekan, atau animasi yang menunjukkan bahwa suatu proses sedang berjalan. Sistem yang responsif dan memberikan pengalaman yang menyenangkan akan meningkatkan kepuasan pengguna secara keseluruhan.</p>
    
    <h2>Posisi Duduk yang Ergonomis</h2>
    <p>Posisi duduk yang benar sangat penting dalam penggunaan komputer untuk mencegah kelelahan dan cedera pada tubuh. Prinsip ergonomi kerja menyarankan agar:</p>
    <ul>
        <li>Layar komputer sejajar dengan mata, untuk mengurangi ketegangan pada leher.</li>
        <li>Ketinggian kursi dan meja disesuaikan agar pengguna dapat duduk dengan nyaman tanpa menekuk punggung secara berlebihan.</li>
        <li>Pengguna melakukan istirahat sejenak secara berkala untuk mengurangi kelelahan otot dan mata</li>
    </ul>
    <p>Dengan menerapkan posisi duduk yang ergonomis, pengguna dapat bekerja lebih nyaman dan mengurangi risiko masalah kesehatan jangka panjang.</p>
    
    <h2>Aspek Dasar Ergonomi</h2>
        
        <h3>A. Lingkungan Kerja</h3>
        <p>Faktor lingkungan kerja sangat mempengaruhi produktivitas dan kenyamanan pengguna. Beberapa aspek yang perlu diperhatikan dalam ergonomi lingkungan kerja meliputi:</p>
        <ul>
            <li><strong>Lokasi dan pencahayaan stasiun kerja</strong> → Ruangan harus memiliki pencahayaan yang cukup untuk mengurangi ketegangan mata.</li>
            <li><strong>Kondisi suhu dan kebisingan</strong> → Lingkungan kerja yang terlalu panas, dingin, atau bising dapat mengganggu konsentrasi dan kenyamanan pengguna.</li>
            <li><strong>Durasi kerja</strong> → Pengguna perlu diberikan jeda waktu untuk menghindari kelelahan akibat penggunaan perangkat dalam jangka waktu lama.</li>
        </ul>
        
        <h3>B. Tipe Pekerjaan dan Beban Psikologi</h3>
        <p>Ergonomi juga mempertimbangkan tipe pekerjaan dan beban psikologis yang dialami oleh pengguna. Beberapa pertimbangan penting meliputi:</p>
        <ul>
            <li><strong>Apakah pekerjaan membosankan atau menantang?</strong> → Sistem harus memberikan keseimbangan antara kemudahan penggunaan dan tantangan yang cukup untuk menjaga keterlibatan pengguna.</li>
            <li><strong>Apakah pekerjaan memberikan kepuasan?</strong> → Desain sistem yang baik dapat meningkatkan kepuasan kerja dengan menyediakan fitur yang mempermudah tugas pengguna.</li>
        </ul>
        
        <h3>C. Isu Kesehatan dalam Penggunaan Teknologi</h3>
        <p>Teknologi yang tidak dirancang dengan mempertimbangkan Human Factors dapat menyebabkan berbagai masalah kesehatan, termasuk:</p>
        <ul>
            <li><strong>Beban visual</strong> → Iritasi mata, penglihatan kabur, dan sakit kepala akibat menatap layar terlalu lama.</li>
            <li><strong>Beban otot</strong> → Ketegangan otot dan nyeri pada leher, bahu, atau pergelangan tangan akibat posisi yang tidak ergonomis.</li>
            <li><strong>Beban postur tubuh</strong> → Postur duduk yang salah dapat menyebabkan sakit punggung dan masalah tulang belakang.</li>
            <li><strong>Beban tekanan emosi</strong> → Sistem yang sulit digunakan atau membingungkan dapat menyebabkan stres dan kecemasan pada pengguna.</li>
        </ul>
        <p>Untuk mengatasi masalah ini, sistem harus dirancang dengan mempertimbangkan kenyamanan fisik dan psikologis pengguna, serta mendorong kebiasaan kerja yang sehat.</p>
        
        <h3>D. Keluhan, Penyebab, dan Saran dalam Ergonomi</h3>
        <p>Setiap desain sistem harus mempertimbangkan keluhan pengguna dan faktor penyebabnya, agar dapat memberikan solusi yang efektif. Beberapa keluhan umum meliputi:</p>
        <ul>
            <li><strong>Kesulitan dalam navigasi sistem</strong> → Penyebabnya bisa karena desain UI yang tidak konsisten atau kurangnya petunjuk visual.</li>
            <li><strong>Kelelahan mata akibat layar</strong> → Bisa disebabkan oleh pencahayaan yang kurang optimal atau ukuran teks yang terlalu kecil.</li>
            <li><strong>Ketidaknyamanan fisik</strong> → Dapat diatasi dengan menerapkan prinsip ergonomi dalam desain kursi, meja, dan posisi layar.</li>
        </ul>
        
        <h2>Pedoman Ergonomi Web (WCAG, W3C)</h2>
        <p>Pedoman ergonomi untuk desain web meliputi:</p>
        <ul>
            <li><strong>Warna dan kontras yang cukup</strong> → Untuk membantu pengguna dengan keterbatasan penglihatan.</li>
            <li><strong>Kemudahan navigasi</strong> → Hindari gerakan atau klik yang tidak perlu.</li>
            <li><strong>Kompatibilitas dengan teknologi bantu</strong> → Sistem harus dapat diakses oleh pengguna dengan berbagai kebutuhan khusus.</li>
        </ul>
        <p>Dengan mengikuti pedoman WCAG dari W3C, sistem dapat lebih inklusif dan dapat digunakan oleh lebih banyak orang.</p>
        
        <h2>Studi Kasus Ergonomi</h2>
        <p>Ergonomi dalam desain sistem telah diterapkan dalam berbagai produk, seperti:</p>
        <ul>
            <li><strong>Aplikasi transportasi online</strong> → Antarmuka yang sederhana dan menampilkan jalur yang jelas.</li>
            <li><strong>Desain ATM</strong> → Posisi tombol dan layar dirancang agar mudah dijangkau oleh pengguna dengan tinggi badan yang berbeda.</li>
        </ul>
        <p>Studi kasus ini menunjukkan bahwa penerapan Human Factors dalam desain dapat meningkatkan efektivitas dan kenyamanan pengguna dalam berinteraksi dengan sistem.</p>
        `,
      },
    });

    const materialWeek3 = await prisma.material.create({
      data: {
        chapterId: chapter3.id,
        name: 'Usability',
        content: `
          <h3 data-start="52" data-end="82" id="isPasted"><strong data-start="56" data-end="80"><span style="font-size: 24px;">Pengertian Usability</span></strong></h3>
          <p data-start="83" data-end="552">Usability adalah kemampuan suatu sistem, produk, atau layanan untuk memungkinkan pengguna menyelesaikan tugas dengan mudah, efisien, dan menyenangkan. Konsep ini sangat penting dalam desain produk dan sistem interaktif karena berhubungan langsung dengan pengalaman pengguna. Dalam konteks interaksi manusia dan komputer, usability mencakup bagaimana pengguna berinteraksi dengan sistem dan memastikan bahwa pengalaman tersebut memenuhi tujuan pengguna secara optimal.</p>
          <p data-start="554" data-end="798">Menurut Nielsen (1993), usability adalah ukuran seberapa baik suatu produk dapat digunakan oleh pengguna untuk mencapai tujuan tertentu dengan efisiensi, efektivitas, dan kepuasan. Dimensi usability menurut Shneiderman et al. (2016) mencakup:</p>
          <ul style="list-style-type: disc;">
          <li><strong data-start="801" data-end="816">Efektivitas</strong>, yaitu sejauh mana pengguna dapat mencapai tujuannya dengan sistem.</li>
          <li><strong data-start="889" data-end="902">Efisiensi</strong>, yaitu penggunaan sumber daya minimal untuk mencapai tujuan.</li>
          <li><strong data-start="968" data-end="980">Kepuasan</strong>, yaitu seberapa menyenangkan pengalaman pengguna dalam menggunakan sistem.</li>
          </ul>
          <p data-start="1059" data-end="1333">David Benyon menambahkan bahwa usability juga mengacu pada kualitas interaksi pengguna dengan sistem, termasuk waktu yang dibutuhkan untuk menyelesaikan tugas, jumlah kesalahan yang dibuat, dan waktu yang diperlukan agar pengguna menjadi kompeten dalam menggunakan sistem.</p>
          <p data-start="1335" data-end="1553">Sementara itu, Nielsen (2003) menyatakan bahwa usability adalah atribut kualitas yang menilai kemudahan penggunaan antarmuka pengguna serta mencakup metode untuk meningkatkan kemudahan penggunaan dalam proses desain.<br><br></p>
          <h3 data-start="1555" data-end="1604" id="isPasted"><strong data-start="1559" data-end="1602"><span style="font-size: 24px;">Lima Komponen Usability Menurut Nielsen</span></strong></h3>
          <p data-start="1605" data-end="1679">Nielsen mendefinisikan usability ke dalam lima komponen kualitas, yaitu:</p>
          <ol data-start="1681" data-end="2879" style="list-style-type: lower-alpha;">
          <li data-start="1681" data-end="1920"><p data-start="1684" data-end="1702"><strong data-start="1684" data-end="1700">Learnability</strong></p>
          <ul data-start="1706" data-end="1920"><li data-start="1706" data-end="1807">Kemudahan bagi pengguna baru dalam memahami dan mulai menggunakan sistem tanpa kesulitan berarti.</li><li data-start="1811" data-end="1920">Contoh: Google memiliki antarmuka sederhana sehingga pengguna dapat langsung menggunakan fitur pencarian.</li></ul></li><li data-start="1922" data-end="2125"><p data-start="1925" data-end="1941"><strong data-start="1925" data-end="1939">Efficiency</strong></p><ul data-start="1945" data-end="2125"><li data-start="1945" data-end="2036">Seberapa cepat pengguna yang sudah terbiasa dengan sistem dapat menyelesaikan tugasnya.</li><li data-start="2040" data-end="2125">Contoh: Microsoft Word menyediakan shortcut keyboard untuk mempercepat pekerjaan.</li></ul></li><li data-start="2127" data-end="2380"><p data-start="2130" data-end="2148"><strong data-start="2130" data-end="2146">Memorability</strong></p><ul data-start="2152" data-end="2380"><li data-start="2152" data-end="2261">Kemudahan pengguna dalam mengingat cara menggunakan sistem setelah tidak menggunakannya dalam waktu lama.</li><li data-start="2265" data-end="2380">Contoh: ATM memiliki tampilan standar sehingga pengguna tetap bisa menggunakannya meskipun jarang mengaksesnya.</li></ul></li><li data-start="2382" data-end="2647"><p data-start="2385" data-end="2397"><strong data-start="2385" data-end="2395">Errors</strong></p><ul data-start="2401" data-end="2647"><li data-start="2401" data-end="2497">Jumlah dan tingkat kesalahan yang dibuat oleh pengguna serta kemudahan dalam memperbaikinya.</li><li data-start="2501" data-end="2647">Contoh: Gmail memberikan peringatan saat pengguna mencoba mengirim email tanpa lampiran padahal menyebutkan kata "attachment" dalam isi email.</li></ul></li><li data-start="2649" data-end="2879"><p data-start="2652" data-end="2670"><strong data-start="2652" data-end="2668">Satisfaction</strong></p><ul data-start="2674" data-end="2879"><li data-start="2674" data-end="2751">Tingkat kenyamanan dan kepuasan pengguna saat berinteraksi dengan sistem.</li><li data-start="2755" data-end="2879">Contoh: Apple iOS dikenal dengan desainnya yang bersih, animasi yang halus, serta pengalaman pengguna yang menyenangkan.</li><li data-start="2755" data-end="2879"><br></li></ul></li></ol>
          <h3 data-start="2881" data-end="2938" id="isPasted"><strong data-start="2885" data-end="2936"><span style="font-size: 24px;">Usability dalam Konteks Atribut Perangkat Lunak</span></strong></h3>
          <p data-start="2939" data-end="3101">Meskipun usability merupakan aspek penting dalam pengembangan perangkat lunak, ia tidak berdiri sendiri dan harus dipertimbangkan bersama atribut lain, seperti:</p>
          <ol style="list-style-type: lower-alpha;">
          <li><strong data-start="3105" data-end="3122">Functionality</strong>→ Kemampuan sistem dalam menyediakan fitur sesuai kebutuhan pengguna. Contoh: Google Docs memiliki fitur kolaborasi real-time yang mudah digunakan.</li>
          <li><strong data-start="3281" data-end="3296">Performance</strong>→ Kecepatan dan responsivitas sistem dalam menangani tugas. Contoh: Mesin pencari Google memberikan hasil dalam hitungan milidetik.</li>
          <li><strong data-start="3439" data-end="3447">Cost</strong> → Jumlah sumber daya yang diperlukan untuk mengembangkan dan memelihara sistem.</li>
          <li><strong data-start="3532" data-end="3544">Security</strong>→ Perlindungan data pengguna dari ancaman seperti peretasan. Contoh: Sistem perbankan online menggunakan autentikasi dua faktor untuk keamanan tambahan.</li>
          <li><strong data-start="3708" data-end="3727">Maintainability</strong> → Kemudahan perbaikan dan pembaruan sistem.</li>
          <li><strong data-start="3776" data-end="3784">Size</strong> → Ukuran perangkat lunak dalam hal penyimpanan dan konsumsi sumber daya.</li>
          <li><strong data-start="3862" data-end="3877">Reliability</strong>→ Kemampuan sistem untuk berfungsi dengan baik tanpa sering mengalami crash. Contoh: Google Drive jarang mengalami downtime.</li>
          <li><strong data-start="4013" data-end="4026">Standards</strong> → Kepatuhan sistem terhadap standar industri, seperti WCAG untuk aksesibilitas.</li>
          <li><strong data-start="4111" data-end="4128">Marketability</strong> → Seberapa menarik suatu produk bagi pengguna dan daya saingnya di pasar.</li>
          </ol>
          <p>
          <br>
          </p>
          <h3 data-start="4206" data-end="4247" id="isPasted"><strong data-start="4210" data-end="4245"><span style="font-size: 24px;">Perbedaan Usability dan Utility</span></strong></h3>
          <p data-start="4248" data-end="4350">Selain usability, ada konsep lain yang juga penting dalam desain perangkat lunak, yaitu <strong data-start="4336" data-end="4347">utility</strong>.</p>
          <ul data-start="4352" data-end="4626" style="list-style-type: disc;">
          <li data-start="4352" data-end="4431"><strong data-start="4354" data-end="4367">Usability</strong> → Berkaitan dengan kemudahan dan kenyamanan penggunaan fitur.</li><li data-start="4432" data-end="4511"><strong data-start="4434" data-end="4445">Utility</strong> → Mengacu pada penyediaan fitur-fitur yang dibutuhkan pengguna.</li><li data-start="4512" data-end="4626"><strong data-start="4514" data-end="4528">Usefulness</strong> → Kombinasi usability dan utility, mencerminkan seberapa bermanfaat suatu produk bagi pengguna.</li></ul>
          <p>
          <br>
          </p>
          <h3 data-start="4628" data-end="4690" id="isPasted"><strong data-start="4632" data-end="4688"><span style="font-size: 24px;">Manfaat Usability dalam Pengembangan Perangkat Lunak</span></strong></h3>
          <p data-start="4691" data-end="4754">Fokus pada usability memberikan berbagai keuntungan, seperti:</p>
          <ol data-start="4756" data-end="5258" style="list-style-type: lower-alpha;">
          <li data-start="4756" data-end="4856">
          <p data-start="4759" data-end="4802"><strong data-start="4759" data-end="4800">Meningkatkan Pengalaman Pengguna (UX)</strong><br>Pengguna lebih puas dan loyal terhadap produk.</p>
          </li>
          <li data-start="4858" data-end="4974">
          <p data-start="4861" data-end="4902"><strong data-start="4861" data-end="4900">Meningkatkan Produktivitas Pengguna</strong><br>Pengguna dapat menyelesaikan tugas dengan lebih cepat dan mudah.
          </p>
          </li>
          <li data-start="4976" data-end="5111">
          <p data-start="4979" data-end="5019"><strong data-start="4979" data-end="5017">Mengurangi Biaya Dukungan Pengguna</strong><br>Sistem yang mudah digunakan mengurangi kebutuhan akan pelatihan dan dukungan teknis.</p>
          </li>
          <li data-start="5113" data-end="5258"><p data-start="5116" data-end="5152"><strong data-start="5116" data-end="5150">Meningkatkan Daya Saing Produk</strong><br>Produk lebih mudah diterima oleh pengguna dibandingkan produk dengan antarmuka yang membingungkan.</p>
          </li>
          </ol>
          <p>
          <br>
          </p>
          <p data-start="5116" data-end="5152"><strong><span style="font-size: 24px;">Prinsip dalam Meningkatkan Usability</span></strong></p>
          <p data-start="5307" data-end="5405" id="isPasted">Untuk meningkatkan usability, beberapa prinsip yang perlu diterapkan dalam desain sistem adalah:
          </p>
          <ol data-start="5407" data-end="5934" style="list-style-type: lower-alpha;">
          <li data-start="5407" data-end="5477"><strong data-start="5409" data-end="5424">Konsistensi</strong> → Elemen desain harus seragam agar mudah dipahami.</li>
          <li data-start="5478" data-end="5579"><strong data-start="5480" data-end="5505">Penyederhanaan Proses</strong> → Mengurangi jumlah langkah yang tidak perlu dalam menyelesaikan tugas.</li>
          <li data-start="5580" data-end="5690"><strong data-start="5582" data-end="5608">Umpan Balik yang Jelas</strong> → Memberikan informasi yang mudah dipahami setelah pengguna melakukan tindakan.</li>
          <li data-start="5691" data-end="5819"><strong data-start="5693" data-end="5710">Aksesibilitas</strong> → Memastikan produk dapat digunakan oleh semua pengguna, termasuk mereka yang memiliki keterbatasan fisik.</li>
          <li data-start="5820" data-end="5934"><strong data-start="5822" data-end="5845">Pengujian Usability</strong> → Melakukan evaluasi secara teratur untuk mengidentifikasi masalah dan memperbaikinya.</li>
          </ol>
          <p>
          <br>
          </p>
          <p><strong><span style="font-size: 24px;">Kesimpulan</span></strong></p>
          <p><span style="font-size: 14px;">Usability harus menjadi fokus dalam berbagai tahap pengembangan produk, terutama sejak tahap perancangan. Pengujian usability harus dilakukan sejak awal pengembangan untuk menghindari kesalahan desain yang dapat berdampak pada pengalaman pengguna. Oleh karena itu, usability bukan hanya sekadar fitur tambahan, melainkan merupakan elemen kunci dalam menciptakan produk yang sukses dan mudah digunakan oleh penggunanya.</span></p>
        `,
      },
    });

    const material4 = await prisma.material.create({
      data: {
        chapterId: chapter4.id,
        name: 'Heuristic Evaluation: Nielsen’s 10 Principles',
        content: `
          <h2>Definisi Usability Testing</h2>
    <p>Usability testing adalah proses evaluasi produk atau sistem dengan menguji langsung pada pengguna untuk mengukur kemudahan penggunaan, efisiensi, dan kepuasan pengguna dalam berinteraksi dengan antarmuka. Menurut Preece et al. (2019), usability testing membantu dalam memahami bagaimana pengguna berinteraksi dengan sistem dan mengidentifikasi kendala yang mereka hadapi selama proses penggunaan.</p>
    
    <h2>Tujuan Usability Testing</h2>
    <p>Menurut Nielsen (1993), usability testing memiliki beberapa tujuan utama:</p>
    <ul>
        <li>Mengidentifikasi masalah usability dalam antarmuka pengguna.</li>
        <li>Menilai performa pengguna dalam menyelesaikan tugas tertentu.</li>
        <li>Mengumpulkan umpan balik dari pengguna yang dapat digunakan untuk perbaikan desain.</li>
    </ul>
    
    <h2>Usability Guidelines</h2>
    <p>Usability guidelines adalah sekumpulan prinsip yang digunakan untuk memastikan bahwa desain sistem interaktif mendukung efektivitas, efisiensi, dan kepuasan pengguna. Beberapa pedoman yang sering digunakan dalam desain interaksi meliputi:</p>
    <ul>
        <li><strong>Golden Rules of Interface Design</strong> (Shneiderman et al., 2016), yang menekankan prinsip-prinsip dasar dalam desain UI.</li>
        <li><strong>Norman's 10 Design Principles</strong> (Norman, 2013), yang berfokus pada bagaimana pengguna memahami dan berinteraksi dengan antarmuka.</li>
        <li><strong>Web Content Accessibility Guidelines (WCAG)</strong> dari W3C, yang memberikan panduan tentang aksesibilitas bagi pengguna dengan kebutuhan khusus.</li>
        <li><strong>Tognazzini’s Principles of Interaction Design</strong>, yang menyoroti prinsip dalam menciptakan pengalaman pengguna yang lebih baik.</li>
    </ul>
    
    <h2>Definisi Heuristic Evaluation</h2>
    <p>Heuristic Evaluation adalah metode evaluasi usability yang dilakukan oleh sekelompok evaluator yang menilai sistem berdasarkan serangkaian prinsip atau heuristik yang telah ditetapkan. Metode ini diperkenalkan oleh Jakob Nielsen (1993) sebagai pendekatan yang cepat dan efisien dalam mengidentifikasi masalah usability tanpa perlu melakukan pengujian langsung pada pengguna. Evaluasi heuristik memiliki beberapa manfaat utama, antara lain:</p>
    <ul>
        <li>Mengidentifikasi masalah usability dengan cepat tanpa perlu melakukan pengujian pengguna secara langsung.</li>
        <li>Mengurangi biaya pengembangan dengan mengatasi masalah usability sejak awal dalam siklus desain.</li>
        <li>Membantu dalam merancang pengalaman pengguna (UX) yang lebih baik, terutama pada tahap prototipe sebelum produk dirilis.</li>
    </ul>

<p>Evaluasi heuristik memainkan peran penting dalam siklus pengembangan produk karena memungkinkan tim desain untuk mendeteksi masalah usability lebih awal. Hal ini membantu dalam memastikan bahwa perbaikan dilakukan sebelum produk diuji oleh pengguna akhir. Selain itu, evaluasi heuristik menjadi bagian dari siklus iteratif dalam desain UX dengan memberikan umpan balik yang berguna untuk meningkatkan pengalaman pengguna secara keseluruhan.</p>
    
    <h2>Sejarah Singkat Pengembangan 10 Prinsip Nielsen</h2>
    <p>Prinsip heuristik yang dikembangkan oleh Jakob Nielsen pada tahun 1990-an didasarkan pada penelitian usability dan pengalaman dalam menilai antarmuka pengguna. Awalnya, Nielsen memperkenalkan sembilan prinsip, yang kemudian diperbarui menjadi sepuluh prinsip yang lebih komprehensif (Nielsen, 1993). Prinsip ini telah menjadi standar dalam evaluasi desain UX hingga saat ini.</p>

<h2>Prinsip-Prinsip Heuristic Evaluation</h2>
    <p>Pada sesi ini, kita akan membahas lebih dalam mengenai prinsip-prinsip dalam evaluasi heuristik yang dikembangkan oleh Jakob Nielsen. Prinsip-prinsip ini bertujuan untuk membantu evaluator dalam mengidentifikasi masalah usability dalam suatu sistem.</p>
    
    <h3>A. Visibility of System Status</h3>
    <p>Sistem harus selalu memberi tahu pengguna tentang apa yang sedang terjadi melalui umpan balik yang tepat waktu.</p>
    <ul>
        <li> Memberikan notifikasi real-time tentang status sistem.</li>
        <li> Menampilkan indikator loading atau progress bar untuk menghindari kebingungan pengguna.</li>
        <li> Memberikan konfirmasi saat suatu aksi telah dilakukan.</li>
    </ul>
    
    <h3>B. Match Between System and the Real World</h3>
    <p>Antarmuka harus menggunakan bahasa, istilah, dan konsep yang sudah familiar bagi pengguna.</p>
    <ul>
        <li> Menggunakan ikon dan simbol yang sesuai dengan dunia nyata.</li>
        <li> Bahasa yang digunakan harus mudah dipahami dan sesuai dengan terminologi pengguna.</li>
        <li> Tata letak harus mencerminkan bagaimana pengguna berinteraksi di kehidupan sehari-hari.</li>
    </ul>
    
    <h3>C. User Control and Freedom</h3>
    <p>Pengguna sering kali melakukan kesalahan, sehingga sistem harus memberikan opsi untuk membatalkan atau memperbaiki tindakan yang dilakukan.</p>
    <ul>
        <li> Menyediakan tombol "Undo" untuk membatalkan kesalahan.</li>
        <li> Memungkinkan navigasi kembali dengan tombol "Back".</li>
        <li> Memberikan opsi untuk keluar dari suatu proses tanpa kehilangan data penting.</li>
    </ul>
    
    <h3>D. Consistency and Standards</h3>
    <p>Desain sistem harus konsisten di seluruh antarmuka agar pengguna tidak perlu belajar ulang bagaimana cara menggunakannya.</p>
    <ul>
        <li> Menggunakan ikon yang sama untuk fungsi yang sama di seluruh sistem.</li>
        <li> Menyesuaikan standar desain yang umum digunakan dalam industri.</li>
        <li> Menyediakan navigasi yang seragam di semua halaman.</li>
    </ul>
    
    <h3>E. Error Prevention</h3>
    <p>Sistem harus dirancang untuk mencegah kesalahan sebelum terjadi.</p>
    <ul>
        <li> Menampilkan pesan konfirmasi sebelum menghapus data penting.</li>
        <li> Memvalidasi input pengguna sebelum dikirimkan.</li>
        <li> Menyediakan rekomendasi atau saran untuk menghindari kesalahan.</li>
    </ul>
    
    <h3>F. Recognition Rather than Recall</h3>
    <p>Pengguna sebaiknya tidak dipaksa untuk mengingat informasi yang tidak perlu.</p>
    <ul>
        <li> Menampilkan daftar pilihan daripada meminta pengguna mengetik ulang informasi.</li>
        <li> Menyediakan ikon atau label yang membantu mengenali fungsi.</li>
        <li> Menampilkan riwayat aktivitas pengguna untuk mempermudah navigasi.</li>
    </ul>
    
    <h3>G. Flexibility and Efficiency of Use</h3>
    <p>Desain sistem harus fleksibel untuk berbagai tingkat keahlian pengguna.</p>
    <ul>
        <li> Menyediakan pintasan keyboard untuk pengguna tingkat lanjut.</li>
        <li> Memberikan opsi kustomisasi tampilan atau tata letak.</li>
        <li> Memungkinkan mode navigasi cepat bagi pengguna berpengalaman.</li>
    </ul>
    
    <h3>H. Aesthetic and Minimalist Design</h3>
    <p>Antarmuka harus dibuat sesederhana mungkin, hanya menampilkan elemen yang benar-benar diperlukan.</p>
    <ul>
        <li> Mengurangi elemen yang tidak perlu untuk menghindari kebingungan.</li>
        <li> Menjaga keseimbangan antara estetika dan fungsionalitas.</li>
        <li> Menggunakan warna dan tata letak yang tidak mengganggu pengguna.</li>
    </ul>
    
    <h3>I. Help Users Recognize, Diagnose, and Recover from Errors</h3>
    <p>Pesan kesalahan harus ditampilkan dengan jelas, menggunakan bahasa yang dapat dipahami oleh pengguna.</p>
    <ul>
        <li> Menyediakan deskripsi kesalahan yang informatif.</li>
        <li> Memberikan solusi atau langkah untuk memperbaiki kesalahan.</li>
        <li> Menampilkan pesan error dengan warna atau ikon yang mencolok.</li>
    </ul>
    
    <h3>J. Help and Documentation</h3>
    <p>Sistem harus menyediakan dokumentasi atau panduan yang mudah diakses untuk membantu pengguna menyelesaikan masalah yang mereka hadapi.</p>
    <ul>
        <li> Menyediakan FAQ yang berisi jawaban atas pertanyaan umum.</li>
        <li> Memiliki tutorial interaktif untuk membantu pengguna baru.</li>
        <li> Memudahkan akses ke dokumentasi melalui menu bantuan.</li>
    </ul>
    <p>Seiring perkembangan teknologi, evaluasi heuristik akan terus berkembang dan beradaptasi dengan tren baru, seperti kecerdasan buatan (AI) dan realitas virtual (VR). Evaluasi heuristik akan tetap menjadi alat penting dalam menciptakan pengalaman pengguna yang lebih baik di berbagai platform. Evaluasi heuristik memainkan peran penting dalam siklus pengembangan produk karena memungkinkan tim desain untuk mendeteksi masalah usability lebih awal. Dengan melakukan evaluasi ini, pengembang dapat memastikan bahwa sistem yang dikembangkan lebih mudah digunakan dan sesuai dengan kebutuhan pengguna sebelum produk dirilis ke publik.</p>
    <h2>Cara Melakukan Heuristic Evaluation</h2>
    <p>Evaluasi heuristik dilakukan dengan beberapa langkah sistematis:</p>
    <ol>
        <li><strong>Menentukan evaluator</strong>: Biasanya terdiri dari 3-5 orang ahli UX.</li>
        <li><strong>Meninjau sistem atau produk</strong>: Evaluator mengamati antarmuka dan interaksi pengguna.</li>
        <li><strong>Menggunakan daftar heuristik</strong>: Evaluator menilai sistem berdasarkan prinsip heuristik.</li>
        <li><strong>Mencatat permasalahan usability</strong>: Setiap evaluator mendokumentasikan masalah yang ditemukan.</li>
        <li><strong>Mengategorikan masalah berdasarkan tingkat keparahan</strong>: Menentukan prioritas perbaikan.</li>
        <li><strong>Memberikan rekomendasi perbaikan</strong>: Solusi yang dapat diterapkan untuk meningkatkan pengalaman pengguna.</li>
    </ol>
<h2>Severity Rating dalam Heuristic Evaluation</h2>
    <p>Severity rating digunakan untuk memberi nilai pada masalah usability dengan skala 0-4:</p>
    <ul>
        <li><strong>0 - Bukan masalah usability</strong>: Tidak memerlukan perbaikan.</li>
        <li><strong>1 - Masalah kosmetik</strong>: Tidak perlu diperbaiki segera.</li>
        <li><strong>2 - Masalah minor</strong>: Perlu diperbaiki tetapi tidak kritis.</li>
        <li><strong>3 - Masalah mayor</strong>: Berdampak signifikan pada usability.</li>
        <li><strong>4 - Masalah kritis</strong>: Harus segera diperbaiki sebelum produk dirilis.</li>
    </ul>
    
    <h2>Petunjuk Heuristic Evaluation yang Baik</h2>
    <p>Untuk memastikan evaluasi heuristik berjalan efektif, beberapa panduan yang harus diikuti meliputi:</p>
    <ul>
        <li>Gunakan evaluator yang memiliki pengalaman dalam UX.</li>
        <li>Gabungkan evaluasi heuristik dengan metode usability lainnya.</li>
        <li>Gunakan skala keparahan masalah untuk memprioritaskan perbaikan.</li>
        <li>Buat laporan hasil evaluasi yang jelas dan mudah dimengerti.</li>
    </ul>
<h2>10 Prinsip Nielsen</h2>
        <ol>
            <li><strong>Visibility of System Status:</strong> Sistem harus selalu memberikan umpan balik kepada pengguna tentang status terkini.</li>
            <li><strong>Match Between System and Real World:</strong> Sistem harus menggunakan bahasa dan konsep yang familiar bagi pengguna.</li>
            <li><strong>User Control and Freedom:</strong> Pengguna harus dapat membatalkan atau mengulang tindakan dengan mudah.</li>
            <li><strong>Consistency and Standards:</strong> Desain harus konsisten dan mengikuti standar yang dikenal luas.</li>
            <li><strong>Error Prevention:</strong> Sistem harus dirancang untuk mencegah kesalahan sebelum terjadi.</li>
            <li><strong>Recognition Rather than Recall:</strong> Kurangi beban kognitif dengan menampilkan opsi yang mudah dikenali.</li>
            <li><strong>Flexibility and Efficiency of Use:</strong> Sistem harus dapat digunakan oleh pemula maupun pengguna ahli dengan efisien.</li>
            <li><strong>Aesthetic and Minimalist Design:</strong> Antarmuka harus sederhana dan tidak membebani pengguna dengan informasi yang tidak perlu.</li>
            <li><strong>Help Users Recognize, Diagnose, and Recover from Errors:</strong> Sistem harus menyediakan pesan kesalahan yang jelas dan solutif.</li>
            <li><strong>Help and Documentation:</strong> Dokumentasi harus mudah diakses dan dipahami oleh pengguna.</li>
        </ol>
    
        `,
      },
    });

    const materialWeek5 = await prisma.material.create({
      data: {
        chapterId: chapter5.id,
        name: 'VISUAL ELEMENTS, INFORMATION HIERARCHY, CONSISTENCY, AND INTERFACE READABILITY',
        content: `
          <p id="isPasted"><strong><span style="font-size: 24px;">Pendahuluan</span></strong></p>
          <p>Desain yang baik mempertimbangkan bagaimana pengguna memproses informasi, bernavigasi dalam antarmuka, dan memahami konten dengan cepat dan efisien. Prinsip-prinsip ini berlaku tidak hanya untuk aplikasi desktop atau web, tetapi juga untuk desain interaksi berbasis perangkat seluler, IoT (Internet of Things), dan teknologi lainnya. Secara khusus, file ini akan membahas tentang:</p>
          <ul style="list-style-type: disc;">
          <li>Elemen visual dalam antarmuka pengguna.</li>
          <li>Hierarki informasi dalam antarmuka.</li>
          <li>Konsistensi dalam desain antarmuka.</li>
          <li>Keterbacaan antarmuka.</li>
          </ul><p><br></p>
          <p><strong><span style="font-size: 24px;">Elemen Visual dalam Antarmuka Pengguna</span></strong></p>
          <p>Elemen visual memegang peranan penting dalam menarik perhatian pengguna, menyampaikan informasi, dan menciptakan pengalaman yang menyenangkan. File ini membahas beberapa elemen visual utama, yaitu:</p>
          <p><br></p><ul style="list-style-type: disc;"><li style="font-weight: bold;"><strong>Warna (Color)</strong></li>
          </ul>
          <p id="isPasted">Warna bukan hanya sekadar elemen estetika, tetapi juga alat komunikasi yang kuat dalam UI. Penggunaan warna yang tepat dapat:</p>
          <p style="margin-left: 20px;"><strong>Membedakan informasi</strong>: Warna yang berbeda dapat digunakan untuk memisahkan berbagai kategori informasi, seperti tombol utama vs. tombol sekunder.</p>
          <p style="margin-left: 20px;"><strong>Memberikan isyarat visual</strong>: Warna dapat digunakan untuk menunjukkan status elemen, misalnya warna hijau untuk "berhasil" dan merah untuk "gagal".</p>
          <p style="margin-left: 20px;"><strong>Meningkatkan daya tarik</strong>: Kombinasi warna yang harmonis dapat membuat antarmuka lebih menarik dan menyenangkan untuk digunakan.</p>
          <p>File ini juga menyinggung tentang:</p><p id="isPasted" style="margin-left: 20px;"><strong>Teori Warna</strong>: Prinsip-prinsip panduan untuk membuat kombinasi warna yang harmonis. Tujuannya adalah menjelaskan hubungan warna untuk menciptakan harmoni.</p>
          <p style="margin-left: 20px;"><strong>Color Wheel</strong>: Terdiri dari Primary Color (Merah, Biru, Kuning), Secondary Color (Hijau, Orange, Ungu), Tertiary Color (campuran warna primer dan sekunder).</p>
          <p style="margin-left: 20px;"><strong>Harmonisasi Warna</strong>: Memberikan daya tarik estetika dan user experience (UX) yang baik, serta memikirkan skema warna di awal proses desain.</p>
          <p style="margin-left: 20px;"><strong>Skema Kombinasi Warna</strong>: Monochromatic, Analogous, Complementary, Split-Complementary (Compound Harmony), Triadic, Tetradic, Square.</p>
          <p style="margin-left: 20px;"><strong>Pedoman Desain Warna</strong>: Menghindari warna saturated, menggunakan sedikit warna, dan konsisten dengan ekspektasi.</p>
          <p style="margin-left: 20px;"><strong>Tools Harmonisasi Warna</strong>: Adobe Color, Canva, Color Mind, Coolors, HTML Color Codes.</p>
          <p><br></p><ul style="list-style-type: disc;"><li style="font-weight: bold;"><strong>Tipografi (Typography)</strong></li></ul>
          <p>Tipografi melibatkan pemilihan dan pengaturan jenis huruf (font) untuk menciptakan teks yang mudah dibaca dan menarik secara visual. Aspek penting dalam tipografi meliputi:</p>
          <p id="isPasted" style="margin-left: 20px;"><strong>Jenis huruf (Font)</strong>: Pemilihan font yang sesuai dengan karakter dan tujuan aplikasi.</p>
          <p style="margin-left: 20px;"><strong>Ukuran</strong>: Ukuran font yang proporsional agar mudah dibaca pada berbagai ukuran layar.</p>
          <p style="margin-left: 20px;"><strong>Gaya huruf (Font Style)</strong>: Penggunaan gaya huruf seperti bold, italic, atau underline untuk menekankan informasi penting.</p>
          <p style="margin-left: 20px;"><strong>Legibility and Readability</strong>: Legibility menciptakan readability: jika kita mudah membedakan masing-masing karakter, maka keseluruhan teks akan lebih mudah dibaca.</p>
          <p style="margin-left: 20px;"><strong>Display Type and Text Type</strong>: Display Type berfungsi sebagai penarik perhatian, sedangkan Text type berfungsi untuk dibaca dengan seksama.</p>
          <p>File ini juga membahas tentang istilah-istilah dalam tipografi, kombinasi huruf dan jaraknya, huruf kapital dan huruf kecil, jarak antar huruf, jarak antar kata, dan jarak antar baris.</p>
          <p><br></p><ul style="list-style-type: disc;"><li style="font-weight: bold;"><strong>Ikonografi (Iconography)</strong></li></ul>
          <p>Ikon adalah simbol visual yang digunakan untuk mewakili objek, tindakan, atau konsep. Ikon yang baik harus:</p>
          <p id="isPasted" style="margin-left: 20px;"><strong>Intuitif</strong>: Mudah dikenali dan dipahami oleh pengguna tanpa perlu penjelasan.</p>
          <p style="margin-left: 20px;"><strong>Konsisten</strong>: Menggunakan gaya visual yang seragam di seluruh antarmuka.</p>
          <p style="margin-left: 20px;"><strong>Relevan</strong>: Sesuai dengan konteks penggunaan dan makna yang ingin disampaikan.</p>
          <p><br></p><ul style="list-style-type: disc;"><li style="font-weight: bold;"><strong>Tata Letak (Layout)</strong></li></ul>
          <p>Tata letak adalah pengaturan elemen-elemen visual dalam antarmuka. Tata letak yang baik harus:</p>
          <p id="isPasted" style="margin-left: 20px;"><strong>Teratur</strong>: Menggunakan sistem grid untuk menciptakan struktur visual yang konsisten.</p>
          <p style="margin-left: 20px;"><strong>Seimbang</strong>: Menghindari penumpukan elemen yang berlebihan di satu area.</p>
          <p style="margin-left: 20px;"><strong>Hierarkis</strong>: Menempatkan elemen yang lebih penting pada posisi yang lebih menonjol.</p>
          <p style="margin-left: 20px;"><strong>Alignment</strong>: memastikan bahwa elemen dalam desain UI/UX memiliki keteraturan yang konsisten.</p>
          <p><br></p><ul style="list-style-type: disc;"><li style="font-weight: bold;"><strong>Hierarki Informasi dalam Antarmuka</strong></li></ul>
          <p>Hierarki informasi adalah pengaturan informasi dalam antarmuka berdasarkan tingkat kepentingan dan hubungan antar elemen. Hierarki informasi yang baik membantu pengguna untuk:</p>
          <p id="isPasted" style="margin-left: 20px;"><strong>Memahami struktur informasi</strong>: Dengan mudah mengidentifikasi informasi utama dan informasi pendukung.</p><p style="margin-left: 20px;"><strong>Menavigasi antarmuka</strong>: Menemukan informasi yang dicari dengan cepat dan efisien.</p>
          <p style="margin-left: 20px;"><strong>Memproses informasi</strong>: Memahami informasi secara bertahap dan terstruktur.</p><p><br></p><p>File ini membahas tentang prinsip-prinsip Grouping and Hierarchy, yaitu:</p>
          <p id="isPasted" style="margin-left: 20px;"><strong>Proximity (Kedekatan)</strong></p><p style="margin-left: 20px;"><strong>Similarity (Kesamaan)</strong></p><p style="margin-left: 20px;"><strong>Continuity (Keterhubungan)</strong></p><p style="margin-left: 20px;"><strong>Common Region (Wilayah Umum)</strong></p>
          <p style="margin-left: 20px;"><strong>Hierarchy (Hierarki Visual)</strong></p><p><br></p><ul style="list-style-type: disc;"><li style="font-weight: bold;"><strong>Whitespace (Ruang Kosong)</strong></li></ul>
          <p>Whitespace adalah area kosong dalam desain yang tidak berisi elemen visual, namun memiliki peran penting dalam meningkatkan keterbacaan, estetika, dan fokus pengguna. Whitespace dapat meningkatkan keterbacaan, membantu navigasi, dan memperkuat hierarki visual. Terdapat dua jenis whitespace, yaitu Whitespace Makro (ruang kosong antara bagian utama halaman) dan Whitespace Mikro (Ruang di antara elemen kecil seperti paragraf, ikon, atau tombol).</p>
          <p><br></p><ul style="list-style-type: disc;"><li style="font-weight: bold;"><strong>Alignment and Grids</strong></li></ul><p>Alignment memastikan bahwa elemen dalam desain UI/UX memiliki keteraturan yang konsisten, sedangkan grid adalah sistem tata letak berbasis garis bantu untuk menyusun elemen secara rapi. Alignment berkontribusi pada simplicity sebuah desain. File ini juga membahas tentang prinsip alignment dan elemen grid.</p><p><strong><br></strong></p><ul style="list-style-type: disc;"><li><strong>Konsistensi dan Keterbacaan Antarmuka</strong><br>Kedua aspek ini hanya disebutkan sebagai judul, tetapi tidak dijelaskan lebih lanjut. Secara umum, konsistensi dalam desain antarmuka berarti menggunakan pola dan elemen yang sama di seluruh aplikasi atau situs web. Keterbacaan antarmuka mengacu pada seberapa mudah pengguna dapat membaca dan memahami teks dalam antarmuka.</li></ul>
        `,
      },
    });

    const materialWeek6 = await prisma.material.create({
      data: {
        chapterId: chapter6.id,
        name: 'User-Centered Design (UCD)',
        content: `
          <p id="isPasted"><strong><span style="font-size: 24px;">Definisi User-Centered Design (UCD)</span></strong></p>
          <p>User-Centered Design (UCD) adalah pendekatan desain yang berfokus pada pengguna, di mana kebutuhan, keterbatasan, dan preferensi pengguna menjadi faktor utama dalam proses perancangan sistem atau produk digital (Preece et al., 2019; Benyon, 2019). UCD menempatkan pengguna sebagai fokus utama dalam setiap tahap pengembangan produk atau sistem. Tujuannya adalah untuk memastikan bahwa produk yang dikembangkan benar-benar sesuai dengan kebutuhan, keinginan, dan karakteristik pengguna.</p>
          <p><br></p><p><strong><span style="font-size: 24px;">Konsep Dasar UCD</span></strong></p><p id="isPasted">Konsep dasar UCD mencakup:</p>
          <ul style="list-style-type: disc;"><li>Mengutamakan kebutuhan dan pengalaman pengguna dalam desain.</li>
          <li>Melibatkan pengguna dalam setiap tahap pengembangan.</li><li>Menekankan iterasi dan evaluasi desain untuk memastikan usability yang tinggi.</li>
          </ul><p><br></p><p><strong><span style="font-size: 24px;">Pendekatan Desain yang Berfokus pada Pengguna</span></strong></p>
          <p><span style="font-size: 14px;">Pendekatan UCD melibatkan pengguna secara aktif selama proses desain. Desainer tidak hanya mengandalkan asumsi, tetapi juga mengumpulkan masukan langsung dari pengguna melalui berbagai metode seperti wawancara, observasi, dan uji coba prototipe.</span></p>
          <p><br></p><p><span style="font-size: 24px;"><strong>Karakteristik Utama UCD</strong></span></p>
          <ul style="list-style-type: disc;"><li id="isPasted"><strong>Partisipasi Pengguna</strong>: Pengguna berperan aktif dalam setiap tahap pengembangan.</li>
          <li><strong>Iterasi Desain</strong>: Desain dikembangkan secara bertahap berdasarkan umpan balik dari pengguna.</li>
          <li><strong>Evaluasi Berkelanjutan</strong>: Desain diuji dan diperbaiki secara berulang untuk meningkatkan usability.</li>
          </ul><p><br></p><p><strong><span style="font-size: 24px;">Manfaat UCD dalam Pengembangan Aplikasi</span></strong></p>
          <p id="isPasted">Berdasarkan teori Norman (2013) dan Nielsen (1993), UCD memberikan beberapa manfaat utama:</p>
          <ul style="list-style-type: disc;"><li><strong>Meningkatkan usability dan user experience (UX)</strong>: Produk lebih mudah digunakan dan lebih efisien.</li>
          <li><strong>Mengurangi kesalahan penggunaan</strong>: Pengguna dapat berinteraksi dengan sistem secara lebih intuitif.</li>
          <li><strong>Meningkatkan kepuasan pengguna</strong>: Produk lebih sesuai dengan kebutuhan pengguna, sehingga meningkatkan engagement.<br><br><strong><span style="font-size: 24px;">Contoh Penerapan UCD: Aplikasi GoFood dan GrabFood</span></strong><br>Aplikasi Pemesanan Makanan:</li>
          <li id="isPasted">Desain antarmuka yang sederhana dan mudah digunakan.</li></ul><p>Proses pemesanan yang cepat dengan opsi pembayaran beragam.<br><strong><span style="font-size: 24px;"><br>Tahapan UCD</span></strong></p><p id="isPasted"><strong>Identify the User:</strong></p><ul style="list-style-type: disc;"><li id="isPasted">Menentukan siapa pengguna utama (primary user), sekunder (secondary user), dan tersier (tertiary user).</li><li>Memahami lingkungan, perilaku, dan pengalaman pengguna.</li></ul><p><br></p><p><strong>Research the User:</strong></p><ul style="list-style-type: disc;"><li id="isPasted">Mengumpulkan data melalui wawancara, kuesioner, diskusi kelompok (focus groups), observasi langsung di lokasi, dan rekaman video.</li><li>Memahami bagaimana pengguna berinteraksi dengan sistem atau produk yang sedang dikembangkan.</li></ul><p><br></p><p><strong>Create Goals:</strong></p><ul style="list-style-type: disc;"><li id="isPasted">Mengidentifikasi bagaimana kegunaan (usability) dapat diukur.</li><li>Mempertimbangkan faktor efektivitas, efisiensi, keamanan, utilitas, kemudahan belajar (learnability), dan daya ingat pengguna (memorability).</li></ul><p><br></p><p><strong>Design:</strong></p><ul style="list-style-type: disc;"><li id="isPasted">Membuat mock-ups atau model/desain awal produk yang dapat diuji oleh pengguna sepanjang proses pengembangan.</li><li>Memastikan instruksi mudah dipahami dengan batasan dan petunjuk visual.</li></ul><p><br></p><p><strong>Prototype:</strong></p><ul style="list-style-type: disc;"><li id="isPasted">Model awal atau versi percobaan dari suatu produk sebelum produk akhir dikembangkan.</li><li>Mengembangkan prototype fungsional yang dapat diuji dalam lingkungan nyata.</li></ul><p><br></p><p><strong>Test:</strong></p><ul style="list-style-type: disc;"><li id="isPasted">Mengevaluasi desain dengan melibatkan pengguna.</li><li>Menguji produk dalam lingkungan nyata dan mendokumentasikan hasilnya.</li>
          <li>Memberikan instruksi minimal kepada pengguna untuk melihat apakah produk intuitif.</li></ul><p><br></p><p><strong>Produce:</strong></p><ul style="list-style-type: disc;"><li id="isPasted">Melanjutkan evaluasi produk berdasarkan umpan balik melalui wawancara dan survei.</li><li>Menyempurnakan produk berdasarkan hasil evaluasi.</li></ul>
        `,
      },
    });

    const materialWeek7 = await prisma.material.create({
      data: {
        chapterId: chapter7.id,
        name: 'Implementasi User-Centered Design (UCD)',
        content: `
          <p id="isPasted"><strong><span style="font-size: 24px;">Definisi User-Centered Design (UCD)</span></strong></p>
          <p>User-Centered Design (UCD) adalah pendekatan desain yang berfokus pada pengguna, di mana kebutuhan, keterbatasan, dan preferensi pengguna menjadi faktor utama dalam proses perancangan sistem atau produk digital (Preece et al., 2019; Benyon, 2019). UCD menempatkan pengguna sebagai fokus utama dalam setiap tahap pengembangan produk atau sistem. Tujuannya adalah untuk memastikan bahwa produk yang dikembangkan benar-benar sesuai dengan kebutuhan, keinginan, dan karakteristik pengguna.</p>
          <p><br></p><p><strong><span style="font-size: 24px;">Konsep Dasar UCD</span></strong></p><p id="isPasted">Konsep dasar UCD mencakup:</p>
          <ul style="list-style-type: disc;"><li>Mengutamakan kebutuhan dan pengalaman pengguna dalam desain.</li>
          <li>Melibatkan pengguna dalam setiap tahap pengembangan.</li><li>Menekankan iterasi dan evaluasi desain untuk memastikan usability yang tinggi.</li>
          </ul><p><br></p><p><strong><span style="font-size: 24px;">Pendekatan Desain yang Berfokus pada Pengguna</span></strong></p>
          <p><span style="font-size: 14px;">Pendekatan UCD melibatkan pengguna secara aktif selama proses desain. Desainer tidak hanya mengandalkan asumsi, tetapi juga mengumpulkan masukan langsung dari pengguna melalui berbagai metode seperti wawancara, observasi, dan uji coba prototipe.</span></p>
          <p><br></p><p><span style="font-size: 24px;"><strong>Karakteristik Utama UCD</strong></span></p>
          <ul style="list-style-type: disc;"><li id="isPasted"><strong>Partisipasi Pengguna</strong>: Pengguna berperan aktif dalam setiap tahap pengembangan.</li>
          <li><strong>Iterasi Desain</strong>: Desain dikembangkan secara bertahap berdasarkan umpan balik dari pengguna.</li>
          <li><strong>Evaluasi Berkelanjutan</strong>: Desain diuji dan diperbaiki secara berulang untuk meningkatkan usability.</li>
          </ul><p><br></p><p><strong><span style="font-size: 24px;">Manfaat UCD dalam Pengembangan Aplikasi</span></strong></p>
          <p id="isPasted">Berdasarkan teori Norman (2013) dan Nielsen (1993), UCD memberikan beberapa manfaat utama:</p>
          <ul style="list-style-type: disc;"><li><strong>Meningkatkan usability dan user experience (UX)</strong>: Produk lebih mudah digunakan dan lebih efisien.</li>
          <li><strong>Mengurangi kesalahan penggunaan</strong>: Pengguna dapat berinteraksi dengan sistem secara lebih intuitif.</li>
          <li><strong>Meningkatkan kepuasan pengguna</strong>: Produk lebih sesuai dengan kebutuhan pengguna, sehingga meningkatkan engagement.<br><br><strong><span style="font-size: 24px;">Contoh Penerapan UCD: Aplikasi GoFood dan GrabFood</span></strong><br>Aplikasi Pemesanan Makanan:</li>
          <li id="isPasted">Desain antarmuka yang sederhana dan mudah digunakan.</li></ul><p>Proses pemesanan yang cepat dengan opsi pembayaran beragam.<br><strong><span style="font-size: 24px;"><br>Tahapan UCD</span></strong></p><p id="isPasted"><strong>Identify the User:</strong></p><ul style="list-style-type: disc;"><li id="isPasted">Menentukan siapa pengguna utama (primary user), sekunder (secondary user), dan tersier (tertiary user).</li><li>Memahami lingkungan, perilaku, dan pengalaman pengguna.</li></ul><p><br></p><p><strong>Research the User:</strong></p><ul style="list-style-type: disc;"><li id="isPasted">Mengumpulkan data melalui wawancara, kuesioner, diskusi kelompok (focus groups), observasi langsung di lokasi, dan rekaman video.</li><li>Memahami bagaimana pengguna berinteraksi dengan sistem atau produk yang sedang dikembangkan.</li></ul><p><br></p><p><strong>Create Goals:</strong></p><ul style="list-style-type: disc;"><li id="isPasted">Mengidentifikasi bagaimana kegunaan (usability) dapat diukur.</li><li>Mempertimbangkan faktor efektivitas, efisiensi, keamanan, utilitas, kemudahan belajar (learnability), dan daya ingat pengguna (memorability).</li></ul><p><br></p><p><strong>Design:</strong></p><ul style="list-style-type: disc;"><li id="isPasted">Membuat mock-ups atau model/desain awal produk yang dapat diuji oleh pengguna sepanjang proses pengembangan.</li><li>Memastikan instruksi mudah dipahami dengan batasan dan petunjuk visual.</li></ul><p><br></p><p><strong>Prototype:</strong></p><ul style="list-style-type: disc;"><li id="isPasted">Model awal atau versi percobaan dari suatu produk sebelum produk akhir dikembangkan.</li><li>Mengembangkan prototype fungsional yang dapat diuji dalam lingkungan nyata.</li></ul><p><br></p><p><strong>Test:</strong></p><ul style="list-style-type: disc;"><li id="isPasted">Mengevaluasi desain dengan melibatkan pengguna.</li><li>Menguji produk dalam lingkungan nyata dan mendokumentasikan hasilnya.</li>
          <li>Memberikan instruksi minimal kepada pengguna untuk melihat apakah produk intuitif.</li></ul><p><br></p><p><strong>Produce:</strong></p><ul style="list-style-type: disc;"><li id="isPasted">Melanjutkan evaluasi produk berdasarkan umpan balik melalui wawancara dan survei.</li><li>Menyempurnakan produk berdasarkan hasil evaluasi.</li></ul>
        `,
      },
    });

    const materialWeek8 = await prisma.material.create({
      data: {
        chapterId: chapter8.id,
        name: 'UTS',
        content: `
          <p id="isPasted"><strong><span style="font-size: 24px;">Definisi User-Centered Design (UCD)</span></strong></p>
          <p>User-Centered Design (UCD) adalah pendekatan desain yang berfokus pada pengguna, di mana kebutuhan, keterbatasan, dan preferensi pengguna menjadi faktor utama dalam proses perancangan sistem atau produk digital (Preece et al., 2019; Benyon, 2019). UCD menempatkan pengguna sebagai fokus utama dalam setiap tahap pengembangan produk atau sistem. Tujuannya adalah untuk memastikan bahwa produk yang dikembangkan benar-benar sesuai dengan kebutuhan, keinginan, dan karakteristik pengguna.</p>
          <p><br></p><p><strong><span style="font-size: 24px;">Konsep Dasar UCD</span></strong></p><p id="isPasted">Konsep dasar UCD mencakup:</p>
          <ul style="list-style-type: disc;"><li>Mengutamakan kebutuhan dan pengalaman pengguna dalam desain.</li>
          <li>Melibatkan pengguna dalam setiap tahap pengembangan.</li><li>Menekankan iterasi dan evaluasi desain untuk memastikan usability yang tinggi.</li>
          </ul><p><br></p><p><strong><span style="font-size: 24px;">Pendekatan Desain yang Berfokus pada Pengguna</span></strong></p>
          <p><span style="font-size: 14px;">Pendekatan UCD melibatkan pengguna secara aktif selama proses desain. Desainer tidak hanya mengandalkan asumsi, tetapi juga mengumpulkan masukan langsung dari pengguna melalui berbagai metode seperti wawancara, observasi, dan uji coba prototipe.</span></p>
          <p><br></p><p><span style="font-size: 24px;"><strong>Karakteristik Utama UCD</strong></span></p>
          <ul style="list-style-type: disc;"><li id="isPasted"><strong>Partisipasi Pengguna</strong>: Pengguna berperan aktif dalam setiap tahap pengembangan.</li>
          <li><strong>Iterasi Desain</strong>: Desain dikembangkan secara bertahap berdasarkan umpan balik dari pengguna.</li>
          <li><strong>Evaluasi Berkelanjutan</strong>: Desain diuji dan diperbaiki secara berulang untuk meningkatkan usability.</li>
          </ul><p><br></p><p><strong><span style="font-size: 24px;">Manfaat UCD dalam Pengembangan Aplikasi</span></strong></p>
          <p id="isPasted">Berdasarkan teori Norman (2013) dan Nielsen (1993), UCD memberikan beberapa manfaat utama:</p>
          <ul style="list-style-type: disc;"><li><strong>Meningkatkan usability dan user experience (UX)</strong>: Produk lebih mudah digunakan dan lebih efisien.</li>
          <li><strong>Mengurangi kesalahan penggunaan</strong>: Pengguna dapat berinteraksi dengan sistem secara lebih intuitif.</li>
          <li><strong>Meningkatkan kepuasan pengguna</strong>: Produk lebih sesuai dengan kebutuhan pengguna, sehingga meningkatkan engagement.<br><br><strong><span style="font-size: 24px;">Contoh Penerapan UCD: Aplikasi GoFood dan GrabFood</span></strong><br>Aplikasi Pemesanan Makanan:</li>
          <li id="isPasted">Desain antarmuka yang sederhana dan mudah digunakan.</li></ul><p>Proses pemesanan yang cepat dengan opsi pembayaran beragam.<br><strong><span style="font-size: 24px;"><br>Tahapan UCD</span></strong></p><p id="isPasted"><strong>Identify the User:</strong></p><ul style="list-style-type: disc;"><li id="isPasted">Menentukan siapa pengguna utama (primary user), sekunder (secondary user), dan tersier (tertiary user).</li><li>Memahami lingkungan, perilaku, dan pengalaman pengguna.</li></ul><p><br></p><p><strong>Research the User:</strong></p><ul style="list-style-type: disc;"><li id="isPasted">Mengumpulkan data melalui wawancara, kuesioner, diskusi kelompok (focus groups), observasi langsung di lokasi, dan rekaman video.</li><li>Memahami bagaimana pengguna berinteraksi dengan sistem atau produk yang sedang dikembangkan.</li></ul><p><br></p><p><strong>Create Goals:</strong></p><ul style="list-style-type: disc;"><li id="isPasted">Mengidentifikasi bagaimana kegunaan (usability) dapat diukur.</li><li>Mempertimbangkan faktor efektivitas, efisiensi, keamanan, utilitas, kemudahan belajar (learnability), dan daya ingat pengguna (memorability).</li></ul><p><br></p><p><strong>Design:</strong></p><ul style="list-style-type: disc;"><li id="isPasted">Membuat mock-ups atau model/desain awal produk yang dapat diuji oleh pengguna sepanjang proses pengembangan.</li><li>Memastikan instruksi mudah dipahami dengan batasan dan petunjuk visual.</li></ul><p><br></p><p><strong>Prototype:</strong></p><ul style="list-style-type: disc;"><li id="isPasted">Model awal atau versi percobaan dari suatu produk sebelum produk akhir dikembangkan.</li><li>Mengembangkan prototype fungsional yang dapat diuji dalam lingkungan nyata.</li></ul><p><br></p><p><strong>Test:</strong></p><ul style="list-style-type: disc;"><li id="isPasted">Mengevaluasi desain dengan melibatkan pengguna.</li><li>Menguji produk dalam lingkungan nyata dan mendokumentasikan hasilnya.</li>
          <li>Memberikan instruksi minimal kepada pengguna untuk melihat apakah produk intuitif.</li></ul><p><br></p><p><strong>Produce:</strong></p><ul style="list-style-type: disc;"><li id="isPasted">Melanjutkan evaluasi produk berdasarkan umpan balik melalui wawancara dan survei.</li><li>Menyempurnakan produk berdasarkan hasil evaluasi.</li></ul>
        `,
      },
    });

   const materialWeek9 = await prisma.material.create({
  data: {
    chapterId: chapter9.id,
    name: 'USABILITY EVALUATION TECHNIQUES',
    content: `
      <p><strong><span style="font-size: 24px;">Usability Evaluation Techniques</span></strong></p>

      <p>Usability evaluation merupakan bagian penting dalam bidang Human Computer Interaction (HCI) yang bertujuan untuk menilai sejauh mana suatu sistem dapat digunakan secara efektif, efisien, dan memuaskan oleh penggunanya. Usability tidak hanya berfokus pada aspek teknologi, tetapi lebih kepada bagaimana manusia memahami dan berinteraksi dengan sistem. Menurut Steve Krug, usability adalah tentang manusia dan bagaimana mereka menggunakan sesuatu, bukan tentang teknologinya.</p>

      <p><strong><span style="font-size: 24px;">Mengapa Usability Testing Penting?</span></strong></p>

      <p>Usability testing penting karena pengguna menginginkan sistem yang mudah digunakan, efisien, dan memberikan pengalaman yang menyenangkan. Produk dengan usability yang buruk sering menyebabkan menurunnya kepuasan pengguna, meningkatnya churn rate, serta tingginya biaya dukungan pelanggan. Selain itu, usability testing membantu mengidentifikasi dan memperbaiki masalah sejak dini sebelum sistem diluncurkan secara luas.</p>

      <p>Sebagai contoh, sebuah aplikasi pemesanan tiket konser menghadapi keluhan pengguna karena proses pemesanan yang rumit. Tombol “Pesan Sekarang” tidak terlihat jelas, formulir pemesanan memiliki terlalu banyak langkah, serta tidak adanya konfirmasi pembayaran membuat pengguna bingung. Akibatnya, banyak pengguna beralih ke aplikasi pesaing. Dengan melakukan usability testing, pengembang dapat mengidentifikasi masalah tersebut lebih awal dan melakukan perbaikan desain.</p>

      <p><strong><span style="font-size: 24px;">Teknik Evaluasi Usability</span></strong></p>

      <p>Evaluasi usability bertujuan untuk mengukur tingkat kemudahan penggunaan suatu sistem. Beberapa teknik yang umum digunakan antara lain heuristic evaluation, think-aloud protocol, dan usability testing. Data yang diperoleh kemudian dianalisis untuk menghasilkan rekomendasi perbaikan sistem.</p>

      <p><strong><span style="font-size: 24px;">Heuristic Evaluation</span></strong></p>

      <p>Heuristic evaluation adalah metode evaluasi usability yang dilakukan berdasarkan seperangkat aturan desain atau heuristik yang dikembangkan oleh Jakob Nielsen. Evaluasi ini biasanya dilakukan oleh 3 hingga 5 evaluator independen. Setiap evaluator menilai antarmuka berdasarkan 10 prinsip usability Nielsen, seperti visibilitas status sistem, kesesuaian dengan dunia nyata, kontrol dan kebebasan pengguna, konsistensi, pencegahan kesalahan, desain minimalis, serta bantuan dan dokumentasi.</p>

      <p>Metode ini efektif untuk menemukan berbagai masalah antarmuka dengan cepat dan sistematis tanpa harus melibatkan pengguna secara langsung.</p>

      <p><strong><span style="font-size: 24px;">Think-Aloud Protocol</span></strong></p>

      <p>Think-aloud protocol adalah metode evaluasi yang meminta pengguna mengungkapkan secara verbal apa yang mereka pikirkan saat menyelesaikan suatu tugas. Metode ini digunakan untuk memahami proses berpikir pengguna dan mengidentifikasi kesulitan yang mereka alami selama menggunakan sistem.</p>

      <p>Proses think-aloud meliputi pemberian tugas, meminta pengguna mengungkapkan pemikirannya, observasi dan pencatatan hambatan, serta analisis pola kesalahan. Tahapannya meliputi perencanaan, pelaksanaan, analisis data, serta pelaporan dan pemberian rekomendasi.</p>

      <p>Kelebihan metode ini adalah mampu memberikan wawasan mendalam tentang pola pikir pengguna dan menemukan masalah usability tersembunyi. Namun, metode ini juga memiliki kekurangan karena dapat memengaruhi kinerja pengguna dan menimbulkan bias.</p>

      <p><strong><span style="font-size: 24px;">Usability Testing</span></strong></p>

      <p>Usability testing merupakan metode pengujian sistem dengan melibatkan pengguna nyata untuk mengamati bagaimana mereka berinteraksi dengan sistem. Tujuannya adalah untuk mengukur efektivitas, efisiensi, serta tingkat kepuasan pengguna.</p>

      <p>Jenis usability testing meliputi moderated testing, unmoderated testing, dan remote testing. Tahapan pengujian mencakup penentuan tujuan, pemilihan partisipan, pelaksanaan pengujian, serta analisis hasil untuk mengidentifikasi area yang perlu diperbaiki.</p>

      <p><strong><span style="font-size: 24px;">Analisis Hasil Evaluasi</span></strong></p>

      <p>Data hasil evaluasi usability terdiri dari data kualitatif dan kuantitatif. Data kualitatif digunakan untuk mengidentifikasi pola interaksi dan hambatan pengguna, sedangkan data kuantitatif digunakan untuk mengukur waktu penyelesaian tugas, jumlah kesalahan, dan tingkat kepuasan pengguna.</p>

      <p>Langkah-langkah analisis meliputi pengelompokan temuan, penyusunan rekomendasi perbaikan, serta prioritas perbaikan berdasarkan dampaknya terhadap pengalaman pengguna.</p>

      <p><strong><span style="font-size: 24px;">Kesimpulan</span></strong></p>

      <p>Usability evaluation merupakan proses penting dalam pengembangan sistem interaktif. Dengan menerapkan heuristic evaluation, think-aloud protocol, dan usability testing, pengembang dapat memastikan bahwa sistem yang dibangun mudah digunakan, efisien, dan memberikan pengalaman pengguna yang optimal.</p>
    `,
  },
});

const materialWeek10 = await prisma.material.create({
  data: {
    chapterId: chapter10.id,
    name: 'HEDONIC MOTIVATION SYSTEM ADOPTION MODEL (HMSAM) DALAM PEMBELAJARAN BERBASIS GAMIFIKASI',
    content: `
      <p><strong><span style="font-size: 24px;">Hedonic Motivation System Adoption Model (HMSAM) dalam Pembelajaran Berbasis Gamifikasi</span></strong></p>

      <p>Hedonic Motivation System Adoption Model (HMSAM) merupakan model adopsi sistem yang berfokus pada motivasi hedonik, yaitu aspek kesenangan, keterlibatan, dan kepuasan pengguna dalam menggunakan sistem teknologi. Model ini diperkenalkan oleh Lowry et al. pada tahun 2013 dalam jurnal <em>Journal of the Association for Information Systems</em>. HMSAM dikembangkan sebagai perluasan dari Technology Acceptance Model (TAM) dan Unified Theory of Acceptance and Use of Technology (UTAUT), dengan penekanan utama pada motivasi intrinsik pengguna, khususnya dalam konteks sistem berbasis hiburan dan gamifikasi.</p>

      <p>Model ini menekankan bahwa pengalaman emosional dan keterlibatan pengguna merupakan faktor penting dalam mendorong adopsi teknologi, terutama pada sistem seperti game online, media sosial, dan lingkungan pembelajaran berbasis gamifikasi.</p>

      <p><strong><span style="font-size: 24px;">Definisi HMSAM</span></strong></p>

      <p>HMSAM (Hedonic Motivation System Adoption Model) adalah model konseptual yang bertujuan untuk menjelaskan faktor-faktor yang memengaruhi adopsi sistem teknologi yang bersifat hedonik. Motivasi hedonik mengacu pada dorongan internal pengguna yang berkaitan dengan kesenangan, keingintahuan, keterlibatan, dan kepuasan dalam menggunakan suatu sistem. Model ini menempatkan pengalaman pengguna sebagai pusat perancangan dan evaluasi sistem.</p>

      <p><strong><span style="font-size: 24px;">Komponen Utama HMSAM</span></strong></p>

      <p>Komponen utama HMSAM terdiri dari tujuh elemen yang saling berhubungan. Perceived Usefulness mengacu pada sejauh mana pengguna merasa sistem dapat meningkatkan efektivitas dan produktivitas mereka. Dalam pembelajaran, mahasiswa akan lebih menerima sistem apabila mereka merasa terbantu dalam memahami materi dengan lebih cepat dan efisien.</p>

      <p>Perceived Ease of Use menggambarkan tingkat kemudahan penggunaan sistem tanpa usaha yang besar. Antarmuka yang intuitif dan navigasi yang sederhana akan meningkatkan minat pengguna untuk terus menggunakan sistem.</p>

      <p>Curiosity adalah rasa ingin tahu yang muncul saat menggunakan sistem. Fitur interaktif, konten dinamis, dan tantangan dalam gamifikasi dapat meningkatkan keingintahuan mahasiswa untuk mengeksplorasi lebih jauh.</p>

      <p>Joy mengacu pada tingkat kesenangan yang dirasakan pengguna selama menggunakan sistem. Elemen gamifikasi seperti poin, badge, level, dan tantangan berkontribusi besar dalam menciptakan pengalaman belajar yang menyenangkan.</p>

      <p>Control menunjukkan sejauh mana pengguna merasa memiliki kendali atas pengalaman penggunaan sistem, seperti kebebasan mengatur tempo belajar, memilih materi, dan menyesuaikan tampilan antarmuka.</p>

      <p>Focused Immersion menggambarkan tingkat keterlibatan mendalam, di mana pengguna dapat fokus sepenuhnya dan terlibat aktif hingga lupa waktu. Kondisi ini sangat mendukung efektivitas pembelajaran.</p>

      <p>Behavioral Intention to Use merupakan niat pengguna untuk terus menggunakan sistem di masa depan. Niat ini dipengaruhi oleh keseluruhan pengalaman penggunaan, khususnya aspek kesenangan dan keterlibatan.</p>

      <p><strong><span style="font-size: 24px;">HMSAM dalam Gamifikasi Pembelajaran</span></strong></p>

      <p>Penerapan HMSAM dalam pembelajaran berbasis gamifikasi bertujuan untuk meningkatkan motivasi belajar, keterlibatan, dan partisipasi mahasiswa. Elemen gamifikasi seperti poin, badge, leaderboard, dan tantangan digunakan untuk menciptakan suasana belajar yang menyenangkan dan kompetitif secara sehat.</p>

      <p>Dengan menerapkan prinsip HMSAM, sistem pembelajaran dapat meningkatkan keingintahuan, kesenangan, dan keterlibatan mahasiswa sehingga mendorong pembelajaran aktif dan berkelanjutan.</p>

      <p><strong><span style="font-size: 24px;">Metode Penelitian dalam HMSAM</span></strong></p>

      <p>Penelitian berbasis HMSAM umumnya menggunakan metode survei dan kuesioner dengan skala Likert untuk mengukur persepsi pengguna terhadap setiap komponen. Data dianalisis menggunakan Structural Equation Modeling (SEM) untuk menguji hubungan antar variabel dalam model.</p>

      <p>Hasil penelitian menunjukkan hubungan positif yang signifikan antara Joy, Curiosity, dan Behavioral Intention to Use, yang membuktikan pentingnya aspek emosional dalam adopsi sistem berbasis gamifikasi.</p>

      <p><strong><span style="font-size: 24px;">Kelebihan dan Tantangan HMSAM</span></strong></p>

      <p>HMSAM memiliki kelebihan dalam meningkatkan keterlibatan pengguna, menciptakan pengalaman belajar yang menyenangkan, serta meningkatkan retensi pengetahuan. Model ini efektif dalam merancang sistem pembelajaran modern yang berorientasi pada pengalaman pengguna.</p>

      <p>Namun, tantangan utama HMSAM terletak pada adaptasi pengguna terhadap gamifikasi serta perancangan sistem yang menarik tanpa mengganggu fokus pembelajaran. Oleh karena itu, keseimbangan antara aspek edukatif dan hiburan harus dijaga.</p>

      <p><strong><span style="font-size: 24px;">Kesimpulan</span></strong></p>

      <p>Hedonic Motivation System Adoption Model (HMSAM) merupakan model yang efektif dalam meningkatkan motivasi dan keterlibatan mahasiswa dalam pembelajaran berbasis gamifikasi. Elemen kesenangan dan keingintahuan memainkan peran besar dalam mendorong niat penggunaan sistem. Implementasi HMSAM harus didukung oleh desain pengalaman pengguna yang baik agar tujuan pembelajaran dapat tercapai secara optimal.</p>
    `,
  },
});


const materialWeek11 = await prisma.material.create({
  data: {
    chapterId: chapter11.id,
    name: 'USER PSYCHOLOGY PRINCIPLES IN INTUITIVE DESIGN',
    content: `
      <p><strong><span style="font-size:24px;">User Psychology Principles in Intuitive Design</span></strong></p>

      <p>User Psychology merupakan studi tentang bagaimana manusia berpikir, merasakan, dan berperilaku saat berinteraksi dengan sistem digital. Dalam konteks Human Computer Interaction (HCI), pemahaman terhadap psikologi pengguna sangat penting untuk menciptakan antarmuka yang intuitif, mudah digunakan, serta memberikan pengalaman pengguna yang optimal. Desain antarmuka tidak hanya berfokus pada aspek teknis, tetapi juga harus mempertimbangkan cara manusia memproses informasi dan mengambil keputusan.</p>

      <p><strong><span style="font-size:24px;">Kaitan User Psychology dengan HCI</span></strong></p>

      <p>Dalam HCI, pemahaman psikologi pengguna membantu desainer memahami bagaimana pengguna berpikir dan bertindak saat berinteraksi dengan sistem. Prinsip-prinsip seperti Cognitive Load Theory, Gestalt Principles, Fitts’ Law, dan Hick’s Law membantu merancang antarmuka yang lebih intuitif dan efisien. Sistem yang dirancang tanpa mempertimbangkan psikologi pengguna cenderung sulit digunakan dan meningkatkan tingkat kesalahan.</p>

      <p>Selain itu, pemahaman psikologi pengguna juga membantu mencegah frustrasi dan meningkatkan efisiensi penggunaan. Jika desain tidak sesuai dengan mental model pengguna, maka pengguna akan merasa bingung dan tidak nyaman. Prinsip Jakob’s Law menyatakan bahwa pengguna mengharapkan sistem baru bekerja seperti sistem yang sudah mereka kenal, sehingga penggunaan konvensi desain sangat membantu dalam menciptakan pengalaman yang familiar.</p>

      <p>Pemahaman ini juga mendukung penerapan User Centered Design (UCD), di mana desain berfokus pada kebutuhan dan karakteristik pengguna. Konsep perceived affordance, feedback loops, dan error prevention menjadi dasar dalam iterasi desain berbasis pengguna. Dalam industri, developer dan UX designer bekerja sama untuk menciptakan produk digital yang efektif, menarik, dan berorientasi pada pengalaman pengguna.</p>

      <p><strong><span style="font-size:24px;">Pengantar User Psychology dalam HCI</span></strong></p>

      <p>User psychology membantu memahami bagaimana pengguna memproses informasi, membuat keputusan, serta bereaksi terhadap sistem. Menurut Norman (2013), desain antarmuka harus berorientasi pada manusia, bukan mesin. Prinsip psikologi memungkinkan perancang memahami bagaimana informasi dipersepsikan, bagaimana keputusan dibuat, serta bagaimana emosi memengaruhi interaksi pengguna.</p>

      <p>Desain intuitif merupakan desain yang dapat dipahami dan digunakan tanpa memerlukan instruksi eksplisit. Pengguna dapat mengetahui apa yang harus dilakukan hanya dengan melihat antarmuka. Desain ini memanfaatkan pengalaman, ekspektasi, serta persepsi pengguna. Contoh sederhana adalah ikon tempat sampah untuk fungsi hapus, yang langsung dipahami karena sudah familiar.</p>

      <p><strong><span style="font-size:24px;">Prinsip Dasar Psikologi Kognitif dalam Interaksi Pengguna</span></strong></p>

      <p>Mental model merupakan gambaran mental pengguna tentang bagaimana suatu sistem bekerja. Desain yang sesuai dengan mental model pengguna akan terasa lebih alami, mudah digunakan, dan mempercepat proses pembelajaran. Contohnya, ikon disket yang masih digunakan untuk menyimpan data karena sudah melekat dalam ingatan pengguna.</p>

      <p>Cognitive load adalah beban mental yang harus ditanggung pengguna untuk memproses informasi. Antarmuka yang terlalu kompleks meningkatkan beban kognitif dan menyebabkan kebingungan. Oleh karena itu, desain harus meminimalkan cognitive load dengan menggunakan white space, ikon yang jelas, serta navigasi sederhana.</p>

      <p>Gestalt principles menjelaskan bagaimana manusia mengorganisasi elemen visual menjadi pola yang bermakna. Prinsip-prinsip seperti proximity, similarity, closure, dan continuity membantu meningkatkan keterbacaan dan pemahaman antarmuka. Elemen yang berdekatan dipersepsikan sebagai satu kelompok, warna yang sama menunjukkan fungsi yang serupa, dan alur visual yang berkesinambungan memandu perhatian pengguna.</p>

      <p>Prinsip perhatian dan emosi juga sangat berpengaruh. Elemen yang menonjol secara visual akan lebih cepat diproses oleh otak. Warna kontras, ukuran besar, dan hierarki visual digunakan untuk menarik perhatian pengguna terhadap elemen penting, seperti tombol Call to Action.</p>

      <p><strong><span style="font-size:24px;">Faktor yang Mempengaruhi Persepsi dan Pengolahan Informasi dalam UI/UX</span></strong></p>

      <p>Hick’s Law menyatakan bahwa semakin banyak pilihan yang tersedia, semakin lama waktu yang dibutuhkan untuk mengambil keputusan. Oleh karena itu, menu dan opsi dalam sistem sebaiknya disederhanakan atau dikelompokkan agar pengguna dapat bertindak lebih cepat.</p>

      <p>Fitts’ Law menjelaskan bahwa semakin besar dan dekat target interaksi, semakin cepat pengguna dapat mengaksesnya. Prinsip ini sangat penting dalam perancangan tombol, terutama pada perangkat mobile, di mana tombol Call to Action harus cukup besar dan mudah dijangkau.</p>

      <p>Jakob’s Law menyatakan bahwa pengguna mengharapkan sistem baru bekerja dengan cara yang mirip dengan sistem yang sudah mereka kenal. Oleh karena itu, penggunaan konvensi desain umum seperti ikon keranjang belanja, ikon rumah untuk beranda, dan ikon kaca pembesar untuk pencarian sangat membantu dalam mempercepat adopsi sistem.</p>

      <p><strong><span style="font-size:24px;">Kesimpulan</span></strong></p>

      <p>Desain antarmuka yang intuitif harus didasarkan pada pemahaman psikologi pengguna. Prinsip-prinsip seperti mental model, cognitive load, Gestalt, Hick’s Law, Fitts’ Law, dan Jakob’s Law sangat penting dalam menciptakan sistem yang mudah digunakan, efisien, dan menyenangkan. Penerapan prinsip ini akan meningkatkan kualitas user experience dan keberhasilan produk digital.</p>

      <p><strong><span style="font-size:24px;">Tugas Individu</span></strong></p>

      <p>Mahasiswa diminta untuk menganalisis penerapan prinsip Hick’s Law, Fitts’ Law, dan Gestalt Principles dalam desain antarmuka produk digital. Analisis dilakukan dengan memberikan contoh nyata dari website, aplikasi mobile, atau perangkat lunak desktop. Laporan disusun dalam format dokumen sepanjang 4–6 halaman dengan menyertakan gambar pendukung, referensi, serta struktur penulisan yang sistematis.</p>
    `,
  },
});


const materialWeek12 = await prisma.material.create({
  data: {
    chapterId: chapter12.id,
    name: 'EMOTIONAL DESIGN AND AFFORDANCE IN INTUITIVE INTERFACE DESIGN',
    content: `
      <p><strong><span style="font-size:24px;">Emotional Design and Affordance in Intuitive Interface Design</span></strong></p>

      <p>Emotional Design dan Affordance merupakan dua konsep penting dalam perancangan antarmuka yang intuitif dan berorientasi pada pengalaman pengguna. Emotional Design menekankan bagaimana desain dapat memengaruhi emosi pengguna, sedangkan affordance berfokus pada bagaimana suatu elemen antarmuka memberikan petunjuk penggunaan secara alami. Keduanya saling melengkapi dalam menciptakan interaksi yang efektif, efisien, dan menyenangkan.</p>

      <p><strong><span style="font-size:24px;">Emotional Design</span></strong></p>

      <p><strong>Apa itu Emotional Design?</strong></p>
      <p>Emotional Design adalah pendekatan desain yang tidak hanya berfokus pada kegunaan (usability), tetapi juga pada bagaimana desain mampu menimbulkan emosi, seperti rasa senang, nyaman, percaya diri, dan bahkan nostalgia. Pendekatan ini diperkenalkan oleh beberapa pakar, salah satunya Don Norman, yang menekankan pentingnya hubungan emosional antara pengguna dan produk.</p>

      <p>Emosi memainkan peran penting dalam pengalaman pengguna karena memengaruhi cara pengguna menilai, mengingat, dan menggunakan suatu produk. Produk dengan desain emosional yang baik cenderung lebih disukai, mudah diingat, dan digunakan dalam jangka panjang.</p>

      <p><strong><span style="font-size:24px;">Emotional Design Model (Norman, 2004)</span></strong></p>

      <p>Norman (2004) menjelaskan bahwa terdapat tiga tingkat pemrosesan emosi dalam kaitannya dengan suatu produk, yaitu:</p>

      <ul style="list-style-type: disc;">
        <li><strong>Level Visceral</strong>: Berkaitan dengan reaksi emosional langsung terhadap penampilan visual, sentuhan, dan kesan awal suatu produk. Contohnya adalah warna, bentuk, tekstur, dan animasi antarmuka.</li>
        <li><strong>Level Behavioral</strong>: Berkaitan dengan fungsi, performa, kemudahan penggunaan, dan efektivitas sistem. Pada level ini, usability menjadi faktor utama.</li>
        <li><strong>Level Reflective</strong>: Berkaitan dengan kepuasan jangka panjang, memori, dan makna personal yang dirasakan pengguna setelah menggunakan produk dalam waktu lama.</li>
      </ul>

      <p>Perbedaan utama ketiga level ini terletak pada dimensi waktu. Level visceral dan behavioral berkaitan dengan pengalaman saat ini, sedangkan level reflective berhubungan dengan pengalaman masa lalu dan harapan masa depan pengguna.</p>

      <p><strong><span style="font-size:24px;">Emotional Design Model (Tiger, 1992; Jordan, 2000)</span></strong></p>

      <p>Tiger dan Jordan menjelaskan empat jenis kesenangan (pleasure) yang dapat timbul dari suatu produk:</p>

      <ul style="list-style-type: disc;">
        <li><strong>Physio-pleasure</strong>: Kesenangan yang berkaitan dengan sensori tubuh, seperti penglihatan, sentuhan, dan penciuman.</li>
        <li><strong>Socio-pleasure</strong>: Kesenangan yang muncul dari interaksi sosial dan hubungan antar individu.</li>
        <li><strong>Psycho-pleasure</strong>: Kesenangan yang berhubungan dengan pemikiran kognitif dan reaksi emosional ketika menggunakan produk.</li>
        <li><strong>Ideo-pleasure</strong>: Kesenangan yang berkaitan dengan nilai, estetika, dan prinsip hidup pengguna.</li>
      </ul>

      <p>Selain itu, Jordan (2000) mengelompokkan manfaat emosional produk menjadi tiga, yaitu hedonic benefits, practical benefits, dan emotional benefits, yang mencakup aspek estetika, fungsionalitas, serta hubungan emosional pengguna dengan produk.</p>

      <p><strong><span style="font-size:24px;">Affordance</span></strong></p>

      <p><strong>Apa itu Affordance?</strong></p>
      <p>Affordance adalah properti dari suatu objek atau elemen antarmuka yang memberikan petunjuk tentang bagaimana elemen tersebut dapat digunakan. Affordance membantu pengguna memahami apa yang dapat dilakukan terhadap suatu elemen tanpa perlu instruksi tambahan.</p>

      <p>Contohnya adalah tombol yang menonjol yang terlihat dapat ditekan, scroll bar yang menunjukkan bahwa konten dapat digeser, serta teks berwarna biru yang menunjukkan bahwa elemen tersebut dapat diklik.</p>

      <p><strong><span style="font-size:24px;">Jenis-Jenis Affordance dalam UI</span></strong></p>

      <ul style="list-style-type: disc;">
        <li><strong>Perceptible Affordance</strong>: Affordance yang terlihat jelas dan mudah dikenali, seperti tombol dengan bayangan.</li>
        <li><strong>Hidden Affordance</strong>: Affordance yang hanya muncul setelah pengguna melakukan tindakan tertentu, seperti menu geser.</li>
        <li><strong>False Affordance</strong>: Affordance yang terlihat bisa digunakan, namun sebenarnya tidak, seperti teks yang tampak seperti hyperlink tetapi tidak bisa diklik.</li>
      </ul>

      <p><strong><span style="font-size:24px;">Strategi Meningkatkan Usability dan UX dengan Prinsip Psikologi</span></strong></p>

      <p><strong>Affordances and Signifiers (Norman, 2013)</strong></p>
      <p>Signifier adalah petunjuk visual yang memperjelas affordance. Contohnya adalah bayangan tombol, ikon tangan pada hyperlink, dan perubahan warna saat hover. Signifier membantu mengurangi ambiguitas sehingga pengguna langsung memahami fungsi suatu elemen.</p>

      <p><strong>Feedback and Feedforward (Shneiderman et al., 2016)</strong></p>
      <p>Feedback memberikan informasi kepada pengguna tentang status dan hasil interaksi, sedangkan feedforward memberi gambaran tentang apa yang akan terjadi. Contohnya adalah loading bar, notifikasi sukses, dan animasi transisi.</p>

      <p><strong>Error Prevention and Recovery (Nielsen, 1993)</strong></p>
      <p>Sistem harus dirancang untuk mencegah kesalahan dan menyediakan mekanisme pemulihan. Contohnya adalah fitur undo pada Gmail dan pesan kesalahan yang jelas serta solutif.</p>

      <p><strong><span style="font-size:24px;">Kesimpulan</span></strong></p>

      <p>Emotional Design dan Affordance adalah konsep yang saling melengkapi dalam menciptakan antarmuka yang intuitif, menarik, dan mudah digunakan. Dengan memahami psikologi pengguna, desainer dapat menciptakan pengalaman yang lebih baik, meningkatkan usability, serta memberikan kepuasan emosional bagi pengguna.</p>
    `,
  },
});



const materialWeek13 = await prisma.material.create({
  data: {
    chapterId: chapter13.id,
    name: 'VOICE-BASED INTERACTION (VOICE UI), GESTURE, AND TOUCH',
    content: `
      <p><strong><span style="font-size:24px;">Voice-Based Interaction (Voice UI), Gesture, and Touch</span></strong></p>

      <p>Materi ini membahas prinsip, konsep, serta tantangan dalam merancang antarmuka berbasis suara, gestur, dan sentuhan. Ketiga pendekatan ini merupakan bagian dari multimodal interaction yang bertujuan menciptakan pengalaman interaksi manusia dan komputer yang lebih natural, intuitif, dan inklusif.</p>

      <p><strong><span style="font-size:24px;">Tujuan Pembelajaran</span></strong></p>
      <ul>
        <li>Menjelaskan prinsip dan tantangan dalam merancang antarmuka berbasis suara, gestur, dan sentuhan.</li>
        <li>Menganalisis contoh nyata aplikasi teknologi Voice UI, Gesture, dan Touch Interaction.</li>
        <li>Mengevaluasi kelebihan dan keterbatasan interaksi berbasis modalitas non-tradisional.</li>
      </ul>

      <p><strong><span style="font-size:24px;">Multimodal Interaction</span></strong></p>
      <p>Multimodal interaction adalah bentuk interaksi manusia dan komputer yang menggunakan lebih dari satu metode input dan output, seperti suara, gestur, sentuhan, teks, dan visual. Tujuannya adalah menciptakan pengalaman interaksi yang lebih alami, efisien, fleksibel, dan kontekstual.</p>

      <p><strong><span style="font-size:24px;">Definisi Graphical User Interface (GUI)</span></strong></p>
      <p>GUI adalah antarmuka pengguna yang memungkinkan interaksi melalui elemen grafis seperti ikon, tombol, jendela, dan menu. GUI sangat bergantung pada visual serta perangkat input seperti mouse dan keyboard.</p>

      <p><strong><span style="font-size:24px;">Perbedaan GUI dan Multimodal Interface</span></strong></p>
      <p>GUI hanya mengandalkan modalitas visual dan perangkat input tradisional, sedangkan multimodal interface memanfaatkan berbagai modalitas seperti suara, gestur, dan sentuhan untuk menciptakan interaksi yang lebih fleksibel, alami, dan adaptif terhadap konteks pengguna.</p>

      <p><strong><span style="font-size:24px;">Kapan dan Mengapa Menggunakan Modalitas Alternatif?</span></strong></p>
      <ul>
        <li>Saat tangan pengguna sibuk, misalnya ketika mengemudi.</li>
        <li>Saat layar kecil atau tidak tersedia, seperti pada smartwatch dan IoT.</li>
        <li>Dalam kondisi lingkungan ekstrem atau minim visual.</li>
        <li>Untuk mendukung aksesibilitas bagi pengguna berkebutuhan khusus.</li>
      </ul>

      <p><strong><span style="font-size:24px;">Prinsip Desain Multimodal</span></strong></p>
      <ul>
        <li><strong>Redundansi:</strong> Informasi disampaikan dalam lebih dari satu modalitas.</li>
        <li><strong>Komplementaritas:</strong> Modalitas saling melengkapi.</li>
        <li><strong>Keselarasan (Synchrony):</strong> Interaksi antar modalitas berlangsung konsisten.</li>
      </ul>

      <p><strong><span style="font-size:24px;">Interaksi Berbasis Suara (Voice User Interface - VUI)</span></strong></p>

      <p><strong>Definisi VUI</strong></p>
      <p>Voice User Interface (VUI) adalah antarmuka yang memungkinkan pengguna berinteraksi menggunakan suara manusia. Contoh: Siri, Google Assistant, dan Amazon Alexa.</p>

      <p><strong>Komponen VUI</strong></p>
      <ul>
        <li>Speech Recognition: Mengubah suara menjadi teks.</li>
        <li>Natural Language Understanding (NLU): Memahami maksud perintah pengguna.</li>
        <li>Text-to-Speech (TTS): Mengubah respon sistem menjadi suara.</li>
      </ul>

      <p><strong>Prinsip Desain VUI</strong></p>
      <ul>
        <li>Conversational Design</li>
        <li>Turn-taking and Feedback</li>
        <li>Context-aware Interaction</li>
      </ul>

      <p><strong>Tantangan VUI</strong></p>
      <ul>
        <li>Noise and Misrecognition</li>
        <li>Ambiguity in Commands</li>
        <li>Privacy Issues</li>
      </ul>

      <p><strong><span style="font-size:24px;">Interaksi Berbasis Gesture</span></strong></p>

      <p><strong>Definisi</strong></p>
      <p>Interaksi berbasis gesture menggunakan gerakan tubuh, terutama tangan, untuk memberikan perintah. Contohnya adalah Microsoft Kinect, Leap Motion, dan Meta Quest Hand Tracking.</p>

      <p><strong>Kategori Gesture</strong></p>
      <ul>
        <li>Static Gesture</li>
        <li>Dynamic Gesture</li>
      </ul>

      <p><strong>Prinsip Desain Gesture</strong></p>
      <ul>
        <li>Konsistensi dan Naturalisasi</li>
        <li>Feedback Visual atau Audio</li>
        <li>Menghindari Gestur Melelahkan</li>
      </ul>

      <p><strong>Tantangan Gesture Interaction</strong></p>
      <ul>
        <li>Akurasi deteksi gerakan</li>
        <li>Perbedaan budaya</li>
        <li>Memorabilitas gestur</li>
      </ul>

      <p><strong><span style="font-size:24px;">Interaksi Berbasis Sentuhan (Touch Interaction)</span></strong></p>

      <p><strong>Definisi</strong></p>
      <p>Touch interaction dilakukan melalui sentuhan langsung pada layar atau permukaan. Contohnya adalah smartphone, tablet, dan kios touchscreen.</p>

      <p><strong>Tipe Touch Interaction</strong></p>
      <ul>
        <li>Tap, Swipe, Pinch, Drag</li>
        <li>Multi-touch gestures</li>
      </ul>

      <p><strong>Prinsip Desain Touch Interaction</strong></p>
      <ul>
        <li>Ukuran tombol sesuai Fitts’ Law</li>
        <li>Feedback visual dan haptic</li>
        <li>Desain adaptif</li>
      </ul>

      <p><strong>Tantangan Touch Interaction</strong></p>
      <ul>
        <li>Finger occlusion</li>
        <li>Responsivitas hardware</li>
        <li>Keterbatasan fisik pengguna</li>
      </ul>

      <p><strong><span style="font-size:24px;">Kesimpulan</span></strong></p>
      <p>Voice UI, gesture, dan touch interaction memungkinkan terciptanya sistem interaktif yang lebih natural, fleksibel, dan inklusif. Dengan memahami karakteristik dan tantangan masing-masing modalitas, desainer dapat menciptakan antarmuka yang efektif, efisien, dan berorientasi pada pengalaman pengguna.</p>
    `,
  },
});


const materialWeek14 = await prisma.material.create({
  data: {
    chapterId: chapter14.id,
    name: 'CURRENT TRENDS IN INTERACTION DESIGN INCLUDING THE IMPACT OF AI AND ETHICAL DESIGN',
    content: `
      <p><strong><span style="font-size:24px;">Current Trends in Interaction Design Including the Impact of AI and Ethical Design</span></strong></p>

      <p>Materi ini membahas tren terkini dalam desain interaksi, dampak kecerdasan buatan (AI) dalam UI/UX, serta pentingnya prinsip desain etis dalam pengembangan produk digital modern.</p>

      <p><strong><span style="font-size:24px;">Tujuan Pembelajaran</span></strong></p>
      <ul>
        <li>Menjelaskan tren terkini dalam desain interaksi.</li>
        <li>Menganalisis dampak AI dalam desain UI/UX.</li>
        <li>Mengevaluasi prinsip-prinsip desain etis.</li>
        <li>Memberikan contoh nyata penerapan desain berbasis tren, AI, dan etika.</li>
      </ul>

      <p><strong><span style="font-size:24px;">Definisi Tren Desain Interaksi</span></strong></p>
      <p>Tren desain interaksi adalah arah atau pola perkembangan yang populer dalam cara pengguna berinteraksi dengan produk digital. Tren ini berkembang seiring kemajuan teknologi dan perubahan perilaku pengguna.</p>

      <p><strong>Contoh Tren Terkini (2025)</strong></p>
      <ul>
        <li>Voice User Interface (VUI)</li>
        <li>AI-Driven Personalization</li>
        <li>Spatial Computing dan Augmented Reality (AR)</li>
      </ul>

      <p><strong><span style="font-size:24px;">Voice User Interface (VUI)</span></strong></p>
      <p>VUI memungkinkan pengguna berinteraksi melalui suara dan percakapan. Teknologi ini semakin populer karena kemudahan, kecepatan, dan aksesibilitasnya.</p>
      <p>Contoh: Siri, Google Assistant, Bixby Voice, Chatbot berbasis NLP.</p>

      <p><strong><span style="font-size:24px;">Augmented Reality (AR) dan Virtual Reality (VR)</span></strong></p>
      <p>AR dan VR menghadirkan pengalaman visual imersif dengan menggabungkan dunia fisik dan digital.</p>
      <ul>
        <li>IKEA Place: Menampilkan furnitur di ruang nyata.</li>
        <li>Google Earth VR: Eksplorasi bumi secara imersif.</li>
      </ul>

      <p><strong>Manfaat:</strong></p>
      <ul>
        <li>Meningkatkan keterlibatan pengguna.</li>
        <li>Memberikan pengalaman eksplorasi mendalam.</li>
      </ul>

      <p><strong><span style="font-size:24px;">Micro-interactions dan Adaptive Design</span></strong></p>
      <p><strong>Micro-interactions</strong> adalah interaksi kecil seperti animasi loading, perubahan ikon saat ditekan, dan notifikasi sukses.</p>
      <p><strong>Adaptive Design</strong> memungkinkan antarmuka menyesuaikan diri dengan konteks pengguna, seperti mode gelap otomatis dan mode berkendara saat GPS aktif.</p>

      <p><strong><span style="font-size:24px;">Bagaimana AI Mengubah UI/UX?</span></strong></p>
      <ul>
        <li>Automated Design Suggestions (Figma AI, Uizard)</li>
        <li>Predictive UX (Netflix Recommendation)</li>
        <li>Conversational UX (Chatbot dan Virtual Assistant)</li>
        <li>Dynamic Content Generation</li>
        <li>A/B Testing Otomatis</li>
      </ul>

      <p><strong><span style="font-size:24px;">AI dalam Interaksi Desain</span></strong></p>
      <p>AI meningkatkan personalisasi dan efisiensi interaksi.</p>
      <ul>
        <li>Rekomendasi konten: Netflix, Spotify</li>
        <li>Prediksi teks: Gmail, Google Search</li>
        <li>Pengenalan suara dan kebiasaan pengguna</li>
      </ul>

      <p><strong><span style="font-size:24px;">AI Tools untuk Desainer</span></strong></p>
      <ul>
        <li>Figma Auto Layout</li>
        <li>Galileo AI, Uizard</li>
        <li>ChatGPT untuk UX writing, ide desain, dan evaluasi</li>
      </ul>

      <p><strong><span style="font-size:24px;">Adaptive and Smart UI</span></strong></p>
      <p>UI adaptif mampu menyesuaikan tampilan dan fungsi berdasarkan konteks pengguna untuk meningkatkan efisiensi dan mengurangi beban kognitif.</p>
      <p>Contoh: Google Maps otomatis masuk mode navigasi saat mendeteksi pengguna berkendara.</p>

      <p><strong><span style="font-size:24px;">Tantangan Etika dalam Desain</span></strong></p>
      <ul>
        <li>Dark Patterns</li>
        <li>Manipulasi psikologis</li>
        <li>Privacy dan pelacakan data</li>
      </ul>

      <p><strong>Solusi:</strong></p>
      <ul>
        <li>Transparansi</li>
        <li>Pilihan pengguna yang jelas</li>
        <li>Edukasi etika desain</li>
      </ul>

      <p><strong><span style="font-size:24px;">Mengapa Etika Penting dalam Desain?</span></strong></p>
      <ul>
        <li>Melindungi privasi dan keamanan pengguna</li>
        <li>Mencegah manipulasi dan ketergantungan digital</li>
        <li>Mendorong keadilan, keterbukaan, dan inklusivitas</li>
      </ul>

      <p><strong><span style="font-size:24px;">Prinsip Desain Etis</span></strong></p>
      <ul>
        <li>Transparansi</li>
        <li>Kontrol pengguna</li>
        <li>Inklusivitas</li>
        <li>Minimalkan bias AI</li>
        <li>Hindari eksploitasi</li>
      </ul>

      <p><strong><span style="font-size:24px;">Framework Etika AI</span></strong></p>
      <ul>
        <li>Google AI Principles</li>
        <li>Mozilla Ethical AI Framework</li>
        <li>Stanford Human-Centered AI</li>
      </ul>

      <p><strong><span style="font-size:24px;">Contoh Penerapan Nyata</span></strong></p>
      <ul>
        <li>Spotify Wrapped – microinteractions & visualisasi interaktif</li>
        <li>Duolingo AI Lessons – personalisasi pembelajaran</li>
        <li>Mozilla Firefox Privacy Reports – transparansi data</li>
        <li>Headspace App – kombinasi desain emosional, AI, dan etika</li>
      </ul>

      <p><strong><span style="font-size:24px;">Kesimpulan</span></strong></p>
      <p>Desain interaksi modern dipengaruhi oleh tren teknologi, kecerdasan buatan, dan nilai etika. Produk digital yang sukses harus mampu menyeimbangkan inovasi, personalisasi, dan tanggung jawab sosial demi menjaga kepercayaan pengguna.</p>
    `,
  },
});


const materialWeek15 = await prisma.material.create({
  data: {
    chapterId: chapter15.id,
    name: 'Design Thinking Method',
    content: `
      <p><strong><span style="font-size: 24px;">Design Thinking Method</span></strong></p>
      <p><strong>11S2224 - Human Computer Interaction</strong><br>
      By: Ranty Deviana Siahaan, S.Kom., M.Eng.</p>

      <p><strong><span style="font-size: 24px;">Pendahuluan</span></strong></p>
      <p>
        Design Thinking merupakan sebuah pendekatan inovatif yang digunakan untuk memecahkan permasalahan kompleks 
        dengan cara yang kreatif, sistematis, dan berpusat pada manusia. Pendekatan ini menempatkan kebutuhan, 
        pengalaman, serta emosi pengguna sebagai fokus utama dalam proses perancangan solusi. Dalam konteks 
        Human Computer Interaction (HCI), Design Thinking digunakan untuk menghasilkan sistem interaktif yang 
        tidak hanya fungsional, tetapi juga mudah digunakan, intuitif, dan memberikan pengalaman pengguna 
        yang menyenangkan.
      </p>
      <p>
        Berbeda dengan pendekatan tradisional yang cenderung berorientasi pada aspek teknis, Design Thinking 
        menekankan pentingnya pemahaman mendalam terhadap pengguna sebelum merancang solusi. Pendekatan ini 
        sangat relevan diterapkan pada pengembangan produk digital, terutama ketika masalah yang dihadapi 
        bersifat kompleks, ambigu, dan belum memiliki solusi yang jelas.
      </p>

      <p><strong><span style="font-size: 24px;">Tujuan Pembelajaran</span></strong></p>
      <ul>
        <li>Membekali mahasiswa dengan pemahaman komprehensif mengenai konsep dan proses Design Thinking.</li>
        <li>Mengembangkan keterampilan berpikir kreatif, kritis, dan inovatif dalam menyelesaikan masalah.</li>
        <li>Mendorong mahasiswa merancang sistem interaksi manusia-komputer yang berorientasi pengguna.</li>
        <li>Mengintegrasikan pendekatan human-centered dalam proses perancangan sistem digital.</li>
      </ul>

      <p><strong><span style="font-size: 24px;">Apa itu Design Thinking?</span></strong></p>
      <p>
        Design Thinking adalah pendekatan pemecahan masalah yang menggabungkan empati terhadap pengguna, 
        kreativitas dalam menghasilkan ide, serta rasionalitas dalam menganalisis dan mengimplementasikan 
        solusi. Pendekatan ini tidak hanya digunakan dalam bidang desain, tetapi juga diterapkan secara luas 
        dalam pengembangan produk, layanan, bisnis, pendidikan, dan teknologi informasi.
      </p>
      <p>
        Inti dari Design Thinking terletak pada prinsip <strong>human-centered approach</strong>, yaitu 
        pendekatan yang memusatkan perhatian pada kebutuhan, perilaku, keterbatasan, dan konteks pengguna. 
        Selain itu, Design Thinking juga mempertimbangkan aspek teknologi dan kelayakan bisnis, sehingga solusi 
        yang dihasilkan tidak hanya kreatif, tetapi juga realistis dan berkelanjutan.
      </p>
      <ul>
        <li>Pendekatan kreatif untuk memecahkan masalah kompleks.</li>
        <li>Fokus pada kebutuhan pengguna, teknologi, dan viabilitas bisnis.</li>
        <li>Bersifat iteratif dan fleksibel.</li>
        <li>Mendorong eksplorasi ide dan inovasi.</li>
      </ul>

      <p><strong><span style="font-size: 24px;">Perbandingan UCD dan Design Thinking</span></strong></p>
      <p>
        <strong>User-Centered Design (UCD)</strong> dan <strong>Design Thinking</strong> sama-sama berorientasi 
        pada pengguna, namun memiliki tujuan dan karakteristik yang berbeda.
      </p>
      <p>
        UCD berfokus pada peningkatan usability, efisiensi, dan aksesibilitas sistem. Pendekatan ini umumnya 
        digunakan ketika permasalahan sudah jelas dan solusi yang diinginkan bersifat penyempurnaan dari 
        sistem yang sudah ada.
      </p>
      <p>
        Sebaliknya, Design Thinking digunakan ketika permasalahan masih ambigu dan membutuhkan eksplorasi 
        solusi inovatif. Pendekatan ini mendorong munculnya ide-ide baru yang kreatif dan sering kali 
        menghasilkan inovasi yang belum pernah ada sebelumnya.
      </p>

      <p><strong><span style="font-size: 24px;">Mengapa Menggunakan Design Thinking?</span></strong></p>
      <p>
        Design Thinking memiliki berbagai keunggulan yang membuatnya sangat efektif dalam pengembangan 
        sistem interaktif dan produk digital, di antaranya:
      </p>
      <ul>
        <li><strong>User-centered:</strong> memastikan solusi sesuai kebutuhan pengguna.</li>
        <li><strong>Fleksibel dan adaptif:</strong> mampu menyesuaikan diri terhadap perubahan kebutuhan dan konteks.</li>
        <li><strong>Mendorong kreativitas:</strong> membuka peluang munculnya ide-ide inovatif.</li>
        <li><strong>Mengurangi risiko kegagalan:</strong> melalui prototipe dan pengujian dini.</li>
        <li><strong>Kolaborasi multidisipliner:</strong> menggabungkan berbagai sudut pandang.</li>
      </ul>

      <p><strong><span style="font-size: 24px;">Karakteristik Design Thinking</span></strong></p>
      <ul>
        <li><strong>Kreatif:</strong> mendorong eksplorasi ide tanpa batas.</li>
        <li><strong>Multidisipliner:</strong> melibatkan berbagai latar belakang keilmuan.</li>
        <li><strong>Human-centered:</strong> menempatkan pengguna sebagai pusat solusi.</li>
        <li><strong>Iteratif:</strong> memungkinkan perbaikan berkelanjutan berdasarkan umpan balik.</li>
      </ul>

      <p><strong><span style="font-size: 24px;">Tahapan Design Thinking</span></strong></p>

      <p><strong>1. Empathize</strong></p>
      <p>
        Tahap empathize bertujuan untuk memahami kebutuhan, perasaan, motivasi, serta permasalahan nyata 
        yang dihadapi pengguna. Aktivitas yang dilakukan meliputi observasi, wawancara, survei, dan 
        shadowing. Pada tahap ini, desainer berusaha melihat masalah dari sudut pandang pengguna.
      </p>

      <p><strong>2. Define</strong></p>
      <p>
        Tahap define bertujuan untuk merumuskan problem statement yang jelas, spesifik, dan berfokus pada 
        pengguna. Hasil dari tahap ini adalah pernyataan masalah yang akan menjadi dasar pengembangan ide 
        solusi.
      </p>

      <p><strong>3. Ideate</strong></p>
      <p>
        Pada tahap ideate, tim menghasilkan sebanyak mungkin ide solusi melalui teknik brainstorming, 
        brainwriting, dan mind mapping. Tidak ada ide yang langsung ditolak pada tahap ini, karena tujuan 
        utamanya adalah eksplorasi kreatif.
      </p>

      <p><strong>4. Prototype</strong></p>
      <p>
        Prototype adalah representasi awal dari solusi yang diusulkan. Prototipe dibuat secara cepat, murah, 
        dan tidak harus sempurna, seperti sketsa, wireframe, atau mockup. Tujuannya adalah untuk 
        memvisualisasikan ide dan memperoleh umpan balik lebih awal.
      </p>

      <p><strong>5. Test</strong></p>
      <p>
        Tahap test bertujuan untuk menguji prototipe kepada pengguna nyata guna memperoleh feedback langsung. 
        Hasil pengujian digunakan untuk menyempurnakan solusi dan melakukan iterasi desain.
      </p>

      <p><strong><span style="font-size: 24px;">Studi Kasus</span></strong></p>
      <p>
        Permasalahan: Siswa mengalami kesulitan menemukan materi pembelajaran pada aplikasi e-learning 
        akibat navigasi yang kompleks.
      </p>
      <ul>
        <li><strong>Empathize:</strong> Melakukan wawancara dan observasi terhadap siswa.</li>
        <li><strong>Define:</strong> Merumuskan masalah: Navigasi tidak intuitif dan fitur pencarian tidak optimal.</li>
        <li><strong>Ideate:</strong> Menghasilkan ide fitur pencarian cepat dan filter materi.</li>
        <li><strong>Prototype:</strong> Membuat wireframe tampilan pencarian.</li>
        <li><strong>Test:</strong> Menguji prototipe kepada 10 siswa dan mengumpulkan umpan balik.</li>
      </ul>

      <p><strong><span style="font-size: 24px;">Kesimpulan</span></strong></p>
      <p>
        Design Thinking merupakan metode yang efektif dalam menghasilkan solusi inovatif dan berorientasi 
        pengguna. Pendekatan ini mendorong empati, kreativitas, kolaborasi, serta iterasi berkelanjutan, 
        sehingga mampu mengurangi risiko kegagalan produk dan meningkatkan kualitas pengalaman pengguna.
      </p>

      <p><strong><span style="font-size: 24px;">Referensi</span></strong></p>
      <ol>
        <li>Plattner, H., Meinel, C., & Leifer, L. (2015). Design Thinking Research. Springer.</li>
        <li>Brown, T. (2008). Design Thinking. Harvard Business Review.</li>
        <li>Wolniak, R. (2017). The Design Thinking Method and Its Stages. System Safety.</li>
      </ol>
    `,
  },
});


const material16 = await prisma.material.create({
  data: {
    chapterId: chapter16.id,
    name: 'Ringkasan Materi Akhir Semester',
    content: `
      <p>
        Human Computer Interaction (HCI) merupakan bidang ilmu yang mempelajari bagaimana manusia berinteraksi dengan sistem komputer secara efektif, efisien, aman, dan menyenangkan. Fokus utama HCI adalah perancangan, evaluasi, dan implementasi sistem interaktif yang berpusat pada pengguna (user-centered). Tujuan utama HCI adalah meningkatkan kualitas pengalaman pengguna (user experience) melalui antarmuka yang mudah digunakan, intuitif, serta mampu memenuhi kebutuhan pengguna secara optimal.
      </p>

      <p>
        Salah satu konsep utama dalam HCI adalah <strong>usability</strong>, yang mencakup efektivitas, efisiensi, dan kepuasan pengguna dalam menggunakan suatu sistem. Usability memastikan bahwa sistem mudah dipelajari, mudah digunakan, serta toleran terhadap kesalahan. Untuk mencapai usability yang baik, desain antarmuka harus mempertimbangkan kemampuan kognitif, keterbatasan fisik, serta konteks penggunaan pengguna.
      </p>

      <p>
        Pendekatan <strong>Design Thinking</strong> digunakan dalam pengembangan sistem interaktif untuk memecahkan masalah yang kompleks dan ambigu. Proses ini terdiri dari lima tahap utama, yaitu <em>Empathize</em>, <em>Define</em>, <em>Ideate</em>, <em>Prototype</em>, dan <em>Test</em>. Design Thinking menekankan pentingnya empati terhadap pengguna, eksplorasi ide kreatif, serta iterasi berkelanjutan untuk menghasilkan solusi yang inovatif dan relevan dengan kebutuhan pengguna.
      </p>

      <p>
        Dalam evaluasi sistem interaktif, digunakan berbagai metode seperti <strong>usability testing</strong>, <strong>heuristic evaluation</strong>, dan <strong>think-aloud protocol</strong>. Metode-metode ini bertujuan untuk mengidentifikasi permasalahan usability, memahami pola perilaku pengguna, serta memperoleh umpan balik langsung yang dapat digunakan untuk penyempurnaan desain.
      </p>

      <p>
        Aspek psikologis dan emosional juga menjadi perhatian penting dalam HCI melalui konsep <strong>Emotional Design</strong> dan <strong>Hedonic Motivation System Adoption Model (HMSAM)</strong>. Pendekatan ini menekankan bahwa sistem tidak hanya harus fungsional, tetapi juga mampu memberikan pengalaman yang menyenangkan, menarik, dan memotivasi pengguna. Faktor seperti rasa senang (joy), rasa ingin tahu (curiosity), kontrol, dan imersi memengaruhi niat serta keberlanjutan penggunaan sistem.
      </p>

      <p>
        Prinsip-prinsip desain kognitif seperti <strong>Cognitive Load Theory</strong>, <strong>Gestalt Principles</strong>, <strong>Fitts’ Law</strong>, dan <strong>Hick’s Law</strong> digunakan untuk merancang antarmuka yang lebih intuitif. Prinsip-prinsip ini membantu meminimalkan beban mental pengguna, mempercepat pengambilan keputusan, serta meningkatkan akurasi dan kenyamanan dalam berinteraksi.
      </p>

      <p>
        Perkembangan teknologi modern mendorong munculnya berbagai bentuk interaksi baru, seperti <strong>touch interaction</strong>, <strong>gesture interaction</strong>, <strong>voice user interface (Voice UI)</strong>, dan <strong>multimodal interaction</strong>. Kombinasi berbagai modalitas ini memungkinkan interaksi yang lebih natural, fleksibel, dan adaptif terhadap berbagai situasi penggunaan.
      </p>

      <p>
        Integrasi <strong>Artificial Intelligence (AI)</strong> dalam UI/UX memungkinkan terwujudnya personalisasi antarmuka, predictive UX, dan sistem rekomendasi yang meningkatkan relevansi serta kenyamanan pengguna. Namun, penggunaan AI juga menimbulkan tantangan etis terkait privasi, keamanan data, transparansi, serta potensi manipulasi perilaku pengguna.
      </p>

      <p>
        Oleh karena itu, <strong>desain etis</strong> menjadi prinsip fundamental dalam pengembangan sistem interaktif modern. Desain etis menekankan perlindungan hak pengguna, transparansi pengelolaan data, keadilan, serta pemberian kontrol penuh kepada pengguna atas informasi dan interaksi mereka. Penerapan desain etis membantu membangun kepercayaan, loyalitas, serta keberlanjutan penggunaan sistem.
      </p>

      <p>
        Secara keseluruhan, HCI berperan penting dalam menciptakan sistem digital yang tidak hanya canggih secara teknologi, tetapi juga bermanfaat, aman, nyaman, dan bermakna bagi manusia. Pendekatan human-centered yang diterapkan dalam HCI memastikan bahwa teknologi berkembang sejalan dengan kebutuhan dan nilai-nilai kemanusiaan.
      </p>
    `,
  },
});


    // ASSESSMENT

    const assessment1 = await prisma.assessment.create({
      data: {
        chapterId: chapter1.id,
        instruction: 'Pilihlah jawaban yang menurut anda paling benar. Silahkan screenshot hasil dari kuis setelah selesai',
        questions: JSON.stringify([
          {
            question: "Platform media sosial TikTok saat ini sangat populer di kalangan pengguna. Dari perspektif HCI, faktor utama yang membuat aplikasi ini sukses adalah...",
            options: [
              "Penggunaan server yang canggih",
              "Kode pemrograman yang kompleks",
              "Pemahaman mendalam tentang perilaku dan preferensi pengguna",
              "Penggunaan algoritma AI terbaru",
              "Jumlah dana pengembangan yang besar"
            ],
            answer: "Pemahaman mendalam tentang perilaku dan preferensi pengguna",
            type: "MC"
          },
          {
            question: "Sebuah aplikasi mobile banking memiliki tampilan yang sangat menarik dengan animasi dan grafik yang kompleks, namun beberapa pengguna lansia kesulitan melakukan transaksi dasar. Hal ini menunjukkan bahwa aplikasi tersebut telah memenuhi prinsip utama HCI.",
            options: ["True", "False"],
            answer: "False",
            type: "MC"
          },
          {
            question: "Seorang pengembang website e-commerce menggunakan warna merah untuk tombol Beli Sekarang dan warna abu-abu untuk tombol Tambah ke Keranjang. Keputusan ini termasuk dalam aspek komputer dari HCI.",
            options: ["True", "False"],
            answer: "False",
            type: "MC"
          },
          {
            question: "Sebuah smart TV terbaru menggunakan kontrol suara sebagai input utama. Hal ini merupakan implementasi dari bidang studi yang mempengaruhi HCI yaitu...",
            options: ["Ergonomi", "Psikologi Kognitif", "Linguistik", "Semiotika", "Antropologi"],
            answer: "Linguistik",
            type: "MC"
          },
          {
            question: "Di sebuah rumah sakit, sistem informasi yang baru dipasang mengalami penolakan dari para perawat karena merasa sistem terlalu rumit dibanding pencatatan manual. Dari perspektif HCI, hal ini menunjukkan kegagalan dalam...",
            options: [
              "Kapasitas server",
              "Kecepatan internet",
              "Human-centered design",
              "Design thingking",
              "Usability Testing"
            ],
            answer: "Human-centered design",
            type: "MC"
          },
          { 
            question: 'Jelaskan semua yang sudah anda pahami tentang materi Kuliah Interaksi Manusia Komputer', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
        ]),
      },
    });

    const assessment2 = await prisma.assessment.create({
      data: {
        chapterId: chapter2.id,
        instruction: 'Pilihlah jawaban yang menurut anda paling benar. Silahkan screenshot hasil dari kuis setelah selesai',
        questions: JSON.stringify([
          {
            question: "Sebuah game mobile memiliki tutorial interaktif yang memandu pemain baru step by step. Ini adalah contoh implementasi aspek computer dalam HCI.",
            options: ["True", "False"],
            answer: "True",
            type: "MC"
          },
          {
            question: "Marketplace online menerapkan fitur Rekomendasi Produk berdasarkan riwayat pencarian pengguna. Hal ini merupakan implementasi dari fokus HCI dalam hal...",
            options: [
              "Keamanan sistem",
              "Efisiensi database",
              "User experience",
              "Kecepatan loading",
              "Kapasitas server"
            ],
            answer: "User experience",
            type: "MC"
          },
          {
            question: "Dalam pengembangan aplikasi kesehatan, tim developer menempatkan tombol Panggil Ambulans di pojok kanan atas dengan warna merah mencolok. Keputusan ini didasari oleh bidang studi yang mempengaruhi HCI yaitu...",
            options: [
              "Sosiologi",
              "Psikologi Kognitif",
              "Matematika",
              "Komputer Graphics",
              "Database"
            ],
            answer: "Psikologi Kognitif",
            type: "MC"
          },
          {
            question: "Situs berita online yang memuat banyak konten teks dan gambar namun loading-nya cepat adalah contoh implementasi tujuan HCI dalam hal efisiensi sistem.",
            options: ["True", "False"],
            answer: "True",
            type: "MC"
          },
          {
            question: "Dalam pengembangan ATM terbaru, layar dibuat lebih rendah untuk mengakomodasi pengguna kursi roda. Ini adalah implementasi dari bidang studi yang mempengaruhi HCI yaitu...",
            options: ["Ergonomi", "Psikologi", "Linguistik", "Matematika", "Grafik Komputer"],
            answer: "Ergonomi",
            type: "MC"
          },
          {
            question: "Sebuah aplikasi banking menerapkan fitur autentikasi biometrik (sidik jari/wajah) sebagai alternatif dari password. Dari perspektif Human Factors, hal ini menguntungkan karena...",
            options: [
              "Meningkatkan kecepatan server",
              "Mengurangi beban kognitif pengguna",
              "Menghemat ruang penyimpanan",
              "Meningkatkan bandwidth",
              "Mengurangi biaya operasional"
            ],
            answer: "Mengurangi beban kognitif pengguna",
            type: "MC"
          },
          {
            question: "Aplikasi pembelajaran online menampilkan pesan error 404 - Page Not Found ketika terjadi kesalahan. Hal ini tidak sesuai dengan prinsip desain Human-Centered karena...",
            options: [
              "Menggunakan bahasa teknis",
              "Terlalu singkat",
              "Bahasa Asing",
              "Terlalu panjang",
              "Menggunakan angka"
            ],
            answer: "Menggunakan bahasa teknis",
            type: "MC"
          },
          {
            question: "Sebuah website e-commerce menempatkan tombol Checkout di lokasi yang berbeda-beda setiap kali halaman dimuat ulang untuk memberikan variasi tampilan.",
            options: ["True", "False"],
            answer: "False",
            type: "MC"
          },
          {
            question: "Dalam merancang aplikasi untuk lansia, pengembang menggunakan...",
            options: [
              "Font kecil untuk menghemat ruang",
              "Warna kontras tinggi dan font besar",
              "Animasi yang cepat dan dinamis",
              "Banyak menu tersembunyi",
              "Suara latar yang keras"
            ],
            answer: "Warna kontras tinggi dan font besar",
            type: "MC"
          },
          {
            question: "Seorang desainer membuat form pendaftaran yang meminta pengguna mengisi 20 field dalam satu halaman. Dari perspektif Human Factors, ini bermasalah karena...",
            options: [
              "Terlalu banyak beban server",
              "Masalah keamanan data",
              "Overload kognitif pengguna",
              "Kecepatan internet",
              "Masalah database"
            ],
            answer: "Overload kognitif pengguna",
            type: "MC"
          },
          { 
            question: 'Jelaskan semua yang sudah anda pahami tentang materi Kuliah Human Factors and Ergonomic Principles in Design Interaction ', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
        ]),
      },
    });

    const assessment3 = await prisma.assessment.create({
      data: {
        chapterId: chapter3.id,
        instruction: 'Pilihlah jawaban yang menurut anda paling benar. Silahkan screenshot hasil dari kuis setelah selesai',
        questions: JSON.stringify([
          {
              question: "Dalam mendesain workspace virtual, pengembang harus mempertimbangkan...",
              options: [
                "Hanya aspek visual",
                "Hanya aspek auditori",
                "anya aspek kognitif",
                "Multisensory ergonomics",
                "Hanya aspek motor"
              ],
              answer: "Multisensory ergonomics",
              type: "MC"
            },
            {
              question: "Menggunakan warna merah untuk tombol Hapus dan hijau untuk tombol Simpan adalah contoh penerapan model mental yang baik.",
              options: ["True", "False"],
              answer: "True",
              type: "MC"
            },
            {
              question: "Aplikasi produktivitas menampilkan notifikasi setiap 5 menit untuk mengingatkan deadline. Dari perspektif Human Factors, ini problematik karena...",
              options: [
                "Terlalu banyak interupsi",
                "Masalah baterai",
                "Masalah jaringan",
                "Keamanan data",
                "Masalah storage"
              ],
              answer: "Terlalu banyak interupsi",
              type: "MC"
            },
            {
              question: "Dalam mendesain aplikasi untuk anak-anak, pertimbangan Human Factors yang paling penting adalah...",
              options: [
                "Kecepatan sistem",
                "Kapasitas storage",
                "Perkembangan motorik",
                "Efisiensi database",
                "Keamanan server"
              ],
              answer: "Perkembangan motorik",
              type: "MC"
            },
            {
              question: "Aplikasi video conference menggunakan layout yang dapat disesuaikan pengguna. Ini merupakan implementasi dari...",
              options: [
                "Fleksibilitas dan efisiensi",
                "Kecepatan sistem",
                "Keamanan data",
                "Manajemen server",
                "Protokol jaringan"
              ],
              answer: "Fleksibilitas dan efisiensi",
              type: "MC"
            },
            {
              question: "Aplikasi mobile banking memiliki fitur keamanan yang sangat ketat dengan 5 langkah verifikasi setiap kali login. Hal ini menunjukkan tingkat usability yang tinggi karena mengutamakan keamanan pengguna.",
              options: ["True", "False"],
              answer: "False",
              type: "MC"
            },
            {
              question: "Sebuah aplikasi pembelajaran online menampilkan pesan error seperti berikut: \"Error code: 0x80070057\". Dari perspektif usability, pesan ini bermasalah karena...",
              options: [
                "Terlalu pendek",
                "Tidak informatif dan sulit dipahami",
                "Menggunakan huruf kecil",
                "Tidak berwarna merah",
                "Tidak ada suara"
              ],
              answer: "Tidak informatif dan sulit dipahami",
              type: "MC"
          },
          {
            question: "Aplikasi pemesanan tiket bioskop memberikan waktu 5 menit untuk menyelesaikan transaksi. Hal ini merupakan implementasi..",
            options: [
              "Efficiency of use",
              "Memorability",
              "Learnability",
              "Satisfaction",
              "Security"
            ],
            answer: "Efficiency of use",
            type: "MC"
          },
          {
            question: "Sebuah form pendaftaran yang menampilkan pesan error setelah user selesai mengisi semua field adalah contoh implementasi usability yang baik.",
            options: ["True", "False"],
            answer: "False",
            type: "MC"
          },
          {
            question: "Website e-learning memberikan badge dan poin untuk setiap tugas yang diselesaikan. Ini meningkatkan usability melalui aspek...",
            options: ["Efficiency", "Learnability", "Satisfaction", "Security", "Speed"],
            answer: "Satisfaction",
            type: "MC"
          },
          { 
            question: 'Jelaskan semua yang sudah anda pahami tentang materi Usability', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
        ]),
      },
    });

    const assessment4 = await prisma.assessment.create({
      data: {
        chapterId: chapter4.id,
        instruction: 'Pilihlah jawaban yang menurut anda paling benar. Silahkan screenshot hasil dari kuis setelah selesai',
        questions: JSON.stringify([
          {
            question: "Seorang pengguna sedang mengisi formulir pendaftaran dalam aplikasi layanan kesehatan. Namun, tidak ada indikator yang menunjukkan apakah sistem sedang memproses data atau tidak. Pengguna merasa bingung apakah formulir telah terkirim atau belum. Prinsip heuristik mana yang tidak diterapkan?",
            options: [
              "Visibility of System Status",
              "User Control and Freedom",
              "Consistency and Standards",
              "Flexibility and Efficiency of Use",
              "Aesthetic and Minimalist Design"
            ],
            answer: "Visibility of System Status",
            type: "MC"
          },
          {
            question: "Dalam sebuah aplikasi mobile, pengguna sering kali tidak sengaja keluar dari aplikasi ketika mencoba menekan tombol “KEMBALI” di halaman pengaturan. Sistem tidak memberikan konfirmasi sebelum keluar. Prinsip mana yang seharusnya diterapkan?",
            options: [
              "Error Prevention",
              "Help and Documentation",
              "User Control and Freedom",
              "Recognition Rather than Recall",
              "Match between System and the Real World"
            ],
            answer: "User Control and Freedom",
            type: "MC"
          },
          {
            question: "Sebuah aplikasi e-commerce memiliki menu navigasi yang berbeda di setiap halaman. Hal ini membuat pengguna kesulitan berpindah antar halaman. Prinsip heuristik mana yang dilanggar?",
            options: [
              "Recognition Rather than Recall",
              "Consistency and Standards",
              "Visibility of System Status",
              "Aesthetic and Minimalist Design",
              "Error Prevention"
            ],
            answer: "Consistency and Standards",
            type: "MC"
          },
          {
            question: "Sebuah aplikasi bank menggunakan istilah “AUTHENTIFICATION TOKEN” untuk menginformasikan kode OTP kepada pengguna. Banyak pengguna bingung dengan istilah tersebut. Prinsip mana yang seharusnya diterapkan?",
            options: [
              "Flexibility and Efficiency of Use",
              "Help Users Recognize, Diagnose, and Recover from Errors",
              "Error Prevention",
              "Match between System and the Real World",
              "Consistency and Standards"
            ],
            answer: "Match between System and the Real World",
            type: "MC"
          },
          {
            question: "Seorang pelanggan sedang membeli produk melalui aplikasi belanja online. Setelah memasukkan alamat, sistem tiba-tiba menghapus semua data yang telah diisi. Hal ini melanggar prinsip:",
            options: [
              "Error Prevention",
              "Help and Documentation",
              "Aesthetic and Minimalist Design",
              "Visibility of System Status",
              "Consistency and Standards"
            ],
            answer: "Error Prevention",
            type: "MC"
          },
          { 
            question: 'Jelaskan semua yang sudah anda pahami tentang materi Heuristic Evaluation: Nielsens 10 principles ', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
          
        ]),
      },
    });

    const assessment5 = await prisma.assessment.create({
      data: {
        chapterId: chapter5.id,
        instruction: 'Pilihlah jawaban yang menurut anda paling benar. Silahkan screenshot hasil dari kuis setelah selesai',
        questions: JSON.stringify([
          {
            question: "Seorang desainer grafis menggunakan aplikasi edit foto, tetapi aplikasi tersebut tidak memiliki tombol “UNDO” untuk membatalkan perubahan. Hal ini melanggar prinsip:",
            options: [
              "User Control and Freedom",
              "Visibility of System Status",
              "Aesthetic and Minimalist Design",
              "Error Prevention",
              "Recognition Rather than Recall"
            ],
            answer: "User Control and Freedom",
            type: "MC"
          },
          {
            question: "Saat login ke aplikasi perbankan, pengguna mendapatkan pesan error: “ERROR 405: ACCESS DENIED”, tanpa penjelasan lebih lanjut. Prinsip mana yang tidak diterapkan?",
            options: [
              "Error Prevention",
              "Help Users Recognize, Diagnose, and Recover from Errors",
              "Consistency and Standards",
              "Visibility of System Status",
              "Aesthetic and Minimalist Design"
            ],
            answer: "Help Users Recognize, Diagnose, and Recover from Errors",
            type: "MC"
          },
          {
            question: "Sebuah aplikasi desain grafis memiliki banyak fitur tersembunyi yang hanya dapat diakses dengan shortcut keyboard yang tidak dijelaskan di antarmuka. Prinsip heuristik apa yang diabaikan?",
            options: [
              "Flexibility and Efficiency of Use",
              "Visibility of System Status",
              "Help and Documentation",
              "Recognition Rather than Recall",
              "Consistency and Standards"
            ],
            answer: "Flexibility and Efficiency of Use",
            type: "MC"
          },
          {
            question: "Seorang pengguna ingin mengatur ulang pengaturan aplikasi, tetapi tidak ada panduan atau dokumentasi yang menjelaskan bagaimana cara melakukannya. Prinsip mana yang dilanggar?",
            options: [
              "Help and Documentation",
              "Consistency and Standards",
              "Match between System and the Real World",
              "Recognition Rather than Recall",
              "Error Prevention"
            ],
            answer: "Help and Documentation",
            type: "MC"
          },
          {
            question: "Sebuah aplikasi manajemen proyek memiliki terlalu banyak informasi yang ditampilkan dalam satu layar, membuat pengguna kesulitan fokus pada tugas utama. Prinsip mana yang harus diterapkan?",
            options: [
              "Aesthetic and Minimalist Design",
              "Recognition Rather than Recall",
              "Help Users Recognize, Diagnose, and Recover from Errors",
              "Visibility of System Status",
              "User Control and Freedom"
            ],
            answer: "Aesthetic and Minimalist Design",
            type: "MC"
          },
          { 
            question: 'Jelaskan semua yang sudah anda pahami tentang materi Visual Elements, Information Hierarchy, Consistency, and Interface Readability ', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
        ]),
      },
    });

    const assessment6 = await prisma.assessment.create({
      data: {
        chapterId: chapter6.id,
        instruction: 'Pilihlah jawaban yang menurut anda paling benar. Silahkan screenshot hasil dari kuis setelah selesai',
        questions: JSON.stringify([
          {
            question: "Sebuah aplikasi layanan kesehatan menggunakan latar belakang biru tua dengan teks hitam untuk menampilkan informasi pasien. Beberapa pengguna mengeluh bahwa mereka sulit membaca teks tersebut. Prinsip desain mana yang diabaikan?",
            options: [
              "Visual Hierarchy",
              "Typography Readability",
              "Color Contrast",
              "Recognition Rather than Recall",
              "User Control and Freedom"
            ],
            answer: "Color Contrast",
            type: "MC"
          },
          {
            question: "Sebuah situs e-commerce memiliki tombol “CHECKOUT” yang di beberapa halaman ditampilkan sebagai “BAYAR SEKARANG”. Hal ini membuat pengguna bingung. Masalah ini terkait dengan prinsip:",
            options: [
              "Consistency and Standards",
              "User Control and Freedom",
              "Information Hierarchy",
              "Aesthetic and Minimalist Design",
              "Error Prevention"
            ],
            answer: "Consistency and Standards",
            type: "MC"
          },
          {
            question: "Sebuah aplikasi berita menggunakan layout yang tidak sejajar, dengan paragraf yang memiliki panjang baris tidak konsisten dan tata letak yang tampak berantakan. Hal ini berkaitan dengan:",
            options: [
              "Information Grouping",
              "Alignment and Grids",
              "Whitespace Management",
              "Recognition Rather than Recall",
              "Error Prevention"
            ],
            answer: "Alignment and Grids",
            type: "MC"
          },
          {
            question: "Sebuah aplikasi keuangan menggunakan font dengan ukuran sangat kecil untuk menampilkan laporan transaksi. Hal ini menyebabkan pengguna mengalami kesulitan membaca detail transaksi mereka. Prinsip desain manakah yang tidak diterapkan dengan baik?",
            options: [
              "Typography Readability",
              "Color Contrast",
              "Information Hierarchy",
              "Error Prevention",
              "Aesthetic and Minimalist Design"
            ],
            answer: "Typography Readability",
            type: "MC"
          },
          {
            question: "Sebuah situs pendidikan menampilkan judul artikel dengan ukuran lebih kecil dibandingkan isi artikel. Hal ini menyulitkan pengguna dalam menemukan informasi utama. Prinsip desain manakah yang tidak diterapkan dengan baik?",
            options: [
              "User Control and Freedom",
              "Information Grouping",
              "Visual Hierarchy",
              "Recognition Rather than Recall",
              "Consistency and Standards"
            ],
            answer: "Visual Hierarchy",
            type: "MC"
          },
          {
            question: "Dalam sebuah aplikasi mobile banking, tombol “TRANSFER” dan “HAPUS AKUN” memiliki warna yang sama. Hal ini meningkatkan risiko kesalahan pengguna. Prinsip desain manakah yang harus diterapkan?",
            options: [
              "Error Prevention",
              "Consistency and Standards",
              "Flexibility and Efficiency of Use",
              "Help and Documentation",
              "Aesthetic and Minimalist Design"
            ],
            answer: "Error Prevention",
            type: "MC"
          },
          {
            question: "Sebuah aplikasi pesan instan menggunakan ikon berbentuk segitiga untuk fitur “BALAS PESAN”, yang tidak umum digunakan dalam aplikasi serupa. Hal ini dapat mengurangi:",
            options: [
              "Consistency and Standards",
              "Recognition Rather than Recall",
              "Error Prevention",
              "Typography Readability",
              "Information Grouping"
            ],
            answer: "Recognition Rather than Recall",
            type: "MC"
          },
          {
            question: "Dalam sebuah aplikasi manajemen proyek, semua elemen ditempatkan sangat berdekatan tanpa ruang kosong yang cukup. Hal ini membuat tampilan terlihat penuh dan sulit dipahami. Apa masalah utama dalam desain ini?",
            options: [
              "Typography Readability",
              "Color Contrast",
              "Whitespace Management",
              "Information Grouping",
              "User Control and Freedom"
            ],
            answer: "Whitespace Management",
            type: "MC"
          },
          {
            question: "Sebuah aplikasi berbagi resep makanan menggunakan berbagai jenis font untuk setiap bagian aplikasi, membuat tampilan terlihat tidak profesional dan sulit dibaca. Prinsip mana yang harus diterapkan?",
            options: [
              "Consistency and Standards",
              "User Control and Freedom",
              "Aesthetic and Minimalist Design",
              "Typography Readability",
              "Information Grouping"
            ],
            answer: "Consistency and Standards",
            type: "MC"
          },
          {
            question: "Dalam sebuah situs berita, paragraf utama dan sidebar diletakkan dalam ukuran yang sama, sehingga pengguna sulit membedakan informasi utama dan sekunder. Prinsip desain mana yang tidak diterapkan?",
            options: [
              "Information Grouping",
              "Visual Hierarchy",
              "Consistency and Standards",
              "Recognition Rather than Recall",
              "Aesthetic and Minimalist Design"
            ],
            answer: "Visual Hierarchy",
            type: "MC"
          },
          { 
            question: 'Jelaskan semua yang sudah anda pahami tentang materi User Centered Design', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
        ]),
      },
    });

    const assessment7 = await prisma.assessment.create({
      data: {
        chapterId: chapter7.id,
        instruction: 'Pilihlah jawaban yang menurut anda paling benar. Silahkan screenshot hasil dari kuis setelah selesai',
        questions: JSON.stringify([
          {
            question: "Seorang pengguna aplikasi peta digital merasa bingung karena tombol navigasi sering berubah posisi setiap kali memperbesar tampilan peta. Hal ini melanggar prinsip Consistency and Standards.",
            options: ["True", "False"],
            answer: "True",
            type: "MC"
          },
          {
            question: "Sebuah aplikasi perbankan online memberikan pesan error yang hanya bertuliskan “Gagal!” tanpa menjelaskan alasan atau solusi. Ini melanggar prinsip Help Users Recognize, Diagnose, and Recover from Errors.",
            options: ["True", "False"],
            answer: "True",
            type: "MC"
          },
          {
            question: "Dalam sebuah aplikasi, tombol “Simpan” dan “Hapus” memiliki warna yang sama dan terletak berdampingan, sehingga pengguna sering salah klik. Ini merupakan contoh pelanggaran prinsip Error Prevention.",
            options: ["True", "False"],
            answer: "True",
            type: "MC"
          },
          {
            question: "Saat pengguna mengisi formulir online, sistem secara otomatis menyimpan progres mereka sehingga mereka tidak kehilangan data jika koneksi terputus. Ini sesuai dengan prinsip Flexibility and Efficiency of Use.",
            options: ["True", "False"],
            answer: "True",
            type: "MC"
          },
          {
            question: "Sebuah situs web e-learning mengharuskan pengguna mengingat kode mata kuliah untuk mencari kursus. Ini melanggar prinsip Recognition Rather than Recall.",
            options: ["True", "False"],
            answer: "True",
            type: "MC"
          },
          {
            question: "Sebuah aplikasi transportasi online menggunakan ikon berbentuk bintang untuk menunjukkan lokasi pengguna saat ini. Pengguna merasa bingung karena biasanya ikon lokasi digambarkan dengan bentuk pin atau titik. Hal ini melanggar prinsip Familiarity dalam Iconography.",
            options: ["True", "False"],
            answer: "True",
            type: "MC"
          },
          {
            question: "Dalam aplikasi e-commerce, semua elemen ditempatkan sangat berdekatan tanpa ruang kosong yang cukup. Hal ini membuat pengguna kesulitan membedakan bagian produk, harga, dan tombol beli. Ini menunjukkan penggunaan Whitespace yang buruk.",
            options: ["True", "False"],
            answer: "True",
            type: "MC"
          },
          {
            question: "Seorang desainer menggunakan warna kuning terang untuk teks utama pada latar belakang putih dalam aplikasi e-learning. Hal ini meningkatkan keterbacaan dan memudahkan pengguna membaca konten.",
            options: ["True", "False"],
            answer: "False",
            type: "MC"
          },
          {
            question: "Sebuah aplikasi media sosial menggunakan tombol \"Suka\" dengan ikon hati di beberapa bagian aplikasi, tetapi menggunakan ikon jempol di bagian lainnya untuk fungsi yang sama. Ini melanggar prinsip Consistency and Standards.",
            options: ["True", "False"],
            answer: "True",
            type: "MC"
          },
          {
            question: "Sebuah aplikasi berita menggunakan font serif untuk teks utama dan font sans-serif untuk judul. Ini merupakan praktik yang baik dalam tipografi.",
            options: ["True", "False"],
            answer: "True",
            type: "MC"
          },
          { 
            question: 'Jelaskan semua yang sudah anda pahami tentang materi Implementation of User-centered Design', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
        ]),
      },
    });

    const assessment8 = await prisma.assessment.create({
      data: {
        chapterId: chapter8.id,
        instruction: 'Pilihlah jawaban yang menurut anda paling benar. Silahkan screenshot hasil dari kuis setelah selesai',
        questions: JSON.stringify([
          { 
            question: 'Apa yang dimaksud dengan Interaksi Manusia-Komputer (IMK)?', 
            options: [
              'Proses komunikasi antara dua komputer', 
              'Proses interaksi antara manusia dan perangkat keras komputer', 
              'Proses interaksi antara manusia dan perangkat lunak komputer',
              'Proses komunikasi antara manusia dan komputer melalui antarmuka'
            ],
            answer: 'Proses komunikasi antara manusia dan komputer melalui antarmuka',
            type: 'MC'
          },
          { 
            question: 'Apa yang menjadi tujuan utama dalam desain User Interface (UI)?', 
            options: [
              'Membuat perangkat keras komputer lebih efisien', 
              'Mempermudah pengguna dalam berinteraksi dengan sistem', 
              'Proses interaksi antara manusia dan perangkat lunak komputer',
              'Proses komunikasi antara manusia dan komputer melalui antarmuka'
            ],
            answer: 'Mempermudah pengguna dalam berinteraksi dengan sistem',
            type: 'MC'
          },
          { 
            question: 'User Experience (UX) merujuk pada:', 
            options: [
              'Bagaimana pengguna merasakan pengalaman mereka selama menggunakan aplikasi',
              'Desain tampilan antarmuka pengguna',
              'Penggunaan teknologi dalam pengembangan aplikasi',
              'Pemrograman perangkat lunak untuk pengguna'
            ],
            answer: 'Bagaimana pengguna merasakan pengalaman mereka selama menggunakan aplikasi',
            type: 'MC'
          },
          { 
            question: 'Apa yang dimaksud dengan usability dalam konteks desain UI/UX?', 
            options: [
              'Pengukuran seberapa mudah dan efisien antarmuka digunakan',
              'Kualitas grafis yang ditampilkan pada antarmuka',
              'Jumlah fitur yang ada pada aplikasi',
              'Kecepatan loading aplikasi'
            ],
            answer: 'Pengukuran seberapa mudah dan efisien antarmuka digunakan',
            type: 'MC'
          },
          { 
            question: 'Wireframe adalah:', 
            options: [
              'Proses pengkodean aplikasi', 
              'Desain awal yang menunjukkan struktur dan elemen utama dari aplikasi', 
              'Proses pengujian aplikasi', 
              'Desain grafis yang menonjolkan warna dan font'
            ],
            answer: 'Desain awal yang menunjukkan struktur dan elemen utama dari aplikasi',
            type: 'MC'
          },
          { 
            question: 'Jelaskan Apa itu Penelitian', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
          { 
            question: 'Preferensi Pengguna seperti apa yang kalian maksud?', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
          { 
            question: 'Elearning seperti apa yang akan dibangun disini?', 
            options: [
              ''
            ],
            answer: '',
            type: 'EY'
          },
        ]),
      },
    });

    const assessment9 = await prisma.assessment.create({
  data: {
    chapterId: chapter9.id,
    instruction: 'Pilihlah jawaban yang menurut anda paling benar. Silahkan screenshot hasil dari kuis setelah selesai',
    questions: JSON.stringify([
      {
        question: 'Tujuan utama usability testing dalam pengembangan sistem interaktif adalah untuk …',
        options: [
          'Mengurangi biaya pengembangan perangkat lunak',
          'Memastikan sistem sesuai spesifikasi teknis',
          'Menjamin pengalaman pengguna yang efektif dan efisien',
          'Menggantikan peran pengembang dalam desain'
        ],
        answer: 'Menjamin pengalaman pengguna yang efektif dan efisien',
        type: 'MC'
      },
      {
        question: 'Penurunan churn rate pengguna dapat dicegah secara langsung melalui usability testing karena …',
        options: [
          'Sistem menjadi lebih kompleks',
          'Pengguna dipaksa mengikuti alur sistem',
          'Masalah usability teridentifikasi sebelum rilis luas',
          'Biaya maintenance meningkat'
        ],
        answer: 'Masalah usability teridentifikasi sebelum rilis luas',
        type: 'MC'
      },
      {
        question: 'Heuristic Evaluation umumnya dilakukan oleh 3–5 evaluator independen karena …',
        options: [
          'Menghemat biaya penelitian',
          'Mengurangi bias dan meningkatkan validitas temuan',
          'Mempercepat proses coding',
          'Menggantikan pengujian pengguna nyata'
        ],
        answer: 'Mengurangi bias dan meningkatkan validitas temuan',
        type: 'MC'
      },
      {
        question: 'Prinsip “Recognition rather than recall” menekankan bahwa sistem sebaiknya …',
        options: [
          'Mengandalkan ingatan jangka panjang pengguna',
          'Menyediakan dokumentasi panjang',
          'Menampilkan informasi yang mudah dikenali',
          'Meminimalkan elemen visual'
        ],
        answer: 'Menampilkan informasi yang mudah dikenali',
        type: 'MC'
      },
      {
        question: 'Contoh pelanggaran heuristic “Visibility of system status” adalah …',
        options: [
          'Tombol menggunakan warna tidak konsisten',
          'Tidak ada konfirmasi setelah pembayaran',
          'Penggunaan istilah teknis berlebihan',
          'Terlalu banyak langkah navigasi'
        ],
        answer: 'Tidak ada konfirmasi setelah pembayaran',
        type: 'MC'
      },
      {
        question: 'Think-Aloud Protocol paling efektif digunakan untuk …',
        options: [
          'Mengukur waktu penyelesaian tugas',
          'Memahami proses berpikir pengguna secara langsung',
          'Menghitung jumlah error sistem',
          'Menguji performa server'
        ],
        answer: 'Memahami proses berpikir pengguna secara langsung',
        type: 'MC'
      },
      {
        question: 'Salah satu kelemahan Think-Aloud Protocol adalah …',
        options: [
          'Tidak menghasilkan data kualitatif',
          'Membutuhkan perangkat mahal',
          'Dapat memengaruhi perilaku alami pengguna',
          'Tidak relevan dalam IMK'
        ],
        answer: 'Dapat memengaruhi perilaku alami pengguna',
        type: 'MC'
      },
      {
        question: 'Usability testing yang dilakukan tanpa fasilitator disebut …',
        options: [
          'Moderated testing',
          'Remote testing',
          'Controlled testing',
          'Unmoderated testing'
        ],
        answer: 'Unmoderated testing',
        type: 'MC'
      },
      {
        question: 'Data berupa waktu penyelesaian tugas dan jumlah kesalahan termasuk data …',
        options: [
          'Deskriptif',
          'Kualitatif',
          'Kuantitatif',
          'Eksploratif'
        ],
        answer: 'Kuantitatif',
        type: 'MC'
      },
      {
        question: 'Prioritas perbaikan dalam analisis hasil evaluasi usability ditentukan berdasarkan …',
        options: [
          'Preferensi pengembang',
          'Jumlah fitur sistem',
          'Dampak terhadap pengalaman pengguna',
          'Kompleksitas kode'
        ],
        answer: 'Dampak terhadap pengalaman pengguna',
        type: 'MC'
      },

      // TRUE / FALSE
      {
        question: 'Usability hanya berkaitan dengan teknologi, bukan perilaku manusia.',
        options: ['True', 'False'],
        answer: 'False',
        type: 'TF'
      },
      {
        question: 'Think-Aloud Protocol dapat mengungkap masalah usability yang tidak terlihat dari observasi saja.',
        options: ['True', 'False'],
        answer: 'True',
        type: 'TF'
      },
      {
        question: 'Heuristic Evaluation mengharuskan penggunaan pengguna nyata sebagai partisipan.',
        options: ['True', 'False'],
        answer: 'False',
        type: 'TF'
      },
      {
        question: 'Data kualitatif dalam usability testing fokus pada pola interaksi dan hambatan pengguna.',
        options: ['True', 'False'],
        answer: 'True',
        type: 'TF'
      },
      {
        question: 'Remote usability testing harus selalu dilakukan secara real-time.',
        options: ['True', 'False'],
        answer: 'False',
        type: 'TF'
      },

      // ESSAY
      {
        question: 'Jelaskan mengapa usability testing penting dilakukan sebelum sistem diluncurkan secara luas.',
        options: [''],
        answer: 'Usability testing penting karena membantu mengidentifikasi masalah penggunaan sejak dini sebelum berdampak pada kepuasan pengguna. Sistem dengan usability buruk berpotensi meningkatkan churn rate dan biaya dukungan pelanggan. Dengan melakukan pengujian lebih awal, pengembang dapat memperbaiki desain dan alur interaksi agar sistem lebih efisien, mudah digunakan, dan sesuai dengan kebutuhan pengguna nyata.',
        type: 'EY'
      },
      {
        question: 'Bandingkan Heuristic Evaluation dan Think-Aloud Protocol dari sisi pelaku evaluasi dan jenis data yang dihasilkan.',
        options: [''],
        answer: 'Heuristic Evaluation dilakukan oleh evaluator ahli dengan mengacu pada prinsip usability Nielsen dan menghasilkan temuan berbasis aturan desain. Sementara itu, Think-Aloud Protocol melibatkan pengguna nyata yang diminta mengungkapkan proses berpikir mereka saat menggunakan sistem, sehingga menghasilkan data kualitatif berupa wawasan langsung tentang kebingungan, kesalahan, dan ekspektasi pengguna.',
        type: 'EY'
      },
      {
        question: 'Jelaskan peran analisis hasil evaluasi usability dalam peningkatan kualitas sistem.',
        options: [''],
        answer: 'Analisis hasil evaluasi usability berperan sebagai dasar pengambilan keputusan perbaikan sistem. Data kualitatif digunakan untuk memahami pola masalah, sedangkan data kuantitatif mengukur tingkat keberhasilan sistem secara objektif. Dengan memprioritaskan perbaikan berdasarkan dampaknya terhadap pengalaman pengguna, sistem dapat dikembangkan secara iteratif dan lebih efektif dalam mencapai tujuannya.',
        type: 'EY'
      }
    ]),
  },
});


const assessment10 = await prisma.assessment.create({
  data: {
    chapterId: chapter10.id,
    instruction: 'Pilihlah jawaban yang menurut anda paling benar. Silahkan screenshot hasil dari kuis setelah selesai',
    questions: JSON.stringify([
      {
        question: 'Fokus utama HMSAM dibandingkan TAM dan UTAUT adalah pada …',
        options: [
          'Efisiensi sistem',
          'Keamanan data pengguna',
          'Motivasi hedonik pengguna',
          'Infrastruktur teknologi'
        ],
        answer: 'Motivasi hedonik pengguna',
        type: 'MC'
      },
      {
        question: 'HMSAM pertama kali diperkenalkan oleh Lowry et al. dengan tujuan utama untuk …',
        options: [
          'Mengukur performa sistem informasi',
          'Memahami adopsi sistem berbasis kesenangan dan pengalaman',
          'Menggantikan model TAM sepenuhnya',
          'Menilai kepuasan pengguna secara kuantitatif'
        ],
        answer: 'Memahami adopsi sistem berbasis kesenangan dan pengalaman',
        type: 'MC'
      },
      {
        question: 'Perceived Usefulness dalam HMSAM mengacu pada …',
        options: [
          'Tingkat kesenangan pengguna',
          'Seberapa mudah sistem digunakan',
          'Sejauh mana sistem meningkatkan efektivitas pengguna',
          'Seberapa menarik tampilan sistem'
        ],
        answer: 'Sejauh mana sistem meningkatkan efektivitas pengguna',
        type: 'MC'
      },
      {
        question: 'Contoh penerapan Perceived Ease of Use dalam e-learning adalah …',
        options: [
          'Sistem menyediakan leaderboard',
          'Pengguna merasa senang saat belajar',
          'Antarmuka dapat digunakan tanpa pelatihan khusus',
          'Sistem memberikan badge'
        ],
        answer: 'Antarmuka dapat digunakan tanpa pelatihan khusus',
        type: 'MC'
      },
      {
        question: 'Komponen HMSAM yang berkaitan dengan rasa ingin tahu pengguna adalah …',
        options: [
          'Joy',
          'Control',
          'Curiosity',
          'Focused Immersion'
        ],
        answer: 'Curiosity',
        type: 'MC'
      },
      {
        question: 'Elemen gamifikasi yang paling langsung memengaruhi Joy adalah …',
        options: [
          'Navigasi sederhana',
          'Dokumentasi sistem',
          'Poin, tantangan, dan badge',
          'Struktur database'
        ],
        answer: 'Poin, tantangan, dan badge',
        type: 'MC'
      },
      {
        question: 'Control dalam HMSAM berarti pengguna …',
        options: [
          'Dapat mengakses sistem kapan saja',
          'Merasa memiliki kendali atas pengalaman penggunaan sistem',
          'Selalu mendapatkan bantuan sistem',
          'Tidak mengalami kesalahan'
        ],
        answer: 'Merasa memiliki kendali atas pengalaman penggunaan sistem',
        type: 'MC'
      },
      {
        question: 'Focused Immersion terjadi ketika pengguna …',
        options: [
          'Menyelesaikan tugas dengan cepat',
          'Merasa sistem sangat berguna',
          'Terlibat penuh hingga lupa waktu',
          'Memahami seluruh fitur sistem'
        ],
        answer: 'Terlibat penuh hingga lupa waktu',
        type: 'MC'
      },
      {
        question: 'Behavioral Intention to Use menunjukkan …',
        options: [
          'Tingkat kepuasan pengguna',
          'Frekuensi penggunaan sistem saat ini',
          'Niat pengguna untuk terus menggunakan sistem',
          'Kualitas desain sistem'
        ],
        answer: 'Niat pengguna untuk terus menggunakan sistem',
        type: 'MC'
      },
      {
        question: 'Dalam pembelajaran berbasis gamifikasi, HMSAM berperan untuk …',
        options: [
          'Mengurangi beban kognitif',
          'Meningkatkan motivasi dan keterlibatan belajar',
          'Menghilangkan evaluasi tradisional',
          'Menstandarkan proses belajar'
        ],
        answer: 'Meningkatkan motivasi dan keterlibatan belajar',
        type: 'MC'
      },
      {
        question: 'Metode penelitian yang umum digunakan dalam studi HMSAM adalah …',
        options: [
          'Eksperimen laboratorium murni',
          'Observasi etnografi',
          'Survei Likert dan SEM',
          'Studi literatur deskriptif'
        ],
        answer: 'Survei Likert dan SEM',
        type: 'MC'
      },
      {
        question: 'Salah satu tantangan utama penerapan HMSAM adalah …',
        options: [
          'Kurangnya data kuantitatif',
          'Adaptasi pengguna terhadap gamifikasi',
          'Rendahnya minat belajar mahasiswa',
          'Tidak adanya teori pendukung'
        ],
        answer: 'Adaptasi pengguna terhadap gamifikasi',
        type: 'MC'
      },

      // TRUE / FALSE
      {
        question: 'HMSAM menekankan motivasi intrinsik pengguna dalam menggunakan sistem teknologi.',
        options: ['True', 'False'],
        answer: 'True',
        type: 'TF'
      },
      {
        question: 'Joy dan Curiosity tidak berpengaruh terhadap Behavioral Intention to Use.',
        options: ['True', 'False'],
        answer: 'False',
        type: 'TF'
      },
      {
        question: 'Focused Immersion dapat meningkatkan keterlibatan pengguna dalam pembelajaran.',
        options: ['True', 'False'],
        answer: 'True',
        type: 'TF'
      },
      {
        question: 'HMSAM hanya cocok digunakan pada sistem bisnis dan perkantoran.',
        options: ['True', 'False'],
        answer: 'False',
        type: 'TF'
      },
      {
        question: 'Survei skala Likert digunakan untuk mengukur persepsi pengguna terhadap komponen HMSAM.',
        options: ['True', 'False'],
        answer: 'True',
        type: 'TF'
      },

      // ESSAY
      {
        question: 'Jelaskan konsep dasar HMSAM dan alasan model ini relevan untuk pembelajaran berbasis gamifikasi.',
        options: [''],
        answer: 'HMSAM adalah model adopsi sistem yang berfokus pada motivasi hedonik, seperti kesenangan, keterlibatan, dan kepuasan pengguna. Model ini relevan untuk pembelajaran berbasis gamifikasi karena proses belajar tidak hanya bergantung pada kegunaan sistem, tetapi juga pada pengalaman emosional pengguna yang dapat meningkatkan motivasi dan keterlibatan belajar.',
        type: 'EY'
      },
      {
        question: 'Jelaskan hubungan antara Joy, Curiosity, dan Behavioral Intention to Use dalam HMSAM.',
        options: [''],
        answer: 'Joy dan Curiosity berperan sebagai pendorong motivasi intrinsik pengguna. Ketika pengguna merasa senang dan tertarik untuk mengeksplorasi sistem, keterlibatan meningkat dan pengalaman penggunaan menjadi positif. Hal ini secara langsung memengaruhi Behavioral Intention to Use, yaitu niat pengguna untuk terus menggunakan sistem di masa depan.',
        type: 'EY'
      },
      {
        question: 'Sebutkan dua kelebihan dan satu tantangan penerapan HMSAM dalam pembelajaran digital.',
        options: [''],
        answer: 'Kelebihan HMSAM antara lain meningkatkan keterlibatan pengguna dan menciptakan pengalaman belajar yang menyenangkan, serta meningkatkan retensi pengetahuan. Tantangan utamanya adalah merancang gamifikasi yang menarik tanpa mengganggu fokus utama pembelajaran.',
        type: 'EY'
      }
    ]),
  },
});


const assessment11 = await prisma.assessment.create({
  data: {
    chapterId: chapter11.id,
    instruction: 'Pilihlah jawaban yang menurut anda paling benar. Silahkan screenshot hasil dari kuis setelah selesai',
    questions: JSON.stringify([
      {
        question: 'Tujuan utama penerapan prinsip psikologi pengguna dalam HCI adalah untuk …',
        options: [
          'Meningkatkan kompleksitas sistem',
          'Menyesuaikan teknologi dengan cara berpikir pengguna',
          'Mengoptimalkan performa hardware',
          'Mengurangi biaya pengembangan'
        ],
        answer: 'Menyesuaikan teknologi dengan cara berpikir pengguna',
        type: 'MC'
      },
      {
        question: 'Cognitive Load Theory menekankan bahwa antarmuka sebaiknya …',
        options: [
          'Menyediakan banyak informasi sekaligus',
          'Mengandalkan memori jangka panjang pengguna',
          'Meminimalkan beban mental pengguna',
          'Menggunakan teks panjang untuk kejelasan'
        ],
        answer: 'Meminimalkan beban mental pengguna',
        type: 'MC'
      },
      {
        question: 'Mental model pengguna terbentuk terutama dari …',
        options: [
          'Dokumentasi sistem',
          'Instruksi eksplisit dalam UI',
          'Pengalaman dan ekspektasi sebelumnya',
          'Warna dan tipografi'
        ],
        answer: 'Pengalaman dan ekspektasi sebelumnya',
        type: 'MC'
      },
      {
        question: 'Desain intuitif dikatakan berhasil apabila pengguna …',
        options: [
          'Membaca panduan sebelum menggunakan sistem',
          'Menggunakan sistem dengan bantuan fasilitator',
          'Mengetahui apa yang harus dilakukan tanpa instruksi eksplisit',
          'Menghafal seluruh fungsi sistem'
        ],
        answer: 'Mengetahui apa yang harus dilakukan tanpa instruksi eksplisit',
        type: 'MC'
      },
      {
        question: 'Prinsip Gestalt yang menjelaskan bahwa elemen berdekatan dipersepsikan sebagai satu kelompok adalah …',
        options: [
          'Similarity',
          'Closure',
          'Continuity',
          'Proximity'
        ],
        answer: 'Proximity',
        type: 'MC'
      },
      {
        question: 'Penggunaan warna yang sama pada tombol dengan fungsi serupa merupakan penerapan prinsip …',
        options: [
          'Proximity',
          'Similarity',
          'Closure',
          'Figure-ground'
        ],
        answer: 'Similarity',
        type: 'MC'
      },
      {
        question: 'Prinsip Closure menjelaskan bahwa pengguna dapat memahami ikon meskipun …',
        options: [
          'Ukurannya besar',
          'Berwarna kontras',
          'Detail visualnya tidak lengkap',
          'Dilengkapi teks'
        ],
        answer: 'Detail visualnya tidak lengkap',
        type: 'MC'
      },
      {
        question: 'Breadcrumb navigation merupakan contoh penerapan prinsip Gestalt …',
        options: [
          'Proximity',
          'Similarity',
          'Continuity',
          'Closure'
        ],
        answer: 'Continuity',
        type: 'MC'
      },
      {
        question: 'Hick’s Law menyatakan bahwa waktu pengambilan keputusan akan …',
        options: [
          'Berkurang jika informasi detail',
          'Bertambah seiring jumlah pilihan',
          'Tidak dipengaruhi jumlah opsi',
          'Bergantung pada ukuran tombol'
        ],
        answer: 'Bertambah seiring jumlah pilihan',
        type: 'MC'
      },
      {
        question: 'Rumus Hick’s Law (T = b log₂(n + 1)) menunjukkan bahwa …',
        options: [
          'Waktu respons linear terhadap jumlah pilihan',
          'Semakin banyak pilihan, waktu bertindak meningkat secara logaritmik',
          'Jumlah pilihan tidak berpengaruh signifikan',
          'Kecepatan dipengaruhi warna UI'
        ],
        answer: 'Semakin banyak pilihan, waktu bertindak meningkat secara logaritmik',
        type: 'MC'
      },
      {
        question: 'Fitts’ Law menekankan pentingnya …',
        options: [
          'Jumlah pilihan menu',
          'Konsistensi ikon',
          'Ukuran dan jarak target interaksi',
          'Urutan navigasi'
        ],
        answer: 'Ukuran dan jarak target interaksi',
        type: 'MC'
      },
      {
        question: 'Jakob’s Law menyarankan desainer untuk …',
        options: [
          'Menciptakan pola interaksi baru sepenuhnya',
          'Menghindari konvensi desain lama',
          'Menyesuaikan desain dengan sistem yang sudah dikenal pengguna',
          'Mengutamakan estetika dibanding fungsi'
        ],
        answer: 'Menyesuaikan desain dengan sistem yang sudah dikenal pengguna',
        type: 'MC'
      },

      // TRUE / FALSE
      {
        question: 'Desain intuitif mengandalkan pengalaman dan persepsi pengguna.',
        options: ['True', 'False'],
        answer: 'True',
        type: 'TF'
      },
      {
        question: 'Cognitive load yang tinggi dapat meningkatkan efisiensi penggunaan sistem.',
        options: ['True', 'False'],
        answer: 'False',
        type: 'TF'
      },
      {
        question: 'Mental model yang sesuai dapat memperkecil learning curve pengguna.',
        options: ['True', 'False'],
        answer: 'True',
        type: 'TF'
      },
      {
        question: 'Prinsip Gestalt hanya relevan untuk desain grafis, bukan UI/UX.',
        options: ['True', 'False'],
        answer: 'False',
        type: 'TF'
      },
      {
        question: 'Hick’s Law dan Fitts’ Law sama-sama berkaitan dengan pengambilan keputusan pengguna.',
        options: ['True', 'False'],
        answer: 'False',
        type: 'TF'
      },
      {
        question: 'Jakob’s Law membantu mengurangi kebingungan pengguna saat beradaptasi dengan sistem baru.',
        options: ['True', 'False'],
        answer: 'True',
        type: 'TF'
      },

      // ESSAY
      {
        question: 'Jelaskan hubungan antara mental model pengguna dan desain intuitif dalam konteks HCI.',
        options: [''],
        answer: 'Mental model merupakan gambaran mental pengguna mengenai cara kerja suatu sistem yang terbentuk dari pengalaman sebelumnya. Desain intuitif berusaha menyesuaikan sistem dengan mental model tersebut agar interaksi terasa alami dan familiar. Ketika desain selaras dengan mental model pengguna, beban kognitif berkurang, learning curve menjadi lebih pendek, dan sistem lebih mudah digunakan tanpa instruksi eksplisit.',
        type: 'EY'
      },
      {
        question: 'Jelaskan perbedaan penerapan Hick’s Law dan Fitts’ Law dalam desain antarmuka pengguna disertai contoh.',
        options: [''],
        answer: 'Hick’s Law berfokus pada jumlah pilihan dan dampaknya terhadap waktu pengambilan keputusan, sehingga mendorong desainer untuk menyederhanakan menu atau mengelompokkan opsi. Contohnya, kategori produk dalam e-commerce dibuat ringkas. Sebaliknya, Fitts’ Law berkaitan dengan ukuran dan jarak target interaksi, sehingga tombol penting seperti “Submit” atau “Checkout” dibuat lebih besar dan mudah dijangkau.',
        type: 'EY'
      }
    ]),
  },
});


const assessment12 = await prisma.assessment.create({
  data: {
    chapterId: chapter12.id,
    instruction: 'Pilihlah jawaban yang menurut anda paling benar. Silahkan screenshot hasil dari kuis setelah selesai',
    questions: JSON.stringify([
      {
        question: 'Fokus utama Emotional Design adalah …',
        options: [
          'Optimalisasi performa sistem',
          'Pengurangan learning time',
          'Pembentukan emosi pengguna melalui interaksi produk',
          'Konsistensi visual antarmuka'
        ],
        answer: 'Pembentukan emosi pengguna melalui interaksi produk',
        type: 'MC'
      },
      {
        question: 'Menurut Norman (2004), level visceral berkaitan langsung dengan …',
        options: [
          'Makna jangka panjang produk',
          'Nilai dan identitas pengguna',
          'Respon emosional instan terhadap tampilan dan sensori',
          'Kemudahan penggunaan'
        ],
        answer: 'Respon emosional instan terhadap tampilan dan sensori',
        type: 'MC'
      },
      {
        question: 'Level behavioral dalam Emotional Design berhubungan paling erat dengan …',
        options: [
          'Nostalgia pengguna',
          'Estetika simbolik',
          'Fungsi dan usability produk',
          'Nilai ideologis'
        ],
        answer: 'Fungsi dan usability produk',
        type: 'MC'
      },
      {
        question: 'Level reflective berbeda dari dua level lainnya karena …',
        options: [
          'Terjadi secara spontan',
          'Tidak melibatkan emosi',
          'Berkaitan dengan makna dan memori jangka panjang',
          'Fokus pada performa teknis'
        ],
        answer: 'Berkaitan dengan makna dan memori jangka panjang',
        type: 'MC'
      },
      {
        question: 'Contoh psyco-pleasure menurut Tiger & Jordan adalah …',
        options: [
          'Bau mobil baru',
          'Interaksi sosial antar pengguna',
          'Aplikasi yang cepat dan minim error',
          'Produk berbahan daur ulang'
        ],
        answer: 'Aplikasi yang cepat dan minim error',
        type: 'MC'
      },
      {
        question: 'Ideo-pleasure paling tepat dikaitkan dengan …',
        options: [
          'Kenyamanan fisik',
          'Efisiensi fungsi',
          'Nilai dan keyakinan pengguna',
          'Kecepatan sistem'
        ],
        answer: 'Nilai dan keyakinan pengguna',
        type: 'MC'
      },
      {
        question: 'Affordance didefinisikan sebagai …',
        options: [
          'Elemen visual dekoratif',
          'Petunjuk eksplisit penggunaan sistem',
          'Properti objek yang menunjukkan kemungkinan aksi',
          'Respon sistem terhadap error'
        ],
        answer: 'Properti objek yang menunjukkan kemungkinan aksi',
        type: 'MC'
      },
      {
        question: 'Tombol dengan efek bayangan yang terlihat bisa diklik merupakan contoh …',
        options: [
          'Hidden affordance',
          'False affordance',
          'Perceptible affordance',
          'Reflective affordance'
        ],
        answer: 'Perceptible affordance',
        type: 'MC'
      },
      {
        question: 'Teks biru yang terlihat seperti link tetapi tidak bisa diklik termasuk …',
        options: [
          'Hidden affordance',
          'False affordance',
          'Correct affordance',
          'Signifier eksplisit'
        ],
        answer: 'False affordance',
        type: 'MC'
      },
      {
        question: 'Peran utama signifier dalam UI adalah …',
        options: [
          'Menambah estetika visual',
          'Mengurangi beban kognitif dengan memperjelas affordance',
          'Menggantikan fungsi affordance',
          'Menyembunyikan kompleksitas sistem'
        ],
        answer: 'Mengurangi beban kognitif dengan memperjelas affordance',
        type: 'MC'
      },
      {
        question: 'Loading bar pada proses unduhan merupakan contoh penerapan prinsip …',
        options: [
          'Affordance',
          'Signifier',
          'Feedback',
          'Error prevention'
        ],
        answer: 'Feedback',
        type: 'MC'
      },
      {
        question: 'Fitur “Undo Send” pada Gmail merupakan contoh …',
        options: [
          'Feedback',
          'Feedforward',
          'Error recovery',
          'False affordance'
        ],
        answer: 'Error recovery',
        type: 'MC'
      },

      // TRUE / FALSE
      {
        question: 'Emotional Design hanya relevan pada aspek estetika visual.',
        options: ['True', 'False'],
        answer: 'False',
        type: 'TF'
      },
      {
        question: 'Sebuah produk idealnya hanya melibatkan satu level Emotional Design.',
        options: ['True', 'False'],
        answer: 'False',
        type: 'TF'
      },
      {
        question: 'Affordance yang tidak jelas dapat meningkatkan kebingungan pengguna.',
        options: ['True', 'False'],
        answer: 'True',
        type: 'TF'
      },
      {
        question: 'Hidden affordance selalu lebih baik daripada perceptible affordance.',
        options: ['True', 'False'],
        answer: 'False',
        type: 'TF'
      },
      {
        question: 'Signifier membantu pengguna memahami cara berinteraksi tanpa instruksi teks.',
        options: ['True', 'False'],
        answer: 'True',
        type: 'TF'
      },
      {
        question: 'Error prevention lebih baik diterapkan sebelum error terjadi dibanding sesudahnya.',
        options: ['True', 'False'],
        answer: 'True',
        type: 'TF'
      },

      // ESSAY
      {
        question: 'Jelaskan hubungan antara Emotional Design dan usability dalam menciptakan antarmuka yang intuitif.',
        options: [''],
        answer: 'Emotional Design melengkapi usability dengan menambahkan aspek emosional pada interaksi pengguna. Usability memastikan sistem efektif dan efisien, sementara Emotional Design membuat pengalaman penggunaan terasa menyenangkan, bermakna, dan berkesan. Kombinasi keduanya menghasilkan antarmuka yang tidak hanya mudah digunakan, tetapi juga meningkatkan keterikatan pengguna.',
        type: 'EY'
      },
      {
        question: 'Jelaskan mengapa affordance dan signifier harus dirancang secara eksplisit dalam UI digital.',
        options: [''],
        answer: 'Affordance dan signifier yang eksplisit mengurangi ambiguitas interaksi dengan memberikan petunjuk visual yang jelas tentang apa yang bisa dilakukan pengguna. Tanpa keduanya, pengguna harus menebak tindakan yang mungkin dilakukan, sehingga meningkatkan beban kognitif dan risiko kesalahan. Desain yang eksplisit membuat sistem lebih intuitif dan efisien.',
        type: 'EY'
      }
    ]),
  },
});

const assessment13 = await prisma.assessment.create({
  data: {
    chapterId: chapter13.id,
    instruction: 'Pilihlah jawaban yang menurut anda paling benar. Silahkan screenshot hasil dari kuis setelah selesai',
    questions: JSON.stringify([
      {
        question: 'Multimodal interaction dianggap lebih natural dibanding GUI tradisional karena …',
        options: [
          'Mengurangi kebutuhan perangkat keras',
          'Menggabungkan berbagai modalitas interaksi manusia',
          'Menghilangkan elemen visual sepenuhnya',
          'Hanya fokus pada efisiensi sistem'
        ],
        answer: 'Menggabungkan berbagai modalitas interaksi manusia',
        type: 'MC'
      },
      {
        question: 'Perbedaan paling mendasar antara GUI dan multimodal interface terletak pada …',
        options: [
          'Kompleksitas sistem',
          'Modalitas interaksi yang digunakan',
          'Kecepatan respon sistem',
          'Biaya implementasi'
        ],
        answer: 'Modalitas interaksi yang digunakan',
        type: 'MC'
      },
      {
        question: 'Penggunaan Voice UI paling tepat ketika …',
        options: [
          'Pengguna bekerja di depan desktop',
          'Lingkungan sangat bising',
          'Tangan pengguna sedang sibuk',
          'Dibutuhkan presisi visual tinggi'
        ],
        answer: 'Tangan pengguna sedang sibuk',
        type: 'MC'
      },
      {
        question: 'Komponen VUI yang bertugas memahami maksud perintah pengguna adalah …',
        options: [
          'Speech Recognition',
          'Text-to-Speech',
          'Natural Language Understanding',
          'Speech Synthesis'
        ],
        answer: 'Natural Language Understanding',
        type: 'MC'
      },
      {
        question: 'Kesalahan pengenalan suara akibat kebisingan termasuk tantangan VUI berupa …',
        options: [
          'Privacy issues',
          'Ambiguity in commands',
          'Noise and misrecognition',
          'Context failure'
        ],
        answer: 'Noise and misrecognition',
        type: 'MC'
      },
      {
        question: 'Prinsip “turn-taking” dalam VUI berarti …',
        options: [
          'Sistem selalu berbicara lebih dulu',
          'Sistem dan pengguna berbicara bersamaan',
          'Sistem tahu kapan harus mendengarkan dan merespons',
          'Pengguna harus mengulang perintah'
        ],
        answer: 'Sistem tahu kapan harus mendengarkan dan merespons',
        type: 'MC'
      },
      {
        question: 'Gesture interaction paling bergantung pada …',
        options: [
          'Keyboard dan mouse',
          'Perintah teks',
          'Sensor gerak dan kamera',
          'Mikrofon'
        ],
        answer: 'Sensor gerak dan kamera',
        type: 'MC'
      },
      {
        question: 'Gestur melambaikan tangan untuk berpindah slide termasuk kategori …',
        options: [
          'Static gesture',
          'Dynamic gesture',
          'Symbolic gesture',
          'Hidden gesture'
        ],
        answer: 'Dynamic gesture',
        type: 'MC'
      },
      {
        question: '“Gorilla arm problem” merujuk pada …',
        options: [
          'Kesalahan deteksi kamera',
          'Gestur yang sulit dihafal',
          'Kelelahan akibat gestur berulang dan tidak ergonomis',
          'Perbedaan budaya gestur'
        ],
        answer: 'Kelelahan akibat gestur berulang dan tidak ergonomis',
        type: 'MC'
      },
      {
        question: 'Salah satu tantangan gesture interaction yang bersifat sosial-kultural adalah …',
        options: [
          'Akurasi sensor',
          'Pencahayaan lingkungan',
          'Perbedaan makna gestur antar budaya',
          'Respons sistem yang lambat'
        ],
        answer: 'Perbedaan makna gestur antar budaya',
        type: 'MC'
      },
      {
        question: 'Touch interaction dibedakan dari gesture interaction karena …',
        options: [
          'Tidak memerlukan perangkat input',
          'Melibatkan kontak fisik langsung dengan layar',
          'Selalu menggunakan dua tangan',
          'Tidak membutuhkan feedback'
        ],
        answer: 'Melibatkan kontak fisik langsung dengan layar',
        type: 'MC'
      },
      {
        question: 'Prinsip Fitts’ Law dalam touch interaction berhubungan langsung dengan …',
        options: [
          'Jumlah pilihan menu',
          'Ukuran dan jarak elemen sentuh',
          'Warna dan kontras',
          'Jenis feedback suara'
        ],
        answer: 'Ukuran dan jarak elemen sentuh',
        type: 'MC'
      },
      {
        question: 'Masalah “finger occlusion” terjadi ketika …',
        options: [
          'Layar tidak responsif',
          'Jari menutupi konten saat menyentuh layar',
          'Gesture tidak dikenali sistem',
          'Ukuran layar terlalu besar'
        ],
        answer: 'Jari menutupi konten saat menyentuh layar',
        type: 'MC'
      },
      {
        question: 'Prinsip redundansi dalam desain multimodal berarti …',
        options: [
          'Mengurangi jumlah modalitas',
          'Menggunakan satu modalitas utama',
          'Informasi disampaikan lewat lebih dari satu modalitas',
          'Menghindari kombinasi input'
        ],
        answer: 'Informasi disampaikan lewat lebih dari satu modalitas',
        type: 'MC'
      },
      {
        question: 'Sistem yang menggabungkan suara dan sentuhan secara sinkron menerapkan prinsip …',
        options: [
          'Redundansi',
          'Komplementaritas',
          'Keselarasan (synchrony)',
          'Konsistensi visual'
        ],
        answer: 'Keselarasan (synchrony)',
        type: 'MC'
      },

      // TRUE / FALSE
      {
        question: 'Multimodal interaction hanya cocok untuk perangkat desktop.',
        options: ['True', 'False'],
        answer: 'False',
        type: 'TF'
      },
      {
        question: 'Voice UI berpotensi menimbulkan masalah privasi pengguna.',
        options: ['True', 'False'],
        answer: 'True',
        type: 'TF'
      },
      {
        question: 'Semua gesture bersifat universal dan dipahami sama di seluruh budaya.',
        options: ['True', 'False'],
        answer: 'False',
        type: 'TF'
      },
      {
        question: 'Feedback visual atau audio penting agar pengguna tahu gestur berhasil dikenali.',
        options: ['True', 'False'],
        answer: 'True',
        type: 'TF'
      },
      {
        question: 'Touch interaction tidak membutuhkan prinsip ergonomi.',
        options: ['True', 'False'],
        answer: 'False',
        type: 'TF'
      },
      {
        question: 'Desain touch harus mempertimbangkan keterbatasan fisik pengguna.',
        options: ['True', 'False'],
        answer: 'True',
        type: 'TF'
      },
      {
        question: 'Multimodal interface lebih fleksibel dibanding GUI tradisional.',
        options: ['True', 'False'],
        answer: 'True',
        type: 'TF'
      },
      {
        question: 'Context-aware interaction merupakan prinsip penting dalam desain VUI.',
        options: ['True', 'False'],
        answer: 'True',
        type: 'TF'
      },

      // ESSAY
      {
        question: 'Jelaskan mengapa multimodal interaction lebih unggul dibanding GUI dalam konteks sistem mobile dan IoT.',
        options: [''],
        answer: 'Multimodal interaction lebih unggul karena mendukung berbagai modalitas seperti suara, sentuhan, dan gestur yang sesuai dengan keterbatasan layar dan konteks penggunaan mobile serta IoT. Interaksi menjadi lebih natural, fleksibel, dan aksesibel, terutama saat kondisi visual terbatas atau tangan pengguna sibuk.',
        type: 'EY'
      },
      {
        question: 'Jelaskan dua tantangan utama Voice User Interface dan bagaimana desain dapat meminimalkan dampaknya.',
        options: [''],
        answer: 'Tantangan utama VUI adalah noise/misrecognition dan ambiguity in commands. Dampaknya dapat diminimalkan dengan desain conversational yang jelas, penggunaan konfirmasi sistem, serta context-aware interaction untuk memahami maksud pengguna secara lebih akurat.',
        type: 'EY'
      },
      {
        question: 'Bandingkan gesture interaction dan touch interaction dari sisi kelebihan dan keterbatasannya.',
        options: [''],
        answer: 'Gesture interaction memungkinkan interaksi tanpa kontak fisik dan cocok untuk VR/AR, namun memiliki tantangan akurasi dan kelelahan pengguna. Touch interaction lebih presisi dan familiar, tetapi memiliki keterbatasan seperti finger occlusion dan ukuran layar. Pemilihan interaksi bergantung pada konteks penggunaan dan kebutuhan pengguna.',
        type: 'EY'
      }
    ]),
  },
});

const assessment14 = await prisma.assessment.create({
  data: {
    chapterId: chapter14.id,
    instruction: 'Pilihlah jawaban yang menurut anda paling benar. Silahkan screenshot hasil dari kuis setelah selesai',
    questions: JSON.stringify([
      {
        question: 'Tren desain interaksi didefinisikan sebagai …',
        options: [
          'Standar teknis dalam pengembangan UI',
          'Pola perkembangan cara pengguna berinteraksi dengan produk digital',
          'Gaya visual yang bersifat sementara',
          'Preferensi pribadi desainer'
        ],
        answer: 'Pola perkembangan cara pengguna berinteraksi dengan produk digital',
        type: 'MC'
      },
      {
        question: 'AI-Driven Personalization dalam UI/UX bertujuan utama untuk …',
        options: [
          'Menyamakan pengalaman semua pengguna',
          'Mengurangi kebutuhan data pengguna',
          'Menyesuaikan antarmuka berdasarkan perilaku pengguna',
          'Menghilangkan interaksi manual'
        ],
        answer: 'Menyesuaikan antarmuka berdasarkan perilaku pengguna',
        type: 'MC'
      },
      {
        question: 'Contoh nyata penerapan Predictive UX adalah …',
        options: [
          'Mode gelap otomatis',
          'Rekomendasi film Netflix',
          'Animasi loading',
          'Breadcrumb navigation'
        ],
        answer: 'Rekomendasi film Netflix',
        type: 'MC'
      },
      {
        question: 'Voice User Interface (VUI) paling efektif digunakan ketika …',
        options: [
          'Interaksi membutuhkan presisi visual tinggi',
          'Lingkungan sangat bising',
          'Pengguna memerlukan interaksi berbasis percakapan',
          'Pengguna ingin membaca informasi panjang'
        ],
        answer: 'Pengguna memerlukan interaksi berbasis percakapan',
        type: 'MC'
      },
      {
        question: 'Manfaat utama AR/VR dalam desain interaksi adalah …',
        options: [
          'Mengurangi kebutuhan UI visual',
          'Memberikan pengalaman interaksi yang imersif',
          'Menyederhanakan struktur navigasi',
          'Menghilangkan kebutuhan perangkat input'
        ],
        answer: 'Memberikan pengalaman interaksi yang imersif',
        type: 'MC'
      },
      {
        question: 'IKEA Place termasuk contoh tren desain interaksi karena …',
        options: [
          'Menggunakan chatbot',
          'Menggabungkan dunia fisik dan digital',
          'Mengandalkan micro-interactions',
          'Menerapkan dark mode'
        ],
        answer: 'Menggabungkan dunia fisik dan digital',
        type: 'MC'
      },
      {
        question: 'Micro-interactions berfungsi utama untuk …',
        options: [
          'Menyampaikan informasi kompleks',
          'Memberi feedback kecil atas aksi pengguna',
          'Mengubah keseluruhan layout UI',
          'Mengumpulkan data pengguna'
        ],
        answer: 'Memberi feedback kecil atas aksi pengguna',
        type: 'MC'
      },
      {
        question: 'Adaptive Design berbeda dari responsive design karena adaptive design …',
        options: [
          'Hanya menyesuaikan ukuran layar',
          'Menyesuaikan UI berdasarkan konteks penggunaan',
          'Fokus pada estetika visual',
          'Tidak melibatkan AI'
        ],
        answer: 'Menyesuaikan UI berdasarkan konteks penggunaan',
        type: 'MC'
      },
      {
        question: 'Salah satu dampak utama AI dalam UI/UX adalah …',
        options: [
          'Menghilangkan peran desainer',
          'Mempercepat personalisasi dan efisiensi interaksi',
          'Menurunkan keterlibatan pengguna',
          'Membuat desain statis'
        ],
        answer: 'Mempercepat personalisasi dan efisiensi interaksi',
        type: 'MC'
      },
      {
        question: 'Figma AI dan Uizard termasuk kategori …',
        options: [
          'Framework etika',
          'Predictive UX tools',
          'AI tools untuk membantu proses desain',
          'Sistem rekomendasi konten'
        ],
        answer: 'AI tools untuk membantu proses desain',
        type: 'MC'
      },
      {
        question: 'Adaptive and Smart UI bertujuan untuk …',
        options: [
          'Menambah kompleksitas interaksi',
          'Mengurangi beban kognitif pengguna',
          'Mengontrol perilaku pengguna',
          'Menyembunyikan fitur sistem'
        ],
        answer: 'Mengurangi beban kognitif pengguna',
        type: 'MC'
      },
      {
        question: 'Dark patterns dalam desain interaksi merujuk pada …',
        options: [
          'Desain dengan warna gelap',
          'Teknik desain manipulatif yang merugikan pengguna',
          'UI dengan kontras rendah',
          'Desain eksperimental'
        ],
        answer: 'Teknik desain manipulatif yang merugikan pengguna',
        type: 'MC'
      },
      {
        question: 'Infinite scroll dan autoplay video termasuk contoh …',
        options: [
          'Micro-interactions positif',
          'Adaptive UI',
          'Manipulasi psikologis',
          'Inklusivitas desain'
        ],
        answer: 'Manipulasi psikologis',
        type: 'MC'
      },
      {
        question: 'Prinsip transparansi dalam desain etis berarti …',
        options: [
          'Semua data harus dibuka ke publik',
          'Pengguna mengetahui data apa yang dikumpulkan dan penggunaannya',
          'Sistem tidak boleh menggunakan AI',
          'Semua fitur harus bersifat opsional'
        ],
        answer: 'Pengguna mengetahui data apa yang dikumpulkan dan penggunaannya',
        type: 'MC'
      },
      {
        question: 'Tujuan utama penerapan desain etis dalam UI/UX adalah …',
        options: [
          'Meningkatkan profit perusahaan',
          'Menghindari inovasi teknologi',
          'Melindungi hak dan kepercayaan pengguna',
          'Membatasi interaksi pengguna'
        ],
        answer: 'Melindungi hak dan kepercayaan pengguna',
        type: 'MC'
      },

      // TRUE / FALSE
      {
        question: 'AI dalam UI/UX hanya berdampak pada aspek visual desain.',
        options: ['True', 'False'],
        answer: 'False',
        type: 'TF'
      },
      {
        question: 'Adaptive UI memanfaatkan konteks pengguna untuk menyesuaikan antarmuka.',
        options: ['True', 'False'],
        answer: 'True',
        type: 'TF'
      },
      {
        question: 'Dark patterns dapat meningkatkan kepercayaan pengguna dalam jangka panjang.',
        options: ['True', 'False'],
        answer: 'False',
        type: 'TF'
      },
      {
        question: 'Prinsip kontrol pengguna memungkinkan pengguna memilih keluar dari personalisasi.',
        options: ['True', 'False'],
        answer: 'True',
        type: 'TF'
      },
      {
        question: 'Desain etis bertentangan dengan penerapan AI.',
        options: ['True', 'False'],
        answer: 'False',
        type: 'TF'
      },
      {
        question: 'Inklusivitas merupakan bagian penting dari desain etis.',
        options: ['True', 'False'],
        answer: 'True',
        type: 'TF'
      },
      {
        question: 'AI-driven A/B testing menghilangkan kebutuhan analisis data.',
        options: ['True', 'False'],
        answer: 'False',
        type: 'TF'
      },
      {
        question: 'Produk digital yang sukses harus menyeimbangkan inovasi, AI, dan etika.',
        options: ['True', 'False'],
        answer: 'True',
        type: 'TF'
      },

      // ESSAY
      {
        question: 'Jelaskan bagaimana AI mengubah cara desainer merancang UI/UX serta satu risiko etis yang menyertainya.',
        options: [''],
        answer: 'AI membantu desainer melalui otomatisasi desain, personalisasi konten, dan predictive UX yang meningkatkan efisiensi dan relevansi interaksi. Namun, risiko etis yang muncul adalah pelanggaran privasi dan manipulasi perilaku pengguna jika data dikumpulkan atau digunakan tanpa transparansi dan kontrol pengguna.',
        type: 'EY'
      },
      {
        question: 'Jelaskan perbedaan antara micro-interactions dan adaptive design dalam meningkatkan pengalaman pengguna.',
        options: [''],
        answer: 'Micro-interactions memberikan feedback kecil dan instan atas aksi pengguna, sehingga meningkatkan kejelasan dan kepuasan interaksi. Adaptive design menyesuaikan antarmuka berdasarkan konteks pengguna, seperti lokasi atau aktivitas, untuk mengurangi beban kognitif dan meningkatkan efisiensi penggunaan sistem.',
        type: 'EY'
      },
      {
        question: 'Menurut Anda, mengapa prinsip desain etis menjadi semakin penting di era AI-driven UI/UX?',
        options: [''],
        answer: 'Karena AI memiliki kemampuan memengaruhi perilaku dan keputusan pengguna secara tidak langsung, desain etis menjadi penting untuk mencegah manipulasi, melindungi privasi, serta menjaga kepercayaan pengguna. Tanpa etika, inovasi AI justru dapat merugikan pengguna dan menurunkan kualitas pengalaman digital.',
        type: 'EY'
      }
    ]),
  },
});

const assessment15 = await prisma.assessment.create({
  data: {
    chapterId: chapter15.id,
    instruction: 'Pilihlah jawaban yang menurut anda paling benar. Silahkan screenshot hasil dari kuis setelah selesai',
    questions: JSON.stringify([
      {
        question: 'Design Thinking paling tepat digunakan ketika …',
        options: [
          'Masalah sudah jelas dan solusinya pasti',
          'Fokus utama adalah efisiensi teknis',
          'Masalah bersifat kompleks dan ambigu',
          'Sistem hanya membutuhkan evaluasi usability'
        ],
        answer: 'Masalah bersifat kompleks dan ambigu',
        type: 'MC'
      },
      {
        question: 'Perbedaan utama Design Thinking dan User-Centered Design (UCD) terletak pada …',
        options: [
          'Fokus pengguna',
          'Tujuan inovasi dan fleksibilitas proses',
          'Metode pengujian usability',
          'Penggunaan teknologi'
        ],
        answer: 'Tujuan inovasi dan fleksibilitas proses',
        type: 'MC'
      },
      {
        question: 'Design Thinking disebut sebagai pendekatan human-centric karena …',
        options: [
          'Mengutamakan kecepatan pengembangan',
          'Fokus pada teknologi terbaru',
          'Dimulai dari pemahaman kebutuhan dan emosi pengguna',
          'Mengikuti standar desain industri'
        ],
        answer: 'Dimulai dari pemahaman kebutuhan dan emosi pengguna',
        type: 'MC'
      },
      {
        question: 'Tahap Empathize bertujuan utama untuk …',
        options: [
          'Merumuskan solusi',
          'Menguji prototipe',
          'Memahami kebutuhan dan masalah pengguna',
          'Memilih teknologi yang digunakan'
        ],
        answer: 'Memahami kebutuhan dan masalah pengguna',
        type: 'MC'
      },
      {
        question: 'Aktivitas yang PALING sesuai dilakukan pada tahap Empathize adalah …',
        options: [
          'Brainstorming ide solusi',
          'Observasi dan wawancara pengguna',
          'Pembuatan wireframe',
          'Uji coba prototipe'
        ],
        answer: 'Observasi dan wawancara pengguna',
        type: 'MC'
      },
      {
        question: 'Output utama dari tahap Define adalah …',
        options: [
          'Daftar ide solusi',
          'Prototipe awal',
          'Problem statement yang jelas',
          'Feedback pengguna'
        ],
        answer: 'Problem statement yang jelas',
        type: 'MC'
      },
      {
        question: 'Tahap Ideate menekankan pada …',
        options: [
          'Validasi solusi',
          'Analisis teknis mendalam',
          'Produksi ide sebanyak mungkin',
          'Penyempurnaan satu solusi terbaik'
        ],
        answer: 'Produksi ide sebanyak mungkin',
        type: 'MC'
      },
      {
        question: 'Brainstorming dan brainwriting paling tepat dilakukan pada tahap …',
        options: [
          'Empathize',
          'Define',
          'Ideate',
          'Test'
        ],
        answer: 'Ideate',
        type: 'MC'
      },
      {
        question: 'Karakteristik prototipe dalam Design Thinking adalah …',
        options: [
          'Harus sempurna dan siap produksi',
          'Cepat, murah, dan tidak harus sempurna',
          'Fokus pada performa sistem',
          'Menggunakan teknologi final'
        ],
        answer: 'Cepat, murah, dan tidak harus sempurna',
        type: 'MC'
      },
      {
        question: 'Tahap Prototype bersifat iteratif artinya …',
        options: [
          'Dilakukan satu kali saja',
          'Tidak boleh kembali ke tahap sebelumnya',
          'Dapat kembali ke tahap ideate atau define jika diperlukan',
          'Harus menunggu test selesai'
        ],
        answer: 'Dapat kembali ke tahap ideate atau define jika diperlukan',
        type: 'MC'
      },
      {
        question: 'Tujuan utama tahap Test adalah untuk …',
        options: [
          'Menyempurnakan estetika desain',
          'Mengukur performa sistem',
          'Mendapatkan feedback pengguna nyata',
          'Menentukan spesifikasi teknis'
        ],
        answer: 'Mendapatkan feedback pengguna nyata',
        type: 'MC'
      },
      {
        question: 'Dalam Design Thinking, kegagalan prototipe dipandang sebagai …',
        options: [
          'Kesalahan fatal',
          'Tanda desain buruk',
          'Kesempatan belajar dan perbaikan',
          'Akhir dari proses desain'
        ],
        answer: 'Kesempatan belajar dan perbaikan',
        type: 'MC'
      },
      {
        question: 'Salah satu keunggulan Design Thinking dalam pengembangan produk digital adalah …',
        options: [
          'Menghilangkan risiko sepenuhnya',
          'Mempercepat coding',
          'Mengurangi risiko kegagalan produk',
          'Menjamin kesuksesan pasar'
        ],
        answer: 'Mengurangi risiko kegagalan produk',
        type: 'MC'
      },
      {
        question: 'Kolaborasi multidisipliner penting dalam Design Thinking karena …',
        options: [
          'Mengurangi biaya proyek',
          'Menggabungkan berbagai sudut pandang untuk solusi inovatif',
          'Mempercepat pengambilan keputusan',
          'Menghindari konflik tim'
        ],
        answer: 'Menggabungkan berbagai sudut pandang untuk solusi inovatif',
        type: 'MC'
      },

      // TRUE / FALSE
      {
        question: 'Design Thinking merupakan proses yang linier dan tidak boleh kembali ke tahap sebelumnya.',
        options: ['True', 'False'],
        answer: 'False',
        type: 'TF'
      },
      {
        question: 'Empati menjadi fondasi utama dalam Design Thinking.',
        options: ['True', 'False'],
        answer: 'True',
        type: 'TF'
      },
      {
        question: 'UCD dan Design Thinking memiliki fokus yang sama terhadap inovasi radikal.',
        options: ['True', 'False'],
        answer: 'False',
        type: 'TF'
      },
      {
        question: 'Prototipe dalam Design Thinking tidak harus langsung diuji ke pengguna.',
        options: ['True', 'False'],
        answer: 'False',
        type: 'TF'
      },
      {
        question: 'Tahap Define membantu menyempitkan masalah yang terlalu luas.',
        options: ['True', 'False'],
        answer: 'True',
        type: 'TF'
      },
      {
        question: 'Ideate mendorong eksplorasi ide, termasuk ide yang tidak biasa.',
        options: ['True', 'False'],
        answer: 'True',
        type: 'TF'
      },
      {
        question: 'Test hanya dilakukan untuk memvalidasi bahwa solusi sudah benar.',
        options: ['True', 'False'],
        answer: 'False',
        type: 'TF'
      },
      {
        question: 'Design Thinking cocok digunakan untuk pengembangan sistem interaksi manusia–komputer.',
        options: ['True', 'False'],
        answer: 'True',
        type: 'TF'
      },

      // ESSAY
      {
        question: 'Jelaskan mengapa tahap Empathize sangat menentukan keberhasilan keseluruhan proses Design Thinking.',
        options: [''],
        answer: 'Tahap Empathize menentukan karena seluruh solusi dalam Design Thinking harus berangkat dari pemahaman kebutuhan, emosi, dan masalah nyata pengguna. Jika empati tidak dilakukan dengan baik, problem statement menjadi keliru dan solusi yang dihasilkan berisiko tidak relevan dengan kebutuhan pengguna.',
        type: 'EY'
      },
      {
        question: 'Bandingkan Design Thinking dan User-Centered Design dari sisi tujuan dan kondisi penggunaannya.',
        options: [''],
        answer: 'User-Centered Design berfokus pada peningkatan usability dan efisiensi produk ketika masalah sudah jelas. Design Thinking digunakan saat masalah masih ambigu dan membutuhkan inovasi kreatif dengan mempertimbangkan pengguna, teknologi, dan bisnis secara bersamaan.',
        type: 'EY'
      },
      {
        question: 'Jelaskan peran iterasi dalam Design Thinking dan dampaknya terhadap risiko kegagalan produk.',
        options: [''],
        answer: 'Iterasi memungkinkan tim kembali ke tahap sebelumnya untuk memperbaiki ide, prototipe, atau definisi masalah berdasarkan feedback pengguna. Proses ini membantu mendeteksi kesalahan lebih awal sehingga mengurangi risiko kegagalan produk saat dirilis ke pengguna luas.',
        type: 'EY'
      }
    ]),
  },
});

const assessment16 = await prisma.assessment.create({
  data: {
    chapterId: chapter16.id,
    instruction: 'Pilihlah jawaban yang menurut anda paling benar. Silahkan screenshot hasil dari kuis setelah selesai',
    questions: JSON.stringify([

      // =======================
      // PILIHAN GANDA (25)
      // =======================
      {
        question: 'Fokus utama Human Computer Interaction (HCI) adalah …',
        options: [
          'Performa perangkat keras',
          'Efisiensi pemrograman',
          'Interaksi manusia dengan sistem digital',
          'Optimasi database'
        ],
        answer: 'Interaksi manusia dengan sistem digital',
        type: 'MC'
      },
      {
        question: 'Tujuan utama usability dalam sistem interaktif adalah …',
        options: [
          'Estetika visual',
          'Efektivitas, efisiensi, dan kepuasan pengguna',
          'Kompleksitas fitur',
          'Kecepatan pengembangan'
        ],
        answer: 'Efektivitas, efisiensi, dan kepuasan pengguna',
        type: 'MC'
      },
      {
        question: 'Design Thinking paling tepat digunakan ketika …',
        options: [
          'Masalah sudah jelas',
          'Masalah bersifat ambigu dan kompleks',
          'Fokus teknis dominan',
          'Hanya evaluasi usability'
        ],
        answer: 'Masalah bersifat ambigu dan kompleks',
        type: 'MC'
      },
      {
        question: 'Tahap Empathize bertujuan untuk …',
        options: [
          'Menghasilkan solusi',
          'Menguji prototipe',
          'Memahami kebutuhan dan emosi pengguna',
          'Menentukan teknologi'
        ],
        answer: 'Memahami kebutuhan dan emosi pengguna',
        type: 'MC'
      },
      {
        question: 'Prinsip “Recognition rather than recall” berarti …',
        options: [
          'Pengguna harus mengingat langkah',
          'Sistem meminimalkan beban ingatan pengguna',
          'Sistem mengandalkan memori jangka panjang',
          'Sistem harus kompleks'
        ],
        answer: 'Sistem meminimalkan beban ingatan pengguna',
        type: 'MC'
      },
      {
        question: 'Heuristic Evaluation dilakukan oleh beberapa evaluator untuk …',
        options: [
          'Menghemat biaya',
          'Mempercepat coding',
          'Mengurangi bias dan meningkatkan validitas',
          'Menggantikan usability testing'
        ],
        answer: 'Mengurangi bias dan meningkatkan validitas',
        type: 'MC'
      },
      {
        question: 'Think-Aloud Protocol digunakan untuk …',
        options: [
          'Mengukur performa server',
          'Memahami proses berpikir pengguna',
          'Menguji keamanan sistem',
          'Menghitung error sistem'
        ],
        answer: 'Memahami proses berpikir pengguna',
        type: 'MC'
      },
      {
        question: 'HMSAM berfokus utama pada …',
        options: [
          'Motivasi utilitarian',
          'Motivasi hedonik pengguna',
          'Efisiensi sistem',
          'Infrastruktur teknologi'
        ],
        answer: 'Motivasi hedonik pengguna',
        type: 'MC'
      },
      {
        question: 'Komponen HMSAM yang berkaitan dengan rasa ingin tahu pengguna adalah …',
        options: ['Joy', 'Control', 'Curiosity', 'Immersion'],
        answer: 'Curiosity',
        type: 'MC'
      },
      {
        question: 'Cognitive Load Theory menyarankan antarmuka agar …',
        options: [
          'Menyediakan banyak informasi',
          'Meminimalkan beban mental pengguna',
          'Menggunakan teks panjang',
          'Menampilkan banyak menu'
        ],
        answer: 'Meminimalkan beban mental pengguna',
        type: 'MC'
      },
      {
        question: 'Prinsip Gestalt “Proximity” berarti …',
        options: [
          'Warna sama dikelompokkan',
          'Elemen berdekatan dianggap satu grup',
          'Pola berkelanjutan',
          'Bentuk tertutup'
        ],
        answer: 'Elemen berdekatan dianggap satu grup',
        type: 'MC'
      },
      {
        question: 'Hick’s Law menyatakan bahwa waktu pengambilan keputusan …',
        options: [
          'Tidak dipengaruhi jumlah pilihan',
          'Bertambah seiring bertambahnya pilihan',
          'Bergantung warna UI',
          'Linear terhadap ukuran tombol'
        ],
        answer: 'Bertambah seiring bertambahnya pilihan',
        type: 'MC'
      },
      {
        question: 'Fitts’ Law berhubungan dengan …',
        options: [
          'Jumlah menu',
          'Ukuran dan jarak target interaksi',
          'Warna UI',
          'Estetika'
        ],
        answer: 'Ukuran dan jarak target interaksi',
        type: 'MC'
      },
      {
        question: 'Fokus utama Emotional Design adalah …',
        options: [
          'Fungsi teknis',
          'Pengalaman emosional pengguna',
          'Keamanan sistem',
          'Efisiensi coding'
        ],
        answer: 'Pengalaman emosional pengguna',
        type: 'MC'
      },
      {
        question: 'Affordance dalam UI berarti …',
        options: [
          'Elemen dekoratif',
          'Petunjuk eksplisit',
          'Kemungkinan aksi dari suatu objek',
          'Feedback sistem'
        ],
        answer: 'Kemungkinan aksi dari suatu objek',
        type: 'MC'
      },
      {
        question: 'Multimodal interaction lebih natural karena …',
        options: [
          'Mengurangi visual',
          'Menggabungkan berbagai modalitas',
          'Menghilangkan input manual',
          'Fokus efisiensi'
        ],
        answer: 'Menggabungkan berbagai modalitas',
        type: 'MC'
      },
      {
        question: 'Voice UI paling efektif digunakan ketika …',
        options: [
          'Lingkungan bising',
          'Tangan pengguna sibuk',
          'Butuh presisi visual',
          'Pengguna membaca panjang'
        ],
        answer: 'Tangan pengguna sibuk',
        type: 'MC'
      },
      {
        question: 'Finger occlusion terjadi ketika …',
        options: [
          'Sistem tidak merespon',
          'Jari menutupi konten',
          'Gesture gagal',
          'Sensor error'
        ],
        answer: 'Jari menutupi konten',
        type: 'MC'
      },
      {
        question: 'AI-driven personalization bertujuan untuk …',
        options: [
          'Menyamakan pengalaman',
          'Menyesuaikan UI dengan perilaku pengguna',
          'Mengurangi data',
          'Menghapus interaksi'
        ],
        answer: 'Menyesuaikan UI dengan perilaku pengguna',
        type: 'MC'
      },
      {
        question: 'Predictive UX dicontohkan oleh …',
        options: [
          'Mode gelap',
          'Rekomendasi Netflix',
          'Breadcrumb',
          'Loading animation'
        ],
        answer: 'Rekomendasi Netflix',
        type: 'MC'
      },
      {
        question: 'Dark patterns adalah …',
        options: [
          'Desain gelap',
          'Teknik manipulatif yang merugikan pengguna',
          'Desain eksperimental',
          'UI kontras rendah'
        ],
        answer: 'Teknik manipulatif yang merugikan pengguna',
        type: 'MC'
      },
      {
        question: 'Prinsip transparansi dalam desain etis berarti …',
        options: [
          'Semua data publik',
          'Pengguna tahu data yang dikumpulkan',
          'Tidak memakai AI',
          'Semua fitur opsional'
        ],
        answer: 'Pengguna tahu data yang dikumpulkan',
        type: 'MC'
      },
      {
        question: 'Prototype dalam Design Thinking bersifat …',
        options: [
          'Final',
          'Mahal',
          'Cepat dan tidak harus sempurna',
          'Kompleks'
        ],
        answer: 'Cepat dan tidak harus sempurna',
        type: 'MC'
      },
      {
        question: 'Focused immersion terjadi ketika pengguna …',
        options: [
          'Menyelesaikan tugas cepat',
          'Terlibat penuh hingga lupa waktu',
          'Menghafal fitur',
          'Membaca dokumentasi'
        ],
        answer: 'Terlibat penuh hingga lupa waktu',
        type: 'MC'
      },
      {
        question: 'Tujuan utama desain etis adalah …',
        options: [
          'Profit',
          'Perlindungan hak dan kepercayaan pengguna',
          'Efisiensi teknis',
          'Standarisasi UI'
        ],
        answer: 'Perlindungan hak dan kepercayaan pengguna',
        type: 'MC'
      },

      // =======================
      // TRUE / FALSE (10)
      // =======================
      { question: 'Usability hanya berkaitan dengan teknologi.', options: ['True', 'False'], answer: 'False', type: 'TF' },
      { question: 'Empathize merupakan fondasi Design Thinking.', options: ['True', 'False'], answer: 'True', type: 'TF' },
      { question: 'Joy dan Curiosity memengaruhi niat penggunaan sistem.', options: ['True', 'False'], answer: 'True', type: 'TF' },
      { question: 'Gesture interaction selalu lebih baik dari touch.', options: ['True', 'False'], answer: 'False', type: 'TF' },
      { question: 'Cognitive load tinggi meningkatkan kenyamanan pengguna.', options: ['True', 'False'], answer: 'False', type: 'TF' },
      { question: 'AI dalam UI/UX hanya memengaruhi aspek visual.', options: ['True', 'False'], answer: 'False', type: 'TF' },
      { question: 'Emotional Design berkontribusi pada pengalaman menyenangkan.', options: ['True', 'False'], answer: 'True', type: 'TF' },
      { question: 'Multimodal interface meningkatkan fleksibilitas interaksi.', options: ['True', 'False'], answer: 'True', type: 'TF' },
      { question: 'Dark patterns meningkatkan kepercayaan jangka panjang.', options: ['True', 'False'], answer: 'False', type: 'TF' },
      { question: 'Iterasi membantu menurunkan risiko kegagalan produk.', options: ['True', 'False'], answer: 'True', type: 'TF' },

      // =======================
      // ESSAY (5)
      // =======================
      {
        question: 'Jelaskan hubungan antara usability, emotional design, dan user experience dalam menciptakan sistem interaktif yang efektif.',
        options: [''],
        answer: 'Usability memastikan sistem mudah, efisien, dan efektif digunakan. Emotional design menambahkan aspek emosional sehingga interaksi terasa menyenangkan dan bermakna. Kombinasi keduanya membentuk user experience yang positif, meningkatkan kepuasan, keterlibatan, dan loyalitas pengguna.',
        type: 'EY'
      },
      {
        question: 'Jelaskan peran Design Thinking dalam mengurangi risiko kegagalan produk digital.',
        options: [''],
        answer: 'Design Thinking memungkinkan pemahaman kebutuhan pengguna sejak awal melalui empati, pembuatan prototipe cepat, dan pengujian iteratif. Proses ini membantu menemukan kesalahan lebih dini sehingga solusi dapat diperbaiki sebelum dirilis luas, sehingga mengurangi risiko kegagalan produk.',
        type: 'EY'
      },
      {
        question: 'Bandingkan Voice UI, gesture interaction, dan touch interaction dari sisi kelebihan dan keterbatasannya.',
        options: [''],
        answer: 'Voice UI memungkinkan interaksi hands-free namun rentan noise dan masalah privasi. Gesture interaction cocok untuk AR/VR tetapi dapat menyebabkan kelelahan dan masalah akurasi. Touch interaction lebih presisi dan familiar, namun memiliki keterbatasan finger occlusion dan ukuran layar.',
        type: 'EY'
      },
      {
        question: 'Jelaskan dampak AI terhadap desain UI/UX serta satu risiko etis yang menyertainya.',
        options: [''],
        answer: 'AI mempercepat personalisasi, otomatisasi desain, dan predictive UX sehingga meningkatkan efisiensi dan relevansi interaksi. Risiko etis yang menyertainya adalah pelanggaran privasi dan manipulasi perilaku pengguna.',
        type: 'EY'
      },
      {
        question: 'Jelaskan mengapa desain etis menjadi sangat penting dalam pengembangan sistem interaktif modern.',
        options: [''],
        answer: 'Desain etis penting untuk melindungi privasi, hak, dan kepercayaan pengguna. Di era AI dan big data, desain dapat memengaruhi keputusan dan perilaku pengguna, sehingga prinsip transparansi, kontrol pengguna, dan keadilan harus diterapkan agar teknologi tidak merugikan pengguna.',
        type: 'EY'
      }
    ]),
  },
});


    // ASSIGNMENT

    const assignment1 = await prisma.assignment.create({
      data: {
        chapterId: chapter1.id,
        instruction: 'Buat laporan hasil analisis paper dengan struktur: Identitas Paper, Ringkasan Paper, Analisis Kritis, Penerapan dalam Konteks Praktis. Submit hasil analisis anda. Penamaan file: NomorKelompok_TugasW01_IMK.pdf.',
        fileUrl: 'https://apipuro.del.ac.id/v1/file/2d4b8ae53529f2cdda35e7344ec1c8a1',
      },
    });

    const assignment2 = await prisma.assignment.create({
      data: {
        chapterId: chapter2.id,
        instruction: 'Buat laporan hasil analisis paper dengan struktur: Identitas Paper, Ringkasan Paper, Analisis Kritis, Penerapan dalam Konteks Praktis. Submit hasil analisis anda. Penamaan file: NomorKelompok_TugasW02_IMK.pdf.',
        fileUrl: 'https://apipuro.del.ac.id/v1/file/ffac580ad520c8fc978956081c288f84',
      },
    });

    const assignment3 = await prisma.assignment.create({
      data: {
        chapterId: chapter3.id,
        instruction: 'Buat laporan hasil analisis paper dengan struktur: Identitas Paper, Ringkasan Paper, Analisis Kritis, Penerapan dalam Konteks Praktis. Submit hasil analisis anda. Penamaan file: NomorKelompok_TugasW03_IMK.pdf.',
        fileUrl: 'https://apipuro.del.ac.id/v1/file/ffac580ad520c8fc978956081c288f84',
      },
    });

    const assignment4 = await prisma.assignment.create({
      data: {
        chapterId: chapter4.id,
        instruction: 'Buat laporan hasil analisis paper dengan struktur: Identitas Paper, Ringkasan Paper, Analisis Kritis, Penerapan dalam Konteks Praktis. Submit hasil analisis anda. Penamaan file: NomorKelompok_TugasW04_IMK.pdf.',
        fileUrl: 'https://media.nngroup.com/media/articles/attachments/Heuristic_Summary1-compressed.pdf',
      },
    });

    const assignment5 = await prisma.assignment.create({
      data: {
        chapterId: chapter5.id,
        instruction: 'Anda diminta untuk mengevaluasi antarmuka dari aplikasi pilihan mereka dan mengidentifikasi kelemahan serta rekomendasi perbaikannya.',
        fileUrl: 'https://apipuro.del.ac.id/v1/file/0fa579a231624800ad8ab9db25f23481',
      },
    });

    const assignment6 = await prisma.assignment.create({
      data: {
        chapterId: chapter6.id,
        instruction: 'Buatlah catatan rangkuman review materi dari Week 1 sampai Week 6 untuk persiapan UTS!',
        fileUrl: '',
      },
    });

    const assignment7 = await prisma.assignment.create({
      data: {
        chapterId: chapter7.id,
        instruction: 'Silahkan mengikuti instruksi tugas berikut ini:!',
        fileUrl: 'https://apipuro.del.ac.id/v1/file/e533ca8406a061f72193a626569f505e',
      },
    });

    const assignment8 = await prisma.assignment.create({
      data: {
        chapterId: chapter8.id,
        instruction: 'Buatlah pengerjaan ulang soal UTS beserta jawaban yang benar lengkap dengan penjelasan',
        fileUrl: '',
      },
    });


    const assignment9 = await prisma.assignment.create({
      data: {
        chapterId: chapter9.id,
        instruction: 'Buat laporan hasil analisis paper dengan struktur: Identitas Paper, Ringkasan Paper, Analisis Kritis, Penerapan dalam Konteks Praktis. Submit hasil analisis anda. Penamaan file: NomorKelompok_TugasW09_IMK.pdf.',
        fileUrl: 'https://apipuro.del.ac.id/v1/file/ac64b03dd9434260895bd90038078e45',
      },
    });

    const assignment10 = await prisma.assignment.create({
      data: {
        chapterId: chapter10.id,
        instruction: 'Buat laporan hasil analisis paper dengan struktur: Identitas Paper, Ringkasan Paper, Analisis Kritis, Penerapan dalam Konteks Praktis. Submit hasil analisis anda. Penamaan file: NomorKelompok_TugasW10_IMK.pdf.',
        fileUrl: 'https://apipuro.del.ac.id/v1/file/1b30bb2522ace1ad7102e710303470a0',
      },
    });

     const assignment11 = await prisma.assignment.create({
      data: {
        chapterId: chapter11.id,
        instruction: 'Buat laporan hasil analisis paper dengan struktur: Identitas Paper, Ringkasan Paper, Analisis Kritis, Penerapan dalam Konteks Praktis. Submit hasil analisis anda. Penamaan file: NomorKelompok_TugasW11_IMK.pdf.',
        fileUrl: 'https://apipuro.del.ac.id/v1/file/8fbb484cdffcdb3259f90d4e8de2ab06',
      },
    });

    const assignment12 = await prisma.assignment.create({
      data: {
        chapterId: chapter12.id,
        instruction: 'Buat laporan hasil analisis paper dengan struktur: Identitas Paper, Ringkasan Paper, Analisis Kritis, Penerapan dalam Konteks Praktis. Submit hasil analisis anda. Penamaan file: NomorKelompok_TugasW12_IMK.pdf.',
        fileUrl: 'https://apipuro.del.ac.id/v1/file/7d9ab3816508505a1cd6778e774023ae',
      },
    });

       const assignment13 = await prisma.assignment.create({
      data: {
        chapterId: chapter13.id,
        instruction: 'Buat laporan hasil analisis paper dengan struktur: Identitas Paper, Ringkasan Paper, Analisis Kritis, Penerapan dalam Konteks Praktis. Submit hasil analisis anda. Penamaan file: NomorKelompok_TugasW13_IMK.pdf.',
        fileUrl: 'https://apipuro.del.ac.id/v1/file/431a7c6f3e40f010d04f63e470d186f2',
      },
    });

    
       const assignment14 = await prisma.assignment.create({
      data: {
        chapterId: chapter14.id,
        instruction: 'Buat laporan hasil analisis paper dengan struktur: Identitas Paper, Ringkasan Paper, Analisis Kritis, Penerapan dalam Konteks Praktis. Submit hasil analisis anda. Penamaan file: NomorKelompok_TugasW14_IMK.pdf.',
        fileUrl: 'https://apipuro.del.ac.id/v1/file/431a7c6f3e40f010d04f63e470d186f2',
      },
    });


          const assignment15 = await prisma.assignment.create({
      data: {
        chapterId: chapter15.id,
        instruction: 'Buat laporan hasil analisis paper dengan struktur: Identitas Paper, Ringkasan Paper, Analisis Kritis, Penerapan dalam Konteks Praktis. Submit hasil analisis anda. Penamaan file: NomorKelompok_TugasW15_IMK.pdf.',
        fileUrl: 'https://apipuro.del.ac.id/v1/file/62263d87a19b2966ad9fda3bf01d80cd',
      },
    });

        const assignment16 = await prisma.assignment.create({
      data: {
        chapterId: chapter16.id,
        instruction: 'Buatlah pengerjaan ulang soal UTS beserta jawaban yang benar lengkap dengan penjelasan',
        fileUrl: '',
      },
    });


    // Create UserCourse relationship
    await prisma.userCourse.create({
      data: {
        userId: student.id,
        courseId: course1.id,
        progress: 0,
        currentChapter: 1,
        isCompleted: false,
      },
    });
    
    await prisma.userCourse.create({
      data: {
        userId: emely.id,
        courseId: course1.id,
        progress: 0,
        currentChapter: 1,
        isCompleted: false,
      },
    });
    await prisma.userCourse.create({
      data: {
        userId: gerry.id,
        courseId: course1.id,
        progress: 0,
        currentChapter: 1,
        isCompleted: false,
      },
    });

    await prisma.userCourse.create({
      data: {
        userId: gerald.id,
        courseId: course1.id,
        progress: 0,
        currentChapter: 1,
        isCompleted: false,
      },
    });

    await prisma.userCourse.create({
      data: {
        userId: user1.id,
        courseId: course1.id,
        progress: 0,
        currentChapter: 1,
        isCompleted: false,
      },
    });

    await prisma.userCourse.create({
      data: {
        userId: user2.id,
        courseId: course1.id,
        progress: 0,
        currentChapter: 1,
        isCompleted: false,
      },
    });

    await prisma.userCourse.create({
      data: {
        userId: user3.id,
        courseId: course1.id,
        progress: 0,
        currentChapter: 1,
        isCompleted: false,
      },
    });

    await prisma.userCourse.create({
      data: {
        userId: user4.id,
        courseId: course1.id,
        progress: 0,
        currentChapter: 1,
        isCompleted: false,
      },
    });

    await prisma.userCourse.create({
      data: {
        userId: user5.id,
        courseId: course1.id,
        progress: 0,
        currentChapter: 1,
        isCompleted: false,
      },
    });

    await prisma.userCourse.create({
      data: {
        userId: user6.id,
        courseId: course1.id,
        progress: 0,
        currentChapter: 1,
        isCompleted: false,
      },
    });

    await prisma.userCourse.create({
      data: {
        userId: user7.id,
        courseId: course1.id,
        progress: 0,
        currentChapter: 1,
        isCompleted: false,
      },
    });

    await prisma.userCourse.create({
      data: {
        userId: user8.id,
        courseId: course1.id,
        progress: 0,
        currentChapter: 1,
        isCompleted: false,
      },
    });

    await prisma.userCourse.create({
      data: {
        userId: user9.id,
        courseId: course1.id,
        progress: 0,
        currentChapter: 1,
        isCompleted: false,
      },
    });

    await prisma.userCourse.create({
      data: {
        userId: user10.id,
        courseId: course1.id,
        progress: 0,
        currentChapter: 1,
        isCompleted: false,
      },
    });

    // Create UserChapter relationship
    await prisma.userChapter.create({
      data: {
        userId: student.id,
        chapterId: chapter1.id,
        isCompleted: false,
        materialDone: false,
        assessmentDone: false,
        assignmentDone: false,
        assessmentAnswer: JSON.stringify([]),
        assessmentGrade: 0,
        submission: '',
      },
    });

    const badge1 = await prisma.badge.create({
      data: {
        name: 'Beginner Designer',
        type: BadgeType.BEGINNER,
        image: 'https://izqdlgxwetajwkatptnt.supabase.co/storage/v1/object/public/badges//imk-1.png',
        courseId: course1.id,
        chapterId: chapter3.id,
      },
    });

    const badge2 = await prisma.badge.create({
      data: {
        name: 'Intermediate Designer',
        type: BadgeType.INTERMEDIATE,
        image: 'https://izqdlgxwetajwkatptnt.supabase.co/storage/v1/object/public/badges//imk-2.png',
        courseId: course1.id,
        chapterId: chapter6.id,
      },
    });

    const badge3 = await prisma.badge.create({
      data: {
        name: 'Advance Designer',
        type: BadgeType.ADVANCE,
        image: 'https://izqdlgxwetajwkatptnt.supabase.co/storage/v1/object/public/badges//imk-3.png',
        courseId: course1.id,
        chapterId: chapter8.id,
      },
    });

    const badge4 = await prisma.badge.create({
      data: {
        name: 'Beginner Login',
        type: BadgeType.BEGINNER,
        image: 'https://izqdlgxwetajwkatptnt.supabase.co/storage/v1/object/public/badges//login-1.png',
        courseId: course2.id,
        chapterId: chapter1.id,
      },
    });

    const badge5 = await prisma.badge.create({
      data: {
        name: 'Intermediate Login',
        type: BadgeType.INTERMEDIATE,
        image: 'https://izqdlgxwetajwkatptnt.supabase.co/storage/v1/object/public/badges//login-2.png',
        courseId: course2.id,
        chapterId: chapter2.id,
      },
    });

    const badge6 = await prisma.badge.create({
      data: {
        name: 'Advance Login',
        type: BadgeType.ADVANCE,
        image: 'https://izqdlgxwetajwkatptnt.supabase.co/storage/v1/object/public/badges//login-3.png',
        courseId: course2.id,
        chapterId: chapter3.id,
      },
    });

    const badge7 = await prisma.badge.create({
      data: {
        name: 'Beginner TBFA',
        type: BadgeType.BEGINNER,
        image: 'https://izqdlgxwetajwkatptnt.supabase.co/storage/v1/object/public/badges//tbfa-1.png',
        courseId: course3.id,
        chapterId: chapter1.id,
      },
    });

    const badge8 = await prisma.badge.create({
      data: {
        name: 'Intermediate TBFA',
        type: BadgeType.INTERMEDIATE,
        image: 'https://izqdlgxwetajwkatptnt.supabase.co/storage/v1/object/public/badges//tbfa-2.png',
        courseId: course3.id,
        chapterId: chapter2.id,
      },
    });

    const badge9 = await prisma.badge.create({
      data: {
        name: 'Advance TBFA',
        type: BadgeType.ADVANCE,
        image: 'https://izqdlgxwetajwkatptnt.supabase.co/storage/v1/object/public/badges//tbfa-3.png',
        courseId: course3.id,
        chapterId: chapter3.id,
      },
    });

    // Create UserBadge relationship
    await prisma.userBadge.create({
      data: {
        userId: student.id,
        badgeId: badge1.id,
      },
    });

    // TRADES

    const trade1 = await prisma.trade.create({
      data: {
        image: 'lib/assets/pictures/icon.png',
        title: 'Voucher Belanja Cafetaria Del',
        description: 'Voucher Belanja senilai Rp.10.000,- untuk transaksi di Cafetaria Del. Berlaku sampai 1 semester kedepan.',
        requiredBadgeType: 'ADVANCE',
      }
    });

    const trade2 = await prisma.trade.create({
      data: {
        image: 'lib/assets/pictures/icon.png',
        title: 'Sticky Notes UTS',
        description: 'Sticky Notes berupa cemilan makanan dan minuman dengan ucapan semangat menjalani UTS',
        requiredBadgeType: 'BEGINNER',
      }
    });

    const trade3 = await prisma.trade.create({
      data: {
        image: 'lib/assets/pictures/icon.png',
        title: 'Nilai Tambah UTS +5',
        description: 'Penambahan Nilai UTS sebanyak 5. Maksimal nilai yang bisa diperoleh dengan penambahan adalah 80',
        requiredBadgeType: 'INTERMEDIATE',
      }
    });

    const trade4 = await prisma.trade.create({
      data: {
        image: 'lib/assets/pictures/icon.png',
        title: 'Peserta Evaluasi Levelearn Gamification',
        description: 'Kesempatan berpartisipasi dalam Research TA-2024/2025-13 terkait Evaluasi Gamification Aplikasi Levelearn',
        requiredBadgeType: 'BEGINNER',
      }
    });

    await prisma.userTrade.create({
      data: {
        userId: student.id,
        tradeId: trade3.id,
      },
    });

    console.log('Seeding completed successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });