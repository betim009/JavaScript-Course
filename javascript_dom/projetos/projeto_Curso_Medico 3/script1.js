import { sintomas } from "./sintomas.js";

const localDor = document.getElementById("local-dor");
const intensidadeDor = document.getElementById("intensidade-dor");
const caracteristicasInicio = document.getElementById("caracteristicas-inicio");
const dorReferida = document.getElementById("dor-referida");
const tipoDor = document.getElementById("tipo-dor");
const duracaoDor = document.getElementById("duracao-dor");
const ritmoIntestinal = document.getElementById("ritmo-intestinal");
const sinaisSintomas = document.getElementById("sinais-sintomas");
const enviar = document.getElementById("enviar");

const outrosSintomas = document.getElementById("outros-sintomas");
const resultadoSintomas = document.getElementById("resultado-sintomas");

//Guardar resultados

let resultado = [];
let doencas = [];

//Eventos
localDor.addEventListener("input", function (event) {
  console.log(event.target.checked);
  console.log(event.target.value);
  console.log(doencas);

  const local = event.target.value;
  const checked = event.target.checked;

  if (checked == true) {
    resultado.push(local);
    if (local === "difusa") {
      doencas.push("Adenite mesentérica (hiperplasia linfonodular)");
      doencas.push("Cetoacidose diabética");
      doencas.push("Crise falcêmica");
      doencas.push("Diverticulite");
      doencas.push("Doença celíaca");
      doencas.push("Doença de Crohn)");
      doencas.push("Febre familiar do Mediterrâneo");
      doencas.push("Gastroenterite");
      doencas.push("Herpes Zoster");
      doencas.push("Ileite por AINE");
      doencas.push("Intoxicação por chumbo");
      doencas.push("Insuficiência suprarrenal aguda");
      doencas.push("Neoplasias");
      doencas.push("Peritonite primária");
      doencas.push("Porfiria aguda");
      doencas.push("Ruptura de baço");
      doencas.push("Ruptura de aneurisma da aorta");
      doencas.push("Tabes dorsalis");
      doencas.push("Úlcera péptica perfurada");
      doencas.push("Vasculite associada a IgA");
      doencas.push("Verminoses");
    } else if (local === "flanco_direito") {
      doencas.push("Cólica renal");
      doencas.push("Compressão de raízes nervosas");
      doencas.push("Infarto pulmonar");
      doencas.push("Pielonefrite");
    } else if (local === "flanco_esquerdo") {
      doencas.push("Cólica renal");
      doencas.push("Colite isquêmica");
      doencas.push("Compressão de raízes nervosas");
      doencas.push("Epiploite ou apendagite");
      doencas.push("Pielonefrite");
    } else if (local === "fossa_iliaca_direita") {
      doencas.push("Adenite mesentérica (hiperplasia linfonodular)");
      doencas.push("Apendicite");
      doencas.push("Divertículo de Meckel");
      doencas.push("Doença de Crohn");
      doencas.push("Febre familiar do Mediterrâneo");
      doencas.push("Febre tifoide");
      doencas.push("Hérnia encarcerada");
      doencas.push("Hérnia estrangulada");
      doencas.push("Ileite actínica");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Ileite por AINE");
      doencas.push("Infecção respiratória");
      doencas.push("Mucocele do apêndice");
      doencas.push("Prenhez ectópica");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Salpingite");
      doencas.push("Torção de cisto de ovário");
      doencas.push("Tuberculose intestinal");
      doencas.push("Yersiniose");
    } else if (local === "fossa_iliaca_esquerda") {
      doencas.push("Constipação");
      doencas.push("Diverticulite");
      doencas.push("Epiploite ou apendagite");
      doencas.push("Hérnia encarcerada");
      doencas.push("Hérnia estrangulada");
      doencas.push("Prenhez ectópica");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Salpingite");
      doencas.push("Torção de cisto de ovário");
      doencas.push("Vólvulo");
    } else if (local === "hipocondrio_direito") {
      doencas.push("Abscesso hepático");
      doencas.push("Colecistite");
      doencas.push("Crise falcêmica");
      doencas.push("Hepatite aguda");
      doencas.push("Hérnia diafragmática");
      doencas.push("Hiperlipidemia");
      doencas.push("Infarto pulmonar");
      doencas.push("Infecção respiratória");
    } else if (local === "hipocondrio_esquerdo") {
      doencas.push("Abscesso esplênico");
      doencas.push("Colite isquêmica");
      doencas.push("Hérnia diafragmática");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infarto esplênico");
      doencas.push("Infarto pulmonar");
      doencas.push("Pancreatite");
      doencas.push("Pericardite");
      doencas.push("Ruptura de baço");
      doencas.push("Úlcera gástrica");
    } else if (local === "regiao_epigastrica") {
      doencas.push("Abscesso hepático");
      doencas.push("Apendicite");
      doencas.push("Colecistite");
      doencas.push("Doença do refluxo gastro-esofágico");
      doencas.push("Gastrite");
      doencas.push("Hiperlipidemia");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infarto pulmonar");
      doencas.push("Insuficiência suprarrenal aguda");
      doencas.push("Isquemia mesentérica");
      doencas.push("Obstrução intestinal");
      doencas.push("Pancreatite");
      doencas.push("Pericardite");
      doencas.push("Síndrome de hiperemese canabinoide");
      doencas.push("Síndrome de Mallory-Weiss");
      doencas.push("Úlcera péptica perfurada");
      doencas.push("Úlcera duodenal");
      doencas.push("Úlcera gástrica");
    } else if (local === "regiao_hipogastrica") {
      doencas.push("Doença inflamatória pélvica");
      doencas.push("Endometriose");
      doencas.push("Hematoma do músculo reto");
      doencas.push("Ileite actínica");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Infecção urinária");
      doencas.push("Intolerância a lactose");
      doencas.push("Prenhez ectópica");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Tabes dorsalis");
    } else if (local === "regiao_mesogastrica") {
      doencas.push("Cetoacidose diabética");
      doencas.push("Constipação");
      doencas.push("Doença celíaca");
      doencas.push("Febre tifoide");
      doencas.push("Gastroenterite");
      doencas.push("Hematoma do músculo reto");
      doencas.push("Intolerância a lactose");
      doencas.push("Isquemia mesentérica");
      doencas.push("Obstrução intestinal");
      doencas.push("Ruptura de aneurisma da aorta");
      doencas.push("Vasculite associada a IgA");
      doencas.push("Verminoses");
      doencas.push("Vólvulo");
    }
  } else {
    resultado = resultado.filter((item) => item != local);
  }
});

