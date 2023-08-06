import React from "react";
import { MapsFullMap } from "../../components/MapsFullMap";
import "./style.css";

export const Convite = (): JSX.Element => {
  return (
    <div className="convite">
      <div className="main">
        <div className="group">
          <div className="overlap-group-2">
            <div className="div-section-body">
              <h1 className="heading-batizado">
                <span className="span">Batizado da</span>
                <span className="text-wrapper-2">{"  "}</span>
                <br />
                <span className="text-wrapper-3">Mafalda</span>
              </h1>
              <div className="heading-batizado-2">16 de Setembro</div>
              <img className="element" alt="Element" src="/img/20230712-220425-1.png" />
            </div>
            <img className="group-2" alt="Group" src="/img/group-5.png" />
            <img className="frame" alt="Frame" src="/img/frame-7.svg" />
          </div>
        </div>
        <div className="div-section-content">
          <div className="div-section-content-2">
            <div className="div-section-notice">
              <div className="flexcontainer">
                <div className="text">
                  <span className="text-wrapper-4">
                    No dia 16 de setembro às 15:00 na igreja de campanhã será o meu batizado!
                    <br />
                  </span>
                </div>
                <div className="text">
                  <span className="text-wrapper-4">
                    Depois a festa continua lá em casa.
                    <br />
                  </span>
                </div>
                <div className="text">
                  <span className="text-wrapper-4">Anda comigo festejar este dia especial para mim!</span>
                </div>
              </div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group-3">
                <div className="frame-2">
                  <div className="frame-3">
                    <img className="transferir" alt="Transferir" src="/img/transferir-3-1.svg" />
                    <div className="heading-batizado-3">16/09/2023</div>
                  </div>
                  <div className="frame-3">
                    <img className="transferir-2" alt="Transferir" src="/img/transferir-1.svg" />
                    <div className="heading-batizado-3">15h</div>
                  </div>
                  <div className="frame-3">
                    <img className="transferir-3" alt="Transferir" src="/img/transferir.svg" />
                    <div className="heading-batizado-3">Igreja de Campanhã</div>
                  </div>
                  <div className="frame-3">
                    <img className="transferir-4" alt="Transferir" src="/img/transferir-2.svg" />
                    <div className="heading-batizado-3">Minha Casa</div>
                  </div>
                </div>
                <img className="group-3" alt="Group" src="/img/group-1.png" />
                <img className="group-4" alt="Group" src="/img/group-4-1.png" />
              </div>
            </div>
            <div className="div-section-notice">
              <p className="heading-confirme">Confirma a tua presença e ajuda o pai e a mãe a organizar a festa!</p>
              <p className="p">Prazo para confirmações até 01/09/2023</p>
            </div>
            <div className="div-flx">
              <div className="link">
                <a className="text-wrapper-5" href="sms:+351916513368?&body=Eu vou!">Eu vou!</a>
              </div>
              <div className="div-wrapper">
                <a className="text-wrapper-5" href="sms:+351916513368?&body=Eu vou!">Não vou...</a> 
              </div>
            </div>
          </div>
        </div>
        <div className="div-section-infos">
          <div className="div-2">
            <img className="div-section-icon" alt="Div section icon" src="/img/div-section-icon-2.svg" />
            <div className="div-section-details">
              <div className="text-wrapper-6">
                <a href="sms:+351919857603"> Mãe: 919 857 603</a>
                <br />
                <a href="sms:+351919133639"> Pai: 919 133 639</a>
              </div>
            </div>
          </div>
          <div className="div-2">
            <img className="div-section-icon" alt="Div section icon" src="/img/div-section-icon-1.svg" />
            <div className="div-section-details">
              <div className="text-wrapper-6">16/09/2023 - às 15:00</div>
              <a className="text-wrapper-7" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=M21hbWZrNzY2OWZyYjd0MW1iNTVtNnRhOXUgZmFtaWx5MTgxNjExOTI0NjAxOTIyNzMwOTZAZw&amp;tmsrc=family18161192460192273096%40group.calendar.google.com"> Adicionar ao calendário </a>
            </div>
          </div>
          <div className="div-2">
            <img className="div-section-icon" alt="Div section icon" src="/img/div-section-icon.svg" />
            <div className="div-section-details">
              <p className="text-wrapper-8">Igreja de Santa Maria de Campanhã</p>
              <p className="text-wrapper-9">Adro da Igreja de Campanhã, Porto, 4300-261, Porto</p>
              <a className="button-ver-no-mapa" href="https://www.google.com/maps/place/Igreja+de+Santa+Maria+de+Campanh%C3%A3/@41.1538783,-8.5826537,16z/data=!4m10!1m2!2m1!1sigreja+campanha!3m6!1s0xd246482f44adaa3:0x6bf818f94c3665d9!8m2!3d41.1543382!4d-8.5736871!15sCg9pZ3JlamEgY2FtcGFuaGFaESIPaWdyZWphIGNhbXBhbmhhkgEPY2F0aG9saWNfY2h1cmNomgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVI1TW1WeVFqRjNSUkFC4AEA!16s%2Fg%2F1231m3qj?entry=ttu"> Ver no mapa</a>
            </div>
          </div>
          <div className="maps-full-map-instance">
            <div className="map-section">
              <h4>
                <a href="https://www.google.com/maps/place/Igreja+de+Santa+Maria+de+Campanh%C3%A3/@41.1538783,-8.5826537,16z/data=!4m10!1m2!2m1!1sigreja+campanha!3m6!1s0xd246482f44adaa3:0x6bf818f94c3665d9!8m2!3d41.1543382!4d-8.5736871!15sCg9pZ3JlamEgY2FtcGFuaGFaESIPaWdyZWphIGNhbXBhbmhhkgEPY2F0aG9saWNfY2h1cmNomgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVI1TW1WeVFqRjNSUkFC4AEA!16s%2Fg%2F1231m3qj?entry=ttu"></a>
              </h4>
              <div id="map">
                <p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6008.226664206672!2d-8.5826537!3d41.1538783!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd246482f44adaa3%3A0x6bf818f94c3665d9!2sIgreja%20de%20Santa%20Maria%20de%20Campanh%C3%A3!5e0!3m2!1spt-PT!2spt!4v1691340827628!5m2!1spt-PT!2spt" width="100%" height="450"  loading="lazy"></iframe>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-2">
            <div className="section">
            <div className="heading-mensagem">Mensagem da Mafalda</div>
              <div className="div-section-body-2">
                <div className="div-section-content-3">
                  <div className="p-wrapper">
                    <p className="text-wrapper-10">
                      O meu batizado está a chegar e quero convidar-te para dividires este momento de muita fé comigo!
                    </p>
                  </div>
                  <div className="group-5">
                    <div className="overlap-group-4">
                      <div className="frame-4">
                        <div className="element-wrapper">
                          <img className="element-2" alt="Element" src="/img/20230712-220411-1.png" />
                        </div>
                        <div className="img-wrapper">
                          <img className="element-3" alt="Element" src="/img/20230712-220423.png" />
                        </div>
                        <div className="element-wrapper">
                          <img className="element-2" alt="Element" src="/img/20230712-220427-0.png" />
                        </div>
                      </div>
                      <img className="frame-5" alt="Frame" src="/img/frame-15.svg" />
                      <img className="group-6" alt="Group" src="/img/group-4.png" />
                    </div>
                  </div>
                  <div className="p-wrapper">
                    <p className="text-wrapper-10">
                      Vem divertir-te comigo neste dia. ⛪
                    </p>
                  </div>
                </div>
              </div>
              <img className="group-7" alt="Group" src="/img/group-3.png" />
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

