import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ocbc from "../../Assets/Projects/ocbc/ocbc.jpeg";
import ViewProjects from "./ViewProjects";
import pos from "../../Assets/Projects/pos/pos1.jpeg";
import ezyhr from "../../Assets/Projects/ezyhr/ezyhr1.jpeg";
import pertamedika from "../../Assets/Projects/pertamedika/pertamedika.jpeg";
import puskesmasbgr from "../../Assets/Projects/puskesmasbogor/puskesmasbogor2.jpeg";
import dokter from "../../Assets/Projects/etc/dokterapp.jpeg";
import catatanapps from "../../Assets/Projects/etc/catatanapps.jpeg";
import firebasechat from "../../Assets/Projects/etc/firebasechat.jpeg";
import movieapp from "../../Assets/Projects/etc/movieapp.jpeg";
import salamubank from "../../Assets/Projects/etc/salamubank.jpeg";
import ecommerce from "../../Assets/Projects/etc/ecommerce.jpeg";
import todoapp from "../../Assets/Projects/etc/todoapp.jpeg";
import movieapp2 from "../../Assets/Projects/etc/movieapp2.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ocbc}
              // isBlog={false}
              title="Ocbc"
              description="Merchant App Ocbc Saat ini Yokke sudah memiliki YokkeBiz yaitu layanan POS yang telah digunakan oleh Middle
              Enterprise. Untuk dapat menjangkau dan memenuhi kebutuhan market pada segmentasi
              micro dan Small Enterprise, maka akan dikembangkan layanan YokkeBiz Lite. YokkeBiz Lite
              akan dikembangkan dalam bentuk mobile aplikasi. Pada phase ini pengembangan akan
              difokuskan untuk partner Bank OCBC NISP dan menggunakan fitur QRIS Static."
              //ghLink="https://github.com/zainalsalamun/Chatify"
              //demoLink={ViewProjects}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pos}
              isBlog={false}
              title="Point Of Sale"
              description="Aplikasi Point Of Sale (POS) yang digunakan untuk memudahkan transaksi penjualan barang dan jasa di toko, warung, atau bisnis lainnya. Aplikasi ini dapat membantu mempercepat proses transaksi, mengurangi kesalahan, dan meningkatkan efisiensi bisnis. Fitur-fitur yang tersedia di aplikasi ini antara lain adalah mengelola produk, mengelola stok, mengelola pelanggan, mengelola transaksi, dan mengelola laporan."
              // ghLink="https://github.com/zainalsalamun/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ezyhr}
              isBlog={false}
              title="Ezyhr Attendance"
              description="Aplikasi untuk absensi berbasis web yang dapat membantu memudahkan proses absensi karyawan di perusahaan. Aplikasi ini dapat membantu mempercepat proses absensi, mengurangi kesalahan, dan meningkatkan efisiensi bisnis. Fitur-fitur yang tersedia di aplikasi ini antara lain adalah mengelola karyawan, mengelola absensi, mengelola cuti, mengelola lembur, dan mengelola laporan."
              // ghLink="https://github.com/zainalsalamun/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pertamedika}
              isBlog={false}
              title="Pertamedika Apps"
              description="Aplikasi untuk pasien pertamedika digunakan untuk reservasi rawat jalan dan medical record resume medis, jadwal dokter"
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={puskesmasbgr}
              isBlog={false}
              title="Puskesmas Bogor Apps"
              description="Aplikasi untuk pasien puskesmas bogor digunakan untuk reservasi rawat jalan dan medical record resume medis, jadwal dokter"
              //ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dokter}
              isBlog={false}
              title="Dokter App"
              description="Aplikasi digunakan untuk dokter melihat pasien yang reservasi sesuai jadwal dokter yang tersedia dan bisa update jadwal dokter"
              //ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={catatanapps}
              isBlog={false}
              title="Catatan Pulsa Apps"
              description="Aplikasi untuk mencatat pembelian pulsa menggunakan android native bahasa pemrograman java android "
              // ghLink="https://github.com/soumyajit4419/Color-Changer"
              // demoLink="https://color-changer.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={firebasechat}
              isBlog={false}
              title="Firebase Chat"
              description="Aplikasi chat dibuat menggunakan android native java dan menggunakan fitur realtime chat dari firebase"
              // ghLink="https://github.com/soumyajit4419/Realtime-Object-Detection"
              // demoLink="https://realtime-object-detection.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieapp}
              isBlog={false}
              title="Movie App"
              description="Aplikasi untuk mencari film dan melihat detail film dibuat menggunakan android native dan kotlin sebagai bahasa pemrogramannya"
              // ghLink="https://github.com/soumyajit4419/Realtime-Object-Detection"
              // demoLink="https://realtime-object-detection.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={salamubank}
              isBlog={false}
              title="UI Bank App"
              description="Slicing UI Aplikasi untuk perbankan belum integrasi dengan API"
               ghLink="https://github.com/zainalsalamun/bank_salamu_master"
               //demoLink="https://github.com/zainalsalamun/bank_salamu_master"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Flutter UI Ecommerce"
              description="Aplikasi Ecommerce dibuat menggunakan flutter dengan bahasa pemrograman dart, menggunakan fitur login dan register, menampilkan produk, fitur checkout dan simpan ke database, menggunakan state management provider"
               ghLink="https://github.com/zainalsalamun/shoes_project"
               //demoLink="https://github.com/zainalsalamun/bank_salamu_master"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoapp}
              isBlog={false}
              title="Flutter Todo App"
              description="Aplikasi Todo App dibuat menggunakan flutter dengan bahasa pemrograman dart menggunakan database sqflite sebagai lokal database"
               ghLink="https://github.com/zainalsalamun/flutter_todoapp"
               //demoLink="https://github.com/zainalsalamun/bank_salamu_master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieapp2}
              isBlog={false}
              title="Flutter Movie App"
              description="Aplikasi Movie App dibuat menggunakan framework flutter dengan bahasa pemrograman dart "
               ghLink="https://github.com/zainalsalamun/movie_app_screen"
               //demoLink="https://github.com/zainalsalamun/bank_salamu_master"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