caracteristicasInicio.addEventListener("input", function (event) {
  console.log(event.target.checked);
  console.log(event.target.value);

  const caracteristicas = event.target.value;
  const checked = event.target.checked;

  if (checked == true) {
    resultado.push(caracteristicas);
    if (caracteristicas === "desconforto") {
      doencas.push("Abscesso esplênico");
      doencas.push("Constipação");
      doencas.push("Diverticulite");
      doencas.push("Doença celíaca");
      doencas.push("Doença de Crohn");
      doencas.push("Doença do refluxo gastro-esofágico");
      doencas.push("Doença inflamatória pélvica");
      doencas.push("Endometriose");
      doencas.push("Febre tifoide");
      doencas.push("Gastrite");
      doencas.push("Hepatite aguda");
      doencas.push("Hérnia diafragmática");
      doencas.push("Hérnia encarcerada");
      doencas.push("Hérnia estrangulada");
      doencas.push("Herpes Zoster");
      doencas.push("Ileite actínica");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Ileite por AINE");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infarto pulmonar");
      doencas.push("Infecção respiratória");
      doencas.push("Infecção urinária");
      doencas.push("Intolerância a lactose");
      doencas.push("Mucocele do apêndice");
      doencas.push("Neoplasias");
      doencas.push("Obstrução intestinal");
      doencas.push("Pericardite");
      doencas.push("Peritonite primária");
      doencas.push("Pielonefrite");
      doencas.push("Porfiria aguda");
      doencas.push("Prenhez ectópica");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Salpingite");
      doencas.push("Síndrome de hiperemese canabinoide");
      doencas.push("Tuberculose intestinal");
      doencas.push("Úlcera duodenal");
      doencas.push("Úlcera gástrica");
      doencas.push("Vasculite associada a IgA");
      doencas.push("Verminoses");
      doencas.push("Yersiniose");
    } else if (caracteristicas === "migratoria") {
      doencas.push("Apendicite");
      doencas.push("Compressão de raízes nervosas");
      doencas.push("Insuficiência suprarrenal aguda");
    } else if (caracteristicas === "progressiva") {
      doencas.push("Abscesso hepático");
      doencas.push("Apendicite");
      doencas.push("Cetoacidose diabética");
      doencas.push("Colecistite");
      doencas.push("Constipação");
      doencas.push("Crise falcêmica");
      doencas.push("Diverticulite");
      doencas.push("Divertículo de Meckel");
      doencas.push("Doença celíaca");
      doencas.push("Doença de Crohn");
      doencas.push("Febre tifoide");
      doencas.push("Gastrite");
      doencas.push("Hérnia encarcerada");
      doencas.push("Hérnia estrangulada");
      doencas.push("Herpes Zoster");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infarto esplênico");
      doencas.push("Infecção respiratória");
      doencas.push("Infecção urinária");
      doencas.push("Insuficiência suprarrenal aguda");
      doencas.push("Isquemia mesentérica");
      doencas.push("Neoplasias");
      doencas.push("Obstrução intestinal");
      doencas.push("Pancreatite");
      doencas.push("Pericardite");
      doencas.push("Peritonite primária");
      doencas.push("Pielonefrite");
      doencas.push("Ruptura de baço");
      doencas.push("Salpingite");
      doencas.push("Tabes dorsalis");
      doencas.push("Torção de cisto de ovário");
      doencas.push("Tuberculose intestinal");
      doencas.push("Úlcera péptica perfurada");
      doencas.push("Úlcera duodenal");
      doencas.push("Úlcera gástrica");
      doencas.push("Vasculite associada a IgA");
      doencas.push("Vólvulo");
    } else if (caracteristicas === "referida") {
      doencas.push("Abscesso hepático");
      doencas.push("Abscesso esplênico");
      doencas.push("Compressão de raízes nervosas");
    } else if (caracteristicas === "subita") {
      doencas.push("Adenite mesentérica (hiperplasia linfonodular)");
      doencas.push("Colecistite");
      doencas.push("Cólica renal");
      doencas.push("Colite Isquêmica");
      doencas.push("Crise falcêmica");
      doencas.push("Divertículo de Meckel");
      doencas.push("Epiploite ou apendagite");
      doencas.push("Febre familiar do Mediterrâneo");
      doencas.push("Gastroenterite");
      doencas.push("Hematoma do músculo reto");
      doencas.push("Hiperlipidemia");
      doencas.push("Infarto esplênico");
      doencas.push("Infarto pulmonar");
      doencas.push("Intoxicação por chumbo");
      doencas.push("Isquemia mesentérica");
      doencas.push("Pancreatite");
      doencas.push("Prenhez ectópica");
      doencas.push("Ruptura de baço");
      doencas.push("Ruptura de aneurisma da aorta");
      doencas.push("Síndrome de Mallory-Weiss");
      doencas.push("Tabes dorsalis");
      doencas.push("Torção de cisto de ovário");
      doencas.push("Úlcera péptica perfurada");
      doencas.push("Yersiniose");
    }
  } else {
    resultado = resultado.filter((item) => item != caracteristicas);
  }
});

intensidadeDor.addEventListener("input", function (event) {
  console.log(event.target.checked);
  console.log(event.target.value);

  const intensidade = event.target.value;
  const checked = event.target.checked;

  if (checked == true) {
    resultado.push(intensidade);
    if (intensidade === "fraca") {
      doencas.push("Adenite mesentérica (hiperplasia linfonodular)");
      doencas.push("Cetoacidose diabética");
      doencas.push("Crise falcêmica");
      doencas.push("Doença celíaca");
      doencas.push("Doença de Crohn");
      doencas.push("Febre tifoide");
      doencas.push("Hepatite aguda");
      doencas.push("Hérnia diafragmática");
      doencas.push("Ileite actínica");
      doencas.push("Infecção respiratória");
      doencas.push("Infecção urinária");
      doencas.push("Intolerância a lactose");
      doencas.push("Mucocele do apêndice");
      doencas.push("Neoplasias");
      doencas.push("Obstrução intestinal");
      doencas.push("Pericardite");
      doencas.push("Pielonefrite");
      doencas.push("Prenhez ectópica");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Salpingite");
      doencas.push("Síndrome de hiperemese canabinoide");
      doencas.push("Torção de cisto de ovário");
      doencas.push("Tuberculose intestinal");
      doencas.push("Úlcera duodenal");
      doencas.push("Úlcera gástrica");
      doencas.push("Verminoses");
    } else if (intensidade === "media") {
      doencas.push("Abscesso hepático");
      doencas.push("Abscesso esplênico");
      doencas.push("Adenite mesentérica (hiperplasia linfonodular)");
      doencas.push("Apendicite");
      doencas.push("Colite isquêmica");
      doencas.push("Compressão de raízes nervosas");
      doencas.push("Constipação");
      doencas.push("Diverticulite");
      doencas.push("Divertículo de Meckel");
      doencas.push("Doença celíaca");
      doencas.push("Doença do refluxo gastro-esofágico");
      doencas.push("Doença inflamatória pélvica");
      doencas.push("Endometriose");
      doencas.push("Epiploite ou apendagite");
      doencas.push("Febre familiar do Mediterrâneo");
      doencas.push("Gastrite");
      doencas.push("Gastroenterite");
      doencas.push("Hematoma do músculo reto");
      doencas.push("Hepatite aguda");
      doencas.push("Hérnia encarcerada");
      doencas.push("Hérnia estrangulada");
      doencas.push("Herpes Zoster");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Ileite por AINE");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infarto esplênico");
      doencas.push("Infarto pulmonar");
      doencas.push("Intolerância a lactose");
      doencas.push("Insuficiência suprarrenal aguda");
      doencas.push("Pancreatite");
      doencas.push("Peritonite primária");
      doencas.push("Síndrome de Mallory-Weiss");
      doencas.push("Tuberculose intestinal");
      doencas.push("Vasculite associada a IgA");
      doencas.push("Verminoses");
      doencas.push("Yersiniose");
    } else if (intensidade === "forte") {
      doencas.push("Abscesso hepático");
      doencas.push("Abscesso esplênico");
      doencas.push("Apendicite");
      doencas.push("Cetoacidose diabética");
      doencas.push("Colecistite");
      doencas.push("Cólica renal");
      doencas.push("Colite isquêmica");
      doencas.push("Compressão de raízes nervosas");
      doencas.push("Constipação");
      doencas.push("Crise falcêmica");
      doencas.push("Diverticulite");
      doencas.push("Divertículo de Meckel");
      doencas.push("Doença de Crohn");
      doencas.push("Doença do refluxo gastro-esofágico");
      doencas.push("Endometriose");
      doencas.push("Epiploite ou apendagite");
      doencas.push("Febre familiar do Mediterrâneo");
      doencas.push("Febre tifoide");
      doencas.push("Gastrite");
      doencas.push("Gastroenterite");
      doencas.push("Hematoma do músculo reto");
      doencas.push("Hérnia encarcerada");
      doencas.push("Hérnia estrangulada");
      doencas.push("Herpes Zoster");
      doencas.push("Hiperlipidemia");
      doencas.push("Ileite actínica");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infarto esplênico");
      doencas.push("Infarto pulmonar");
      doencas.push("Infecção respiratória");
      doencas.push("Infecção urinária");
      doencas.push("Intoxicação por chumbo");
      doencas.push("Insuficiência suprarrenal aguda");
      doencas.push("Isquemia mesentérica");
      doencas.push("Mucocele do apêndice");
      doencas.push("Neoplasias");
      doencas.push("Obstrução intestinal");
      doencas.push("Pancreatite");
      doencas.push("Pericardite");
      doencas.push("Peritonite primária");
      doencas.push("Pielonefrite");
      doencas.push("Porfiria aguda");
      doencas.push("Prenhez ectópica");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Ruptura de baço");
      doencas.push("Ruptura de aneurisma da aorta");
      doencas.push("Salpingite");
      doencas.push("Tabes dorsalis");
      doencas.push("Torção de cisto de ovário");
      doencas.push("Úlcera péptica perfurada");
      doencas.push("Úlcera duodenal");
      doencas.push("Úlcera gástrica");
      doencas.push("Vasculite associada a IgA");
      doencas.push("Vólvulo");
      doencas.push("Yersiniose");
    }
  } else {
    resultado = resultado.filter((item) => item != intensidade);
  }
});

