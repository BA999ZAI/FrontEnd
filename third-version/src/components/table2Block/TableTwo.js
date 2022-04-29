import imgSymbolOrange from '../../assets/img/border_orange.png';
import imgStrelkaVpravo from '../../assets/img/strelka_vpravo.png';
import './TableTwo.scss';

const TwoBlockComponent = ({text_1, num, text_2}) => {
    return <>
        <div className="block_b_4 d-flex flex-column">
            <div className="d-flex align-items-center justify-content-between">
                <img src={imgSymbolOrange} className="symbolOrange" />
                <p className="txt_top_block">
                    {text_1}
                </p>
                <p className="zero">
                    {num}
                </p>
            </div>

            <p className="txt_b_4 m-0">
                {text_2}
            </p>

            <div className="d-inline-flex m-0 mt-auto align-content-center">
                <p className="textBac">
                    Baca lebih Lanjut
                </p>
                <img src={imgStrelkaVpravo} style={{ width: '24px', height: '24px', marginLeft: '8px' }} />
            </div>
        </div>
    </>
}

export default TwoBlockComponent;