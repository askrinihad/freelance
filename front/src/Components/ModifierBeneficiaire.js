import React, { Component } from "react";
import axios from "axios";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "../index.css";
export default class ModifierBeneficiaire extends Component {
  constructor(props) {
    super(props);
    this.onChangeBeneficiaire = this.onChangeBeneficiaire.bind(this);
    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeNomGerant = this.onChangeNomGerant.bind(this);
    this.onChangeQualite = this.onChangeQualite.bind(this);
    this.onChangeTitre = this.onChangeTitre.bind(this);
    this.onChangeAdresse = this.onChangeAdresse.bind(this);
    this.onChangePointFocal = this.onChangePointFocal.bind(this);
    this.onChangeSignification = this.onChangeSignification.bind(this);
    this.onChangeForme = this.onChangeForme.bind(this);
    this.onChangeAnnee = this.onChangeAnnee.bind(this);
    this.onChangeSiret = this.onChangeSiret.bind(this);
    this.onChangeImmatriculation = this.onChangeImmatriculation.bind(this);
    this.onChangeDomiciliation = this.onChangeDomiciliation.bind(this);
    this.onChangeCodeBanque = this.onChangeCodeBanque.bind(this);
    this.onChangeCodeGuichet = this.onChangeCodeGuichet.bind(this);
    this.onChangeNumCompte = this.onChangeNumCompte.bind(this);
    this.onChangeCleRib = this.onChangeCleRib.bind(this);
    this.onChangeIban = this.onChangeIban.bind(this);
    this.onChangeBic = this.onChangeBic.bind(this);
    this.onChangeStructure = this.onChangeStructure.bind(this);
    this.onChangeImplantations = this.onChangeImplantations.bind(this);
    this.state = {
      beneficiaireList: [],
      nomSociete: "",
      type: "",
      nomGerant: "",
      qualite: "",
      titre: "",
      adresse: "",
      pointFocal: "",
      signification: "",
      annee: 2023,
      forme: "",
      siret: 1234,
      immatriculation: "",
      domiciliation: "",
      codeBanque: 1234,
      codeGuichet: 1244,
      numCompte: 1234,
      cleRib: 1234,
      iban: "",
      bic: "",
      structure: "",
      implantations: "",
      id: "",
    };
  }
  ////////////////////////
  /*-------functions-------- */
  onChangeBeneficiaire(e) {
    console.log(this.state.beneficiaireList[e.target.value]);
    this.setState({
      nomSociete: this.state.beneficiaireList[e.target.value].nomSociete,
      type: this.state.beneficiaireList[e.target.value].typeB,
      nomGerant: this.state.beneficiaireList[e.target.value].nomGerant,
      qualite: this.state.beneficiaireList[e.target.value].qualite,
      titre: this.state.beneficiaireList[e.target.value].titre,
      adresse: this.state.beneficiaireList[e.target.value].adresse,
      annee: this.state.beneficiaireList[e.target.value].anneeRef,
      pointFocal: this.state.beneficiaireList[e.target.value].pointFocal,
      signification:
        this.state.beneficiaireList[e.target.value].significationNomSociete,
      forme: this.state.beneficiaireList[e.target.value].FormeJuridique,
      siret: this.state.beneficiaireList[e.target.value].SIRET,
      immatriculation:
        this.state.beneficiaireList[e.target.value].immatriculation,
      domiciliation:
        this.state.beneficiaireList[e.target.value].domiciliationPai,
      codeBanque: this.state.beneficiaireList[e.target.value].codeBanque,
      codeGuichet: this.state.beneficiaireList[e.target.value].codeGuichet,
      numCompte: this.state.beneficiaireList[e.target.value].numCompte,
      cleRib: this.state.beneficiaireList[e.target.value].cleRib,
      iban: this.state.beneficiaireList[e.target.value].iban,
      bic: this.state.beneficiaireList[e.target.value].bic,
      structure: this.state.beneficiaireList[e.target.value].structure,
      implantations: this.state.beneficiaireList[e.target.value].implantations,
      id: this.state.beneficiaireList[e.target.value]._id,
    });
  }
  /////////////////////////////////////////////////////
  onChangeType(e) {
    this.setState({
      type: e.target.value,
    });
  }
  /////////////////////////
  onChangeNom(e) {
    this.setState({
      nomSociete: e.target.value,
    });
  }
  /////////////////////////////
  onChangeNomGerant(e) {
    this.setState({
      nomGerant: e.target.value,
    });
  }
  /////////////////////////
  onChangeQualite(e) {
    this.setState({
      qualite: e.target.value,
    });
  }
  //////////////////////////
  onChangeTitre(e) {
    this.setState({
      titre: e.target.value,
    });
  }
  ///////////////////////
  onChangeAdresse(e) {
    this.setState({
      adresse: e.target.value,
    });
  }
  //////////////////////////////
  onChangePointFocal(e) {
    this.setState({
      pointFocal: e.target.value,
    });
  }
  /////////////////////////
  onChangeSignification(e) {
    this.setState({
      signification: e.target.value,
    });
  }
  //////////////////////////////////
  onChangeAnnee(e) {
    this.setState({
      annee: e.target.value,
    });
  }
  ////////////////////////////
  onChangeSiret(e) {
    this.setState({
      siret: e.target.value,
    });
  }
  ///////////////////////////////
  onChangeForme(e) {
    this.setState({
      forme: e.target.value,
    });
  }
  ////////////////////////////////
  onChangeDomiciliation(e) {
    this.setState({
      domiciliation: e.target.value,
    });
  }
  ////////////////////////////////
  onChangeCodeBanque(e) {
    this.setState({
      codeBanque: e.target.value,
    });
  }
  //////////////////////////////////
  onChangeCodeGuichet(e) {
    this.setState({
      codeGuichet: e.target.value,
    });
  }
  /////////////////////////////////////
  onChangeImmatriculation(e) {
    this.setState({
      immatriculation: e.target.value,
    });
  }
  ////////////////////////////////////////
  onChangeNumCompte(e) {
    this.setState({
      numCompte: e.target.value,
    });
  }
  ///////////////////////////////////
  onChangeCleRib(e) {
    this.setState({
      cleRib: e.target.value,
    });
  }
  /////////////////////////////////////
  onChangeIban(e) {
    this.setState({
      iban: e.target.value,
    });
  }
  /////////////////////////////////////
  onChangeBic(e) {
    this.setState({
      bic: e.target.value,
    });
  }
  /////////////////////////////////////////
  onChangeStructure(e) {
    this.setState({
      structure: e.target.value,
    });
  }
  ///////////////////////////////////////
  onChangeImplantations(e) {
    this.setState({
      implantations: e.target.value,
    });
  }
  ///////////////////////////////////////////////
  ///////////////////:
  componentDidMount() {
    axios
      .get("http://localhost:5000/beneficiaire/getList")

      .then((response) => {
        this.setState({
          beneficiaireList: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  ////////////////////////////
  modifier = (e) => {
    console.log(this.state.id);
    axios
      .put(
        "http://localhost:5000/beneficiaire/modifierBeneficiaire/" +
          this.state.id,
        {
          nomSociete: this.state.nomSociete,
          typeB: this.state.type,
          nomGerant: this.state.nomGerant,
          qualite: this.state.qualite,
          titre: this.state.titre,
          adresse: this.state.adresse,
          pointFocal: this.state.pointFocal,
          significationNomSociete: this.state.signification,
          anneeRef: this.state.annee,
          FormeJuridique: this.state.forme,
          SIRET: this.state.siret,
          immatriculation: this.state.immatriculation,
          domiciliationPai: this.state.domiciliation,
          codeBanque: this.state.codeBanque,
          codeGuichet: this.state.codeGuichet,
          numCompte: this.state.numCompte,
          cleRib: this.state.cleRib,
          iban: this.state.iban,
          bic: this.state.bic,
          structure: this.state.structure,
          implantations: this.state.implantations,
        }
      )

      .then((response) => {
        console.log(response.data.message);
        alert(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  ////////////////////////////

  render() {
    return (
      <div className="ScreenContainer">
        <div className="sidebar">
          <ProSidebar className="prosidebar">
            <SidebarHeader className="sidebarHeader"></SidebarHeader>
            <SidebarContent className="sidebarConent">
              <Menu>
                <MenuItem
                  onClick={() => {
                    this.props.history.push("/", {
                      nom: this.state.nom,
                    });
                  }}
                >
                  {" "}
                  Gestion des agents{" "}
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    this.props.history.push("/ajouterBeneficiaire", {
                      nom: this.state.type,
                    });
                  }}
                >
                  {" "}
                  Gestion des bénéficiaires
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    this.props.history.push("/grilleSRA", {
                      nom: this.state.type,
                    });
                  }}
                >
                  {" "}
                  Grille SRA{" "}
                </MenuItem>
                <div className="submenu">
                  <SubMenu title="Demande de soutien initiale">
                    <MenuItem
                      onClick={() => {
                        this.props.history.push("/ajouterDemandeSoutien", {
                          nom: this.state.nom,
                        });
                      }}
                    >
                      {" "}
                      Saisie d'une demande
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        this.props.history.push(
                          "/recevabiliteDemandeSoutien",
                          {}
                        );
                      }}
                    >
                      {" "}
                      Recevabilité d'une demande
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        this.props.history.push("/validationDevis", {});
                      }}
                    >
                      {" "}
                      Validation devis
                    </MenuItem>
                    <MenuItem>Plan d'acomptage </MenuItem>
                    <MenuItem>Génération des documents</MenuItem>
                  </SubMenu>
                </div>
                <div className="submenu">
                  <SubMenu title="Suivi d'une convention ">
                    <MenuItem> Certification des livrables</MenuItem>
                    <MenuItem>Amendement d'une convention </MenuItem>
                    <div className="submenu">
                      <SubMenu title="Affermissement TC">
                        <MenuItem> Saisie d'une demande </MenuItem>
                        <MenuItem> Recevabilité d'une demande </MenuItem>
                        <MenuItem> Validation devis</MenuItem>
                        <MenuItem>Plan d'acomptage </MenuItem>
                        <MenuItem>Génération des documents</MenuItem>
                      </SubMenu>
                    </div>
                  </SubMenu>
                </div>

                <MenuItem> Statistiques </MenuItem>
              </Menu>
            </SidebarContent>
          </ProSidebar>
        </div>
        <div className="ContentContainer">
          <p style={pStyle}>Gestion des demandes de soutien</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              height: "100px",
              width: "700px",
              alignItems: "center",
              margin: "10px",
            }}
          >
            <button
              style={btnStyle}
              onClick={() => {
                this.props.history.push("/ajouterBeneficiaire", {
                  type: this.state.type,
                });
              }}
            >
              Ajouter
            </button>
            <button
              style={btnStyle}
              onClick={() => {
                this.props.history.push("/modifierBeneficiaire", {
                  type: this.state.type,
                });
              }}
            >
              Modifier
            </button>
            <button
              style={btnStyle}
              onClick={() => {
                this.props.history.push("/supprimerBeneficiaire", {
                  type: this.state.type,
                });
              }}
            >
              Supprimer
            </button>
          </div>
          <div className="form">
            <div
              className="mb-4 align-middle"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <p style={prenom}>Choisir le beneficiaire</p>
              <select style={prenominput} onChange={this.onChangeBeneficiaire}>
                {this.state.beneficiaireList.map((opt, index) => (
                  <option key={index} value={index}>
                    {opt.nomSociete}
                  </option>
                ))}
              </select>
            </div>
            <div
              className="mb-4 align-middle"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <p style={prenom}>Nom de la société </p>
              <input
                type="text"
                placeholder={this.state.nomSociete}
                style={prenominput}
                onChange={this.onChangeNom}
              />
              <p style={prenom}>SIRET </p>
              <input
                type="text"
                pattern="[0-9]*"
                placeholder={this.state.siret}
                style={prenominput}
                onChange={this.onChangeSiret}
              />
            </div>
            <div
              className="mb-4 align-middle"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <p style={prenom}>Type</p>
              <input
                type="text"
                placeholder={this.state.type}
                style={nominput}
                onChange={this.onChangeType}
              />
              <p style={prenom}>Immatriculation</p>
              <input
                type="text"
                placeholder={this.state.immatriculation}
                style={nominput}
                onChange={this.onChangeImmatriculation}
              />
            </div>
            <div
              className="mb-4 align-middle"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <p style={prenom}>Nom du gérant</p>
              <input
                type="text"
                placeholder={this.state.nomGerant}
                style={prenominput}
                onChange={this.onChangeNomGerant}
              />
              <p style={prenom}>Domiciliation des paiements</p>
              <input
                type="text"
                placeholder={this.state.domiciliation}
                style={prenominput}
                onChange={this.onChangeDomiciliation}
              />
            </div>
            <div
              className="mb-4 align-middle"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <p style={prenom}>Qualité</p>
              <input
                type="text"
                placeholder={this.state.qualite}
                style={prenominput}
                onChange={this.onChangeQualite}
              />
              <p style={prenom}>Code banque</p>
              <input
                type="text"
                pattern="[0-9]*"
                placeholder={this.state.codeBanque}
                style={prenominput}
                onChange={this.onChangeCodeBanque}
              />
            </div>
            <div
              className="mb-4 align-middle"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <p style={prenom}>Titre</p>
              <input
                type="text"
                placeholder={this.state.titre}
                style={prenominput}
                onChange={this.onChangeTitre}
              />
              <p style={prenom}>Code guichet</p>
              <input
                type="text"
                pattern="[0-9]*"
                placeholder={this.state.codeGuichet}
                style={prenominput}
                onChange={this.onChangeCodeGuichet}
              />
            </div>
            <div
              className="mb-4 align-middle"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <p style={prenom}>Adresse</p>
              <input
                type="text"
                placeholder={this.state.adresse}
                style={prenominput}
                onChange={this.onChangeAdresse}
              />
              <p style={prenom}>N° de compte</p>
              <input
                type="text"
                pattern="[0-9]*"
                placeholder={this.state.numCompte}
                style={prenominput}
                onChange={this.onChangeNumCompte}
              />
            </div>
            <div
              className="mb-4 align-middle"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <p style={prenom}>Point focal</p>
              <input
                type="text"
                placeholder={this.state.pointFocal}
                style={prenominput}
                onChange={this.onChangePointFocal}
              />
              <p style={prenom}>Clé RIB</p>
              <input
                type="text"
                pattern="[0-9]*"
                placeholder={this.state.cleRib}
                style={prenominput}
                onChange={this.onChangeCleRib}
              />
            </div>
            <div
              className="mb-4 align-middle"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <p style={prenom}>Signification du nom de la société</p>
              <input
                type="text"
                placeholder={this.state.signification}
                style={prenominput}
                onChange={this.onChangeSignification}
              />
              <p style={prenom}>IBAN</p>
              <input
                type="text"
                placeholder={this.state.iban}
                style={prenominput}
                onChange={this.onChangeIban}
              />
            </div>
            <div
              className="mb-4 align-middle"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <p style={prenom}>Année de référence</p>
              <input
                type="text"
                pattern="[0-9]*"
                placeholder={this.state.annee}
                style={prenominput}
                onChange={this.onChangeAnnee}
              />
              <p style={prenom}>BIC</p>
              <input
                type="text"
                placeholder={this.state.bic}
                style={prenominput}
                onChange={this.onChangeBic}
              />
            </div>
            <div
              className="mb-4 align-middle"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <p style={prenom}>Forme juridique de la société</p>
              <input
                type="text"
                placeholder={this.state.forme}
                style={prenominput}
                onChange={this.onChangeForme}
              />
              <p style={prenom}>Structure et activité</p>
              <input
                type="text"
                placeholder={this.state.structure}
                style={prenominput}
                onChange={this.onChangeStructure}
              />
            </div>
            <div
              className="mb-4 align-middle"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <p style={prenom}>Implantations et effectifs</p>
              <input
                type="text"
                placeholder={this.state.implantations}
                style={prenominput}
                onChange={this.onChangeImplantations}
              />
              <button
                className="btnAdd"
                style={btnStyle}
                type="submit"
                onClick={this.modifier}
                /* onClick={() =>
                this.props.history.push("/ListeAttente", {
                  service: this.props.location.state.service,
                })
              }*/
              >
                Modifier
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const prenom = {
  marginTop: "15px",
  marginLeft: "20px",
  width: "200px",
  marginLeft: "8px",
};

const pStyle = {
  margin: "30px",
  fontSize: "45px",
};

const prenominput = {
  height: "5vh",
  width: "25vh",
  marginTop: "7px",
  borderRadius: "5px",
  marginLeft: "50px",
  border: 0,
  fontSize: "15px",
};

const nominput = {
  height: "5vh",
  width: "25vh",
  marginTop: "10px",
  borderRadius: "5px",
  marginLeft: "50px",
  border: 0,
  fontSize: "15px",
};

const btnStyle = {
  background: "#424C9C",
  color: "white",
  border: "none",
  borderRadius: 10,
  cursor: "pointer",
  boxShadow: "0px 8px 20px 0px rgba(0, 0, 0, 0.15)",
  outline: "none",
  width: 120,
  height: 30,
};