dorReferida.addEventListener("input", function (event) {
  console.log(event.target.checked);
  console.log(event.target.value);

  const referida = event.target.value;
  const checked = event.target.checked;

  if (checked == true) {
    resultado.push(referida);
    if (referida === "dorso") {
      doencas.push("Abscesso hepático");
      doencas.push("Abscesso esplênico");
      doencas.push("Colecistite");
      doencas.push("Cólica renal");
      doencas.push("Compressão de raízes nervosas");
      doencas.push("Doença inflamatória pélvica");
      doencas.push("Hiperlipidemia");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Insuficiência suprarrenal aguda");
      doencas.push("Neoplasias");
      doencas.push("Pancreatite");
      doencas.push("Pielonefrite");
      doencas.push("Ruptura de aneurisma da aorta");
      doencas.push("Salpingite");
      doencas.push("Tabes dorsalis");
    } else if (referida === "ombro_direito") {
      doencas.push("Abscesso hepático");
      doencas.push("Colecistite");
      doencas.push("Crise falcêmica");
      doencas.push("Úlcera péptica perfurada");
    } else if (referida === "ombro_esquerdo") {
      doencas.push("Abscesso esplênico");
      doencas.push("Crise falcêmica");
      doencas.push("Infarto esplênico");
      doencas.push("Ruptura de baço");
    } else if (referida === "regiao_inguinal") {
      doencas.push("Cólica renal");
      doencas.push("Compressão de raízes nervosas");
      doencas.push("Ruptura de aneurisma da aorta");
    } else if (referida === "sem_dor") {
      doencas.push("Adenite mesentérica (hiperplasia linfonodular)");
      doencas.push("Apendicite");
      doencas.push("Cetoacidose diabética");
      doencas.push("Colite Isquêmica");
      doencas.push("Constipação");
      doencas.push("Diverticulite");
      doencas.push("Divertículo de Meckel");
      doencas.push("Doença celíaca");
      doencas.push("Doença de Crohn");
      doencas.push("Doença do refluxo gastro-esofágico");
      doencas.push("Endometriose");
      doencas.push("Epiploite ou apendagite");
      doencas.push("Febre familiar do Mediterrâneo");
      doencas.push("Febre tifoide");
      doencas.push("Gastrite");
      doencas.push("Gastroenterite");
      doencas.push("Hematoma do músculo reto");
      doencas.push("Hepatite aguda");
      doencas.push("Hérnia diafragmática");
      doencas.push("Hérnia encarcerada");
      doencas.push("Hérnia estrangulada");
      doencas.push("Herpes Zoster");
      doencas.push("Ileite actínica");
      doencas.push("Ileite por AINE");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infarto pulmonar");
      doencas.push("Infecção respiratória");
      doencas.push("Infecção urinária");
      doencas.push("Intolerância a lactose");
      doencas.push("Intoxicação por chumbo");
      doencas.push("Isquemia mesentérica");
      doencas.push("Mucocele do apêndice");
      doencas.push("Obstrução intestinal");
      doencas.push("Pericardite");
      doencas.push("Peritonite primária");
      doencas.push("Porfiria aguda");
      doencas.push("Prenhez ectópica");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Síndrome de hiperemese canabinoide");
      doencas.push("Síndrome de Mallory-Weiss");
      doencas.push("Torção de cisto de ovário");
      doencas.push("Tuberculose intestinal");
      doencas.push("Úlcera duodenal");
      doencas.push("Úlcera gástrica");
      doencas.push("Vasculite associada a IgA");
      doencas.push("Verminoses");
      doencas.push("Vólvulo");
      doencas.push("Yersiniose");
    }
  } else {
    resultado = resultado.filter((item) => item != referida);
  }
});

tipoDor.addEventListener("input", function (event) {
  console.log(event.target.checked);
  console.log(event.target.value);

  const tipo = event.target.value;
  const checked = event.target.checked;

  if (checked == true) {
    resultado.push(tipo);
    if (tipo === "aperto") {
      doencas.push("Abscesso hepático");
      doencas.push("Abscesso esplênico");
      doencas.push("Adenite mesentérica (hiperplasia linfonodular)");
      doencas.push("Constipação");
      doencas.push("Doença de Crohn");
      doencas.push("Doença do refluxo gastro-esofágico");
      doencas.push("Epiploite ou apendagite");
      doencas.push("Gastrite");
      doencas.push("Hérnia diafragmática");
      doencas.push("Hérnia estrangulada");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infecção urinária");
      doencas.push("Pericardite");
      doencas.push("Pielonefrite");
      doencas.push("Úlcera gástrica");
    } else if (tipo === "colica") {
      doencas.push("Adenite mesentérica (hiperplasia linfonodular)");
      doencas.push("Cetoacidose diabética");
      doencas.push("Colecistite");
      doencas.push("Cólica renal");
      doencas.push("Colite Isquêmica");
      doencas.push("Constipação");
      doencas.push("Crise falcêmica");
      doencas.push("Diverticulite");
      doencas.push("Divertículo de Meckel");
      doencas.push("Doença celíaca");
      doencas.push("Doença de Crohn");
      doencas.push("Febre tifoide");
      doencas.push("Gastroenterite");
      doencas.push("Hiperlipidemia");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Ileite por AINE");
      doencas.push("Intolerância a lactose");
      doencas.push("Intoxicação por chumbo");
      doencas.push("Insuficiência suprarrenal aguda");
      doencas.push("Neoplasias");
      doencas.push("Obstrução intestinal");
      doencas.push("Pancreatite");
      doencas.push("Prenhez ectópica");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Ruptura de baço");
      doencas.push("Salpingite");
      doencas.push("Síndrome de hiperemese canabinoide");
      doencas.push("Tabes dorsalis");
      doencas.push("Torção de cisto de ovário");
      doencas.push("Tuberculose intestinal");
      doencas.push("Vasculite associada a IgA");
      doencas.push("Verminoses");
      doencas.push("Vólvulo");
      doencas.push("Yersiniose");
    } else if (tipo === "constante") {
      doencas.push("Abscesso hepático");
      doencas.push("Abscesso esplênico");
      doencas.push("Apendicite");
      doencas.push("Colecistite");
      doencas.push("Crise falcêmica");
      doencas.push("Diverticulite");
      doencas.push("Divertículo de Meckel");
      doencas.push("Doença inflamatória pélvica");
      doencas.push("Endometriose");
      doencas.push("Epiploite ou apendagite");
      doencas.push("Febre familiar do Mediterrâneo");
      doencas.push("Febre tifoide");
      doencas.push("Hepatite aguda");
      doencas.push("Hérnia encarcerada");
      doencas.push("Hérnia estrangulada");
      doencas.push("Herpes Zoster");
      doencas.push("Hiperlipidemia");
      doencas.push("Ileite actínica");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Ileite por AINE");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infarto esplênico");
      doencas.push("Infarto pulmonar");
      doencas.push("Infecção respiratória");
      doencas.push("Infecção urinária");
      doencas.push("Insuficiência suprarrenal aguda");
      doencas.push("Isquemia mesentérica");
      doencas.push("Mucocele do apêndice");
      doencas.push("Neoplasias");
      doencas.push("Pancreatite");
      doencas.push("Pericardite");
      doencas.push("Peritonite primária");
      doencas.push("Pielonefrite");
      doencas.push("Porfiria aguda");
      doencas.push("Ruptura de aneurisma da aorta");
      doencas.push("Salpingite");
      doencas.push("Síndrome de Mallory-Weiss");
      doencas.push("Torção de cisto de ovário");
      doencas.push("Úlcera péptica perfurada");
      doencas.push("Vasculite associada a IgA");
    } else if (tipo === "fisgada") {
      doencas.push("Apendicite");
      doencas.push("Compressão de raízes nervosas");
      doencas.push("Doença do refluxo gastro-esofágico");
      doencas.push("Doença inflamatória pélvica");
      doencas.push("Gastrite");
      doencas.push("Hematoma do músculo reto");
      doencas.push("Hérnia encarcerada");
      doencas.push("Herpes Zoster");
      doencas.push("Infarto esplênico");
      doencas.push("Intolerância a lactose");
      doencas.push("Prenhez ectópica");
      doencas.push("Úlcera duodenal");
      doencas.push("Úlcera gástrica");
    } else if (tipo === "superficial") {
      doencas.push("Compressão de raízes nervosas");
      doencas.push("Hematoma do músculo reto");
    }
  } else {
    resultado = resultado.filter((item) => item != tipo);
  }
});

