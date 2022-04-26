import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import block1_right from './assets/img/block1_right.png';
import border_orange from './assets/img/border_orange.png';
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
import strelka_vpravo from './assets/img/strelka_vpravo.png';
import T from './assets/img/T.png';
import telef from './assets/img/telef.png';
import TestComponent from './components/testComponent/testComponent';

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
      <TestComponent text='hello1' />
      <TestComponent text={'hello2'} />
      <TestComponent text='hello3' />
      <div className="b_5 w-100">
        <div className="w-100 d-flex flex-column" style={{ margin: '60px 100px' }}>
          <div className="d-flex w-100 align-items-center">
            <p className="omah">
              O~Mah
            </p>
            <div className="knopki d-flex justify-content-between ms-auto">
              <a className="knopa">
                Home
              </a>
              <a className="knopa">
                About
              </a>
              <div className="d-flex align-self-center">
                <a className="knopa">
                  Properties
                </a>
                <img src={caret_down} style={{ width: '24px', height: '24px' }} />
              </div>
              <a className="knopa">
                Contact
              </a>
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
                <div className="d-flex flex-column" style={{ width: '150px' }}>
                  <div className="d-flex">
                    <p className="num m-0">
                      200
                    </p>
                    <p className="plus m-0 align-self-center">
                      +
                    </p>
                  </div>
                  <p className="txt_b_5 m-0">
                    Residental grup telah bergabung
                  </p>
                </div>
                <div className="d-flex flex-column" style={{ width: '150px' }}>
                  <div className="d-flex">
                    <p className="num m-0">
                      10
                    </p>
                    <p className="plus m-0" style={{
                      paddingTop: '45px',
                      fontWeight: '700',
                      fontSize: '16px',
                      lineHeight: '24px'
                    }}>
                      Tahun
                    </p>
                  </div>
                  <p className="txt_b_5 m-0">
                    Sudah berpengalaman
                  </p>
                </div>
                <div className="d-flex flex-column" style={{ width: '150px' }}>
                  <div className="d-flex">
                    <p className="num m-0">
                      999
                    </p>
                    <p className="plus m-0 align-self-center">
                      +
                    </p>
                  </div>
                  <p className="txt_b_5 m-0">
                    Properti tersedia di berbagai Kota
                  </p>
                </div>
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
            <div className="block_b_4 d-flex flex-column">
              <div className="d-flex align-items-center justify-content-between">
                <img src={border_orange} className="bord_orange" />
                <p className="txt_top_block">
                  Pilih Properti
                </p>
                <p className="zero">
                  01
                </p>
              </div>

              <p className="txt_b_4 m-0">
                Cari properti yang diinginkan sesuai dengan kriteria anda dan keluarga. Cara memilih properti yang bijak dapat anda baca lebih lanjut di sini
              </p>

              <div className="d-inline-flex m-0 mt-auto align-content-center">
                <p className="baca">
                  Baca lebih Lanjut
                </p>
                <img src={strelka_vpravo} style={{ width: '24px', height: '24px', marginLeft: '8px' }} />
              </div>
            </div>

            <div className="block_b_4 d-flex flex-column">
              <div className="d-flex align-items-center justify-content-between">
                <img src={border_orange} className="bord_orange" />
                <p className="txt_top_block">
                  Proses Booking
                </p>
                <p className="zero">
                  02
                </p>
              </div>
              <p className="txt_b_4 m-0">
                Pembayaran dalam bentuk sejumlah uang sebagai komitmen memesan unit properti tertentu.
              </p>

              <div className="d-inline-flex m-0 mt-auto align-content-center">
                <p className="baca">
                  Baca lebih Lanjut
                </p>
                <img src={strelka_vpravo} style={{ width: '24px', height: '24px', marginLeft: '8px' }} />
              </div>
            </div>

            <div className="block_b_4 d-flex flex-column">
              <div className="d-flex align-items-center justify-content-between">
                <img src={border_orange} className="bord_orange" />
                <p className="txt_top_block">
                  KPR dan Sertifikasi
                </p>
                <p className="zero">
                  03
                </p>
              </div>
              <p className="txt_b_4 m-0">
                Pembiayaan KPR untuk pembeli rumah dengan skema pembiayaan jika diperlukan dan dilanjutkan proses sertifkasi HGB.
              </p>

              <div className="d-inline-flex m-0 mt-auto align-content-center">
                <p className="baca">
                  Baca lebih Lanjut
                </p>
                <img src={strelka_vpravo} style={{ width: '24px', height: '24px', marginLeft: '8px' }} />
              </div>
            </div>
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
            <div className="d-flex flex-column">
              <img src={image__left} className="pikcha" />
              <p className="big_txt_0">
                Magnolia Surabaya
              </p>
              <p className="txt_3">
                Jl. Gatot Subroto No.KM.6,8, RT.001/RW.008, Jatake, Kec. Jatiuwung, Kota Tangerang, Banten 15136
              </p>
            </div>

            <div className="d-flex flex-column">
              <img src={image__center} className="pikcha" />
              <p className="big_txt_0">
                Pinang Residences
              </p>
              <p className="txt_3">
                Jl. Deplu Raya No.16 RT.5, RW.003 Bintaro, Pesanggrahan, Jakarta Selatan 12330
              </p>
            </div>

            <div className="d-flex flex-column">
              <img src={image__right} className="pikcha" />
              <p className="big_txt_0">
                South Grove
              </p>
              <p className="txt_3">
                1 No.1, RT.1/RW.1, Lb. Bulus, Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12440
              </p>
            </div>
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
