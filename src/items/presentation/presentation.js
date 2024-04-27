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
          <p className="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur, turpis sit amet euismod ultrices, nisl purus faucibus metus, ac bibendum ligula libero eget libero. Mauris a eleifend nibh. Duis molestie aliquet diam, quis dapibus massa ullamcorper nec. Etiam ultricies fermentum scelerisque. Curabitur nulla ligula, vestibulum quis erat et, vestibulum rutrum urna. In nisl dolor, aliquet sit amet nisl a, cursus fringilla turpis. Proin fringilla laoreet quam, ut sollicitudin nibh. Duis tincidunt blandit ultricies. Sed tristique, augue quis ultrices luctus, leo mi egestas felis, et mollis neque quam nec justo. Quisque in tortor sodales, imperdiet quam ac, tristique justo. Proin posuere cursus metus eget congue. Vestibulum lectus leo, pellentesque non condimentum non, mattis nec enim. Pellentesque id facilisis eros, eu dictum ipsum. Nam eget semper neque, ac cursus mi. Quisque dolor magna, tempus nec aliquam et, vehicula eu tellus.</p>
        </div>
      </div>
    </div>
  )
}

export default Presentation
