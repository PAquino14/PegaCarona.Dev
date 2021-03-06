import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import pd_thumb from '../../../assets/images/package/pd-thumb.png';
import pr_1 from '../../../assets/images/package/pr-1.png';

import gallery1Img from '../../../assets/images/gallary/gl-1.png';
import gallery2Img from '../../../assets/images/gallary/gl-2.png';
import gallery4Img from '../../../assets/images/gallary/gl-4.png';
import gallery5Img from '../../../assets/images/gallary/gl-5.png';
import gallery6Img from '../../../assets/images/gallary/gl-6.png';

import galleryGxx1Img from '../../../assets/images/gallary/rio.png';
import galleryGxx2Img from '../../../assets/images/gallary/pp.png';
import galleryGxx3Img from '../../../assets/images/gallary/rio.png';

import gallery17Img from '../../../assets/images/gallary/gl-17.png';
import gallery16Img from '../../../assets/images/gallary/gl-16.png';
import gallery14Img from '../../../assets/images/gallary/gl-14.png';

import galleryGxl1Img from '../../../assets/images/gallary/pp.png';
import galleryGxl2Img from '../../../assets/images/gallary/rio.png';
import galleryGxl3Img from '../../../assets/images/gallary/rio.png';
import galleryGxl4Img from '../../../assets/images/gallary/pp.png';

import pm_sm_1 from '../../../assets/images/package/p-sm-1.png';
import pm_sm_4 from '../../../assets/images/package/p-sm-4.png';
import pm_sm_2 from '../../../assets/images/package/p-sm-2.png';
import pm_sm_3 from '../../../assets/images/package/p-sm-3.png';

import organizer from '../../../assets/images/organizer.png';
import sidebarBannar from '../../../assets/images/sidebar-banner.png';