duracaoDor.addEventListener("input", function (event) {
  console.log(event.target.checked);
  console.log(event.target.value);

  const duracao = event.target.value;
  const checked = event.target.checked;

  if (checked == true) {
    resultado.push(duracao);
    if (duracao === "aguda") {
      doencas.push("Colecistite");
      doencas.push("Colite Isquêmica");
      doencas.push("Constipação");
      doencas.push("Divertículo de Meckel");
      doencas.push("Doença de Crohn");
      doencas.push("Doença do refluxo gastro-esofágico");
      doencas.push("Epiploite ou apendagite");
      doencas.push("Febre familiar do Mediterrâneo");
      doencas.push("Gastrite");
      doencas.push("Gastroenterite");
      doencas.push("Hematoma do músculo reto");
      doencas.push("Hepatite aguda");
      doencas.push("Hérnia diafragmática");
      doencas.push("Hérnia encarcerada");
      doencas.push("Hérnia estrangulada");
      doencas.push("Herpes Zoster");
      doencas.push("Hiperlipidemia");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infarto esplênico");
      doencas.push("Infarto pulmonar");
      doencas.push("Infecção respiratória");
      doencas.push("Infecção urinária");
      doencas.push("Intolerância a lactose");
      doencas.push("Intoxicação por chumbo");
      doencas.push("Insuficiência suprarrenal aguda");
      doencas.push("Isquemia mesentérica");
      doencas.push("Mucocele do apêndice");
      doencas.push("Neoplasias");
      doencas.push("Obstrução intestinal");
      doencas.push("Pancreatite");
      doencas.push("Pericardite");
      doencas.push("Peritonite primária");
      doencas.push("Pielonefrite");
      doencas.push("Porfiria aguda");
      doencas.push("Prenhez ectópica");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Ruptura de baço");
      doencas.push("Ruptura de aneurisma da aorta");
      doencas.push("Salpingite");
      doencas.push("Síndrome de hiperemese canabinoide");
      doencas.push("Síndrome de Mallory-Weiss");
      doencas.push("Tabes dorsalis");
      doencas.push("Torção de cisto de ovário");
      doencas.push("Tuberculose intestinal");
      doencas.push("Úlcera péptica perfurada");
      doencas.push("Úlcera duodenal");
      doencas.push("Úlcera gástrica");
      doencas.push("Vasculite associada a IgA");
      doencas.push("Verminoses");
      doencas.push("Vólvulo");
      doencas.push("Yersiniose");
    } else if (duracao === "cronica") {
      doencas.push("Abscesso hepático");
      doencas.push("Abscesso esplênico");
      doencas.push("Adenite mesentérica (hiperplasia linfonodular)");
      doencas.push("Apendicite");
      doencas.push("Cetoacidose diabética");
      doencas.push("Cólica renal");
      doencas.push("Compressão de raízes nervosas");
      doencas.push("Constipação");
      doencas.push("Crise falcêmica");
      doencas.push("Diverticulite");
      doencas.push("Doença celíaca");
      doencas.push("Doença de Crohn");
      doencas.push("Doença inflamatória pélvica");
      doencas.push("Endometriose");
      doencas.push("Febre tifoide");
      doencas.push("Hematoma do músculo reto");
      doencas.push("Ileite actínica");
      doencas.push("Ileite por AINE");
      doencas.push("Mucocele do apêndice");
      doencas.push("Neoplasias");
      doencas.push("Pancreatite");
      doencas.push("Pericardite");
      doencas.push("Prenhez ectópica");
      doencas.push("Salpingite");
      doencas.push("Torção de cisto de ovário");
      doencas.push("Tuberculose intestinal");
      doencas.push("Úlcera duodenal");
      doencas.push("Úlcera gástrica");
      doencas.push("Verminoses");
      doencas.push("Yersiniose");
    }
  } else {
    resultado = resultado.filter((item) => item != duracao);
  }
});

ritmoIntestinal.addEventListener("input", function (event) {
  console.log(event.target.checked);
  console.log(event.target.value);

  const ritmo = event.target.value;
  const checked = event.target.checked;

  if (checked == true) {
    resultado.push(ritmo);
    if (ritmo === "alteracao_recente") {
      doencas.push("Colecistite");
      doencas.push("Constipação");
      doencas.push("Crise falcêmica");
      doencas.push("Diverticulite");
      doencas.push("Hiperlipidemia");
      doencas.push("Neoplasias");
      doencas.push("Obstrução intestinal");
      doencas.push("Pancreatite");
      doencas.push("Retocolite ulcerativa");
    } else if (ritmo === "constipacao") {
      doencas.push("Apendicite");
      doencas.push("Constipação");
      doencas.push("Diverticulite");
      doencas.push("Divertículo de Meckel");
      doencas.push("Doença celíaca");
      doencas.push("Doença de Crohn");
      doencas.push("Endometriose");
      doencas.push("Febre familiar do Mediterrâneo");
      doencas.push("Febre tifoide");
      doencas.push("Hérnia encarcerada");
      doencas.push("Hérnia estrangulada");
      doencas.push("Intoxicação por chumbo");
      doencas.push("Mucocele do apêndice");
      doencas.push("Neoplasias");
      doencas.push("Obstrução intestinal");
      doencas.push("Porfiria aguda");
      doencas.push("Tuberculose intestinal");
      doencas.push("Vólvulo");
    } else if (ritmo === "diarreia") {
      doencas.push("Abscesso esplênico");
      doencas.push("Adenite mesentérica (hiperplasia linfonodular)");
      doencas.push("Apendicite");
      doencas.push("Colite Isquêmica");
      doencas.push("Doença celíaca");
      doencas.push("Endometriose");
      doencas.push("Gastroenterite");
      doencas.push("Hepatite aguda");
      doencas.push("Ileite actínica");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Ileite por AINE");
      doencas.push("Infecção respiratória");
      doencas.push("Intolerância a lactose");
      doencas.push("Insuficiência suprarrenal aguda");
      doencas.push("Tuberculose intestinal");
      doencas.push("Verminoses");
      doencas.push("Yersiniose");
    } else if (ritmo === "diarreia_muco_sanguinolenta") {
      doencas.push("Febre tifoide");
      doencas.push("Gastroenterite");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Verminoses");
    } else if (ritmo === "diarreia_sanguinolenta") {
      doencas.push("Divertículo de Meckel");
      doencas.push("Doença de Crohn");
      doencas.push("Hérnia estrangulada");
      doencas.push("Ileite actínica");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Ileite por AINE");
      doencas.push("Isquemia mesentérica");
      doencas.push("Yersiniose");
    } else if (ritmo === "sem_alteracao") {
      doencas.push("Abscesso hepático");
      doencas.push("Cetoacidose diabética");
      doencas.push("Cólica renal");
      doencas.push("Compressão de raízes nervosas");
      doencas.push("Doença do refluxo gastro-esofágico");
      doencas.push("Doença inflamatória pélvica");
      doencas.push("Epiploite ou apendagite");
      doencas.push("Gastrite");
      doencas.push("Hematoma do músculo reto");
      doencas.push("Hérnia diafragmática");
      doencas.push("Herpes Zoster");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infarto esplênico");
      doencas.push("Infarto pulmonar");
      doencas.push("Infecção respiratória");
      doencas.push("Infecção urinária");
      doencas.push("Mucocele do apêndice");
      doencas.push("Pancreatite");
      doencas.push("Pericardite");
      doencas.push("Peritonite primária");
      doencas.push("Pielonefrite");
      doencas.push("Prenhez ectópica");
      doencas.push("Ruptura de baço");
      doencas.push("Ruptura de aneurisma da aorta");
      doencas.push("Salpingite");
      doencas.push("Síndrome de hiperemese canabinoide");
      doencas.push("Síndrome de Mallory-Weiss");
      doencas.push("Tabes dorsalis");
      doencas.push("Torção de cisto de ovário");
      doencas.push("Úlcera péptica perfurada");
      doencas.push("Úlcera duodenal");
      doencas.push("Úlcera gástrica");
      doencas.push("Vasculite associada a IgA");
    }
  } else {
    resultado = resultado.filter((item) => item != ritmo);
  }
});

