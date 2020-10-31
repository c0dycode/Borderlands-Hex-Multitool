const fileInputElement = document.getElementById('fileInput');
const saveBtnElement = document.getElementById('saveButton');
fileInputElement.addEventListener("change", handleFileChange, false);
saveBtnElement.addEventListener("click", saveFile, false);

const localStorage = window.localStorage;

// const log = document.getElementById("log");

var currentGame;
var binData;
var binLength;
var binName;

function handleFileChange() {
    // console.log(fileInputElement.files[0].name)
    if (fileInputElement.files[0] != null) {
        readFile(fileInputElement.files[0])
    }
}

function _base64ToArray(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes;
}

function closePatchingElements() {
    let c = document.getElementsByClassName("collapsible");
    let o;

    for (o = 0; o < c.length; o++) {
        c[o].classList.toggle("active");
        var content = c[o].nextElementSibling;
        content.style.display = "none";
    }
}

function readFile(file) {
    closePatchingElements();
    const reader = new FileReader();
    reader.onload = function (event) {
        var contents = new Uint8Array(event.target.result);
        binLength = event.total;
        getBytes(contents);
        // console.log(contents);
    }
    binName = file.name;
    reader.readAsArrayBuffer(file);
}

function getStorageItem(itemName) {
    return localStorage.getItem(itemName);
}

function setStorageItem(itemname, value) {
    let buf = _base64ToArray(value);
    localStorage.setItem(itemname, buf);
}

function addToLog(message) {
    log.innerHTML = message + "<br>" + log.innerHTML;
}

function getCheckboxValue(id) {
    let prefix;
    if (currentGame == "BL2")
        prefix = "bl2";
    else if (currentGame == "TPS")
        prefix = "tps";
    else
        return false;
    var elem = document.getElementById(prefix + id);
    if (elem == null)
        return false;
    return elem.checked;
}

function getNumberValue(id) {
    let prefix;
    if (currentGame == "BL2")
        prefix = "bl2";
    else if (currentGame == "TPS")
        prefix = "tps";
    else
        return 0;
    var elem = document.getElementById(prefix + id);
    if (elem == null)
        return 0;
    return parseInt(elem.value);
}

function createGameData() {
    var msg = {
        ConsoleCommands: getCheckboxValue("EnableConsole"),
        MaxMoney: getNumberValue("MaxMoney"),
        MaxEridium: getNumberValue("MaxEridium"),
        MaxTorgue: getNumberValue("MaxTorgue"),
        MaxSeraph: getNumberValue("MaxSeraph"),
        MaxMoonstone: getNumberValue("MaxMoonstone"),
        MaxLevel: getNumberValue("MaxLevel"),
        MaxBackpack: getNumberValue("MaxBackpack"),
        MaxVault: getNumberValue("MaxVault"),
        ArrayLimit: getCheckboxValue("ArrayLimit"),
        WeaponSanity: getCheckboxValue("WeaponSanity"),
        ItemSanity: getCheckboxValue("ItemSanity"),
        BL3Ads: getCheckboxValue("Ads"),
        BL2WeaponSanity: btoa(localStorage.getItem("bl2weapon")),
        BL2ItemSanity: btoa(localStorage.getItem("bl2item")),
        TPSWeaponSanity: btoa(localStorage.getItem("tpsweapon")),
        TPSItemSanity: btoa(localStorage.getItem("tpsitem"))
    }
    setPatchdata(JSON.stringify(msg));
}

function saveFile() {
    if (binLength == 0 || binLength == undefined) {
        addToLog("No file has been read!");
        return;
    }
    createGameData();
    saveData();
    binData = new Uint8Array(binLength);
    getBinaryData(binData);
    var blob = new Blob([binData], { type: "application/octet-stream" });
    saveAs(blob, binName);
}

function getGameData(data) {
    let parsed = JSON.parse(data)
    // console.log(parsed)

    createGameData()
}

if (!WebAssembly.instantiateStreaming) { // polyfill
    WebAssembly.instantiateStreaming = async (resp, importObject) => {
        const source = await (await resp).arrayBuffer();
        return await WebAssembly.instantiate(source, importObject);
    };
}

const go = new Go();

let mod, inst;
fetch("main.wasm").then(response =>
    response.arrayBuffer()
).then(bytes =>
    WebAssembly.instantiate(bytes, go.importObject)
).then(results => {
    mod = results.module;
    inst = results.instance;
    go.run(inst);
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}