import { SRLWrapper } from 'simple-react-lightbox';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class PackageDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
  }
  changeDatepickerHandeller = (date) => {
    this.setState({ startDate: date });
  };

  componentDidMount() {
    this.scrollTop();
  }

  scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  render() {
    const startDate = this.state.startDate;

    return (
      <>
        {/* ===============  breadcrumb area start =============== */}
        <div className="breadcrumb-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="breadcrumb-wrap">
                  <h2>Detalhes do Pacote Tur??stico</h2>
                  <ul className="breadcrumb-links">
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/`}>
                        Pagina inicial
                      </Link>
                      <i className="bx bx-chevron-right" />
                    </li>
                    <li>Detalhes do Pacote</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  breadcrumb area end =============== */}
        <div className="package-details-wrapper pt-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="package-details">
                  <div className="package-thumb">
                    <img src={pd_thumb} alt="" />
                  </div>
                  <div className="package-header">
                    <div className="package-title">
                      <h3>O Amap?? do meio do mundo .</h3>
                      <strong>
                        <i className="flaticon-arrival" />
                        Amap??
                      </strong>
                    </div>
                    <div className="pd-review">
                      <p>Excelente</p>
                      <ul>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bx-star" />
                        </li>
                      </ul>
                      <p>100 Coment??rios</p>
                    </div>
                  </div>
                  <div className="p-short-info">
                    <div className="single-info">
                      <i className="flaticon-clock" />
                      <div className="info-texts">
                        <strong>Dura????o</strong>
                        <p>Excurs??o di??ria</p>
                      </div>
                    </div>
                    <div className="single-info">
                      <i className="flaticon-footprints" />
                      <div className="info-texts">
                        <strong>Tipo de viagem</strong>
                        <p>5 Dias</p>
                      </div>
                    </div>
                    <div className="single-info">
                      <i className="flaticon-traveller" />
                      <div className="info-texts">
                        <strong>Tamanho do grupo</strong>
                        <p>10 Pessoas</p>
                      </div>
                    </div>
                    <div className="single-info">
                      <i className="flaticon-translate" />
                      <div className="info-texts">
                        <strong>idiomas</strong>
                        <p>Qualquer idioma</p>
                      </div>
                    </div>
                  </div>
                  <div className="package-tab">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          <i className="flaticon-info" />
                          Infoma????es
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          <i className="flaticon-clipboard" />
                          Plano de viagem
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-contact-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-contact"
                          type="button"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                        >
                          {' '}
                          <i className="flaticon-gallery" />
                          Galeria
                        </button>
                      </li>
                    </ul>
                    <div
                      className="tab-content p-tab-content"
                      id="pills-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                      >
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="tab-content-1">
                              <div className="p-overview">
                                <h5>Vis??o geral</h5>
                                <p>
                                  O Amap?? est?? localizado na esquina do Rio
                                  Amazonas com a linha imagin??ria do equador. ??
                                  o Estado mais preservado do Brasil com 17
                                  unidades de conserva????o (12 federais e 5
                                  estaduais) imerso a uma biodiversidade que
                                  perpassa por 5(cinco) ecossistemas
                                  Brasileiros, com uma popula????o altamente
                                  acolhedora que buscam manter intacto esse
                                  ref??gio de belezas naturais temperado por
                                  tradi????es culturais ??nicas, navegar nas ??guas
                                  do Rio Amazonas, conhecendo furos e igarap??s,
                                  vivenciando a vida dos ribeirinhos, com
                                  possibilidade de ver botos da regi??o, tudo
                                  isso ligado a um rica gastronomia como o
                                  delicioso camar??o no bafo e artesanato
                                  representativo da cultura Marac?? e Cunani.
                                </p>
                              </div>
                              <div className="p-highlight">
                                <h5>Destaque</h5>
                                <ul>
                                  <li>
                                    <i className="bx bx-circle" />{' '}
                                    <p>
                                      Marco Zero do Equador, onde foi constru??do
                                      um obelisco para a observa????o do fen??meno
                                      solar chamado de Equin??cio. Parque.
                                    </p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{' '}
                                    <p>
                                      Banho agrad??vel com possibilidade de ver
                                      botos da regi??o. .
                                    </p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{' '}
                                    <p>Fortaleza de S??o Jos??</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{' '}
                                    <p>O grandioso rio Amazonas.</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{' '}
                                    <p>A igreja de S??o Jos?? .</p>
                                  </li>
                                  <li>
                                    <i className="bx bx-circle" />{' '}
                                    <p>O belo teatro das Bacabeiras .</p>
                                  </li>
                                </ul>
                              </div>
                              <div className="p-details-table">
                                <table className="table caption-top">
                                  <tbody>
                                    <tr>
                                      <td>Destino</td>
                                      <td>Amap??</td>
                                    </tr>
                                    <tr>
                                      <td>Depura????o</td>
                                      <td>Sim Necess??rio</td>
                                    </tr>
                                    <tr>
                                      <td>Hora de sa??da</td>
                                      <td>01 Maio, 2022 09:00AM</td>
                                    </tr>
                                    <tr>
                                      <td>Tempo de retorno</td>
                                      <td>13 Maio, 2022 19:00PM</td>
                                    </tr>
                                    <tr>
                                      <td>Inclu??do</td>
                                      <td>
                                        <ul className="table-list-allow">
                                          <li>
                                            <i className="bx bx-check" />{' '}
                                            Hospedagem em Macap??
                                          </li>
                                          <li>
                                            {' '}
                                            <i className="bx bx-check" />{' '}
                                            Transporte terrestre e fluvial
                                          </li>
                                          <li>
                                            <i className="bx bx-check" />{' '}
                                            Servi??o de bordo
                                          </li>
                                          <li>
                                            <i className="bx bx-check" /> Guia
                                            de Turismo
                                          </li>
                                          <li>
                                            <i className="bx bx-check" />{' '}
                                            Almo??os
                                          </li>
                                          <li>
                                            <i className="bx bx-check" />{' '}
                                            Transfer. (Brindes: Todas as imagens
                                            feitas durante os passeios).
                                          </li>
                                          <li>
                                            <i className="bx bx-check" /> Box
                                            Seguro viagem
                                          </li>
                                        </ul>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>Exclu??dos</td>
                                      <td>
                                        <ul className="table-list-disallow">
                                          <li>
                                            {' '}
                                            <i className="bx bx-x" />
                                            Bebidas alcolicas
                                          </li>
                                          <li>
                                            <i className="bx bx-x" /> ingressos
                                            e outros n??o descritos no pacote.
                                          </li>
                                          <li>
                                            <i className="bx bx-x" /> A definir
                                          </li>
                                          <li>
                                            <i className="bx bx-x" /> A definir
                                          </li>
                                        </ul>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2} className="table-bottom">
                                        <i className="flaticon-public-transport" />
                                        Viajar de onibus
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                              <div className="p-rationg">
                                <h5>Classifica????o</h5>
                                <div className="rating-card">
                                  <div className="r-card-avarag">
                                    <h2>4.9</h2>
                                    <h5>Excelente</h5>
                                  </div>
                                  <div className="r-card-info">
                                    <ul>
                                      <li>
                                        <strong>Alojamento</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <strong>Transporte</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bx-star" />
                                            <i className="bx bx-star" />
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <strong>Comforto</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bx-star" />
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <strong>Hospedagem</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bx-star" />
                                          </li>
                                        </ul>
                                      </li>
                                      <li>
                                        <strong>Comida</strong>
                                        <ul className="r-rating">
                                          <li>
                                            <i className="bx bxs-star" />
                                            <i className="bx bxs-star" />
                                            <i className="bx bx-star" />
                                            <i className="bx bx-star" />
                                            <i className="bx bx-star" />
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="p-review">
                                <ul>
                                  <li className="p-review-card">
                                    <div className="p-review-info">
                                      <div className="p-reviewr-img">
                                        <img src={pr_1} alt="" />
                                      </div>
                                      <div className="p-reviewer-info">
                                        <strong>jose Maicon</strong>
                                        <p>2 Maio, 2022 09.00PM</p>
                                        <ul className="review-star">
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="p-review-texts">
                                      <p>Demais , estao de Parabens </p>
                                    </div>
                                    <Link to={`#`} className="r-reply-btn">
                                      <i className="bx bx-reply" /> Responder
                                    </Link>
                                  </li>
                                  <li className="p-review-card">
                                    <div className="p-review-info">
                                      <div className="p-reviewr-img">
                                        <img src={pr_1} alt="" />
                                      </div>
                                      <div className="p-reviewer-info">
                                        <strong>Marcio carvalho</strong>
                                        <p>2 Maio, 2022 09.00PM</p>
                                        <ul className="review-star">
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="p-review-texts">
                                      <p>Otimo </p>
                                    </div>
                                    <Link to={`#`} className="r-reply-btn">
                                      <i className="bx bx-reply" /> Responder
                                    </Link>
                                  </li>
                                  <li className="p-review-card">
                                    <div className="p-review-info">
                                      <div className="p-reviewr-img">
                                        <img src={pr_1} alt="" />
                                      </div>
                                      <div className="p-reviewer-info">
                                        <strong>Bertram Bil</strong>
                                        <p>2 Maio, 2022 09.00PM</p>
                                        <ul className="review-star">
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                          <li>
                                            {' '}
                                            <i className="bx bxs-star" />{' '}
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="p-review-texts">
                                      <p>... </p>
                                    </div>
                                    <Link to={`#`} className="r-reply-btn">
                                      <i className="bx bx-reply" /> Responder
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="p-review-input">
                                <form>
                                  <h5>Deixe o seu Coment??rio</h5>
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        placeholder="Nome completo"
                                      />
                                    </div>
                                    <div className="col-lg-6">
                                      <input
                                        type="text"
                                        placeholder="Seu email"
                                      />
                                    </div>
                                    <div className="col-lg-12">
                                      <input
                                        type="text"
                                        placeholder="Tipo de viagem"
                                      />
                                    </div>
                                    <div className="col-lg-12">
                                      <textarea
                                        cols={30}
                                        rows={7}
                                        placeholder="Escrever mensagem"
                                        defaultValue={''}
                                      />
                                    </div>
                                    <div className="col-lg-12">
                                      <ul className="input-rating">
                                        <li>
                                          <i className="bx bx-star" />
                                        </li>
                                        <li>
                                          <i className="bx bx-star" />
                                        </li>
                                        <li>
                                          <i className="bx bx-star" />
                                        </li>
                                        <li>
                                          <i className="bx bx-star" />
                                        </li>
                                        <li>
                                          <i className="bx bx-star" />
                                        </li>
                                      </ul>
                                      <input
                                        type="submit"
                                        defaultValue="Submeter agora"
                                      />
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                      >
                        <div className="tab-content-2">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="p-timeline-overview">
                                <h5>Vis??o geral</h5>
                                <p>
                                  O Amap?? est?? localizado na esquina do Rio
                                  Amazonas com a linha imagin??ria do equador. ??
                                  o Estado mais preservado do Brasil com 17
                                  unidades de conserva????o (12 federais e 5
                                  estaduais) imerso a uma biodiversidade que
                                  perpassa por 5(cinco) ecossistemas
                                  Brasileiros, com uma popula????o altamente
                                  acolhedora que buscam manter intacto esse
                                  ref??gio de belezas naturais temperado por
                                  tradi????es culturais ??nicas, navegar nas ??guas
                                  do Rio Amazonas, conhecendo furos e igarap??s,
                                  vivenciando a vida dos ribeirinhos, com
                                  possibilidade de ver botos da regi??o, tudo
                                  isso ligado a um rica gastronomia como o
                                  delicioso camar??o no bafo e artesanato
                                  representativo da cultura Marac?? e Cunani.
                                </p>
                              </div>
                              <ul className="p-timeline">
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>01</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>Dia 1 : Chekin Hotel </h5>
                                    <strong>09:00 a 17.00 PM</strong>
                                    <p>A definir.</p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Hospedagem em Macap??
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Transporte terrestre e fluvial
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Servi??o de bordo
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Seguro viagem
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>02</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>Dia 2 : : CITY TOUR MACAP??</h5>
                                    <strong>09:00 a 17.00 PM</strong>
                                    <p>
                                      Macap?? ?? a capital que apresenta os seus
                                      principais cart??es-postais, como Marco
                                      Zero do Equador, onde foi constru??do um
                                      obelisco para a observa????o do fen??meno
                                      solar chamado de Equin??cio, que marca a
                                      mudan??a de esta????es. Mas por aqui as
                                      surpresas s??o fenomenais e gradiosas e os
                                      Portuguses v??o surpreende - lo com a maior
                                      fortifica????o da america latina, a
                                      Fortaleza de S??o Jos?? de Macap??. O
                                      complexo Beira-Rio, principal ponto de
                                      encontro da cidade ?? formado por
                                      trapiches, quiosques e restaurantes que
                                      atraem visitantes durante todo o ano, tudo
                                      isso com uma vis??o surreal do rio mar, o
                                      amazonas bem em frente da cidade de
                                      Macap??, J?? o Museu Sacaca tem eu sua ??rea
                                      de atua????o a????es museol??gicas de pesquisa,
                                      preserva????o e comunica????o, abrangendo o
                                      saber cient??fico e o saber popular dos
                                      povos amaz??nicos. Vale a pena conhecer o
                                      principal palco da cultura amapaense, o
                                      belo teatro das Bacabeiras com uma certa
                                      frequ??ncia de suas pe??as teatrais e
                                      apresenta????es de m??sicos local e nacional.
                                      Foi catedral durantes anos e ?? o monumento
                                      mais antigo da cidade, sua constru????o data
                                      do s??culo XVIII, a igreja de S??o Jos?? n??o
                                      pode ficar de fora de sua visita. E para
                                      finalizar nosso City Tour, vamos conhecer
                                      um figura controversia de nossos quadro de
                                      her??is pelo Brasil, neste caso o do estado
                                      do amap??, ???Cabralzinho??? o mais importante
                                      defensor do Amap?? contra as invas??es
                                      francesas..
                                    </p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Hospedagem em Macap??
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Transporte privado
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Servi??o de bordo
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Seguro viagem
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>03</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>Dia 3 : RIVER TOUR RIO AMAZONAS</h5>
                                    <strong>09:00 a 17.00 PM</strong>
                                    <p>
                                      "Rio-Mar" ?? como os colonizadores v??o
                                      chamar o grandioso rio Amazonas, e ?? por
                                      este rio que o nosso River Tour come??a,
                                      passando por algumas comunidades
                                      ribeirinhas, portos de
                                      embarque/desembarque de barcos
                                      tradicionais que navegam por este
                                      magestoso rio, cuja Foz fica na
                                      conflu??ncia do Amap?? com a Ilha do Maraj??,
                                      algo t??o gigantesco que a dist??ncia de uma
                                      margem a outra chega a 17 quil??metros. ?? o
                                      principal criador e destruidor das
                                      inumeras ilhas por onde passa, Aqui temos
                                      a ilha de santana que faz parte de nosso
                                      roteiro para banho, contempla????o e a nossa
                                      trilha das quatros gigantes ??rvores, a
                                      sama??ma. Mas este mesmo rio ou afluentes ??
                                      o que nos traz o nosso peixe, pirapitinga
                                      para o nosso almo??o em um s??tio pousada da
                                      fam??lia Pereira que moram nesta ilha. J??
                                      com o "bucho" cheio ?? hora de tirar uma
                                      "pipira" como se diz por aqui ao descan??o
                                      de uma rede preparado para voce. Mas ??
                                      chegada a hora de voltar ao hotel e o
                                      nosso barco tradicional "catraia" j?? est??
                                      nos esperando..
                                    </p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Hospedagem em Macap??
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Transporte privado
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Servi??o de bordo
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Seguro viagem
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>04</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>Dia 4 : Preferencia do Turista</h5>
                                    <strong>09:00 a 17.00 PM</strong>
                                    <p>A definir</p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Hospedagem em Macap??
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Transporte privado
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Servi??o de bordo
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Seguro viagem
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>
                                  <div className="timeline-index">
                                    <div className="index-circle">
                                      <h5>05</h5>
                                    </div>
                                  </div>
                                  <div className="timeline-content">
                                    <h5>Dia 5 : ARIRI - TOUR DE VIVENCIAS</h5>
                                    <strong>09:00 a 17.00 PM</strong>
                                    <p>
                                      Existe uma parte da Capital Macap?? pouco
                                      conhecida ou desconhecida de muitos
                                      amapaenses, s??o os seus distritos,
                                      comunidades descendentes de escravos e
                                      fam??lias vindos do Nordeste que aqui
                                      chegaram e criaram ra??zes. Dentre elas,
                                      ARIRI que fica a 44 km de Macap??. Local
                                      agrad??vel e uma comunidade hospitaleira. O
                                      passeio pelo rio matapi proporciona banho
                                      agrad??vel com possibilidade de ver botos
                                      da regi??o. A comida caseira e o a??a?? s??o o
                                      carro chefe deste pequeno para??so..
                                    </p>
                                    <ul>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Hospedagem em Macap??
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Transporte privado
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Servi??o de bordo
                                      </li>
                                      <li />
                                      <li>
                                        <i className="bx bx-check" />
                                        Seguro viagem
                                      </li>

                                      <li>
                                        <i className="bx bx-check" />
                                        Adefinir
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                      >
                        <div className="tab-contant-3">
                          <SRLWrapper>
                            <div className="row">
                              <div className="col-lg-8 col-md-8">
                                <div className="package-grid-one">
                                  <div className="single-grid">
                                    <Link
                                      to={gallery1Img}
                                      className="g-img-sm-1 main-gallary"
                                    >
                                      <img
                                        src={gallery1Img}
                                        alt="gallary-img"
                                      />
                                    </Link>

                                    <Link
                                      to={gallery2Img}
                                      className="g-img-sm-2 main-gallary"
                                    >
                                      <img
                                        src={gallery2Img}
                                        alt="gallary-img"
                                      />
                                    </Link>

                                    <Link
                                      to={galleryGxx1Img}
                                      className="g-img-md main-gallary"
                                    >
                                      <img
                                        src={galleryGxx1Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                  <div className="single-grid mt-24">
                                    <Link
                                      to={gallery2Img}
                                      className="g-img-sm-1 main-gallary"
                                    >
                                      <img
                                        src={gallery2Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                    <Link
                                      to={gallery4Img}
                                      className="g-img-sm-2 main-gallary"
                                    >
                                      <img
                                        src={gallery4Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                    <Link
                                      to={galleryGxx2Img}
                                      className="g-img-md main-gallary"
                                    >
                                      <img
                                        src={galleryGxx2Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>

                                  <div className="single-grid mt-24">
                                    <Link
                                      to={gallery5Img}
                                      className="g-img-sm-1 main-gallary"
                                    >
                                      <img
                                        src={gallery5Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                    <Link
                                      to={gallery6Img}
                                      className="g-img-sm-2 main-gallary"
                                    >
                                      <img
                                        src={gallery6Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                    <Link
                                      to={galleryGxx3Img}
                                      className="g-img-md main-gallary"
                                    >
                                      <img
                                        src={galleryGxx3Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-4 col-md-4">
                                <div className="package-grid-two">
                                  <div className="single-grid-2">
                                    <Link
                                      to={galleryGxl1Img}
                                      className="main-gallary"
                                    >
                                      <img
                                        src={galleryGxl1Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                  <div className="single-grid-2 mt-24">
                                    <Link
                                      to={galleryGxl2Img}
                                      className="single-grid-2 main-gallary mt-30"
                                    >
                                      <img
                                        src={galleryGxl2Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                  <div className="single-grid-2 mt-24">
                                    <Link
                                      to={galleryGxl3Img}
                                      className="main-gallary mt-30"
                                    >
                                      <img
                                        src={galleryGxl3Img}
                                        alt="gallary-img"
                                      />
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SRLWrapper>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="package-d-sidebar">
                  <div className="row">
                    <div className="col-lg-12 col-md-6">
                      <div className="p-sidebar-form">
                        <form>
                          <h5 className="package-d-head">
                            Reserve este pacote
                          </h5>
                          <div className="row">
                            <div className="col-lg-12">
                              <input type="text" placeholder="Nome Completo" />
                            </div>
                            <div className="col-lg-12">
                              <input type="email" placeholder="Seu email" />
                            </div>
                            <div className="col-lg-12">
                              <input type="tel" placeholder="Telefone" />
                            </div>
                            <div className="col-lg-12">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Tipo de bilhetes</option>
                                <option value={1}>Viajar de Carro</option>
                                <option value={2}>viajar de Avi??o</option>
                              </select>
                            </div>
                            <div className="col-lg-6">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Adulto</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                              </select>
                            </div>
                            <div className="col-lg-6">
                              <select
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option selected>Crian??a</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                              </select>
                            </div>
                            <div className="col-lg-12">
                              <div
                                className="calendar-input"
                                id="packageCalenderMainDiv"
                              >
                                <DatePicker
                                  selected={startDate}
                                  onChange={(date) =>
                                    this.changeDatepickerHandeller(date)
                                  }
                                  className="input-field check-in"
                                  placeholder="dd-mm-yy"
                                />
                                <i
                                  className="flaticon-calendar"
                                  id="packageCalenderIcon"
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <textarea
                                cols={30}
                                rows={7}
                                placeholder="Menssagem"
                                defaultValue={''}
                              />
                            </div>
                            <div className="col-lg-12">
                              <input type="submit" defaultValue="Ver agora" />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="p-sidebar-cards mt-40">
                        <h5 className="package-d-head">Pacotes Populares</h5>
                        <ul className="package-cards">
                          <li className="package-card-sm">
                            <div className="p-sm-img">
                              <img src={pm_sm_1} alt="" />
                            </div>
                            <div className="package-info">
                              <div className="package-date-sm">
                                <strong>
                                  <i className="flaticon-calendar" />5 Dias/6
                                  noites
                                </strong>
                              </div>
                              <h3>
                                <i className="flaticon-arrival" />
                                <Link
                                  to={`${process.env.PUBLIC_URL}/package-details`}
                                >
                                  Marco Zero
                                </Link>
                              </h3>
                              <h5>
                                <span>$180</span>/ Por pessoa
                              </h5>
                            </div>
                          </li>
                          <li className="package-card-sm">
                            <div className="p-sm-img">
                              <img src={pm_sm_4} alt="" />
                            </div>
                            <div className="package-info">
                              <div className="package-date-sm">
                                <strong>
                                  <i className="flaticon-calendar" />5 Dias/6
                                  noites
                                </strong>
                              </div>
                              <h3>
                                <i className="flaticon-arrival" />
                                <Link
                                  to={`${process.env.PUBLIC_URL}/package-details`}
                                >
                                  Laranjal do jari
                                </Link>
                              </h3>
                              <h5>
                                <span>$180</span>/ Por pessoa
                              </h5>
                            </div>
                          </li>
                          <li className="package-card-sm">
                            <div className="p-sm-img">
                              <img src={pm_sm_2} alt="" />
                            </div>
                            <div className="package-info">
                              <div className="package-date-sm">
                                <strong>
                                  <i className="flaticon-calendar" />5 Dias/6
                                  noites
                                </strong>
                              </div>
                              <h3>
                                <i className="flaticon-arrival" />
                                <Link
                                  to={`${process.env.PUBLIC_URL}/package-details`}
                                >
                                  Amap??
                                </Link>
                              </h3>
                              <h5>
                                <span>$180</span>/ Por pessoa
                              </h5>
                            </div>
                          </li>
                          <li className="package-card-sm">
                            <div className="p-sm-img">
                              <img src={pm_sm_3} alt="" />
                            </div>
                            <div className="package-info">
                              <div className="package-date-sm">
                                <strong>
                                  <i className="flaticon-calendar" />5 Dias/6
                                  noites
                                </strong>
                              </div>
                              <h3>
                                <i className="flaticon-arrival" />
                                <Link
                                  to={`${process.env.PUBLIC_URL}/package-details`}
                                >
                                  pedra Branca
                                </Link>
                              </h3>
                              <h5>
                                <span>$180</span>/ Por pessoa
                              </h5>
                            </div>
                          </li>
                          <li className="package-card-sm">
                            <div className="p-sm-img">
                              <img src={pm_sm_4} alt="" />
                            </div>
                            <div className="package-info">
                              <div className="package-date-sm">
                                <strong>
                                  <i className="flaticon-calendar" />5 Dias/6
                                  noites
                                </strong>
                              </div>
                              <h3>
                                <i className="flaticon-arrival" />
                                <Link
                                  to={`${process.env.PUBLIC_URL}/package-details`}
                                >
                                  Cutias
                                </Link>
                              </h3>
                              <h5>
                                <span>$180</span>/ Por pessoa
                              </h5>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="p-sidebar-organizer mt-40">
                        <h5 className="package-d-head">Organizado por</h5>
                        <div className="organizer-card">
                          <div className="organizer-img">
                            <img src={organizer} alt="" />
                          </div>
                          <div className="organizer-info">
                            <h5>Hotel de viagem</h5>
                            <p>Membro desde 2021</p>
                            <ul className="organizer-rating">
                              <li>
                                <i className="bx bxs-star" />
                              </li>
                              <li>
                                <i className="bx bxs-star" />
                              </li>
                              <li>
                                <i className="bx bxs-star" />
                              </li>
                              <li>
                                <i className="bx bxs-star" />
                              </li>
                              <li>
                                <i className="bx bx-star" />
                              </li>
                            </ul>
                            <h5>500 Coment??rios</h5>
                          </div>
                        </div>
                        <div className="p-ask-btn">
                          <Link to={`${process.env.PUBLIC_URL}/contact`}>
                            envie uma pergunta
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="p-sidebar-banner mt-40">
                        <img src={sidebarBannar} alt="" className="img-fluid" />
                        <div className="sidebar-banner-overlay">
                          <div className="overlay-content">
                            <h3>Get 50% Ferreira gomes</h3>
                            <div className="sidebar-banner-btn">
                              <Link to={`#`}>Ver Agora</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PackageDetails;