sinaisSintomas.addEventListener("input", function (event) {
  console.log(event.target.checked);
  console.log(event.target.value);

  const outros = event.target.value;
  const checked = event.target.checked;

  if (checked == true) {
    resultado.push(outros);
    if (outros === "abaulamento") {
      doencas.push("Hematoma do músculo reto");
      doencas.push("Hérnia encarcerada");
      doencas.push("Hérnia estrangulada");
      doencas.push("Neoplasias");
      doencas.push("Ruptura de aneurisma da aorta");
    } else if (outros === "abdomen_em_tabua") {
      doencas.push("Úlcera péptica perfurada");
    } else if (outros === "acolia_fecal") {
      doencas.push("Colecistite");
      doencas.push("Crise falcêmica");
      doencas.push("Hepatite aguda");
      doencas.push("Neoplasias");
      doencas.push("Pancreatite");
    } else if (outros === "aftas") {
      doencas.push("Doença celíaca");
      doencas.push("Doença de Crohn");
    } else if (outros === "agitacao") {
      doencas.push("Cólica renal");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Pancreatite");
      doencas.push("Porfiria aguda");
      doencas.push("Síndrome de hiperemese canabinoidea");
    } else if (outros === "alteracao_estado_mental") {
      doencas.push("Intoxicação por chumbo");
      doencas.push("Neoplasias");
      doencas.push("Porfiria aguda");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Síndrome de hiperemese canabinoide");
    } else if (outros === "anemia") {
      doencas.push("Abscesso esplênico");
      doencas.push("Constipação");
      doencas.push("Crise falcêmica");
      doencas.push("Doença celíaca");
      doencas.push("Doença de Crohn");
      doencas.push("Hematoma do músculo reto");
      doencas.push("Ileite actínica");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Ileite por AINE");
      doencas.push("Neoplasias");
      doencas.push("Pancreatite");
      doencas.push("Peritonite primária");
      doencas.push("Prenhez ectópica");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Ruptura de baço");
      doencas.push("Ruptura de aneurisma da aorta");
      doencas.push("Síndrome de Mallory-Weiss");
      doencas.push("Tuberculose intestinal");
      doencas.push("Verminoses");
    } else if (outros === "anorexia") {
      doencas.push("Abscesso hepático");
      doencas.push("Abscesso esplênico");
      doencas.push("Adenite mesentérica (hiperplasia linfonodular)");
      doencas.push("Apendicite");
      doencas.push("Cetoacidose diabética");
      doencas.push("Colecistite");
      doencas.push("Colite Isquêmica");
      doencas.push("Crise falcêmica");
      doencas.push("Diverticulite");
      doencas.push("Divertículo de Meckel");
      doencas.push("Epiploite ou apendagite");
      doencas.push("Febre tifoide");
      doencas.push("Gastroenterite");
      doencas.push("Hepatite aguda");
      doencas.push("Hérnia encarcerada");
      doencas.push("Hérnia estrangulada");
      doencas.push("Ileite actínica");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Infecção respiratória");
      doencas.push("Intoxicação por chumbo");
      doencas.push("Neoplasias");
      doencas.push("Obstrução intestinal");
      doencas.push("Pancreatite");
      doencas.push("Peritonite primária");
      doencas.push("Pielonefrite");
      doencas.push("Síndrome de hiperemese canabinoide");
      doencas.push("Síndrome de Mallory-Weiss");
      doencas.push("Tuberculose intestinal");
      doencas.push("Úlcera gástrica");
      doencas.push("Verminoses");
      doencas.push("Vólvulo");
    } else if (outros === "artrite_infecciosa") {
      doencas.push("Apendicite");
      doencas.push("Yersiniose");
    } else if (outros === "artropatia_de_charcot") {
      doencas.push("Infarto esplênico");
      doencas.push("Tabes dorsalis");
    } else if (outros === "astenia") {
      doencas.push("Abscesso hepático");
      doencas.push("Abscesso esplênico");
      doencas.push("Cetoacidose diabética");
      doencas.push("Crise falcêmica");
      doencas.push("Febre tifoide");
      doencas.push("Hepatite aguda");
      doencas.push("Infecção respiratória");
      doencas.push("Insuficiência suprarrenal aguda");
      doencas.push("Neoplasias");
      doencas.push("Pericardite");
      doencas.push("Peritonite primária");
      doencas.push("Pielonefrite");
      doencas.push("Tuberculose intestinal");
      doencas.push("Verminoses");
    } else if (outros === "ataxia_sensitiva") {
      doencas.push("Tabes dorsalis");
    } else if (outros === "atraso_no_crescimento") {
      doencas.push("Doença celíaca");
      doencas.push("Doença de Crohn");
      doencas.push("Intoxicação por chumbo");
      doencas.push("Verminoses");
    } else if (outros === "atrofia_muscular") {
      doencas.push("Tabes dorsalis");
    } else if (outros === "aversao_ao_tabaco") {
      doencas.push("Hepatite aguda");
    } else if (outros === "bradicardia") {
      doencas.push("Febre tifoide");
      doencas.push("Infarto agudo do miocárdio");
    } else if (outros === "calafrios") {
      doencas.push("Abscesso hepático");
      doencas.push("Abscesso esplênico");
      doencas.push("Colecistite");
      doencas.push("Cólica renal");
      doencas.push("Diverticulite");
      doencas.push("Divertículo de Meckel");
      doencas.push("Febre tifoide");
      doencas.push("Infecção respiratória");
      doencas.push("Neoplasias");
      doencas.push("Pericardite");
      doencas.push("Peritonite primária");
      doencas.push("Pielonefrite");
      doencas.push("Salpingite");
    } else if (outros === "cansaco") {
      doencas.push("Abscesso hepático");
      doencas.push("Cetoacidose diabética");
      doencas.push("Crise falcêmica");
      doencas.push("Febre familiar do Mediterrâneo");
      doencas.push("Ileite actínica");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infecção respiratória");
      doencas.push("Neoplasias");
      doencas.push("Pericardite");
    } else if (outros === "cefaleia") {
      doencas.push("Abscesso esplênico");
      doencas.push("Febre tifoide");
      doencas.push("Gastroenterite");
      doencas.push("Herpes Zoster");
      doencas.push("Intoxicação por chumbo");
      doencas.push("Insuficiência suprarrenal aguda");
    } else if (outros === "coluria") {
      doencas.push("Colecistite");
      doencas.push("Crise falcêmica");
      doencas.push("Hepatite aguda");
      doencas.push("Neoplasias");
      doencas.push("Pancreatite");
    } else if (outros === "coma") {
      doencas.push("Cetoacidose diabética");
    } else if (outros === "confusao_mental") {
      doencas.push("Intoxicação por chumbo");
      doencas.push("Insuficiência suprarrenal aguda");
      doencas.push("Neoplasias");
      doencas.push("Porfiria aguda");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Salpingite");
    } else if (outros === "convulsao") {
      doencas.push("Intoxicação por chumbo");
      doencas.push("Porfiria aguda");
    } else if (outros === "corrimento_vaginal") {
      doencas.push("Doença inflamatória pélvica");
      doencas.push("Neoplasias");
      doencas.push("Salpingite");
    } else if (outros === "cianose") {
      doencas.push("Hérnia diafragmática");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infarto pulmonar");
      doencas.push("Infecção respiratória");
    } else if (outros === "dermatite_herpetiforme") {
      doencas.push("Doença celíaca");
      doencas.push("Herpes Zoster");
    } else if (outros === "desidratacao") {
      doencas.push("Cetoacidose diabética");
      doencas.push("Crise falcêmica");
      doencas.push("Diverticulite");
      doencas.push("Gastroenterite");
      doencas.push("Insuficiência suprarrenal aguda");
      doencas.push("Obstrução intestinal");
      doencas.push("Pancreatite");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Síndrome de hiperemese canabinoide");
      doencas.push("Úlcera péptica perfurada");
      doencas.push("Yersiniose");
    } else if (outros === "dificuldade_de_ganhar_peso") {
      doencas.push("Doença celíaca");
      doencas.push("Ileite actínica");
      doencas.push("Neoplasias");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Tuberculose intestinal");
      doencas.push("Úlcera gástrica");
      doencas.push("Verminoses");
    } else if (outros === "dismenorreia") {
      doencas.push("Endometriose");
      doencas.push("Neoplasias");
      doencas.push("Prenhez ectópica");
      doencas.push("Salpingite");
    } else if (outros === "dispareunia") {
      doencas.push("Doença inflamatória pélvica");
      doencas.push("Endometriose");
      doencas.push("Neoplasias");
      doencas.push("Salpingite");
    } else if (outros === "dispneia") {
      doencas.push("Febre familiar do Mediterrâneo");
      doencas.push("Hérnia diafragmática");
      doencas.push("Hiperlipidemia");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infarto pulmonar");
      doencas.push("Infecção respiratória");
      doencas.push("Neoplasias");
      doencas.push("Pericardite");
      doencas.push("Peritonite primária");
    } else if (outros === "distensao_abdominal") {
      doencas.push("Adenite mesentérica (hiperplasia linfonodular)");
      doencas.push("Apendicite");
      doencas.push("Cetoacidose diabética");
      doencas.push("Colecistite");
      doencas.push("Colite Isquêmica");
      doencas.push("Constipação");
      doencas.push("Crise falcêmica");
      doencas.push("Diverticulite");
      doencas.push("Divertículo de Meckel");
      doencas.push("Doença celíaca");
      doencas.push("Doença de Crohn");
      doencas.push("Endometriose");
      doencas.push("Gastroenterite");
      doencas.push("Hérnia encarcerada");
      doencas.push("Hérnia estrangulada");
      doencas.push("Hiperlipidemia");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Intolerância a lactose");
      doencas.push("Isquemia mesentérica");
      doencas.push("Neoplasias");
      doencas.push("Obstrução intestinal");
      doencas.push("Pancreatite");
      doencas.push("Pericardite");
      doencas.push("Peritonite primária");
      doencas.push("Porfiria aguda");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Ruptura de aneurisma da aorta");
      doencas.push("Torção de cisto de ovário");
      doencas.push("Úlcera péptica perfurada");
      doencas.push("Verminoses");
      doencas.push("Vólvulo");
    } else if (outros === "disuria") {
      doencas.push("Apendicite");
      doencas.push("Cólica renal");
      doencas.push("Diverticulite");
      doencas.push("Doença inflamatória pélvica");
      doencas.push("Infecção urinária");
      doencas.push("Neoplasias");
      doencas.push("Pielonefrite");
      doencas.push("Salpingite");
    } else if (outros === "dor_articular") {
      doencas.push("Crise falcêmica");
      doencas.push("Doença de Crohn");
      doencas.push("Febre familiar do Mediterrâneo");
      doencas.push("Hepatite aguda");
      doencas.push("Insuficiência suprarrenal aguda");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Tabes dorsalis");
      doencas.push("Vasculite associada a IgA");
    } else if (outros === "dor_subita_ao_exercicio") {
      doencas.push("Compressão de raízes nervosas");
      doencas.push("Hematoma do músculo reto");
      doencas.push("Hérnia encarcerada");
      doencas.push("Hérnia estrangulada");
      doencas.push("Ileite por AINE");
      doencas.push("Infarto agudo do miocárdio");
    } else if (outros === "dor_toracica") {
      doencas.push("Abscesso esplênico");
      doencas.push("Compressão de raízes nervosas");
      doencas.push("Crise falcêmica");
      doencas.push("Doença do refluxo gastro-esofágico");
      doencas.push("Febre familiar do Mediterrâneo");
      doencas.push("Hérnia diafragmática");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infarto pulmonar");
      doencas.push("Infecção respiratória");
      doencas.push("Pericardite");
    } else if (outros === "enterorragia") {
      doencas.push("Doença de Crohn");
      doencas.push("Endometriose");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Neoplasias");
    } else if (outros === "episclerite") {
      doencas.push("Retocolite ulcerativa");
    } else if (outros === "equimose") {
      doencas.push("Hematoma do músculo reto");
      doencas.push("Hepatite aguda");
      doencas.push("Hérnia estrangulada");
      doencas.push("Ruptura de aneurisma da aorta");
    } else if (outros === "eritema_cutaneo") {
      doencas.push("Febre familiar do Mediterrâneo");
      doencas.push("Hérnia estrangulada");
      doencas.push("Herpes Zoster");
    } else if (outros === "eritema_nodoso") {
      doencas.push("Retocolite ulcerativa");
      doencas.push("Yersiniose");
    } else if (outros === "esteatorreia") {
      doencas.push("Doença celíaca");
      doencas.push("Hiperlipidemia");
      doencas.push("Vasculite associada a IgA");
    } else if (outros === "fadiga") {
      doencas.push("Abscesso hepático");
      doencas.push("Abscesso esplênico");
      doencas.push("Cetoacidose diabética");
      doencas.push("Crise falcêmica");
      doencas.push("Doença celíaca");
      doencas.push("Endometriose");
      doencas.push("Hepatite aguda");
      doencas.push("Hérnia estrangulada");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infecção respiratória");
      doencas.push("Intoxicação por chumbo");
      doencas.push("Neoplasias");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Tuberculose intestinal");
    } else if (outros === "flatos_vaginal") {
      doencas.push("Diverticulite");
      doencas.push("Doença de Crohn");
    } else if (outros === "flatulencia") {
      doencas.push("Constipação");
      doencas.push("Intolerância a lactose");
      doencas.push("Neoplasias");
      doencas.push("Verminoses");
    } else if (outros === "febre") {
      doencas.push("Abscesso hepático");
      doencas.push("Abscesso esplênico");
      doencas.push("Adenite mesentérica (hiperplasia linfonodular)");
      doencas.push("Apendicite");
      doencas.push("Colecistite");
      doencas.push("Cólica renal");
      doencas.push("Colite Isquêmica");
      doencas.push("Crise falcêmica");
      doencas.push("Diverticulite");
      doencas.push("Doença de Crohn");
      doencas.push("Doença inflamatória pélvica");
      doencas.push("Epiploite ou apendagite");
      doencas.push("Febre familiar do Mediterrâneo");
      doencas.push("Febre tifoide");
      doencas.push("Gastroenterite");
      doencas.push("Hepatite aguda");
      doencas.push("Hérnia estrangulada");
      doencas.push("Herpes Zoster");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Infarto esplênico");
      doencas.push("Infarto pulmonar");
      doencas.push("Infecção respiratória");
      doencas.push("Mucocele do apêndice");
      doencas.push("Neoplasias");
      doencas.push("Obstrução intestinal");
      doencas.push("Pancreatite");
      doencas.push("Pericardite");
      doencas.push("Peritonite primária");
      doencas.push("Pielonefrite");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Salpingite");
      doencas.push("Torção de cisto de ovário");
      doencas.push("Tuberculose intestinal");
      doencas.push("Úlcera péptica perfurada");
      doencas.push("Yersiniose");
    } else if (outros === "fraqueza") {
      doencas.push("Abscesso hepático");
      doencas.push("Abscesso esplênico");
      doencas.push("Cetoacidose diabética");
      doencas.push("Colite Isquêmica");
      doencas.push("Crise falcêmica");
      doencas.push("Ileite actínica");
      doencas.push("Infecção respiratória");
      doencas.push("Insuficiência suprarrenal aguda");
      doencas.push("Neoplasias");
      doencas.push("Pericardite");
      doencas.push("Porfiria aguda");
    } else if (outros === "fraqueza_muscular") {
      doencas.push("Compressão de raízes nervosas");
      doencas.push("Intoxicação por chumbo");
      doencas.push("Porfiria aguda");
      doencas.push("Tabes dorsalis");
    } else if (outros === "globus_faringeo") {
      doencas.push("Doença do refluxo gastro-esofágico");
      doencas.push("Hérnia diafragmática");
    } else if (outros === "hematemese") {
      doencas.push("Gastrite");
      doencas.push("Neoplasias");
      doencas.push("Síndrome de Mallory-Weiss");
      doencas.push("Úlcera duodenal");
      doencas.push("Úlcera gástrica");
    } else if (outros === "hematoquisia") {
      doencas.push("Colite Isquêmica");
      doencas.push("Constipação");
      doencas.push("Divertículo de Meckel");
      doencas.push("Doença de Crohn");
      doencas.push("Gastroenterite");
      doencas.push("Hérnia estrangulada");
      doencas.push("Ileite actínica");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Ileite por AINE");
      doencas.push("Isquemia mesentérica");
      doencas.push("Neoplasias");
      doencas.push("Obstrução intestinal");
      doencas.push("Tuberculose intestinal");
      doencas.push("Vasculite associada a IgA");
      doencas.push("Verminoses");
      doencas.push("Yersiniose");
    } else if (outros === "hematuria") {
      doencas.push("Cólica renal");
      doencas.push("Endometriose");
      doencas.push("Neoplasias");
      doencas.push("Vasculite associada a IgA");
    } else if (outros === "hiperestesia") {
      doencas.push("Compressão de raízes nervosas");
      doencas.push("Herpes Zoster");
    } else if (outros === "hipersensibilidade_parede_abdominal") {
      doencas.push("Abscesso hepático");
      doencas.push("Abscesso esplênico");
      doencas.push("Compressão de raízes nervosas");
      doencas.push("Doença de Crohn");
      doencas.push("Hematoma do músculo reto");
      doencas.push("Neoplasias");
      doencas.push("Peritonite primária");
      doencas.push("Salpingite");
    } else if (outros === "hipertensao") {
      doencas.push("Insuficiência suprarrenal aguda");
      doencas.push("Porfiria aguda");
    } else if (outros === "hipotensao") {
      doencas.push("Cetoacidose diabética");
      doencas.push("Colite Isquêmica");
      doencas.push("Crise falcêmica");
      doencas.push("Diverticulite");
      doencas.push("Gastroenterite");
      doencas.push("Hematoma do músculo reto");
      doencas.push("Hérnia estrangulada");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infarto esplênico");
      doencas.push("Infarto pulmonar");
      doencas.push("Infecção respiratória");
      doencas.push("Isquemia mesentérica");
      doencas.push("Neoplasias");
      doencas.push("Obstrução intestinal");
      doencas.push("Pancreatite");
      doencas.push("Pericardite");
      doencas.push("Peritonite primária");
      doencas.push("Pielonefrite");
      doencas.push("Prenhez ectópica");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Ruptura de baço");
      doencas.push("Ruptura de aneurisma da aorta");
      doencas.push("Síndrome de Mallory-Weiss");
      doencas.push("Úlcera péptica perfurada");
    } else if (outros === "inquietacao") {
      doencas.push("Cólica renal");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Intoxicação por chumbo");
      doencas.push("Pancreatite");
      doencas.push("Porfiria aguda");
    } else if (outros === "ictericia") {
      doencas.push("Abscesso hepático");
      doencas.push("Colecistite");
      doencas.push("Crise falcêmica");
      doencas.push("Hepatite aguda");
      doencas.push("Neoplasias");
      doencas.push("Pancreatite");
      doencas.push("Peritonite primária");
      doencas.push("Verminoses");
    } else if (outros === "impotencia") {
      doencas.push("Tabes dorsalis");
    } else if (outros === "infertilidade") {
      doencas.push("Doença celíaca");
      doencas.push("Doença inflamatória pélvica");
      doencas.push("Endometriose");
    } else if (outros === "insonia") {
      doencas.push("Porfiria aguda");
    } else if (outros === "intolerancia_alcool") {
      doencas.push("Hepatite aguda");
    } else if (outros === "letargia") {
      doencas.push("Cetoacidose diabética");
      doencas.push("Hepatite aguda");
      doencas.push("Porfiria aguda");
    } else if (outros === "manchas_rosadas") {
      doencas.push("Febre tifoide");
      doencas.push("Porfiria aguda");
    } else if (outros === "massa_palpavel") {
      doencas.push("Abscesso hepático");
      doencas.push("Apendicite");
      doencas.push("Colecistite");
      doencas.push("Diverticulite");
      doencas.push("Divertículo de Meckel");
      doencas.push("Doença de Crohn");
      doencas.push("Doença inflamatória pélvica");
      doencas.push("Hematoma do músculo reto");
      doencas.push("Hérnia encarcerada");
      doencas.push("Hérnia estrangulada");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Infarto esplênico");
      doencas.push("Mucocele do apêndice");
      doencas.push("Neoplasias");
      doencas.push("Prenhez ectópica");
      doencas.push("Ruptura de aneurisma da aorta");
      doencas.push("Torção de cisto de ovário");
      doencas.push("Tuberculose intestinal");
      doencas.push("Úlcera péptica perfurada");
    } else if (outros === "mau_halito") {
      doencas.push("Doença do refluxo gastro-esofágico");
    } else if (outros === "melena") {
      doencas.push("Divertículo de Meckel");
      doencas.push("Gastrite");
      doencas.push("Neoplasias");
      doencas.push("Síndrome de Mallory-Weiss");
      doencas.push("Úlcera duodenal");
      doencas.push("Úlcera gástrica");
      doencas.push("Vasculite associada a IgA");
    } else if (outros === "metrorragia") {
      doencas.push("Neoplasias");
      doencas.push("Prenhez ectópica");
      doencas.push("Salpingite");
    } else if (outros === "mialgia") {
      doencas.push("Febre tifoide");
      doencas.push("Gastroenterite");
      doencas.push("Hematoma do músculo reto");
      doencas.push("Hepatite aguda");
      doencas.push("Infarto pulmonar");
      doencas.push("Infecção respiratória");
      doencas.push("Insuficiência suprarrenal aguda");
      doencas.push("Verminoses");
    } else if (outros === "miose") {
      doencas.push("Tabes dorsalis");
    } else if (outros === "nausea") {
      doencas.push("Abscesso hepático");
      doencas.push("Abscesso esplênico");
      doencas.push("Adenite mesentérica (hiperplasia linfonodular)");
      doencas.push("Apendicite");
      doencas.push("Cetoacidose diabética");
      doencas.push("Colecistite");
      doencas.push("Cólica renal");
      doencas.push("Colite Isquêmica");
      doencas.push("Constipação");
      doencas.push("Crise falcêmica");
      doencas.push("Diverticulite");
      doencas.push("Divertículo de Meckel");
      doencas.push("Doença de Crohn");
      doencas.push("Doença inflamatória pélvica");
      doencas.push("Endometriose");
      doencas.push("Epiploite ou apendagite");
      doencas.push("Febre familiar do Mediterrâneo");
      doencas.push("Febre tifoide");
      doencas.push("Gastrite");
      doencas.push("Gastroenterite");
      doencas.push("Hepatite aguda");
      doencas.push("Hérnia diafragmática");
      doencas.push("Hérnia encarcerada");
      doencas.push("Hérnia estrangulada");
      doencas.push("Hiperlipidemia");
      doencas.push("Ileite actínica");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infarto esplênico");
      doencas.push("Infarto pulmonar");
      doencas.push("Infecção respiratória");
      doencas.push("Intolerância a lactose");
      doencas.push("Intoxicação por chumbo");
      doencas.push("Insuficiência suprarrenal aguda");
      doencas.push("Isquemia mesentérica");
      doencas.push("Mucocele do apêndice");
      doencas.push("Neoplasias");
      doencas.push("Obstrução intestinal");
      doencas.push("Pancreatite");
      doencas.push("Pericardite");
      doencas.push("Peritonite primária");
      doencas.push("Pielonefrite");
      doencas.push("Porfiria aguda");
      doencas.push("Prenhez ectópica");
      doencas.push("Ruptura de aneurisma da aorta");
      doencas.push("Salpingite");
      doencas.push("Síndrome de hiperemese canabinoide");
      doencas.push("SalpingSíndrome de Mallory-Weissite");
      doencas.push("Torção de cisto de ovário");
      doencas.push("Tuberculose intestinal");
      doencas.push("Úlcera péptica perfurada");
      doencas.push("Úlcera gástrica");
      doencas.push("Vasculite associada a IgA");
      doencas.push("Verminoses");
      doencas.push("Vólvulo");
      doencas.push("Yersiniose");
    } else if (outros === "nocturia") {
      doencas.push("Cólica renal");
      doencas.push("Neoplasias");
    } else if (outros === "obnubilacao") {
      doencas.push("Cetoacidose diabética");
      doencas.push("Febre tifoide");
      doencas.push("Hiperlipidemia");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Insuficiência suprarrenal aguda");
      doencas.push("Pancreatite");
    } else if (outros === "oliguria") {
      doencas.push("Cetoacidose diabética");
      doencas.push("Cólica renal");
      doencas.push("Gastroenterite");
      doencas.push("Hérnia estrangulada");
      doencas.push("Isquemia mesentérica");
      doencas.push("Neoplasias");
      doencas.push("Obstrução intestinal");
      doencas.push("Pancreatite");
      doencas.push("Peritonite primária");
      doencas.push("Pielonefrite");
      doencas.push("Ruptura de aneurisma da aorta");
      doencas.push("Síndrome de hiperemese canabinoide");
      doencas.push("Síndrome de Mallory-Weiss");
    } else if (outros === "orquite") {
      doencas.push("Febre familiar do Mediterrâneo");
    } else if (outros === "osteopenia") {
      doencas.push("Doença celíaca");
    } else if (outros === "palidez_cutanea") {
      doencas.push("Abscesso hepático");
      doencas.push("Abscesso esplênico");
      doencas.push("Crise falcêmica");
      doencas.push("Hematoma do músculo reto");
      doencas.push("Ileite actínica");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Ileite por AINE");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infarto esplênico");
      doencas.push("SalpinInfecção respiratóriagite");
      doencas.push("Isquemia mesentérica");
      doencas.push("Neoplasias");
      doencas.push("Pancreatite");
      doencas.push("Prenhez ectópica");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Ruptura de baço");
      doencas.push("Ruptura de aneurisma da aorta");
      doencas.push("Síndrome de Mallory-Weiss");
      doencas.push("Tuberculose intestinal");
      doencas.push("Verminoses");
    } else if (outros === "palpitacao") {
      doencas.push("Intoxicação por chumbo");
      doencas.push("Pericardite");
      doencas.push("Porfiria aguda");
    } else if (outros === "parestesia") {
      doencas.push("Hiperlipidemia");
      doencas.push("Intoxicação por chumbo");
      doencas.push("Porfiria aguda");
      doencas.push("Tabes dorsalis");
    } else if (outros === "pneumaturia") {
      doencas.push("Diverticulite");
      doencas.push("Doença de Crohn");
    } else if (outros === "perda_ponderal") {
      doencas.push("Abscesso hepático");
      doencas.push("Abscesso esplênico");
      doencas.push("Cetoacidose diabética");
      doencas.push("Constipação");
      doencas.push("Crise falcêmica");
      doencas.push("Doença celíaca");
      doencas.push("Doença de Crohn");
      doencas.push("Gastroenterite");
      doencas.push("Ileite actínica");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Ileite por AINE");
      doencas.push("Intoxicação por chumbo");
      doencas.push("Mucocele do apêndice");
      doencas.push("Neoplasias");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Tuberculose intestinal");
      doencas.push("Úlcera gástrica");
      doencas.push("Verminoses");
    } else if (outros === "perda_propriocepcao") {
      doencas.push("Tabes dorsalis");
    } else if (outros === "perda_reflexos_perifericos") {
      doencas.push("Tabes dorsalis");
    } else if (outros === "perda_sensibilidade_vibratorias") {
      doencas.push("Tabes dorsalis");
    } else if (outros === "plenitude_pos_prandial") {
      doencas.push("Gastrite");
      doencas.push("Hérnia diafragmática");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Intolerância a lactose");
      doencas.push("Isquemia mesentérica");
      doencas.push("Neoplasias");
      doencas.push("Tuberculose intestinal");
      doencas.push("Úlcera duodenal");
      doencas.push("Úlcera gástrica");
    } else if (outros === "polidipsia") {
      doencas.push("Cetoacidose diabética");
    } else if (outros === "poliuria") {
      doencas.push("Cetoacidose diabética");
      doencas.push("Cólica renal");
      doencas.push("Doença inflamatória pélvica");
      doencas.push("Infecção urinária");
    } else if (outros === "posicao_antalgica") {
      doencas.push("Adenite mesentérica (hiperplasia linfonodular)");
      doencas.push("Compressão de raízes nervosas");
      doencas.push("Pancreatite");
      doencas.push("Pielonefrite");
      doencas.push("Úlcera péptica perfurada");
    } else if (outros === "proctalgia") {
      doencas.push("Constipação");
      doencas.push("Doença de Crohn");
      doencas.push("Endometriose");
      doencas.push("Neoplasias");
    } else if (outros === "prurido") {
      doencas.push("Hepatite aguda");
      doencas.push("Herpes Zoster");
      doencas.push("Neoplasias");
      doencas.push("Verminoses");
    } else if (outros === "pulso_paradoxal") {
      doencas.push("Pericardite");
    } else if (outros === "purpura_palpavel") {
      doencas.push("Vasculite associada a IgA");
    } else if (outros === "queimacao") {
      doencas.push("Compressão de raízes nervosas");
      doencas.push("Doença do refluxo gastro-esofágico");
      doencas.push("Hérnia diafragmática");
      doencas.push("Herpes Zoster");
      doencas.push("Ileite por AINE");
      doencas.push("Neoplasias");
      doencas.push("Pancreatite");
      doencas.push("Ruptura de aneurisma da aorta");
      doencas.push("Tabes dorsalis");
      doencas.push("Úlcera duodenal");
      doencas.push("Úlcera gástrica");
    } else if (outros === "refluxo") {
      doencas.push("Doença do refluxo gastro-esofágico");
      doencas.push("Hérnia diafragmática");
      doencas.push("Neoplasias");
      doencas.push("Pancreatite");
    } else if (outros === "respiracao_kussmaul") {
      doencas.push("Cetoacidose diabética");
    } else if (outros === "rouquidao") {
      doencas.push("Doença do refluxo gastro-esofágico");
    } else if (outros === "sonolencia") {
      doencas.push("Cetoacidose diabética");
      doencas.push("Febre tifoide");
      doencas.push("Insuficiência suprarrenal aguda");
      doencas.push("Pielonefrite");
    } else if (outros === "sudorese") {
      doencas.push("Abscesso hepático");
      doencas.push("Abscesso esplênico");
      doencas.push("Cólica renal");
      doencas.push("Diverticulite");
      doencas.push("Febre tifoide");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Neoplasias");
      doencas.push("Pancreatite");
      doencas.push("Prenhez ectópica");
      doencas.push("Ruptura de baço");
      doencas.push("Ruptura de aneurisma da aorta");
      doencas.push("Síndrome de hiperemese canabinoide");
      doencas.push("Síndrome de Mallory-Weiss");
      doencas.push("Tuberculose intestinal");
    } else if (outros === "taquicardia") {
      doencas.push("Abscesso hepático");
      doencas.push("Abscesso esplênico");
      doencas.push("Cetoacidose diabética");
      doencas.push("Colecistite");
      doencas.push("Colite Isquêmica");
      doencas.push("Crise falcêmica");
      doencas.push("Diverticulite");
      doencas.push("Hepatite aguda");
      doencas.push("Hérnia encarcerada");
      doencas.push("Hérnia estrangulada");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infarto pulmonar");
      doencas.push("Infecção respiratória");
      doencas.push("Isquemia mesentérica");
      doencas.push("Neoplasias");
      doencas.push("Obstrução intestinal");
      doencas.push("Pancreatite");
      doencas.push("Pericardite");
      doencas.push("Peritonite primária");
      doencas.push("Pielonefrite");
      doencas.push("Porfiria aguda");
      doencas.push("Prenhez ectópica");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Ruptura de baço");
      doencas.push("Ruptura de aneurisma da aorta");
      doencas.push("Síndrome de hiperemese canabinoide");
      doencas.push("Síndrome de Mallory-Weiss");
      doencas.push("Torção de cisto de ovário");
      doencas.push("Úlcera péptica perfurada");
    } else if (outros === "taquipneia") {
      doencas.push("Cetoacidose diabética");
      doencas.push("Crise falcêmica");
      doencas.push("Hematoma do músculo reto");
      doencas.push("Hérnia diafragmática");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infarto pulmonar");
      doencas.push("Infecção respiratória");
      doencas.push("Pancreatite");
      doencas.push("Pericardite");
    } else if (outros === "tenesmo") {
      doencas.push("Constipação");
      doencas.push("Diverticulite");
      doencas.push("Doença de Crohn");
      doencas.push("Gastroenterite");
      doencas.push("Neoplasias");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Verminoses");
    } else if (outros === "tonteira") {
      doencas.push("Crise falcêmica");
      doencas.push("Gastroenterite");
      doencas.push("Hematoma do músculo reto");
      doencas.push("Hepatite aguda");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infecção respiratória");
      doencas.push("Insuficiência suprarrenal aguda");
      doencas.push("Neoplasias");
      doencas.push("Pericardite");
      doencas.push("Prenhez ectópica");
      doencas.push("Ruptura de baço");
      doencas.push("Ruptura de aneurisma da aorta");
      doencas.push("Síndrome de Mallory-Weiss");
      doencas.push("Tuberculose intestinal");
    } else if (outros === "tosse_produtiva") {
      doencas.push("Adenite mesentérica (hiperplasia linfonodular)");
      doencas.push("Infarto pulmonar");
      doencas.push("Infecção respiratória");
      doencas.push("Tuberculose intestinal");
    } else if (outros === "tosse_seca") {
      doencas.push("Abscesso esplênico");
      doencas.push("Adenite mesentérica (hiperplasia linfonodular)");
      doencas.push("Doença do refluxo gastro-esofágico");
      doencas.push("Febre familiar do Mediterrâneo");
      doencas.push("Febre tifoide");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infecção respiratória");
      doencas.push("Neoplasias");
      doencas.push("Pericardite");
      doencas.push("Verminoses");
    } else if (outros === "toxemia") {
      doencas.push("Abscesso esplênico");
      doencas.push("Apendicite");
      doencas.push("Colecistite");
      doencas.push("Colite Isquêmica");
      doencas.push("Diverticulite");
      doencas.push("Doença de Crohn");
      doencas.push("Gastroenterite");
      doencas.push("Hepatite aguda");
      doencas.push("Hérnia estrangulada");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Infarto pulmonar");
      doencas.push("Infecção respiratória");
      doencas.push("Isquemia mesentérica");
      doencas.push("Neoplasias");
      doencas.push("Obstrução intestinal");
      doencas.push("Pancreatite");
      doencas.push("Retocolite ulcerativa");
      doencas.push("Úlcera péptica perfurada");
    } else if (outros === "turgencia_jugular") {
      doencas.push("Pericardite");
    } else if (outros === "urgencia_miccional") {
      doencas.push("Apendicite");
      doencas.push("Cólica renal");
      doencas.push("Infecção urinária");
      doencas.push("Pielonefrite");
      doencas.push("Tabes dorsalis");
    } else if (outros === "urina_escura") {
      doencas.push("Porfiria aguda");
    } else if (outros === "vesiculas_papulas") {
      doencas.push("Herpes Zoster");
    } else if (outros === "vomito") {
      doencas.push("Abscesso hepático");
      doencas.push("Abscesso esplênico");
      doencas.push("Adenite mesentérica (hiperplasia linfonodular)");
      doencas.push("Apendicite");
      doencas.push("Cetoacidose diabética");
      doencas.push("Colecistite");
      doencas.push("Cólica renal");
      doencas.push("Colite Isquêmica");
      doencas.push("Constipação");
      doencas.push("Crise falcêmica");
      doencas.push("Diverticulite");
      doencas.push("Divertículo de Meckel");
      doencas.push("Doença de Crohn");
      doencas.push("Doença inflamatória pélvica");
      doencas.push("Febre familiar do Mediterrâneo");
      doencas.push("Gastrite");
      doencas.push("Gastroenterite");
      doencas.push("Hepatite aguda");
      doencas.push("Hérnia encarcerada");
      doencas.push("Hérnia estrangulada");
      doencas.push("Hiperlipidemia");
      doencas.push("Ileite actínica");
      doencas.push("Ileite de pacientes imunocomprometidos");
      doencas.push("Infarto agudo do miocárdio");
      doencas.push("Infarto esplênico");
      doencas.push("Infarto pulmonar");
      doencas.push("Infecção respiratória");
      doencas.push("Intoxicação por chumbo");
      doencas.push("Insuficiência suprarrenal aguda");
      doencas.push("Isquemia mesentérica");
      doencas.push("Mucocele do apêndice");
      doencas.push("Neoplasias");
      doencas.push("Obstrução intestinal");
      doencas.push("Pancreatite");
      doencas.push("Pericardite");
      doencas.push("Peritonite primária");
      doencas.push("Pielonefrite");
      doencas.push("Porfiria aguda");
      doencas.push("Prenhez ectópica");
      doencas.push("Ruptura de aneurisma da aorta");
      doencas.push("Salpingite");
      doencas.push("Síndrome de hiperemese canabinoide");
      doencas.push("Síndrome de Mallory-Weiss");
      doencas.push("Torção de cisto de ovário");
      doencas.push("Tuberculose intestinal");
      doencas.push("Úlcera péptica perfurada");
      doencas.push("Úlcera duodenal");
      doencas.push("Úlcera gástrica");
      doencas.push("Vasculite associada a IgA");
      doencas.push("Verminoses");
      doencas.push("Vólvulo");
      doencas.push("Yersiniose");
    } else if (outros === "wrist_drop") {
      doencas.push("Intoxicação por chumbo");
    }
  } else {
    resultado = resultado.filter((item) => item != outros);
  }
});

enviar.addEventListener("click", function () {
  console.log(resultado);
});

outrosSintomas.addEventListener("input", function ({ target }) {
  sintomas.forEach((element, index) => {
    const { value } = target;

    if (value === "") return (resultadoSintomas.innerHTML = "");

    const filtrar = sintomas.filter((element) =>
      element.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );

    resultadoSintomas.innerHTML = "";
    filtrar.forEach((e) => {
      resultadoSintomas.innerHTML += `
         <input type="checkbox" class="btn-check" id="${e}" name="${e}" value="${e}" autocomplete="off">
        <label class="btn btn-outline-danger" for="${e}">${e}</label><br>
      `;
    });
  });
});
