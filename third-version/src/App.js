import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import block1_right from './assets/img/block1_right.png';
import caret_down from './assets/img/caret_down.png';
import Caret_left from './assets/img/Caret_left.png';
import Caret_right from './assets/img/Caret_right.png';
import email from './assets/img/email.png';
import Facebook from './assets/img/Facebook.png';
import image__center from './assets/img/image__center.png';
import image__left from './assets/img/image__left.png';
import image__right from './assets/img/image__right.png';
import image_left from './assets/img/image_left.png';
import image_right from './assets/img/image_right.png';
import In from './assets/img/In.png';
import inst from './assets/img/inst.png';
import left_pic from './assets/img/left_pic.png';
import phone from './assets/img/phone.png';
import search from './assets/img/search.png';
import T from './assets/img/T.png';
import telef from './assets/img/telef.png';
import TestComponent from './components/testComponent/testComponent';
import TwoBlockComponent from './components/testComponent/twoBlockComponent';
import FourBlockComponent from './components/testComponent/fourBlockComponent';
import OneMainBlockComponent from './components/testComponent/oneMainBlockComponent';


const App = () => {
  const showAlert = () => {
    const element = document.getElementById('pi');
    if (element == null) {
      return;
    }
    const value = element.innerHTML;
    if (value == null) {
      return;
    }
    alert(value);

  }
  const onChangeText = (event) => {
    document.getElementById('pi').innerHTML = event.target.value;
  }
  return (
    <div>

      {/* 1 BLOCK */}
      <div className="d-flex justify-content-between" style={{ marginTop: '56px', width: '600px' }}>
  
        <TestComponent num='200' simbol='+' text='Residental grup telah bergabung' />
        <TestComponent sty={{paddingTop: '45px', fontWeight: '700', fontSize: '16px', lineHeight: '24px'}} num='10' simbol='Tahun' text='Sudah berpengalaman' />
        <TestComponent num='999' simbol='+' text='Properti tersedia di berbagai Kota' />
  
      </div>

      <div className="b_5 w-100">
        <div className="w-100 d-flex flex-column" style={{ margin: '60px 100px' }}>
          <div className="d-flex w-100 align-items-center">

            <p className="omah">
              O~Mah
            </p>

            <div className="knopki d-flex justify-content-between ms-auto">

              <OneMainBlockComponent text='Home' />
              <OneMainBlockComponent text='About' />

              <div className="d-flex align-self-center">
  
                <OneMainBlockComponent text='Properties' />
                <img src={caret_down} style={{ width: '24px', height: '24px' }} />
  
              </div>

              <OneMainBlockComponent text='Contact' />

            </div>

          </div>
          <div className="d-flex">
            <div className="d-flex flex-column" style={{ marginTop: '100px' }}>

              <p className="m-0 big_b_5">
                Temukan Hunian Keluarga Sesuai Keinginanmu
              </p>

              <p className="min_b_5">
                Menyediakan hunian bagi keluarga anda dengan varian pilihan dan lokasi yang strategis di kota anda dengan cara yang lebih mudah.
              </p>

              <div className="search d-flex align-items-center">

                <img src={search} style={{ width: '24px', height: '24px' }} />

                <div className="elem d-flex flex-column w-100">

                  <input
                    id="elem"
                    className="sam_search"
                    onKeyUp={(event) => onChangeText(event)}
                    type="text"
                    placeholder="Search location, properties, residental group" />
                  <p id="pi" className="m-0"></p>

                </div>

                <button className="button_b_5 ms-auto" onClick={() => showAlert()}>Search</button>

              </div>
              <div className="d-flex justify-content-between" style={{ marginTop: '56px', width: '600px' }}>

                <TestComponent num='200' simbol='+' text='Residental grup telah bergabung' />
                <TestComponent sty={{paddingTop: '45px', fontWeight: '700', fontSize: '16px', lineHeight: '24px'}} num='10' simbol='Tahun' text='Sudah berpengalaman' />
                <TestComponent num='999' simbol='+' text='Properti tersedia di berbagai Kota' />

              </div>
            </div>

            <img src={block1_right} className="ms-auto" style={{ marginTop: '40px', width: '500px', height: '625px' }} />

          </div>
        </div>
      </div>

      {/* 2 BLOCK */}

      <div className="b_4">
        <div className="d-flex w-100 flex-column" style={{ margin: '100px 100px' }}>
          <p className="big_txt_b_4 m-0">
            Tahapan Pembelian Properti yang Mudah dan Cepat
          </p>

          <div className="w-100 d-flex justify-content-around" style={{ marginTop: '64px', height: '300px' }}>
            <TwoBlockComponent text_1='Pilih Properti' num='01' text_2='Cari properti yang diinginkan sesuai dengan kriteria anda dan keluarga. Cara memilih properti yang bijak dapat anda baca lebih lanjut di sini' />
            <TwoBlockComponent text_1='Proses Booking' num='02' text_2='Pembayaran dalam bentuk sejumlah uang sebagai komitmen memesan unit properti tertentu.' />
            <TwoBlockComponent text_1='KPR dan Sertifikasi' num='03' text_2='Pembiayaan KPR untuk pembeli rumah dengan skema pembiayaan jika diperlukan dan dilanjutkan proses sertifkasi HGB.' />
          </div>
        </div>
      </div>

      {/* 3 BLOCK */}

      <div className="b_5">
        <div className="w-100 d-flex flex-column" style={{ margin: '68px 100px' }}>
          <p className="min_txt_b_3 m-0">
            Pilihan konsumen
          </p>
          <p className="big_txt_b_3 m-0">
            Residen Favorit
          </p>
          <div className="d-flex w-100 flex-row" style={{ marginTop: '64px' }}>
            <div className="position-relative" style={{ width: '525px', height: '550px' }}>
              <img src={left_pic} className="position-absolute" style={{ top: '0', left: '0' }} />
              <img src={left_pic} className="position-absolute" style={{ bottom: '0', right: '0' }} />
            </div>
            <div className="d-flex flex-column ms-auto" style={{ width: '540px', height: '320px' }}>
              <p className="txt1_right_b_3">
                Bangunan yang dirancang oleh Aristektur Handal
              </p>
              <p className="txt2_right_b_3">
                Tanpa diragukan, properti yang disediakan dalam webiste kami merupakan hasil kerjasama secara profesional dengan para Arsitektur ternama dan Developer yang terpercaya.
              </p>
              <div className="d-flex flex-row align-items-center">
                <div className="button_left_b_3 d-flex justify-content-center align-items-center">
                  <img src={telef} style={{ width: '17px', height: '17px' }} />
                  <p className="txt1_button_b_3">
                    Hubungi Kami
                  </p>
                </div>
                <div className="d-flex" style={{ marginLeft: '48px' }}>
                  <p className="txt2_button_b_3 align-items-center justify-content-center">
                    Explore lebih banyak
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 BLOCK */}

      <div className="b_4">
        <div className=" w-100 d-flex flex-column" style={{ margin: '68px 100px' }}>
          <p className="min_txt_1 m-0">
            Pilihan Auditor
          </p>
          <div className="d-inline-flex align-items-center">
            <p className="big_txt_1 d-inline-flex m-0 h-auto">
              Residen Berbagai Kota
            </p>

            <div className="d-flex ms-auto justify-content-between " style={{ width: '84px' }}>
              <img src={Caret_left} className="strelka_1" />
              <img src={Caret_right} className="strelka_1" />
            </div>
          </div>

          <div className="d-flex flex-row justify-content-evenly" style={{ marginTop: '64px' }}>
            <FourBlockComponent img={image__left} min_text='Magnolia Surabaya' big_text='Jl. Gatot Subroto No.KM.6,8, RT.001/RW.008, Jatake, Kec. Jatiuwung, Kota Tangerang, Banten 15136' />
            <FourBlockComponent img={image__center} min_text='Pinang Residences' big_text='Jl. Deplu Raya No.16 RT.5, RW.003 Bintaro, Pesanggrahan, Jakarta Selatan 12330' />
            <FourBlockComponent img={image__right} min_text='South Grove' big_text='1 No.1, RT.1/RW.1, Lb. Bulus, Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12440' />
          </div>
        </div>
      </div>

      {/* 5 BLOCK */}

      <div className="b_5">
        <div className="d-flex w-100" style={{ margin: '48px 100px' }}>
          <div className="d-flex flex-column">

            <p className="txt_1 d-flex m-0">
              Hubungi Kami
            </p>

            <div className="d-flex flex-row" style={{ marginTop: '63px' }}>
              <div className="d-flex flex-column" style={{ border: '1px solid rgba(255, 117, 39, 0.5)', padding: '24px' }}>
                <div className="d-flex flex-row justify-content-between align-items-center" style={{ marginBottom: '24px' }}>

                  <img src={phone} className="d-flex align-self-center" style={{ width: '33px', height: '33px' }} />
                  <p className="txt_2_1 d-flex flex-wrap mb-0">
                    Call +6281232936733
                  </p>

                </div>

                <p className="Call_Now d-flex m-0 justify-content-center">
                  Call Now
                </p>

              </div>
              <div className="block__ d-flex flex-column">
                <div className="d-flex flex-row justify-content-between align-items-center" style={{ marginBottom: '24px' }}>

                  <img src={email} className="d-flex" style={{ width: '40px', height: '33px' }} />
                  <p className="txt_2_2 d-flex flex-wrap mb-0">
                    email omahindev@gmail.com
                  </p>

                </div>

                <p className="Email_Now d-flex border-0 m-0 justify-content-center">
                  Email Now
                </p>

              </div>
            </div>
          </div>
          <div className="d-flex flex-column ms-auto">

            <p className="txt_1_1 m-0 d-flex">
              Penghargaan
            </p>

            <div className="d-flex justify-content-between" style={{ marginTop: '39px' }}>

              <img src={image_left} className="d-flex align-self-center" style={{ width: '155px', height: '105px' }} />
              <img src={image_right} className="d-flex align-self-center m-0" style={{ marginLeft: '32px', width: '211.11px', height: '152px' }} />

            </div>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className="d-flex" style={{ background: '#203239' }}>
        <div className="d-flex w-100 h-auto" style={{ padding: '0px 100px' }}>
          <p className="block_1 m-0 d-flex">
            O~Mah
          </p>

          <div className="d-flex justify-content-between m-auto me-0" style={{ width: '288px' }}>

            <img className="img_all" src={inst} />
            <img className="img_all" src={Facebook} />
            <img className="img_all" src={T} />
            <img className="img_all" src={In} />

          </div>
        </div>
      </div>
  
    </div>
  );
}

export default App;
