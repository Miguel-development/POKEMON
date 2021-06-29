"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var d = document;
/**
 * Crea tu ts file
 * npm install -g typescript
 * tsc init , to create the tsconfig.json
 * in tsconfig.json, you must add, ,"files":["./main.ts"] to the end
 * add you output file
 * add "watch":true, to compile in a automatic way.
 * Now, you just type "tsc" in the terminal
 *  */
// https://pokeapi.co/api/v2/
d.addEventListener("DOMContentLoaded", function (e) {
    loadPOKEMON(); //carga al cbox POKEMON
});
d.addEventListener("change", function (e) {
    if (e.target.matches("#cbox_pokemon")) {
        // console.log(e.target.value); //return el nombre de pokemon
        showWaitingPane(e.target.value);
        // getPokemonProperties(e.target.value);
    }
});
function loadPOKEMON() {
    return __awaiter(this, void 0, void 0, function () {
        var responseName, selectPOKEMON;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getPokemonName()];
                case 1:
                    responseName = _a.sent();
                    selectPOKEMON = d.querySelector("#cbox_pokemon");
                    //add OPT to select
                    responseName.results.forEach(function (ele) {
                        var opt_POKEMON = d.createElement("option");
                        var nodeOPT = d.createTextNode(ele.name);
                        opt_POKEMON.appendChild(nodeOPT);
                        selectPOKEMON.appendChild(opt_POKEMON);
                        // console.log(ele.name);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
//////////////////////////////////////////////////////////////
function getPokemonName() {
    return __awaiter(this, void 0, void 0, function () {
        var endPoint, url, response, responseJSON, prom;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endPoint = "pokemon";
                    url = "https://pokeapi.co/api/v2/" + endPoint + "?limit=700";
                    return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    responseJSON = _a.sent();
                    prom = new Promise(function (resolve, reject) {
                        resolve(responseJSON);
                    });
                    return [2 /*return*/, prom];
            }
        });
    });
}
var timer = 0;
//////////////////////////////////////////////////////////////
function getPokemonProperties(namePOKEMON1) {
    return __awaiter(this, void 0, void 0, function () {
        var url, responsePROPERTIES, responsePROPERTIES_JSON, abilityPOKEMON, base_expPOKEMON, idPOKEMON, namePOKEMON, typePOKEMON, statsPOKEMON, urlIMG, imgDefine, labelID, labelABILITY, labelEXP, labelSTAT, labelDESCRIPTION, labelTYPE, labelNAME, labelGENDER, CHARACTERISTICS_JSON, descriptionPOKEMON, GENDER_JSON, genderPOKEMON;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    timer = new Date().getTime();
                    url = "https://pokeapi.co/api/v2/pokemon/" + namePOKEMON1 + "/";
                    return [4 /*yield*/, fetch(url)];
                case 1:
                    responsePROPERTIES = _a.sent();
                    if (!responsePROPERTIES.ok) {
                        throw new Error(responsePROPERTIES.statusText);
                    }
                    return [4 /*yield*/, responsePROPERTIES.json()];
                case 2:
                    responsePROPERTIES_JSON = _a.sent();
                    abilityPOKEMON = responsePROPERTIES_JSON.abilities[0].ability.name;
                    base_expPOKEMON = responsePROPERTIES_JSON.base_experience;
                    idPOKEMON = responsePROPERTIES_JSON.id;
                    namePOKEMON = responsePROPERTIES_JSON.name;
                    typePOKEMON = responsePROPERTIES_JSON.types[0].type.name;
                    statsPOKEMON = responsePROPERTIES_JSON.stats[0].stat.name;
                    urlIMG = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/" + idPOKEMON + ".png";
                    imgDefine = d.querySelector("#img_pokemon");
                    imgDefine.setAttribute("src", urlIMG);
                    labelID = d.getElementById("myID");
                    labelABILITY = d.getElementById("myAbility");
                    labelEXP = d.getElementById("myExp");
                    labelSTAT = d.getElementById("myStat");
                    labelDESCRIPTION = d.getElementById("myDescription");
                    labelTYPE = d.getElementById("myType");
                    labelNAME = d.getElementById("myName");
                    labelGENDER = d.getElementById("myGender");
                    if (labelID.childNodes.length > 0) {
                        labelID.removeChild(labelID.childNodes[0]);
                        labelNAME.removeChild(labelNAME.childNodes[0]);
                        labelABILITY.removeChild(labelABILITY.childNodes[0]);
                        labelEXP.removeChild(labelEXP.childNodes[0]);
                        labelSTAT.removeChild(labelSTAT.childNodes[0]);
                        labelDESCRIPTION.removeChild(labelDESCRIPTION.childNodes[0]);
                        labelGENDER.removeChild(labelGENDER.childNodes[0]);
                    }
                    return [4 /*yield*/, allPROPERPITIES_POKEMON("characteristic", idPOKEMON, "No description")];
                case 3:
                    CHARACTERISTICS_JSON = _a.sent();
                    if (typeof (CHARACTERISTICS_JSON) === "string") {
                        descriptionPOKEMON = CHARACTERISTICS_JSON;
                    }
                    else {
                        descriptionPOKEMON = CHARACTERISTICS_JSON.descriptions[2].description;
                    }
                    return [4 /*yield*/, allPROPERPITIES_POKEMON("gender", idPOKEMON, "Male (Suppose)")];
                case 4:
                    GENDER_JSON = _a.sent();
                    if (typeof (GENDER_JSON) === "string") {
                        genderPOKEMON = GENDER_JSON;
                    }
                    else {
                        genderPOKEMON = GENDER_JSON.name;
                    }
                    labelID.appendChild(d.createTextNode(idPOKEMON));
                    labelNAME.appendChild(d.createTextNode(namePOKEMON));
                    labelTYPE.appendChild(d.createTextNode(typePOKEMON));
                    labelGENDER.appendChild(d.createTextNode(genderPOKEMON));
                    labelABILITY.appendChild(d.createTextNode(abilityPOKEMON));
                    labelEXP.appendChild(d.createTextNode(base_expPOKEMON));
                    labelDESCRIPTION.appendChild(d.createTextNode(descriptionPOKEMON));
                    labelSTAT.appendChild(d.createTextNode(statsPOKEMON));
                    return [2 /*return*/];
            }
        });
    });
}
function showWaitingPane(ele) {
    return __awaiter(this, void 0, void 0, function () {
        var timerFinal, panel;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    timerFinal = new Date().getTime() - timer;
                    panel = d.querySelector("#wait-panel");
                    panel.classList.toggle("wait-search");
                    return [4 /*yield*/, getPokemonProperties(ele)];
                case 1:
                    _a.sent();
                    panel.classList.toggle("wait-search");
                    return [2 /*return*/];
            }
        });
    });
}
function allPROPERPITIES_POKEMON(endPointPOKE, idPOKE, errRPTA) {
    return __awaiter(this, void 0, void 0, function () {
        var urlCHAR, responseCHARACTERISTICS, responseCHARACTERISTICS_JSON;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    urlCHAR = "https://pokeapi.co/api/v2/" + endPointPOKE + "/" + idPOKE + "/";
                    return [4 /*yield*/, fetch(urlCHAR).catch(function () { return console.clear; })];
                case 1:
                    responseCHARACTERISTICS = _a.sent();
                    if (!!responseCHARACTERISTICS.ok) return [3 /*break*/, 2];
                    // throw new Error(responseCHARACTERISTICS.statusText);
                    return [2 /*return*/, errRPTA];
                case 2: return [4 /*yield*/, responseCHARACTERISTICS.json()];
                case 3:
                    responseCHARACTERISTICS_JSON = _a.sent();
                    return [2 /*return*/, responseCHARACTERISTICS_JSON];
            }
        });
    });
}
/** Default helper for invoking an action and handling errors. */
function tryCatch(callback) {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, callback()];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    // Note: In a production add-in, you'd want to notify the user through your add-in's UI.
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
