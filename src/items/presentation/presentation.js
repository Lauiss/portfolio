import pdfcv from '../../assets/CV-AMANN-Florian.pdf';
import pfp from '../../assets/pdp.jpg';
import './presentation.css';

function Presentation({translate}) {
  return (
    <div className="presentation-page">
      <div className="left-block">
        <div className="img-container">
          <img src={pfp} alt="pfp" />
        </div>
        <div>
          <button className="btn-action custom-btn"><a href={pdfcv} download> { translate('DOWNLOAD_CV') } </a></button>
          <button className="btn-action custom-btn"><a href="mailto:amann.florian@protonmail.com"> { translate('CONTACT_MAIL') } </a></button>
          <button className="btn-action custom-btn"><a href="https://linkedin.com/in/florian-amann/"> { translate('LINKEDIN') } </a></button>
          <button className="btn-action custom-btn"><a href="https://github.com/Lauiss"> { translate('GITHUB') } </a></button>
        </div>
      </div>
      <div className="right-block">
        <h3 className="title">{ translate("PRESENTATION") }</h3>
        <div className="txt-container">
          <p className="txt">{translate("PRESENTATION_TEXT")}</p>
        </div>
      </div>
    </div>
  )
}

export default Presentation
